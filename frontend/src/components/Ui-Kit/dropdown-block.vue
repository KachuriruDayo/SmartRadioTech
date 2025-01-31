<script setup>
import { ref } from 'vue'
import ArrowSvg from "@/assets/media_content/Down.svg"
const isOpen = ref(false)
</script>

<template>
	<div class="dropdown-btn" @click="isOpen = !isOpen">
		<div class="dropdown-content">
			<div :class="{ dropdown_svg_active: isOpen }">
				<slot name="title-svg"></slot>
			</div>
			<div class="dropdown-text" :class="{ dropdown_text_active: isOpen }">
				<slot name="title"></slot>
				<div v-if='isOpen'>
					<slot name="text"></slot>
				</div>
			</div>
		</div>
		<ArrowSvg class="arrow-icon" :class="{ arrow_icon_active: isOpen }"/>
	</div>
</template>

<style scoped>
@import "../MainPage/advantages/advantages-style.scss";
</style>
