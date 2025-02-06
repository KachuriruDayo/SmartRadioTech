<script setup>
	import ProductCaption from '@/components/ProductPage/ProductCaption/caption.vue'
	import ProductOverview from "@/components/ProductPage/ProductOverview/productOverview.vue";
	import ProductManuals from "@/components/ProductPage/ProductManuals/productManuals.vue";
</script>

<template>
	<section id="body">
		<ProductCaption/>
		<ProductOverview/>
		<ProductManuals/>
	</section>
</template>

<style scoped>
#body {
	display: flex;
	flex-direction: column;
	gap: 40px;
}
</style>
