import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const isOpenModal = ref({
		modal_1: false,
		modal_2: false,
		modal_3: false,
		modal_login: false,
		modal_gallery: false,
	})

	const toggleModal = (target, boolean) => {
		switch(target) {
			case 'type_1':
				if (boolean !== undefined) isOpenModal.value.modal_1 = boolean
				else isOpenModal.value.modal_1 = !isOpenModal.value.modal_1
				break;

			case 'type_2':
				if (boolean !== undefined) isOpenModal.value.modal_2 = boolean
				else isOpenModal.value.modal_2 = !isOpenModal.value.modal_2
				break;

			case 'type_3':
				if (boolean !== undefined) isOpenModal.value.modal_3 = boolean
				else isOpenModal.value.modal_3 = !isOpenModal.value.modal_3
				break;

			case 'type_login':
				if (boolean !== undefined) isOpenModal.value.modal_login = boolean
				else isOpenModal.value.modal_login = !isOpenModal.value.modal_login
				break;

			case 'gallery':
				if (boolean !== undefined) isOpenModal.value.modal_gallery = boolean
				else isOpenModal.value.modal_gallery = !isOpenModal.value.modal_gallery
				break;
		}
	}
  return { isOpenModal, toggleModal }
})
