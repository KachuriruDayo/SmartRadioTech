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
			title: 'RF cable tester-attenuator TNC-TNC 0.5m\n' +
				'RF cable attenuator-beacon  TNC-BNC 1m'
		},
		{
			image: Img7,
			title: 'BPC cable  \n' +
				'USB A- USB B 1.5m'
		},
	]
</script>

<template>
	<section>
		<h2>Сomplete set</h2>
		<div class="grid-container">
			<div class="grid">
				<template v-for="(item, index) in items">
					<article class="article-item" :class="`grid-item_${index}`">
						<img class="article-img" :src="item.image" alt="product image"/>
						<span class="title">{{ item.title }}</span>
					</article>
				</template>
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
