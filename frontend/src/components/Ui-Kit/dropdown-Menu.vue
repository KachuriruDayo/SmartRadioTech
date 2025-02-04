<script setup>
	defineProps({
		isOpen: Boolean
	})
</script>

<template>
  <div class='dropdown-btn'>
    <slot name='trigger'></slot>
		<transition name="fade" class='dropdown-content'>
			<div class='dropdownBody' v-if='isOpen'>
				<slot name='body'></slot>
			</div>
		</transition>
  </div>
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

.dropdown-btn {
	position: relative;
}

.dropdownBody {
	position: absolute;
	background-color: #fff;
	top: calc(100% + 15px);
	width: max-content;
	border-radius: 0 0 10px 10px;
	z-index: 1;
}

</style>
