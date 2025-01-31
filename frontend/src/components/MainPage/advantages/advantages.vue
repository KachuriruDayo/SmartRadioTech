<script setup>
import DropdownBlock from "@/components/Ui-Kit/dropdown-block.vue";
import TabSvg1 from "@/assets/media_content/Vector (Stroke).svg"
import TabSvg2 from "@/assets/media_content/Feature2.svg"
import TabSvg3 from "@/assets/media_content/Feature3.svg"
import TabSvg4 from "@/assets/media_content/Feature4.svg"
import TabSvg5 from "@/assets/media_content/Feature5.svg"
</script>

<template>
	<section>
		<div class="text-container">
			<h2>Why do customers prefer this equipment?</h2>
			<span>The key advantages of the testers that make them the right choice</span>
		</div>
		<div class="dropdown-container">
			<DropdownBlock>
				<template #title-svg><TabSvg1 class="title-svg"/></template>
				<template #title><span>Manual assembly & high-quality components</span></template>
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
			<DropdownBlock>
				<template #title-svg><TabSvg2 class="title-svg"/></template>
				<template #title><span>Precise measurements</span></template>
				<template #text>
					<p>
						These ELT testers provide accurate measurement results with minimum
						acceptable level of deviation. Besides, the test procedures are
						protected against any extraneous interference that may affect the results
						because the circuits configured in a narrow band are applied.
					</p>
				</template>
			</DropdownBlock>
			<DropdownBlock>
				<template #title-svg><TabSvg3 class="title-svg"/></template>
				<template #title><span>Long-time durability</span></template>
				<template #text>
					<p>
						The tools are designed to operate in the temperature range from 0°C to +45°C and at high humidity.
						To be ready to work at different temperatures, the testers are equipped with microcircuits resistant to the temperature drop.  A special coating
						is used to protect the device elements from moisture.
					</p>
				</template>
			</DropdownBlock>
			<DropdownBlock>
				<template #title-svg><TabSvg4 class="title-svg"/></template>
				<template #title><span>Automatic generation and printing test reports</span></template>
				<template #text>
					<p>
						The the special software for processing measurement results and preparing test reports is supplied.
						The one for ELT Tester 406 03 is compatible with Windows and macOS.
						The data from the tester is sent to PC via USB cable. The software is free
						of charge and can be downloaded on this website.

						ELT Tester i406 Mini has its own integrated software for
						managing test procedure and generating test reports.
						No additional download is required. To get started, you only need a browser.
					</p>
				</template>
			</DropdownBlock>
			<DropdownBlock>
				<template #title-svg><TabSvg5 class="title-svg"/></template>
				<template #title><span>Official purchase and free worldwide delivery</span></template>
				<template #text>
					<p>
						We accept the payments via bank transfer from any country
						and provide all necessary documentation for accounting
						records. The delivery of the orders is at our expense.
					</p>
				</template>
			</DropdownBlock>
		</div>
	</section>
</template>

<style scoped>
	@import 'advantages-style.scss';
</style>
