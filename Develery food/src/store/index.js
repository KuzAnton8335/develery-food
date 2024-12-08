import { reactive } from "vue";
import { restArray } from "../constanst/rests";

export const store = reactive({
  isOpen: false,
  rests: restArray,
  toggleModal(value) {
    this.isOpen = value;
  },
});
