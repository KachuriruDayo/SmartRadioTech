<script setup>
import {ref} from "vue";
import DropdownBlock from "@/components/Ui-Kit/dropdown-Block.vue";
import SvgIcon from '@jamescoyle/vue-icon';
import {
	mdiMemory,
	mdiBullseyeArrow,
	mdiLightningBolt,
	mdiTextBoxCheckOutline
} from '@mdi/js';

let IsOpen = ref({
	first: false,
	second: false,
	third: false,
	fourth: false,
	fifth: false,
})

import TabSvg1 from "@/assets/media_content/Vector (Stroke).svg"
import TabSvg2 from "@/assets/media_content/Feature2.svg"
import TabSvg3 from "@/assets/media_content/Feature3.svg"
import TabSvg4 from "@/assets/media_content/Feature4.svg"

</script>

<template>
	<section>
		<div class="text-container">
			<h2>Why do customers prefer this equipment?</h2>
			<span>The key advantages of the testers that make them the right choice</span>
		</div>
		<div class="dropdown-container">
			<DropdownBlock  @click="IsOpen.first = !IsOpen.first" :is-open="IsOpen.first" class="dropdown-block">
				<template #title-svg><svg-icon class="svgCustom" type="mdi" :path="mdiMemory"/></template>
				<template #title><span :class="{ block_active: IsOpen.first }">Manual assembly & high-quality components</span></template>
				<template #text>
					<p>
						The manufacturer applies components from such brands
						as Analog Devices, STMicroelectronics, Samsung, Texas
						Instruments, Mini-Circuits, Keystone Electronics and
						others, and avoids using cheaper analogues. Together
						with thorough assembly, it ensures high quality indicators.
					</p>
				</template>
			</DropdownBlock>
			<DropdownBlock  @click="IsOpen.second = !IsOpen.second" :is-open="IsOpen.second" class="dropdown-block">
				<template #title-svg><svg-icon class="svgCustom" type="mdi" :path="mdiBullseyeArrow"/></template>
				<template #title><span :class="{ block_active: IsOpen.second }">Precise measurements</span></template>
				<template #text>
					<p>
						These ELT testers provide accurate measurement results with minimum
						acceptable level of deviation. Besides, the test procedures are
						protected against any extraneous interference that may affect the results
						because the circuits configured in a narrow band are applied.
					</p>
				</template>
			</DropdownBlock>
			<DropdownBlock  @click="IsOpen.third = !IsOpen.third" :is-open="IsOpen.third" class="dropdown-block">
				<template #title-svg><svg-icon class="svgCustom" type="mdi" :path="mdiLightningBolt"/></template>
				<template #title><span :class="{ block_active: IsOpen.third }">Long-time durability</span></template>
				<template #text>
					<p>
						The tools are designed to operate in the temperature range from 0°C to +45°C and at high humidity.
						To be ready to work at different temperatures, the testers are equipped with microcircuits resistant to the temperature drop.  A special coating
						is used to protect the device elements from moisture.
					</p>
				</template>
			</DropdownBlock>
			<DropdownBlock  @click="IsOpen.fourth = !IsOpen.fourth" :is-open="IsOpen.fourth" class="dropdown-block">
				<template #title-svg><svg-icon class="svgCustom" type="mdi" :path="mdiTextBoxCheckOutline"/></template>
				<template #title><span :class="{ block_active: IsOpen.fourth }">Automatic generation and printing test reports</span></template>
				<template #text>
					<p>
						The the special software for processing measurement results and preparing test reports is supplied.
						The one for ELT Tester 406 03 is compatible with Windows and macOS.
						The data from the tester is sent to PC via USB cable. The software is free
						of charge and can be downloaded on this website.
					</P>
					<p>
						ELT Tester i406 Mini has its own integrated software for
						managing test procedure and generating test reports.
						No additional download is required. To get started, you only need a browser.
					</p>
				</template>
			</DropdownBlock>
		</div>
	</section>
</template>

<style scoped>
	@import 'advantages-style.scss';
</style>
