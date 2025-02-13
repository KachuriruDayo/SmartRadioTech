<script setup>
import YouTubeLogo from "@/assets/media_content/YoutubeLogo.svg"
import PlaySvg from "@/assets/media_content/PlaySvg.svg"
import DownloadSvg from "@/assets/media_content/Download.svg"
import ManualSvg from "@/assets/media_content/Brochure.svg"
import BrochureSvg from "@/assets/media_content/ProductBrochure.svg"
</script>

<template>
	<section>
		<div class="dimensions flex_block">
			<div class="dimension flex_block">
				<h2 class="title-style">Dimensions & weight</h2>
				<div class="dimension-info">
					<div class="dimension-text">
						<span>Dimensions: 195 x 101 x 43 mm</span>
						<span>Weight: 0.55 kg</span>
						<span>Total weight in case: 1.5 kg</span>
						<span>Total weight in box: 1.3 kg</span>
					</div>
					<img src="@/assets/media_content/scheme1.png" alt="product scheme">
				</div>
			</div>
			<div class="conditions flex_block">
				<h2 class="title-style">Operating conditions</h2>
				<p>
					The tester is designed to operate in
					the temperature range from 0°C to +45°С, and relative humidity up to 95%
				</p>
			</div>
		</div>
		<div class="demonstration flex_block">
			<h2 class="title-style">Demonstration</h2>
			<div class="demonstration-content">
				<div class="demonstration-video">
					<div class="video-slider">
						<div class="video-container">
							<div class="video-item-container">
								<img ref="vid_1" class="slider-item" src="@/assets/media_content/video_1.png"  alt="Product video"/>
								<div id="play"><div><PlaySvg/></div></div>
							</div>
						</div>
					</div>
					<div class="video-description">
						<h3>Annual test of 406 MHz ELT</h3>
						<p>
							The video shows the procedure of annual testing of ELT in accordance with requirements
							of Europe (CAA/EuroCAE), USA (FAA Part 91.207) and Canada (CAR 571 Appendix G).
						</p>
						<a class="YT-link" href="#"><YouTubeLogo/>Watch on YouTube</a>
					</div>
				</div>
				<div class="product-manuals">
					<article>
						<BrochureSvg/>
						<div class="article-description">
							<span>Product brochure</span>
							<div><DownloadSvg/><a href="#">Download</a></div>
						</div>
					</article>
					<article>
						<ManualSvg/>
						<div class="article-description">
							<span>User manual </span>
							<div><DownloadSvg/><a href="#">Download</a></div>
						</div>
					</article>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
@import "product-manuals-style.scss";
</style>
