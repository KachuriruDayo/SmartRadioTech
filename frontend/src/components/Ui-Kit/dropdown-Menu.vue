<script>
	export default {
		data() {
			return {
				isOpen: false,
			}
		}
	}
</script>

<template>
  <div class='dropdown-btn' @click="isOpen = !isOpen">
    <slot name='trigger'></slot>
  </div>
	<transition class='dropdown-content' appear>
		<div class='dropdownBody' v-if='isOpen'>
			<slot name='body'></slot>
		</div>
	</transition>
</template>

<style scoped>
	.dropdown-btn {
		position: relative;
	}

	.dropdownBody {
		position: absolute;
		top: 50px;
	}
</style>
