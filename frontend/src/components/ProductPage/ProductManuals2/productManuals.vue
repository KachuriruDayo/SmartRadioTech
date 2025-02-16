<script setup>
import YouTubeLogo from "@/assets/media_content/YoutubeLogo.svg"
import PlaySvg from "@/assets/media_content/PlaySvg.svg"
import DownloadSvg from "@/assets/media_content/Download.svg"
import ManualSvg from "@/assets/media_content/Brochure.svg"
import BrochureSvg from "@/assets/media_content/ProductBrochure.svg"
import SearchBlank from "@/assets/media_content/SerchBlank.svg"
</script>

<template>
	<section>
		<div class="dimensions flex_block">
			<div class="dimension flex_block">
				<h2 class="title_style">Dimensions & weight</h2>
				<div class="dimension-info">
					<div class="dimension-text">
						<span>Dimensions: 83 x 54 x 19 mm</span>
						<span>Weight: 120 g</span>
						<span>Total weight in case: 250 g</span>
					</div>
					<img src="@/assets/media_content/beacon-tester-mini-dimensions_2.png" alt="product scheme">
				</div>
			</div>
			<div class="conditions flex_block">
				<h2 class="title_style">Operating conditions</h2>
				<p>
					The tester is designed to operate in the temperature range
					from 0°C to +45°С, and relative humidity up to 95%
				</p>
			</div>
		</div>
		<div class="demonstration flex_block">
			<h2 class="title_style">Demonstrations</h2>
			<div class="demonstration-content">
				<div class="demonstration-video">
					<div class="video-container">
							<div class="video-item-container">
								<img class="slider-item" src="@/assets/media_content/video_2.png"  alt="Product video"/>
								<div id="play"><div><PlaySvg/></div></div>
							</div>
						</div>
					<div class="video-description">
						<h3>Annual testing of ELT with ELT Tester i406 Mini </h3>
						<p>
							The video shows the procedure of annual testing of ELT
							in accordance with requirements of Europe (CAA/EuroCAE),
							USA (FAA Part 91.207) and Canada (CAR 571 Appendix G).
						</p>
						<a class="YT-link" href="#"><YouTubeLogo/>Watch on YouTube</a>
					</div>
				</div>
				<div class="product-manuals">
					<article>
						<BrochureSvg/>
						<div class="article-description">
							<span>Product brochure</span>
							<a href="#" class="link-download"><div><DownloadSvg/></div><span>Download</span></a>
						</div>
					</article>
					<article>
						<ManualSvg/>
						<div class="article-description">
							<span>User manual </span>
							<a href="#" class="link-download"><div><DownloadSvg/></div><span>Download</span></a>
						</div>
					</article>
					<article>
						<SearchBlank/>
						<div class="article-description test-report">
							<span>Test report</span>
							<a href="#">View test report example</a>
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
