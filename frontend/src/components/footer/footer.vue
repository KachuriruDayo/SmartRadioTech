<script setup>
import { useTemplateRef, watch} from "vue";
	import {useModalStore} from "@/stores/modalStore.js";
	import LogoSvg from "@/assets/media_content/Logo.svg"
	import MegaphoneSvg from "@/assets/media_content/Subscribe.svg"
	import LinkedInSvg from "@/assets/media_content/LinkedIn.svg"
	import PhoneSvg from "@/assets/media_content/Phone.svg"
	import LocationSvg from "@/assets/media_content/Location.svg"
	import MailSvg from "@/assets/media_content/Newslatter.svg"
	import Modal from "@/components/Ui-Kit/modal_type_2.vue";

	const modalStore = useModalStore();
	const input = useTemplateRef('email_input')

	const submitHandler = () => {

		setTimeout( () => {
			modalStore.toggleModal('type_2', true);
			console.log(input.value.value);
			input.value.value = "";
		}, 1000);
	}

	watch(
		() => modalStore.isOpenModal.modal_2,
		(boolean) => {
			if (boolean) document.documentElement.style.overflow = 'hidden';
			else document.documentElement.style.overflow = 'auto';
		}
	);
</script>

<template>
  <footer>

		<Modal>
			<template v-slot:content>
				<div class="modal-content">
					<div class="modal_svg-container"><MailSvg/></div>
					<div class="modal_text-container">
						<h4>It’s great you joined us!</h4>
						<span>See you in the next newsletter!</span>
					</div>
				</div>
			</template>
		</Modal>

		<section>
			<div class="logo-container">
				<LogoSvg class="logo" />
				<span>Exclusive supplier<br> of Aeromarine SRT products</span>
			</div>

			<div class="contacts-container">
				<div class="form-container">
					<div class="text-container">
						<div class="title">
							<MegaphoneSvg id="megaphone"/>
							<h2>Subscribe to our newsletters</h2>
						</div>
						<span>Receive special offers for subscribers, stock and  helpful advice!</span>
					</div>

					<div class="form-content">
						<form class="form">
							<input ref="email_input" type="email" placeholder="your@mail.com"/>
							<button @click="submitHandler" type="button"><span>Submit</span></button>
						</form>
						<span>Your email is safe with us. Check out our <a href="#">privacy policy</a>.</span>
					</div>
				</div>

				<div class="LinkedIn">
					<a href="#">
						<div>
							<span>Follow us on</span>
							<LinkedInSvg id="linkedinSvg"/>
						</div>
						<span>Keep up with the novelties  and news </span>
					</a>
				</div>

				<div class="contacts">
					<div class="contact-item">
						<PhoneSvg />
						<div>
							<a href="tel:+381631252129">Tel: +381 63 1252129</a>
							<span>Call us 10:00 am - 18:00 pm (UTC+2)</span>
						</div>
					</div>

					<div class="contact-item">
						<LocationSvg />
						<div>
							<span>Smart Radio Tech d.o.o</span>
							<span>Sarajevska 40, Savski Venac, Belgrade 11000, Serbia</span>
						</div>
					</div>

					<div class="contact-item">
						<LocationSvg />
						<div>
							<span>Smart Radio Tech SRL</span>
							<span>Soseaua Mihai Bravu, 255, Ap. 2, Bucuresti Sectorul 3, 030302, Romania</span>
						</div>
					</div>
				</div>
			</div>
		</section>

    <div class="links-container">
			<div class="links-items">
				<div>
					<a href="#">Video manuals</a>
					<a href="#">Blog</a>
					<a href="#">Contacts</a>
					<a href="#">Subscription to our news</a>
					<a href="#">Currently unavailable products</a>
				</div>
				<div>
					<span>For current users:</span>
					<a href="#">Downloads</a>
					<a href="#">Technical support</a>
					<a href="#">Calibration date check</a>
				</div>
				<div>
					<a href="#">Warranty terms</a>
					<a href="#">Shipment terms</a>
					<a href="#">Privacy policy</a>
					<a href="#">Cookie policy</a>
				</div>
			</div>

			<span>© 2025 Smart Radio Tech</span>
    </div>

  </footer>
</template>

<style scoped>
 @import 'footer-style.scss';
</style>
