<script setup>
	import { useModalStore } from '@/stores/modalStore.js'
	const Modal = useModalStore();
</script>

<template>
	<transition name="modal-transition">
		<div  class="modal" v-show="Modal.isOpenModal.modal_1">
			<div class="overlay" @click="Modal.toggleModal('type_1', false)"/>
			<slot name="close_button"></slot>
			<div class="modal_content">
				<slot name="content"></slot>
			</div>
		</div>
	</transition>
</template>

<style lang="scss" scoped>

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

.modal {
	position: fixed;
	display: flex;
	width: 100%;
	height: 100vh;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	padding: 60px clamp(1.875rem, 0.341rem + 6.818vw, 3.75rem);
	z-index: 2;
}

.overlay {
	position: fixed;
	inset: 0;
	background-color: rgba(54, 56, 67, 0.3);
}

.modal_content {
	height: 100%;
	z-index: 3;
}

</style>
