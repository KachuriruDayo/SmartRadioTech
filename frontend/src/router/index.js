import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/views/MainPage.vue";
import ProductionPage_1 from "@/views/ProductionPage_1.vue";
import ProductionPage_2 from "@/views/ProductionPage_2.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage,
    },
    {
      path: '/production/elt_tester-406-03',
      name: 'about production 1',
      component: ProductionPage_1,
    },
		{
			path: '/production/elt_tester-i406-mini',
			name: 'about production 2',
			component: ProductionPage_2,
		},
  ],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { top: 0 }
		}
	},
})

export default router
