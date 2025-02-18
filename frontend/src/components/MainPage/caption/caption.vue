<script setup>
import StartImg from "@/assets/media_content/start-overlay.png"
import SecondImg from "@/assets/media_content/beacon_tester_in_case_bg.png"
import LastImg from "@/assets/media_content/beacon_tester_mini_in_case_bg.png"

import {nextTick, onMounted, ref} from "vue";

// const images = [
// 	{
// 		image: StartImg,
// 		index: 0
// 	},
// 	{
// 		image: SecondImg,
// 		index: 1
// 	},
// 	{
// 		image: LastImg,
// 		index: 2
// 	}
// ]
// let activeImage = 0
//
// let currentImage = ref(images[activeImage].image)
//
// const nextImage = async () => {
// 	let active = activeImage + 1;
// 	if (active >= images.length) {
// 		active = 0;
// 	}
// 	activeImage = active;
// 	currentImage.value = images[activeImage].image;
// 	await nextTick()
// }

// onMounted(() => {
// 	setInterval(() => {
// 		nextImage()
// 	}, 7025);
// })
</script>

<template>
	<section>
		<div class="overlay-container">
			<div class="overlay"/>
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
				<span>Suitable for:</span>
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
