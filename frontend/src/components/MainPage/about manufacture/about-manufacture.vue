<script setup>
	import AeromarineSvg from '@/assets/media_content/Aeromarine.svg';
	import AeroTechSvg from '@/assets/media_content/Logo.svg';
</script>

<template>
	<section>
		<h2>About manufacturer and supplier </h2>
		<div class="article-container">
			<article>
				<div class="img-container">
					<img src="@/assets/media_content/About_Block_20years.png" alt="20 yers label">
				</div>
				<div class="content-container">
					<div class="svg-container">
						<AeromarineSvg/>
					</div>
					<div class="article-text">
						<p>
							Aeromarine SRT is the manufacturer of ELT testers with 20+
							years of development and production experience.
						</p>
						<p>
							The expertise gained over these years allows  its
							engineers to implement technologies that combine
							time-tested solutions and innovations.
						</p>
					</div>
				</div>
			</article>
			<article>
				<div class="img-container article-img"></div>
				<div class="content-container">
					<div class="svg-container">
						<AeroTechSvg/>
					</div>
					<div class="article-text">
						<p>
							Smart Radio Tech is the exclusive supplier of Aeromarine SRT ELT testers.
							It deals with worldwide distribution, accounting and finance.
						</p>
						<p>
							Tel: +381 63 1252129<br/>
							Call us 10:00 am - 18:00 pm (UTC+2)
						</p>
					</div>
				</div>
			</article>
		</div>
	</section>
</template>

<style scoped>
	@import "about-manufacture-style.scss";
</style>
