<script setup>
import DropdownBlock from "@/components/Ui-Kit/dropdown-Block.vue";
</script>

<template>
	<section>
		<div class="text-container">
			<h2>Questions? Answers</h2>
			<span>If you don't find the answers you're looking for, ask us directly!</span>
		</div>
		<div class="dropdown-container">
			<DropdownBlock class="dropdown-block">
				<template #title-svg>1</template>
				<template #title><span class="questions-title">How can I get the software for preparing test reports?</span></template>
				<template #text>
					<p class="text-regular">
						The software for ELT Tester 406 03 can be found in the Download section of this
						website. It is free of charge. For downloading, registration on the website is
						needed. Further, the software will be offering updates automatically to remain
						up-to-date.
					</p>
					<p class="text-regular">
						ELT Tester i406 Mini has its own built-in software, so you don’t
						need to download it additionally.
					</p>
				</template>
			</DropdownBlock>
			<DropdownBlock class="dropdown-block">
				<template #title-svg>2</template>
				<template #title><span class="questions-title">What is the shipping cost?</span></template>
				<template #text>
					<p class="text-regular">
						The delivery to any country is free of charge.<br>
						The addressee just pays the customs fees at his side.
					</p>
				</template>
			</DropdownBlock>
			<DropdownBlock class="dropdown-block">
				<template #title-svg>3</template>
				<template #title><span class="questions-title">Why should I choose your tester?</span></template>
				<template #text>
					<span class="text-title">Accuracy of measurements</span>
						<p class="text-regular">
							The test equipment that we develop and manufacture is intended for
							thorough and trustworthy inspections, and is compatible with all ELT
							brands. Our testers provide a high level of measurement accuracy.
							You can be sure that the parameters of the beacon that you are
							testing really meet the requirements and are within the tolerance.
						</p>

						<span class="text-title">Realiability of operation</span>
					<p class="text-regular">
						The testers are tolerant to temperature drop and can operate at high
						humidity (all their elements are protected for this). Due to the use
						of special filters (circuits configured in a narrow band), no
						extraneous interference can affect the testing.
					</p>

						<span class="text-title">Quality of production</span>
					<p class="text-regular">
						We design our tools for a long service life, that’s why we do not
						compromise by using cheap components. This approach, which also
						includes careful manual assembly, allows us to produce devices with
						a reject rate of only 0.2% and maintain an optimal price-quality
						ratio for our devices.<br>
						The supplied testers’ sets include already all components that
						are necessary for measurements: RF attenuator, RF cables, adapters, etc.
					</p>

						<span class="text-title">Easy making of test reports</span>
					<p class="text-regular">
						Along with the testers, we supply specialized software that allows
						to automate the process of generating test reports. You only
						need to print them and sign - minimum of routine paperwork!
						The software is included to the cost of testers and is available
						for downloading on this website.
					</p>

				</template>
			</DropdownBlock>
			<DropdownBlock class="dropdown-block">
				<template #title-svg>4</template>
				<template #title><span class="questions-title">Where is your stock and what is the period of shipment?</span></template>
				<template #text>
					<p class="text-regular">
						For our customers’ convenience, we have two warehouses: in Belgrade, Serbia,
						and in Bucharest, Romania. For shipments to the European Union, the Romanian
						stock is used, and for deliveries to other counties we use the stock in Serbia.
					</p>
					<p class="text-regular">
						The orders are usually prepared for shipment within 3 working
						days, then they are handed over  to the delivery company. The
						time of delivery depends on your location.
					</p>
				</template>
			</DropdownBlock>
			<DropdownBlock class="dropdown-block">
				<template #title-svg>5</template>
				<template #title><span class="questions-title">Is there any trial period?</span></template>
				<template #text>
					<p class="text-regular">
						The trial period for using the devices is not provided.
						We offer detailed technical information and illustrative video presentations to
						give our users a comprehensive understanding of operational principles of our equipment.
					</p>
				</template>
			</DropdownBlock>
		</div>
	</section>
</template>

<style scoped>
@import "questions-style.scss";
</style>
