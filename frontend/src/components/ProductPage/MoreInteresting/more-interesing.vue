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
			<img class ="product-img" src="@/assets/media_content/secondPng.png" alt="secondImg"/>
			<div class="product-info-container">
				<div class="product-info">
					<h2>ELT Tester i406 Mini</h2>
					<ul class="product-ul">
						<li><p>Working with any mobile device via tester’s Wi-Fi</p></li>
						<li><p>The built-in software for automatic generation of test reports </p></li>
						<li><p>Compactness and ultra-light weight</p></li>
						<li><p>Operation on frequencies: 406 MHz, 243 MHz, 121.5 MHz</p></li>
						<li><p>Decoding 15 HEX ID</p></li>
					</ul>
				</div>

				<div class="product-buttons-container">
					<button @click="Navigation('/production/elt_tester-i406-mini')" class="details-button" >More details</button>
					<a href="#" class="YT-link"><div><YTSvg/></div> <span>Watch on YouTube</span></a>
				</div>
			</div>
		</article>
	</section>
</template>

<style scoped>
@import "more-interesting-style.scss";
</style>
