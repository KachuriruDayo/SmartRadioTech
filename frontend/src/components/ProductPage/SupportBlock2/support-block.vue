<script setup>
	import GlobeSvg from '@/assets/media_content/Globe.svg'
	import SupportBlank from '@/assets/media_content/SupportBlank.svg'
	import SupportHeadphone from '@/assets/media_content/SupportHeadphone.svg'
	import MessageSvg from '@/assets/media_content/Message.svg'
</script>

<template>
	<section>
		<div class="first-content">
			<h2  class="title-regular">Get support on all stages of cooperation</h2>
			<div class="article-container">
				<article>
					<div class="svg-container">
						<GlobeSvg/>
					</div>
					<div class="text-container">
						<span class="article-title-bold">Official purchase and free delivery worldwide</span>
						<p class="article-text-regular">Shipment from the warehouses in Serbia and Romania</p>
					</div>
				</article>
				<article>
					<div class="svg-container">
						<SupportBlank/>
					</div>
					<div class="text-container">
						<span class="article-title-bold">Warranty maintenance</span>
						<p class="article-text-regular">
							The standard 2-year and extended 5-year
							warranty against manufacturing defects is provided
						</p>
					</div>
				</article>
				<article>
					<div class="svg-container">
						<SupportHeadphone/>
					</div>
					<div class="text-container">
						<span class="article-title-bold">Thorough after-sales support</span>
						<p class="article-text-regular">
							We assure continuous customer support.
							The tech team is easy to
							contact and is always ready to help
						</p>
					</div>
				</article>
			</div>
		</div>

		<div class="second-content">
			<h3 class="title-regular">Choose reliability proven by years of impeccable operation</h3>
			<button class="request-button"><span>Request for quote</span></button>
		</div>


		<div class="overlay"></div>
	</section>
</template>

<style scoped>
@import "support-block-style.scss";
</style>
