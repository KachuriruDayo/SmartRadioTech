<script setup>
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
 import DropdownMenu from '@/components/Ui-Kit/dropdown-Menu.vue'
 import BurgerMenu from "@/components/Ui-Kit/burger-Menu.vue";
 import DropdownBlock from "@/components/Ui-Kit/burger-Dropdown.vue";
 import CloseSvg from "@/assets/media_content/Close.svg";
 import LogoSvg from "@/assets/media_content/Logo.svg"
 import NavArrowSvg from "@/assets/media_content/Down.svg"
 import LoginSvg from "@/assets/media_content/login.svg"
 import BurgerMenuSvg from "@/assets/media_content/Menu.svg";
 import { RouterLink } from 'vue-router'

 const router = useRouter()

 let isOpen = ref({
	 first: false,
	 second: false,
	 burger: false,
 })

 const toggle = (comp) => {
	 if(comp === 'first') {
		 isOpen.value.first = !isOpen.value.first
		 isOpen.value.second === true ? isOpen.value.second = false : true
	 }
	 if(comp === 'second') {
		 isOpen.value.second = !isOpen.value.second
		 isOpen.value.first === true ? isOpen.value.first = false : true
	 }
 }

 const navigate = (link, option) => {
	 if (option !== undefined) isOpen.value.burger = false
	 router.push(link)
 }

 onMounted(() => {
	 window.addEventListener('resize', (e) => {
		 if (window.innerWidth > 1024) isOpen.value.burger = false;
	 })
 });
</script>

<template>
  <header>
		<RouterLink class="navLink_long" to="/">
			<div class="logo">
				<LogoSvg class="logo-svg" />
				<span>Exclusive supplier of Aeromarine SRT products</span>
			</div>
		</RouterLink>

    <nav class="nav">
      <div>
        <DropdownMenu class="dropdown-menu" :isOpen="isOpen.first" @click="toggle('first')">
          <template #trigger>
						<button>
							<span>Product</span>
							<NavArrowSvg :class="{ down_arrow_active: isOpen.first }"/>
						</button>
          </template>
          <template #body>
						<button class="navLink_long" @click="navigate('/production/elt_tester-406-03')"><span>ELT Tester 406 03</span></button>
						<button class="navLink_long" @click="navigate('/production/elt_tester-i406-mini')"><span>ELT Tester i406 Mini</span></button>
          </template>
        </DropdownMenu>
        <DropdownMenu class="dropdown-menu" :isOpen="isOpen.second" @click="toggle('second')">
          <template #trigger>
						<button>
							<span>For current users</span>
							<NavArrowSvg :class="{ down_arrow_active: isOpen.second }"/>
						</button>
          </template>
          <template #body>
						<button><span>Downloads</span></button>
						<button><span>Technical support</span></button>
						<button><span>Calibration date check</span></button>
					</template>
        </DropdownMenu>
        <button>
          <span>Contact us</span>
        </button>
      </div>
    </nav>

    <button class="login-button">
      <LoginSvg />
      <span>Login</span>
    </button>

		<BurgerMenu :is-open="isOpen.burger" class="burger-menu" >
			<template #trigger>
				<div class="button-container" @click="isOpen.burger = true">
					<BurgerMenuSvg />
					<span>Menu</span>
				</div>
			</template>
			<template #close>
				<div class="button-container" @click="isOpen.burger = false">
					<CloseSvg/>
				</div>
			</template>
			<template #body>
				<DropdownBlock class="dropdown-block">
					<template #title>
						Product
					</template>
					<template #body>
						<div id="body" class="navLink">
							<button @click="navigate('/production/elt_tester-406-03', 'burger')"><span>ELT Tester 406 03</span></button>
							<button @click="navigate('/production/elt_tester-i406-mini', 'burger')"><span>ELT Tester i406 Mini</span></button>
						</div>
					</template>
				</DropdownBlock>
				<DropdownBlock class="dropdown-block">
					<template #title>
						For current users
					</template>
					<template #body>
						<div id="body" class="navLink">
							<button><span>Downloads</span></button>
							<button><span>Technical support</span></button>
							<button><span>Calibration date check</span></button>
						</div>
					</template>
				</DropdownBlock>
				<button class="contact-button">
					<span>Contact us</span>
				</button>
				<button class="login-button_burger">
					<LoginSvg />
					<span>Login</span>
				</button>
			</template>
		</BurgerMenu>
  </header>
</template>

<style scoped>
  @import 'header-style.scss';
</style>
