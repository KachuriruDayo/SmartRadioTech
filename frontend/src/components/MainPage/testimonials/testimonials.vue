<script setup>
	import ArrowDown from "@/assets/media_content/Down.svg"
	import LineSvg from "@/assets/media_content/Line.svg"
	import Img1 from "@/assets/media_content/testimonialLogos/image 284.png"
	import Img2 from "@/assets/media_content/testimonialLogos/image 285.png"
	import Img3 from "@/assets/media_content/testimonialLogos/image 286.png"
	import Img4 from "@/assets/media_content/testimonialLogos/image 287.png"
	import Img5 from "@/assets/media_content/testimonialLogos/image 288.png"
	import Img6 from "@/assets/media_content/testimonialLogos/image 294.png"
	import Img7 from "@/assets/media_content/testimonialLogos/image 289.png"
	import Img8 from "@/assets/media_content/testimonialLogos/Mask_group.png"
	import Img9 from "@/assets/media_content/testimonialLogos/image293.png"
	import Img10 from "@/assets/media_content/testimonialLogos/image292.png"
	import {ref, useTemplateRef, onMounted} from "vue";

	const items = ref([Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10])
	const firstArt = useTemplateRef('art_1');
	let articleWidth
	let articlesLenght = 3;

	let inActive = ref({
		next: false,
		prev: true,
	})

	let currentArticle = ref(0);

	function nextArticle () {
		articleWidth = firstArt.value.clientWidth;
		let actual = currentArticle.value += 1;
		if (actual >= articlesLenght) {
			currentArticle.value = articlesLenght;
			inActive.value.next = true;
		} else {
			inActive.value.next = false;
			inActive.value.prev = false;
			currentArticle.value = actual;
		}
	}

	function prevArticle () {
		articleWidth = firstArt.value.clientWidth;
		let actual = currentArticle.value -= 1;
		if (actual <= 0) {
			currentArticle.value = 0;
			inActive.value.prev = true;
		} else {
			inActive.value.next = false;
			inActive.value.prev = false;
			currentArticle.value = actual;
		}
	}

	onMounted(() => {
		articleWidth = firstArt.value.clientWidth;

		window.addEventListener('resize', () => {
			if (window.innerWidth > 1440) currentArticle.value = 0;
		})
	})
</script>

<template>
	<section>
		<h2>Client testimonials and professional trust</h2>
		<div :key="currentArticle" :style="{ marginLeft: -articleWidth * currentArticle + 'px' }" class="testimonials-container">
			<article ref="art_1">
				<img id="legacy" src="@/assets/media_content/logo_legacy.png" alt="legacy"/>
				<div class="testimonial-text">
					<p>”Hello, I bought my ELT tester mini equipment. First, the
						customer service was excellent. Second, it was easy to buy.
						I just had to meet the requirements and that was it. Third, I want
						to say that I am very satisfied with the equipment. It is very easy
						to use. I have tested it on my phone, my tablet and on my PC
						and it has worked very well. Its case and components are
						of good quality.”</p>
					<LineSvg/>
					<span>— Alfonso Carrillo Legacy Avionics Service</span>
				</div>
			</article>
			<article>
				<div class="testimonial-text">
					<p>
						”I have used the ELT testers, the 406 03 and the mini wifi, and I can
						say it is absolutely worth the money. I can recommend these ELT
						testers to anyone looking to get the job done with no hassle.”
					</p>
					<LineSvg/>
					<span>— Eckardt Munnik, Vision Aviation Maintenance</span>
				</div>
			</article>
			<article>
				<img id="harbour" src="@/assets/media_content/logo_harbour.png" alt="harbour"/>
				<div class="testimonial-text">
					<p>
						”We found ELT Tester Mini to be a an interesting solution for
						inspecting both aircraft and maritime emergency beacons.
						It shows detailed information, including the country code
						and aircraft registration ID. The tester is easy to manage,
						but we recommend watching the tutorial video first.
						The information displayed is clear and easy to understand.
						Everything works perfectly, and we’re completely satisfied. Thank you very much!”
					</p>
					<LineSvg/>
					<span>— Harbour Air</span>
				</div>
			</article>
			<article>
				<img id="prime" src="@/assets/media_content/logo_prime.png" alt="prime"/>
				<div class="testimonial-text">
					<p>
						”We have truly enjoyed your products. Thank
						you for your service and produce. I tell
						everyone in South Africa about your ELT testers.”
					</p>
					<LineSvg/>
					<span>— Andrea Vizzini, Director of Prime Avionics</span>
				</div>
			</article>
		</div>

		<div class="buttons-container">
			<div @click="prevArticle()">
				<button :class="{inActive: inActive.prev}"><ArrowDown id="prev"/></button>
			</div>
			<div @click="nextArticle()">
				<button :class="{inActive: inActive.next}"><ArrowDown id="next"/></button>
			</div>
		</div>

		<div class="carusel-container">
			<div  class="articles-container animate">
				<div class="carusel">
					<template v-for="item in items">
						<article>
							<img :src="item" alt="company logo">
						</article>
					</template>
				</div>
				<div class="carusel">
					<template v-for="item in items">
						<article>
							<img :src="item" alt="company logo">
						</article>
					</template>
				</div>
				<div class="carusel">
					<template v-for="item in items">
						<article>
							<img :src="item" alt="company logo">
						</article>
					</template>
				</div>
				<div class="carusel">
					<template v-for="item in items">
						<article>
							<img :src="item" alt="company logo">
						</article>
					</template>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
@import "testimonials-style.scss";
</style>
