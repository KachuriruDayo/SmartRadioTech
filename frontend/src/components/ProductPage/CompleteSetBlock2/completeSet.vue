<script setup>
	import Img1 from '@/assets/media_content/CompleteImg2/Main_unit_ELT_Tester_406_03.png';
	import Img2 from '@/assets/media_content/CompleteImg2/Antenna.png';
	import Img3 from '@/assets/media_content/CompleteImg2/Attenuator.png';
	import Img4 from '@/assets/media_content/CompleteImg2/Power_cable.png';
	import Img5 from '@/assets/media_content/CompleteImg2/USB_power_adapter.png';
	import Img6 from '@/assets/media_content/CompleteImg2/RF_adapters.png';
	import Img7 from '@/assets/media_content/CompleteImg2/SMA.png';
	import Img8 from '@/assets/media_content/CompleteImg2/Calibration_certificate2.png';
	import Img9 from '@/assets/media_content/CompleteImg2/User_manual2.png';

	const items = [
		{
			image: Img1,
			title: 'Main unit\n' +
				'ELT tester i406 Mini'
		},
		{
			image: Img2,
			title: '406/121 MHz and Wi-Fi antennas'
		},
		{
			image: Img3,
			title: 'Attenuator'
		},
		{
			image: Img4,
			title: 'Power cable'
		},
		{
			image: Img5,
			title: 'USB power adapter'
		},
		{
			image: Img6,
			title: 'RF adapters SMA/BNC and SMA/TNC'
		},
		{
			image: Img7,
			title: 'RF cables SMA/SMA RG316, 0.5m and 1m'
		},
		{
			image: Img8,
			title: 'Calibration certificate'
		},
		{
			image: Img9,
			title: 'User manual'
		}
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
				<article class="option-article grid-item_9">
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
