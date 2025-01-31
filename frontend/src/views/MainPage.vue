<script setup>
import Features from "@/components/MainPage/features/features.vue";
import Caption from "@/components/MainPage/caption/caption.vue";
import Advantages from "@/components/MainPage/advantages/advantages.vue";
import OurServices from "@/components/MainPage/Our services/our-Services.vue";
import AboutManufacture from "@/components/MainPage/about manufacture/about-manufacture.vue";
import Questions from "@/components/MainPage/questions/questions.vue";
import FooterCaption from "@/components/MainPage/footer caption/footer-caption.vue";
import Testimonials from "@/components/MainPage/testimonials/testimonials.vue";
</script>

<template>
	<section id="body">
		<Caption/>
		<Features/>
		<Advantages/>
		<OurServices/>
		<AboutManufacture/>
		<Testimonials/>
		<Questions/>
		<FooterCaption/>
	</section>
</template>

<style scoped>
	#body {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
</style>
