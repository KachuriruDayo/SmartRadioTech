<script setup>
import {useRouter} from "vue-router";
import ArrowSvg from "@/assets/media_content/ArrowInactive.svg"

const router = useRouter()

const navigation = (link) => {
	router.push(link)
}

</script>

<template>
  <section class="own_section">
    <div class="features">
      <h1>Main features</h1>
      <ul class="features-ul">
        <li>
          <article class="feature-article">
						<div class="arrow-container"><ArrowSvg class="arrow-img"/></div>
            <p class ='bold-text'>Checking the functionality of the emergency beacons operating via the Cospas-Sarsat system</p>
          </article>
        </li>
        <li>
          <article class="feature-article">
						<div class="arrow-container"><ArrowSvg class="arrow-img"/></div>
          	<p class ='bold-text' >Compatability with beacons of any manufacturer: Artex, ACK, Orolia, Kannad, ACR, and all other</p>
        	</article>
        </li>
        <li>
          <article class="feature-article">
						<div class="arrow-container"><ArrowSvg class="arrow-img"/></div>
          	<p class ='bold-text' >Full compliance with the requirements of CAA/EuroCAE and EASA, FAA Part 91.207 and CAR 571 Appendix G</p>
        	</article>
        </li>
      </ul>
    </div>

    <div class="product-container">
      <article class ="product-article">
				<div class="image-container">
					<img class ="product-img" src="@/assets/media_content/firstPng.png" alt="firstImg"/>
				</div>
        <div class="product-info-container">
          <div class="product-info">
            <h2>ELT Tester 406 03</h2>
            <ul class="product-ul">
              <li><p>Portability and user-friendly interface</p></li>
              <li><p>Specialized software for automatic generation of test reports</p></li>
              <li><p>Testing of beacons with RLS function</p></li>
              <li><p>Operation on frequencies: 406 MHz, 243 MHz, 121.5 MHz</p></li>
              <li><p>Decoding 15 HEX ID</p></li>
            </ul>
          </div>

          <div class="product-buttons-container">
            <button class="request-button">Request for quote</button>
            <button class="details-button" @click="navigation('/production/elt_tester-406-03')">More details</button>
          </div>
        </div>
      </article>
      <article class ="product-article">
				<div class="image-container">
					<img class ="product-img" src="@/assets/media_content/secondPng.png" alt="secondImg"/>
				</div>
        <div class="product-info-container">
          <div class="product-info">
            <h2>ELT Tester i406 Mini</h2>
            <ul class="product-ul">
              <li><p>Working with any mobile device via tester’s Wi-Fi</p></li>
              <li><p>The built-in software for automatic generation of test reports </p></li>
              <li><p>Compactness and ultra-light weight</p></li>
              <li><p>Operation on frequencies: 406 MHz, 243 MHz, 121.5 MHz</p></li>
              <li><p>Decoding 15 HEX ID</p></li>
            </ul>
          </div>

          <div class="product-buttons-container">
            <button class="request-button" >Request for quote</button>
            <button class="details-button" @click="navigation('/production/elt_tester-i406-mini')">More details</button>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
  @import 'features-style.scss';
</style>
