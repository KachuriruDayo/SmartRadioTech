<script setup>
import { ref } from 'vue'
import ArrowSvg from "@/assets/media_content/Down.svg"
const isOpen = ref(false)
</script>

<template>
		<div class="dropdown-btn" @click="isOpen = !isOpen">
				<div class="dropdown-title" :class="{ dropdown_svg_active: isOpen }">
					<slot name="title-svg"></slot>
					<slot name="title"></slot>
					<ArrowSvg class="arrow-icon" :class="{ arrow_icon_active: isOpen }"/>
				</div>
			<transition name="fade" appear>
				<div class="dropdown-text" v-if="isOpen">
					<slot name="text"/>
				</div>
			</transition>
		</div>
</template>

<style lang="scss" scoped>

.fade-enter-active,
.fade-leave-active {
	transition: all 0.3s ease-out;
}

.fade-enter-to,
.fade-leave-from {
	opacity: 1;
	max-height: 200px;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	max-height: 0;
}

.dropdown-btn {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.dropdown-title {
	display: flex;
	justify-content: space-between;
	gap: 7px;
}

.dropdown-text {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.arrow-icon {
	transition: all .3s;
	width: 24px;
}

.arrow_icon_active {
	transition: all .3s;
	rotate: 180deg;
}

@media screen and (max-width: 800px) {
	.dropdown-text {
		width: 100%;
	}

	.fade-enter-to,
	.fade-leave-from {
		max-height: 350px;
	}
}
</style>
