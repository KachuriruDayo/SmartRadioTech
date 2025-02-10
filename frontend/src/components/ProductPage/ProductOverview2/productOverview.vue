<script setup>
import CheckMarkCircule from "@/assets/media_content/CheckMarkCircule.svg"
import DownSvg from "@/assets/media_content/Down.svg"
import {ref} from "vue";

const articleLenght = 7;

let toggle = ref(false);
let toggleMobile = ref(false);
let currentArticle = ref(0);

function nextArticle () {
	let actual = currentArticle.value += 1;
	if (actual > articleLenght) {
		actual = 0;
	}
	currentArticle.value = actual;
}

function prevArticle () {
	let actual = currentArticle.value -= 1;
	if (actual < 0) {
		actual = articleLenght;
	}
	currentArticle.value = actual;
}
</script>

<template>
<section>
	<h2 class="title-big-regular">Product overview</h2>
	<div class="content">
		<div class="gallery">
			<div class="image-container">
				<img class="gallery-item" src="@/assets/media_content/Overview2/ELT_Tester_i406_Mini_foto1.png"  alt="Product image"/>
			</div>
			<div class="image-container">
				<img class="gallery-item" src="@/assets/media_content/Overview2/ELT_Tester_i406_Mini_foto2.png"  alt="Product image"/>
			</div>
			<div class="image-container">
				<img class="gallery-item" src="@/assets/media_content/Overview2/ELT_Tester_i406_Mini_foto3.png"  alt="Product image"/>
			</div>
			<div class="image-container">
				<img class="gallery-item" src="@/assets/media_content/Overview2/ELT_Tester_i406_Mini_foto4.png"  alt="Product image"/>
			</div>
			<div class="image-container">
				<img class="gallery-item" src="@/assets/media_content/Overview2/ELT_Tester_i406_Mini_foto5.png"  alt="Product image"/>
			</div>
			<div class="image-container">
				<img class="gallery-item" src="@/assets/media_content/Overview2/ELT_Tester_i406_Mini_foto6.png"  alt="Product image"/>
			</div>
			<div class="image-container">
				<img class="gallery-item" src="@/assets/media_content/Overview2/ELT_Tester_i406_Mini_foto7.png"  alt="Product image"/>
			</div>
			<div class="image-container">
				<img class="gallery-item" src="@/assets/media_content/Overview2/ELT_Tester_i406_Mini_foto8.png"  alt="Product image"/>
			</div>
		</div>
		<div class="gallery-mobile">
			<div :key="currentArticle" class="gallery-list" :style="{ marginLeft: -275 * currentArticle + 'px' }">
				<div class="image-container">
					<img class="gallery-item" src="@/assets/media_content/Overview2/ELT_Tester_i406_Mini_foto1.png"  alt="Product image"/>
				</div>
				<div class="image-container">
					<img class="gallery-item" src="@/assets/media_content/Overview2/ELT_Tester_i406_Mini_foto2.png"  alt="Product image"/>
				</div>
				<div class="image-container">
					<img class="gallery-item" src="@/assets/media_content/Overview2/ELT_Tester_i406_Mini_foto3.png"  alt="Product image"/>
				</div>
				<div class="image-container">
					<img class="gallery-item" src="@/assets/media_content/Overview2/ELT_Tester_i406_Mini_foto4.png"  alt="Product image"/>
				</div>
				<div class="image-container">
					<img class="gallery-item" src="@/assets/media_content/Overview2/ELT_Tester_i406_Mini_foto5.png"  alt="Product image"/>
				</div>
				<div class="image-container">
					<img class="gallery-item" src="@/assets/media_content/Overview2/ELT_Tester_i406_Mini_foto6.png"  alt="Product image"/>
				</div>
				<div class="image-container">
					<img class="gallery-item" src="@/assets/media_content/Overview2/ELT_Tester_i406_Mini_foto7.png"  alt="Product image"/>
				</div>
				<div class="image-container">
					<img class="gallery-item" src="@/assets/media_content/Overview2/ELT_Tester_i406_Mini_foto8.png"  alt="Product image"/>
				</div>
			</div>
			<div id="prev" @click="prevArticle()"></div>
			<div id="next" @click="nextArticle()"></div>
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
					<p>ELT Tester i406 Mini is a small and lightweight tool for testing any emergency location transmitters (ELTs). Use
						this tester during annual and periodical ELT inspections, as well as for verification
						after ELT encoding or installation.</p>

					<p>The device can receive and decode messages from any 406 MHz beacon transmitting either in test mode or
						in real alert emergency mode. Please note, the scope of this tester does not include
						testing beacons with the RLS function.</p>

					<p>The tester provides demodulation and decoding of Cospas-Sarsat messages. It ensures measurement of received signal
						parameters on frequencies: 406 MHz, 121.5 MHz, 243 MHz.
						The tester receives and decodes the signal from the ELT and displays,
						at the user's choice, either the НЕХ code or the message 1-112 bit, as well
						as all the measured parameters in text format.</p>

					<p>To take measurements, ELT Tester i406 Mini needs an additional device: a smartphone,
						a tablet, a laptop or a desktop PC. The tester is connected to any of these devices via the tester's Wi-Fi.</p>

					<p>For managing test procedures, the special integrated software is used; it should be run in the browser. All operations
						are performed through the browser as well. Please consider: the test results are displayed on the screen of
						the connected device, though they are stored in the tester’s memory. ELT Tester i406 Mini is
						equipped with an internal 4 GB server for storing the software itself, and for saving and storing the test results.</p>

					<p>After completing the testing procedure and saving the measurement results, you can automatically generate a test report in
						the needed format, and then print it or save for future use. All test results can be viewed through the
						connected smartphone, tablet, laptop or desktop PC at any time.</p>

					<p>If this device is used by several persons, all data saved by different users is stored in the tester’s
						memory. Information about the user (inspector) will be added to the measurements provided
						by this inspector and will be indicated in the generated test reports.</p>
				</div>
				<span class="more-text more-description open-description" @click="toggleMobile = !toggleMobile">More details<DownSvg :class="{svg_active: toggleMobile}"/></span>
			</div>
			<div class="details-highlights flex_block">
				<h3 class="title-middle-regular">Highlights</h3>
				<ul class="ul_class">
					<li>Operation on frequencies: 406 MHz, 121.5 MHz, 243 MHz</li>
					<li>Decoding of all 406 MHz aircraft protocols </li>
					<li>Compatibility with beacons of any manufacturer</li>
					<li>Meeting the requirements  of CAA/EuroCAE and EASA (Europe), FAA Part 91.207 (USA) and CAR 571 Appendix G (Canada)</li>
					<li>Providing convenience of operation thanks to its compactness</li>
					<li>Managing of test procedure through a smartphone or PCs</li>
					<li>Usage of the tester’s Wi-Fi for connecting to the smartphone or PCs; a browser is needed only</li>
					<li>Storing all test results in the tester’s internal memory</li>
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
