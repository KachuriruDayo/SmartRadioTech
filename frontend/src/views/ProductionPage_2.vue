<script setup>
import ProductCaption from '@/components/ProductPage/ProductCaption2/caption.vue'
import ProductOverview from "@/components/ProductPage/ProductOverview2/productOverview.vue";
import ProductManuals from "@/components/ProductPage/ProductManuals2/productManuals.vue";
import CompleteSet from "@/components/ProductPage/CompleteSetBlock2/completeSet.vue";
import Advantages from "@/components/ProductPage/advantages/advantages.vue";
import SupportBlock from "@/components/ProductPage/SupportBlock2/support-block.vue";
import MoreInteresing from "@/components/ProductPage/MoreInteresting2/more-interesing.vue";
</script>

<template>
	<section id="body">
		<ProductCaption/>
		<ProductOverview/>
		<ProductManuals/>
		<CompleteSet/>
		<Advantages/>
		<SupportBlock/>
		<MoreInteresing/>
	</section>
</template>

<style scoped>
#body {
	display: flex;
	flex-direction: column;
	gap: 40px;
}
</style>
