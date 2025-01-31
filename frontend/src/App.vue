<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/header/header.vue'
import Footer from '@/components/footer/footer.vue'
</script>

<template>
<!--  <header>-->
<!--    <div class="wrapper">-->
<!--      <nav>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--      </nav>-->
<!--    </div>-->
<!--  </header>-->
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped>

</style>
