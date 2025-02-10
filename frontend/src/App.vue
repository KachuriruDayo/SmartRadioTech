<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/header/header.vue'
import Footer from '@/components/footer/footer.vue'
</script>

<template>
  <Header />
	<transition name="fade">
		<RouterView />
	</transition>
  <Footer />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: all 0.8s ease-out;
}

.fade-enter-to,
.fade-leave-from {
	opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
