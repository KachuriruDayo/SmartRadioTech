<script setup>
	import Img1 from '@/assets/media_content/CompleteImg/img_item_1.png';
	import Img2 from '@/assets/media_content/CompleteImg/img_item_2.png';
	import Img3 from '@/assets/media_content/CompleteImg/img_item_3.png';
	import Img4 from '@/assets/media_content/CompleteImg/img_item_4.png';
	import Img5 from '@/assets/media_content/CompleteImg/img_item_5.png';
	import Img6 from '@/assets/media_content/CompleteImg/img_item_6.png';
	import Img7 from '@/assets/media_content/CompleteImg/img_item_7.png';
	import Img8 from '@/assets/media_content/CompleteImg/img_item_8.png';

	const items = [
		{
			image: Img1,
			title: 'Main unit ELT Tester 406 03'
		},
		{
			image: Img4,
			title: 'Antenna'
		},
		{
			image: Img5,
			title: 'Attenuator'
		},
		{
			image: Img6,
			title: 'Batteries'
		},
		{
			image: Img8,
			title: 'Calibration certificate'
		},
		{
			image: Img3,
			title: 'User manual'
		},
		{
			image: Img2,
			title: 'RF cable tester-attenuator TNC-TNC 0.5m RF cable attenuator-beacon  TNC-BNC 1m'
		},
		{
			image: Img7,
			title: 'BPC cable USB A- USB B 1.5m'
		},
	]
</script>

<template>
	<section>
		<h2>Сomplete set</h2>
		<div class="grid-container">
			<div class="grid">
				<article class="article-item" :class="`grid-item_0`">
					<div class="article-item-image">
						<img class="article-img" :src="Img1" alt="product image"/>
					</div>
					<span class="title">Main unit ELT Tester 406 03</span>
				</article>
				<article class="article-item" :class="`grid-item_1`">
					<div class="article-item-image">
						<img class="article-img" :src="Img4" alt="product image"/>
					</div>
					<span class="title">Antenna</span>
				</article>
				<article class="article-item" :class="`grid-item_2`">
					<div class="article-item-image">
						<img class="article-img" :src="Img5" alt="product image"/>
					</div>
					<span class="title">Attenuator</span>
				</article>
				<article class="article-item" :class="`grid-item_3`">
					<div class="article-item-image">
						<img class="article-img" :src="Img6" alt="product image"/>
					</div>
					<span class="title">Batteries</span>
				</article>
				<article class="article-item" :class="`grid-item_4`">
					<div class="article-item-image">
						<img class="article-img" :src="Img8" alt="product image"/>
					</div>
					<span class="title">Calibration certificate</span>
				</article>
				<article class="article-item" :class="`grid-item_5`">
					<div class="article-item-image">
						<img class="article-img" :src="Img3" alt="product image"/>
					</div>
					<span class="title">User manual</span>
				</article>
				<article class="article-item" :class="`grid-item_6`">
					<div class="article-item-image">
						<img class="article-img" :src="Img2" alt="product image"/>
					</div>
					<span class="title">RF cable tester-attenuator TNC-TNC 0.5m, <br>RF cable attenuator-beacon  TNC-BNC 1m</span>
				</article>
				<article class="article-item" :class="`grid-item_7`">
					<div class="article-item-image">
						<img class="article-img" :src="Img7" alt="product image"/>
					</div>
					<span class="title">BPC cable<br> USB A- USB B 1.5m'</span>
				</article>
				<article class="option-article grid-item_8">
					<span>Option</span>
					<div class="option">
						<div class="option-img"></div>
						<span class="option-title">Crushproof plastic case</span>
					</div>
				</article>
			</div>
		</div>
	</section>
</template>

<style scoped>
@import "complete-set-style.scss";
</style>
