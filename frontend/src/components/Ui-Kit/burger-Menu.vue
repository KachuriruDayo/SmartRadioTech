<script setup>
const props = defineProps({
	isOpen: false,
})
</script>

<template>
	<button class="burger-button" v-if='!props.isOpen'>
		<slot name='trigger'></slot>
	</button>
	<button class="close-button" v-if='props.isOpen'>
		<slot name='close'></slot>
	</button>
	<transition name="fade">
		<div class='dropdownBody' v-if='props.isOpen'>
			<slot name='body'></slot>
		</div>
	</transition>
</template>

<style lang='scss' scoped>
.fade-enter-active,
.fade-leave-active {
	transition: all 0.3s ease-out;
}

.fade-enter-to,
.fade-leave-from {
	opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.burger-button {
	height: clamp(1.5rem, 0.477rem + 4.545vw, 2.75rem);
	display: flex;
	align-items: center;
	gap: 4px;
	padding: clamp(0rem, -0.511rem + 2.273vw, 0.625rem) clamp(0rem, -1.023rem + 4.545vw, 1.25rem);
	border: none;
	background: none;
	z-index: 3;
}

.dropdownBody {
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
	width: 360px;
	height: 100vh;
	top: 79px;
	right: 0;
	z-index: 3;
}

.close-button {
	width: 24px;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	background: none;
	z-index: 3;
}

@media screen and (min-width: 1026px) {
	.burger-button,
	.dropdownBody,
	.close-button {
		display: none;
		visibility: hidden;
	}
}


@media screen and (max-width: 550px) {
	.dropdownBody {
		width: 100%;
	}
}

</style>
