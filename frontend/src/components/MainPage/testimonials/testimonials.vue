<script setup>
	import ArrowDown from "@/assets/media_content/Down.svg"
	import LineSvg from "@/assets/media_content/Line.svg"
	import { ref, useTemplateRef} from "vue";

	const artcl = useTemplateRef('art_1')
	let artWidth

	const articleLenght = 4;
	let currentArticle = ref(0);

	function nextArticle () {
		artWidth = artcl.value.clientWidth;
		let actual = currentArticle.value += 1;
		if (actual > articleLenght) {
			actual = 0;
		}
		currentArticle.value = actual;
	}

	function prevArticle () {
		artWidth = artcl.value.clientWidth;
		let actual = currentArticle.value -= 1;
		if (actual < 0) {
			actual = articleLenght;
		}
		currentArticle.value = actual;
	}
</script>

<template>
	<section>
		<h2>Client testimonials and professional trust</h2>
		<div :key="currentArticle" class="testimonials-container" :style="{ marginLeft: -artWidth * currentArticle + 'px' }">
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
				<img id="phenix" src="@/assets/media_content/logo_phenix jet.png" alt="phenix"/>
				<div class="testimonial-text">
					<p>
						”We chose the ELT 406 03 testers for their reliability and ease of
						use. This equipment helps us maintain a high level of
						safety at all stages of flight.”
					</p>
					<LineSvg/>
					<span>— Sergey Petrov, CEO at Helicopter Systems</span>
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
		</div>

		<div class="buttons-container">
			<button @click="prevArticle()"><ArrowDown id="prev"/></button>
			<button @click="nextArticle()"><ArrowDown id="next"/></button>
		</div>
	</section>
</template>

<style scoped>
@import "testimonials-style.scss";
</style>
