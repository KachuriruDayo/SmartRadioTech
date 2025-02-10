<script setup>
	import ProductCaption from '@/components/ProductPage/ProductCaption/caption.vue'
	import ProductOverview from "@/components/ProductPage/ProductOverview/productOverview.vue";
	import ProductManuals from "@/components/ProductPage/ProductManuals/productManuals.vue";
	import SoftwareBlock from "@/components/ProductPage/SoftwareBlock/softwareBlock.vue";
	import CompleteSet from "@/components/ProductPage/CompleteSetBlock/completeSet.vue";
	import Advantages from "@/components/ProductPage/advantages/advantages.vue";
	import SupportBlock from "@/components/ProductPage/SupportBlock/support-block.vue";
	import MoreInteresing from "@/components/ProductPage/MoreInteresting/more-interesing.vue";
</script>

<template>
	<section id="body">
		<ProductCaption/>
		<ProductOverview/>
		<ProductManuals/>
		<SoftwareBlock/>
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
