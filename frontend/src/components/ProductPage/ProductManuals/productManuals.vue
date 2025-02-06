<script setup>
import YouTubeLogo from "@/assets/media_content/YoutubeLogo.svg"
import PlaySvg from "@/assets/media_content/PlaySvg.svg"
import DownloadSvg from "@/assets/media_content/Download.svg"
import DownSvg from "@/assets/media_content/Down.svg"
import ManualSvg from "@/assets/media_content/Brochure.svg"
import BrochureSvg from "@/assets/media_content/ProductBrochure.svg"
import {ref, useTemplateRef} from "vue";

const artcl = useTemplateRef('vid_1')
let artWidth

const articleLenght = 1;

let toggle = false;
let currentArticle = ref(0);

function nextArticle () {
	artWidth = artcl.value.clientWidth;
	toggle = !toggle;
	let actual = currentArticle.value += 1;
	if (actual > articleLenght) {
		actual = 0;
	}
	currentArticle.value = actual;
}
</script>

<template>
	<section>
		<div class="dimensions">
			<div class="dimension">
				<h2>Dimensions & weight</h2>
				<div class="dimension-info">
					<span>Dimensions: 195 x 101 x 43 mm</span>
					<span>Weight: 0.55 kg</span>
					<span>Total weight in case: 1.5 kg</span>
					<span>Total weight in box: 1.3 kg</span>
					<img src="@/assets/media_content/scheme1.png" alt="product scheme">
				</div>
			</div>
			<div class="conditions">
				<h2>Operating conditions</h2>
				<p>
					The tester is designed to operate in
					the temperature range from 0°C to +45°С, and relative humidity up to 95%
				</p>
			</div>
		</div>
		<div class="demonstration">
			<h2>Demonstration</h2>
			<div class="demonstration-content">
				<div class="demonstration-video">
					<div class="video-slider">
						<div :key="currentArticle" class="video-list" :style="{ marginLeft: 25 + -artWidth * currentArticle + 'px' }">
								<div class="video-container">
									<img ref="vid_1" class="slider-item" src="@/assets/media_content/video_1.png"  alt="Product video"/>
									<img class="slider-item" src="@/assets/media_content/video_2.png"  alt="Product video"/>
								</div>
						</div>
						<div id="play" :class="{last_img_toggle: toggle}"><div><PlaySvg/></div></div>
						<div id="toggle" :class="{button_prev: toggle}" @click="nextArticle()"><div><DownSvg :class="{svg_active: toggle}"/></div></div>
					</div>
					<div class="video-description">
						<h3>Annual test of 406 MHz ELT</h3>
						<p>
							The video shows the procedure of annual testing of ELT in accordance with requirements
							of Europe (CAA/EuroCAE), USA (FAA Part 91.207) and Canada (CAR 571 Appendix G).
						</p>
						<a class="YT-link" href="#"><YouTubeLogo/> on YouTube</a>
					</div>
				</div>
				<div class="product-manuals">
					<article>
						<BrochureSvg/>
						<div class="article-description">
							<span>Product brochure</span>
							<div><DownloadSvg/>Download</div>
						</div>
					</article>
					<article>
						<ManualSvg/>
						<div class="article-description">
							<span>User manual </span>
							<div><DownloadSvg/>Download</div>
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
