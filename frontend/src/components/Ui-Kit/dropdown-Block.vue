<script setup>
import { ref } from 'vue'
import ArrowSvg from "@/assets/media_content/Down.svg"
const props = defineProps({
	isOpen: false,
})
</script>

<template>
		<div class="dropdown-btn">
				<div class="dropdown-title" :class="{ dropdown_svg_active: props.isOpen }">
					<div class="text-start">
						<slot name="title-svg"></slot>
						<slot name="title"></slot>
					</div>
					<ArrowSvg class="arrow-icon" :class="{ arrow_icon_active: props.isOpen }"/>
				</div>
			<transition name="fade" appear>
				<div class="dropdown-text" v-if="props.isOpen">
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

.text-start {
	display: flex;
	gap: 14px;
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
