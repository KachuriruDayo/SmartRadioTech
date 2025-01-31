<script setup>
	import ArrowDown from "@/assets/media_content/Down.svg"
	import LineSvg from "@/assets/media_content/Line.svg"
	import LegacySvg from "@/assets/media_content/logo_legacy.svg"
	import PhenixSvg from "@/assets/media_content/logo_phenix.svg"
	import PrimeSvg from "@/assets/media_content/logo_prime.svg"
	import HarbourSvg from "@/assets/media_content/logo_harbour.svg"
</script>

<template>
	<section>
		<h2>Client testimonials and professional trust</h2>
		<div class="testimonials-container">
			<article>
				<LegacySvg/>
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
				<PhenixSvg/>
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
				<PrimeSvg/>
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
				<HarbourSvg/>
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
			<button><ArrowDown id="left"/></button>
			<button><ArrowDown id="right"/></button>
		</div>
	</section>
</template>

<style scoped>
@import "testimonials-style.scss";
</style>
