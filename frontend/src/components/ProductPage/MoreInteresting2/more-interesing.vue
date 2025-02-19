<script setup>
	import {useRouter} from "vue-router";
	import YTSvg from "@/assets/media_content/YoutubeLogo.svg"

	const router = useRouter()

	const Navigation = (link) => {
		router.push(link)
	}
</script>

<template>
	<section>
		<h2 class="title">Another model that may interest you</h2>
		<article class ="product-article">
			<img class ="product-img" src="@/assets/media_content/firstPng.png" alt="secondImg"/>
			<div class="product-info-container">
				<div class="product-info">
					<h2>ELT Tester 406 03</h2>
					<ul class="product-ul">
						<li><p>Portability and user-friendly interface</p></li>
						<li><p>Specialized software for automatic generation of test reports  </p></li>
						<li><p>Testing of beacons with RLS function </p></li>
						<li><p>Operation on frequencies: 406 MHz, 243 MHz, 121.5 MHz</p></li>
						<li><p>Decoding 15 HEX ID</p></li>
					</ul>
				</div>

				<div class="product-buttons-container">
					<button @click="Navigation('/production/elt_tester-406-03')" class="details-button" >More details</button>
					<a href="#" class="YT-link"><div><YTSvg/></div> <span>Watch on YouTube</span></a>
				</div>
			</div>
		</article>
	</section>
</template>

<style scoped>
@import "more-interesting-style.scss";
</style>
