<script setup>
	import {onMounted, ref, useTemplateRef, watch} from "vue";
	import {useRouter} from "vue-router";
	import { useModalStore } from "@/stores/modalStore.js";
	import DropdownMenu from '@/components/Ui-Kit/dropdown-Menu.vue'
  import BurgerMenu from "@/components/Ui-Kit/burger-Menu.vue";
  import DropdownBlock from "@/components/Ui-Kit/burger-Dropdown.vue";
  import CloseSvg from "@/assets/media_content/Close.svg";
  import LogoSvg from "@/assets/media_content/Logo.svg"
  import NavArrowSvg from "@/assets/media_content/Down.svg"
  import LoginSvg from "@/assets/media_content/login.svg"
  import BurgerMenuSvg from "@/assets/media_content/Menu.svg";
	import Modal_login from "@/components/Ui-Kit/modal_type_login.vue";
	import Modal_ContacUs from "@/components/Ui-Kit/modal_type_3.vue"

	const modalStore = useModalStore();
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

	const openBurger = () => {
		if(modalStore.isOpenModal.modal_login === false && modalStore.isOpenModal.modal_3 === false)
			isOpen.value.second = isOpen.value.burger = true;
	}

 	const navigate = (link, option) => {
	 	if (option !== undefined) isOpen.value.burger = false
	 	router.push(link)
 	}

	let toggleLoginModalType = ref({
		registration: false,
		forgotPassword: false,
	})

	const logEmailInput = useTemplateRef('log_email');
	const regEmailInput = useTemplateRef('modal_reg-input');
	const forgEmailInput = useTemplateRef('modal_forg-input');
	const logPasswordInput = useTemplateRef('log_password');
	let isDisabled = ref(false)

	const toggleLoginModal = (type) => {
		switch(type) {
			case "registration":
				toggleLoginModalType.value = {registration: true, forgotPassword: false};
				break
			case "forgotPassword":
				toggleLoginModalType.value = {registration: false, forgotPassword: true};
				break
			default:
				toggleLoginModalType.value = {registration: false, forgotPassword: false};
		}
	}

	const submitLoginHandler = () => {
		isDisabled.value = true
		setTimeout(() => {
			modalStore.toggleModal('type_login', false)
			logEmailInput.value.value = "";
			logPasswordInput.value.value = "";
			isDisabled.value = false
		}, 2000)
	}

	const submitRegistrationHandler = () => {
		isDisabled.value = true
		setTimeout(() => {
			modalStore.toggleModal('type_login', false)
			regEmailInput.value.value = "";
			isDisabled.value = false
		}, 2000)
	}

	const submitForgotHandler = () => {
		isDisabled.value = true
		setTimeout(() => {
			modalStore.toggleModal('type_login', false)
			forgEmailInput.value.value = "";
			isDisabled.value = false
		}, 2000)
	}

	const submitContactHandler = () => {
		isDisabled.value = true
		setTimeout(() => {
			modalStore.toggleModal('type_login', false)
		}, 2000)
	}


 	watch(() => isOpen.value.burger, (boolean) => {
		 	if (boolean) document.documentElement.style.overflow = 'hidden';
		 	else document.documentElement.style.overflow = 'auto';
	 	});

	watch(() => modalStore.isOpenModal.modal_login, (boolean) => {
			if (boolean) {
				isOpen.value.burger = false;
				document.documentElement.style.overflow = 'hidden';
			}
			else {
				setTimeout(() => {
					toggleLoginModalType.value = {registration: false, forgotPassword: false};
				}, 300)
				document.documentElement.style.overflow = 'auto';
			}
		});

	watch(() => modalStore.isOpenModal.modal_3, (boolean) => {
		if (boolean) {
			isOpen.value.burger = false;
			document.documentElement.style.overflow = 'hidden';
		}
		else {
			document.documentElement.style.overflow = 'auto';
		}
	});

 	onMounted(() => {
	 	window.addEventListener('resize', () => {
		 	if (window.innerWidth > 1024) isOpen.value.burger = false;
	 	})
 	});
</script>

<template>
  <header ref="header">

		<Modal_ContacUs>
			<template v-slot:content>
				<div class="contact_modal flex_block">
					<h3>Contact us</h3>
					<div class="flex_block">
						<span>Fields with * are required</span>
						<form class="flex_block">
							<div class="form-group flex_block">
								<input type="text" placeholder="Your name"/>
								<div>
									<input type="number" placeholder="your Phone"/>
									<input	type="text" placeholder="Company"/>
								</div>
								<input class="checkbox" type="checkbox" name="chat"/>
								<label for="chat">Chat with me via WhatsApp</label>
							</div>
							<div class="form-group flex_block">
								<span>
									Leave here your request and get detailed information.<br/>
									Please check that the email address is correct.
								</span>
								<div class="flex_block">
									<input type="email" required placeholder="Your email*"/>
									<input type="text" required placeholder="Your message*"/>
									<input class="checkbox" type="checkbox" name="capcha"/>
									<label for="capcha">i'm not a robot</label>
								</div>
								<p class="text-style">By sending us your request, you agree to our <a class="modal_link">privacy policy</a>.</p>
							</div>
						</form>
					</div>
				</div>
			</template>
		</Modal_ContacUs>

		<Modal_login>
			<template v-slot:content>
				<div
					class="login_modal-content flex_block"
					v-show="toggleLoginModalType.registration === false && toggleLoginModalType.forgotPassword === false"
				>
					<div class="login_modal-header flex_block">
						<h3>Login</h3>
						<form class="login_form flex_block">
							<div class="login_form-group flex_block">
								<span>Enter your email</span>
								<input ref="log_email" class="login_form__input" type="email" autocomplete="off" placeholder="Email" />
							</div>
							<div class="login_form-group flex_block">
								<span>Enter your password</span>
								<input ref="log_password" class="login_form__input" type="password" autocomplete="off" placeholder="Password" />
							</div>
							<div class="login_modal-buttons-container">
								<button class="submit_button" :disabled="isDisabled" @click="submitLoginHandler" type="button"><span>Submit</span></button>
								<button class="link_button" :disabled="isDisabled" @click="toggleLoginModal('forgotPassword')" type="button"><a class="modal_link">Forgot password?</a></button>
							</div>
						</form>
					</div>
					<div class="login_modal-footer">
						<div class="login_modal-footer-article">
							<span>Don’t have an account?</span>
							<button class="sign-up_button" :disabled="isDisabled" @click="toggleLoginModal('registration')" type="button">
								<span>Sign up</span>
							</button>
						</div>
						<p class="text-style">By sending us your request, you agree to our <a class="modal_link">privacy policy</a>.</p>
					</div>
				</div>
				<transition name="modal-transition">
					<div
						class="login_modal-content flex_block"
						v-show="toggleLoginModalType.registration && !toggleLoginModalType.forgotPassword"
					>
						<div class="container-modal flex_block">
							<h3>Registration</h3>
							<form class="login_form flex_block">
								<div class="login_form-group flex_block">
									<span>Enter your email, and we will send you the password</span>
									<input ref="modal_reg-input" class="login_form__input" type="email" autocomplete="off" placeholder="Email" />
								</div>
								<div class="login_modal-buttons-container">
									<button class="submit_button" :disabled="isDisabled" @click="submitRegistrationHandler" type="button"><span>Submit</span></button>
								</div>
								<p class="text-style">By sending us your request, you agree to our <a class="modal_link">privacy policy</a>.</p>
							</form>
						</div>
					</div>
				</transition>
				<transition name="modal-transition">
					<div
						class="login_modal-content flex_block"
						v-show="!toggleLoginModalType.registration && toggleLoginModalType.forgotPassword"
					>
						<div class="container-modal flex_block">
							<h3>Password recovery</h3>
							<form class="login_form flex_block">
								<div class="login_form-group flex_block">
									<span>Enter your email</span>
									<input ref="modal_forg-input" class="login_form__input" type="email" autocomplete="off" placeholder="Email" />
								</div>
								<div class="login_modal-buttons-container">
									<button class="submit_button long_button" :disabled="isDisabled" @click="submitForgotHandler" type="button"><span>Send me password</span></button>
								</div>
								<p class="text-style">By sending us your request, you agree to our <a class="modal_link">privacy policy</a>.</p>
							</form>
						</div>
					</div>
				</transition>
			</template>
		</Modal_login>

		<div class="overlay" @click="isOpen.burger = false" :class="{overlay_active: isOpen.burger}"></div>

		<div @click="navigate('/', 'burger-menu')">
			<div class="logo">
				<LogoSvg class="logo-svg" />
				<span>Exclusive supplier of Aeromarine SRT products</span>
			</div>
		</div>

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
        <button @click="modalStore.toggleModal('type_3', true)">
          <span>Contact us</span>
        </button>
      </div>
    </nav>

    <button @click="modalStore.toggleModal('type_login', true)" class="login-button">
      <LoginSvg />
      <span>Login</span>
    </button>

		<BurgerMenu :is-open="isOpen.burger" class="burger-menu" >
			<template #trigger>
				<div class="button-container" @click="openBurger">
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
							<button class="button_In-burger" @click="navigate('/production/elt_tester-406-03', 'burger')"><span>ELT Tester 406 03</span></button>
							<button class="button_In-burger" @click="navigate('/production/elt_tester-i406-mini', 'burger')"><span>ELT Tester i406 Mini</span></button>
						</div>
					</template>
				</DropdownBlock>
				<DropdownBlock class="dropdown-block">
					<template #title>
						For current users
					</template>
					<template #body>
						<div id="body" class="navLink">
							<button  class="button_In-burger"><span>Downloads</span></button>
							<button class="button_In-burger"><span>Technical support</span></button>
							<button class="button_In-burger"><span>Calibration date check</span></button>
						</div>
					</template>
				</DropdownBlock>
				<button @click="modalStore.toggleModal('type_3', true)" class="button_In-burger contact-button">
					<span>Contact us</span>
				</button>
				<button @click="modalStore.toggleModal('type_login', true)"  class="button_In-burger login-button_burger">
					<LoginSvg />
					<span>Login</span>
				</button>
			</template>
		</BurgerMenu>
  </header>
</template>

<style scoped>
  @import 'header-style.scss';

	.modal-transition-enter-active,
	.modal-transition-leave-active {
		transition: all 0.3s ease-out;
	}

	.modal-transition-enter-to,
	.modal-transition-leave-from {
		opacity: 1;
	}

	.modal-transition-enter-from,
	.modal-transition-leave-to {
		opacity: 0;
	}
</style>
