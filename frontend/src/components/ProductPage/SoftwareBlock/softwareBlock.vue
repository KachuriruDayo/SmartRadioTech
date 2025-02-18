<script setup>
	import DownloadSvg from "@/assets/media_content/Download.svg";
	import SerchBlankSvg from "@/assets/media_content/SerchBlank.svg";
	import CheckMarkCircule from "@/assets/media_content/CheckMarkCircule.svg";
	import CloseSvg from "@/assets/media_content/Close.svg"
	import { useModalStore } from '@/stores/modalStore.js'
	import ModalType1 from "@/components/Ui-Kit/modal_type-1.vue";
	import {watch} from "vue";

	const modalStore = useModalStore();

	watch(
		() => modalStore.isOpenModal.modal_1,
		(boolean) => {
			if (boolean) document.documentElement.style.overflow = 'hidden';
			else document.documentElement.style.overflow = 'auto';
		}
	);
</script>

<template>
	<section>
		<h2 class="title-style">
			Free software for automatic
			generating, editing and printing of test reports
		</h2>
		<div class="container">
			<article class="article">
				<div class="svg-container">
					<SerchBlankSvg/>
				</div>
				<div class="article-text-container">
					<span class="bold-text-medium">Test report</span>
					<a @click="modalStore.toggleModal('type_1', true)" class="bold-text-small">View test report example</a>
				</div>
			</article>
			<div class="text-container">
				<div class="advantage-container">
					<div class="advantage-item">
						<div class="checkmark-svg"><CheckMarkCircule/></div><span class="regular-text-small">The software for ELT Tester 406 03 is compatible with macOS and Windows</span>
					</div>
					<div class="advantage-item">
						<div class="checkmark-svg"><CheckMarkCircule/></div><span class="regular-text-small">The data can be sent from the tester to PC or laptop via USB cable</span>
					</div>
					<div class="advantage-item">
						<div class="checkmark-svg"><CheckMarkCircule/></div><span class="regular-text-small">The tester has a memory storage for saving the test results</span>
					</div>
				</div>
				<div class="links-container">
					<a class="bold-text-small" href="#"><div><DownloadSvg/></div> Download for macOS</a>
					<a class="bold-text-small" href="#"><div><DownloadSvg/></div> Download for Windows</a>
				</div>
			</div>
		</div>

		<ModalType1>
			<template v-slot:close_button>
				<button @click="modalStore.toggleModal('type_1', false)" class="close_button"><CloseSvg/></button>
			</template>
			<template v-slot:content>
					<img class="test_report-img" src="@/assets/media_content/TestReport.png" alt="Test report image">
			</template>
		</ModalType1>

	</section>
</template>

<style scoped>
@import "software-block-style.scss";
</style>
