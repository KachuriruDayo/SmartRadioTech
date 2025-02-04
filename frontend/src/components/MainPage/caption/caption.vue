<script setup>
import {nextTick, onMounted, ref} from "vue";

const baseUrl = '/src/assets/media_content/';
const images = [
	{
		image: 'start-overlay.png',
		index: 0
	},
	{
		image: 'beacon_tester_in_case_bg.png',
		index: 1
	},
	{
		image: 'beacon_tester_mini_in_case_bg.png',
		index: 2
	}
]
let activeImage = 0

let currentImage = ref(baseUrl + images[activeImage].image)

const nextImage = async () => {
	let active = activeImage + 1;
	if (active >= images.length) {
		active = 0;
	}
	activeImage = active;
	currentImage.value = baseUrl + images[activeImage].image;
	await nextTick()
}

onMounted(() => {
	setInterval(() => {
		nextImage()
	}, 7000);
})
</script>

<template>
	<section>
		<div class="overlay-container">
			<img class="overlay" :src="currentImage" alt="overlay">
			<h1>ELT test equipment you can rely on</h1>
		</div>
		<div class="content">
			<article>
				<h2>406 MHz ELT testers for checking emergency beacons on airplanes and helicopters</h2>
				<div class="buttons-container">
					<button class="request-button" ><span>Request for quote</span></button>
					<button class="details-button" ><span>View PDF presentation</span></button>
				</div>
			</article>
			<div class="tags-section">
				<span>ELT test equipment you can rely on</span>
				<div class="tags-container">
					<div>
						<span>Aviation safety inspectors</span>
						<span>ELT suppliers</span>
					</div>
					<div>
						<span>Small aircraft fleets</span>
						<span>Flight schools</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
	@import "caption-style.scss";
</style>
