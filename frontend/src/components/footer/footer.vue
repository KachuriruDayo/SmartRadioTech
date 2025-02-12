<script setup>
	import LogoSvg from "@/assets/media_content/Logo.svg"
	import MegaphoneSvg from "@/assets/media_content/Subscribe.svg"
	import LinkedInSvg from "@/assets/media_content/LinkedIn.svg"
	import PhoneSvg from "@/assets/media_content/Phone.svg"
	import LocationSvg from "@/assets/media_content/Location.svg"
</script>

<template>
  <footer>
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
							<input type="email" placeholder="your@mail.com"/>
							<button type="submit"><span>Submit</span></button>
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
