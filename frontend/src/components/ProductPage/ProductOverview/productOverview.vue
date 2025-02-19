<script setup>
import {onMounted, ref, useTemplateRef, watch} from "vue";
import {useModalStore} from "@/stores/modalStore.js";
import CheckMarkCircule from "@/assets/media_content/CheckMarkCircule.svg"
import DownSvg from "@/assets/media_content/Down.svg"
import CloseSvg from "@/assets/media_content/Close.svg";
import ModalGallery from "@/components/Ui-Kit/modal_gallery.vue";

const modalStore = useModalStore();

const firstArt = useTemplateRef('art_1');
let articleWidth = ref(0);
let marginSet	= ref(0);
const articleLength = 7;

let inActive = ref({
	next: false,
	prev: true,
})

let toggle = ref(false);
let toggleMobile = ref(false);
let currentArticle = ref(0);

function nextArticle () {
	articleWidth.value = firstArt.value.clientWidth;
	let actual = currentArticle.value += 1;
	if (actual >= articleLength) {
		currentArticle.value = articleLength;
		inActive.value.next = true;
	} else {
		inActive.value.next = false;
		inActive.value.prev = false;
		currentArticle.value = actual;
	}
}

function prevArticle () {
	articleWidth.value = firstArt.value.clientWidth;
	let actual = currentArticle.value -= 1;
	if (actual <= 0) {
		currentArticle.value = 0;
		inActive.value.prev = true;
	} else {
		inActive.value.next = false;
		inActive.value.prev = false;
		currentArticle.value = actual;
	}
}

function openImage (index) {
	if (index <= 0) {
		currentArticle.value = 0;
		inActive.value.prev = true;
	} else {
		inActive.value.next = false;
		inActive.value.prev = false;
		currentArticle.value = index;
	}

	if (index >= articleLength) {
		currentArticle.value = articleLength;
		inActive.value.next = true;
	} else {
		inActive.value.next = false;
		inActive.value.prev = false;
		currentArticle.value = index;
	}

	modalStore.toggleModal('gallery', true)
}

watch(
	() => modalStore.isOpenModal.modal_gallery,
	(boolean) => {
		if (boolean) document.documentElement.style.overflow = 'hidden';
		else document.documentElement.style.overflow = 'auto';
	}
);

onMounted(() => {
	if (window.innerWidth >= 800) {
		marginSet.value = 176;
		articleWidth.value = 476;
	}
	if (window.innerWidth >= 1280) {
		articleWidth.value = 595;
		marginSet.value = articleWidth.value/2;
	}
	if (window.innerWidth >= 1920) {
		articleWidth.value = 745;
		marginSet.value = articleWidth.value/2;
	}
	window.addEventListener('resize', () => {
		if (window.innerWidth > 799) {
			currentArticle.value = 0;
		}
		if (window.innerWidth < 800) modalStore.toggleModal('gallery', false);
	})
})
</script>

<template>
<section>

	<ModalGallery>
		<template v-slot:close_button>
			<button class="close_button" @click="modalStore.toggleModal('gallery', false)"><CloseSvg/></button>
		</template>
		<template v-slot:content>
			<div class="gallery-modal">
				<div class="gallery-list_modal" :style="{ marginLeft: -articleWidth * currentArticle + marginSet + 'px' }">
					<div ref="art_1" class="image-container_modal">
						<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto1.png"  alt="Product image"/>
					</div>
					<div class="image-container_modal">
						<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto2.png"  alt="Product image"/>
					</div>
					<div class="image-container_modal">
						<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto3.png"  alt="Product image"/>
					</div>
					<div class="image-container_modal">
						<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto4.png"  alt="Product image"/>
					</div>
					<div class="image-container_modal">
						<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto5.png"  alt="Product image"/>
					</div>
					<div class="image-container_modal">
						<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto6.png"  alt="Product image"/>
					</div>
					<div class="image-container_modal">
						<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto7.png"  alt="Product image"/>
					</div>
					<div class="image-container_modal">
						<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto8.png"  alt="Product image"/>
					</div>
				</div>
				<div id="prev_modal" @click="prevArticle()" :class="{inActive: inActive.prev}"><DownSvg/></div>
				<div id="prev_modal_area" @click="prevArticle()"></div>
				<div id="next_modal" @click="nextArticle()" :class="{inActive: inActive.next}"><DownSvg/></div>
				<div id="next_modal_area" @click="nextArticle()"></div>
			</div>
		</template>
	</ModalGallery>

	<h2 class="title-big-regular">Product overview</h2>
	<div class="content">
		<div class="gallery">
			<div class="image-container" @click="openImage(0)">
				<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto1.png"  alt="Product image"/>
			</div>
			<div class="image-container" @click="openImage(1)">
				<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto2.png"  alt="Product image"/>
			</div>
			<div class="image-container" @click="openImage(2)">
				<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto3.png"  alt="Product image"/>
			</div>
			<div class="image-container" @click="openImage(3)">
				<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto4.png"  alt="Product image"/>
			</div>
			<div class="image-container" @click="openImage(4)">
				<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto5.png"  alt="Product image"/>
			</div>
			<div class="image-container" @click="openImage(5)">
				<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto6.png"  alt="Product image"/>
			</div>
			<div class="image-container" @click="openImage(6)">
				<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto7.png"  alt="Product image"/>
			</div>
			<div class="image-container" @click="openImage(7)">
				<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto8.png"  alt="Product image"/>
			</div>
		</div>
		<div class="gallery-mobile">
			<div :key="currentArticle" class="gallery-list" :style="{ marginLeft: -275 * currentArticle + 'px' }">
				<div class="image-container">
					<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto1.png"  alt="Product image"/>
				</div>
				<div class="image-container">
					<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto2.png"  alt="Product image"/>
				</div>
				<div class="image-container">
					<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto3.png"  alt="Product image"/>
				</div>
				<div class="image-container">
					<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto4.png"  alt="Product image"/>
				</div>
				<div class="image-container">
					<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto5.png"  alt="Product image"/>
				</div>
				<div class="image-container">
					<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto6.png"  alt="Product image"/>
				</div>
				<div class="image-container">
					<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto7.png"  alt="Product image"/>
				</div>
				<div class="image-container">
					<img class="gallery-item" src="@/assets/media_content/ELT_Tester_406_03_foto8.png"  alt="Product image"/>
				</div>
			</div>
			<div id="prev" @click="prevArticle()" :class="{inActive_mobile: inActive.prev}"></div>
			<div id="next" @click="nextArticle()" :class="{inActive_mobile: inActive.next}"></div>
		</div>
		<div class="details">
			<div class="details-solution flex_block">
				<h3 class="title-middle-regular">This tool is an effective test solution for use by:</h3>
				<div class="solution-container">
					<div class="solution-content">
						<span class="text-bold"><CheckMarkCircule/> Aviation safety inspectors</span>
						<span class="text-bold"><CheckMarkCircule/> Small aircraft fleets</span>
					</div>
					<div class="solution-content">
						<span class="text-bold"><CheckMarkCircule/> ELT manufacturers</span>
						<span class="text-bold"><CheckMarkCircule/> Flight schools</span>
					</div>
				</div>
			</div>
			<div class="details-description flex_block ">
				<h3 class="title-middle-regular">Description</h3>
				<div class="description-text" :class="{description_list_active: toggleMobile}">
					<p>ELT Tester 406 03 is designed for checking avionics emergency locator transmitters (ELTs)
						operating through the Cospas-Sarsat system. It can also be used to test EPIRBs and PLBs
						(including beacons with RLS function). Apply this ELT tester during annual and periodical
						ELT inspections, as well as for verification after ELT encoding or installation.</p>

					<p>ELT Tester 406 03 can receive messages from any ELT transmitting either in test mode or in real alert emergency mode.</p>

					<p>The device receives and decodes the signal from the ELT and displays at the user's choice
						either the НЕХ code or the message 1-112 bit, as well as all the decoded information.
						Besides, the tester checks the signal parameters on channels 121.5 MHz and 243 MHz.</p>

					<p>The approximate continuous operation time of the tester from internal batteries is about 6 hours.</p>

					<p>ELT Tester 406 03 has an intuitive interface and does not need any additional devices for operation.
						After the tests are completed, all measurement results are saved in the tester’s
						internal non-volatile memory (up to 10 results).</p>

					<p>The test results can also be uploaded to a PC. For it, a specialized user-friendly PC
						application is used, the connection via USB cable is very easy. You can process the
						data and automatically generate test reports in DOC or PDF format. The measurement
						results can be saved in the software on your PC in unlimited quantities.
						The software has a cloud version for storing the data and working with it from another device.</p>
				</div>
				<span class="more-text more-description open-description" @click="toggleMobile = !toggleMobile">More details<DownSvg :class="{svg_active: toggleMobile}"/></span>
			</div>
			<div class="details-highlights flex_block">
				<h3 class="title-middle-regular">Highlights</h3>
				<ul class="ul_class">
					<li>Checking of the signal parameters in channels: 406 MHz, 121.5 MHz, 243 MHz</li>
					<li>Decoding of all 406 MHz aircraft protocols, including the RLS protocol</li>
					<li>Compatibility with beacons of any manufacturer</li>
					<li>Meeting the FAA, CAR and EuroCAE ELT inspection requirements</li>
					<li>User-friendly interface</li>
					<li>Easy connection to laptop or desktop PC  for uploading test results</li>
					<li>Saving all test results in the tester’s internal memory</li>
					<li>Accompanied with intuitive PC application for processing test reports</li>
					<li>Verifying of the beacon ID after installation or reprogramming</li>
					<li>Measuring of beacon’s parameters with an antenna, or through attenuator connection</li>
				</ul>
			</div>
			<div class="details-specifications flex_block">
				<h3 class="title-middle-regular">Technical specifications</h3>
				<div class="specifications-container">
					<ul class="ul_class specifications-list" :class="{list_active: toggle}">
						<li>reception, demodulation and decoding of the emergency information transmitted on channel 406 MHz</li>
						<li>position data encoding (if available) in degrees, minutes, seconds</li>
						<li>frequency measurement of 406 MHz signal with accuracy ±500 Hz</li>
						<li>frequency measurement of 121.5 MHz signal with accuracy ±800 Hz</li>
						<li>frequency measurement of 243 MHz signal with accuracy ±800 Hz</li>
						<li>measurement of signal power level on 406 MHz channel in range 19…43 dBm with accuracy ±0,5 dB (-34…-10 dBm ±2 dB by means of antenna)</li>
						<li>measurement of signal power level  on 121.5 MHz channel in range 13…20 dBm with accuracy ±0,5 dB (-40…-34 dBm ±2 dB by means of antenna)</li>
						<li>measurement of signal power level  on 243 MHz channel in range 13…20 dBm with accuracy ±0,5 dB (-40…-34 dBm ±2 dB by means of antenna)</li>
						<li>estimation of the positive/negative phase deviation of modulated signal with accuracy ±2,8°</li>
						<li>measurement of total transmission time of 406 MHz signal with accuracy ±0,2%</li>
						<li>measurement of unmodulated carrier duration of 406 MHz signal with accuracy ±0,2%</li>
						<li>estimation of the equivalent radiated power of 406 MHz signal through broadcast</li>
						<li>checking of the sweep signal presence on channel 121.5 MHz</li>
						<li>checking of the sweep signal presence on channel 243 MHz</li>
						<li>checking of the BCH code</li>
					</ul>
					<span class="more-text" @click="toggle = !toggle">More details<DownSvg :class="{svg_active: toggle}"/></span>
				</div>
			</div>
		</div>
	</div>
</section>
</template>

<style scoped>
@import "product-overview-style.scss";
</style>
