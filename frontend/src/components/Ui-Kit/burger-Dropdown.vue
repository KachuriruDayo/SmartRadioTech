<script setup>
import { ref } from 'vue'
import ArrowSvg from "@/assets/media_content/Down.svg"
const isOpen = ref(false)
</script>

<template>
	<div class="dropdown-btn" @click="isOpen = !isOpen">
		<div class="dropdown-content">
			<div class="dropdown-body">
				<span><slot name="title"></slot></span>
				<ArrowSvg class="arrow-icon" :class="{ arrow_icon_active: isOpen }"/>
			</div>
			<transition name="fade" appear>
				<slot v-if="isOpen" name="body"></slot>
			</transition>
		</div>
	</div>
</template>

<style lang="scss" scoped>

.fade-enter-active,
.fade-leave-active {
	transition: all 0.3s ease-out;
}

.fade-enter-to,
.fade-leave-from {
	max-height: 75px;
}

.fade-enter-from,
.fade-leave-to {
	max-height: 0;
}

.dropdown-btn {
	display: flex;
	justify-content: space-between;
	background-color: white;
	overflow-y: hidden;
}

.dropdown-content {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.dropdown-body {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;

	&:active {

		span {
			color: #0C92BF;
		}
	}
}

.arrow-icon {
	transition: all .3s;
}

.arrow_icon_active {
	transition: all .3s;
	rotate: 180deg;
}

@media screen and (max-width: 800px) {
	.fade-enter-to,
	.fade-leave-from {
		max-height: 170px;
	}
}
</style>
