import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const isOpenModal = ref({
		modal_1: false,
		modal_gallery: false,
	})

	const toggleModal = (target, boolean) => {
		switch(target) {
			case 'type_1':
				if (boolean !== undefined) isOpenModal.value.modal_1 = boolean
				else isOpenModal.value.modal_1 = !isOpenModal.value.modal_1
				break;

			case 'gallery':
				if (boolean !== undefined) isOpenModal.value.modal_gallery = boolean
				else isOpenModal.value.modal_gallery = !isOpenModal.value.modal_gallery
				break;
		}
	}
  return { isOpenModal, toggleModal }
})
