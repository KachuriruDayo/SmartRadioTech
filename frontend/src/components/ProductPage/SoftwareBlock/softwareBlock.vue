<script setup>
import DownloadSvg from "@/assets/media_content/Download.svg";
import SerchBlankSvg from "@/assets/media_content/SerchBlank.svg";
import CheckMarkCircule from "@/assets/media_content/CheckMarkCircule.svg";

</script>

<template>
	<section>
		<h2 class="title-style">
			Free software for automatic
			generating, editing and printing of test reports
		</h2>
		<div class="container">
			<article class="article">
				<div class="svg-container">
					<SerchBlankSvg/>
				</div>
				<div class="article-text-container">
					<span class="bold-text-medium">Test report</span>
					<a class="bold-text-small" href="#">View test report example</a>
				</div>
			</article>
			<div class="text-container">
				<div class="advantage-container">
					<div class="advantage-item">
						<div class="checkmark-svg"><CheckMarkCircule/></div><span class="regular-text-small">The software for ELT Tester 406 03 is compatible with macOS and Windows</span>
					</div>
					<div class="advantage-item">
						<div class="checkmark-svg"><CheckMarkCircule/></div><span class="regular-text-small">The data can be sent from the tester to PC or laptop via USB cable</span>
					</div>
					<div class="advantage-item">
						<div class="checkmark-svg"><CheckMarkCircule/></div><span class="regular-text-small">The tester has a memory storage for saving the test results</span>
					</div>
				</div>
				<div class="links-container">
					<a class="bold-text-small" href="#"><div><DownloadSvg/></div> Download for macOS</a>
					<a class="bold-text-small" href="#"><div><DownloadSvg/></div> Download for Windows</a>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
@import "software-block-style.scss";
</style>
