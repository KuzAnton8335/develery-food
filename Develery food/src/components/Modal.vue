<template>
  <div
    class="cart-modal__overlay"
    :class="{ open: isOpen }"
    @click.self="closeModal()"
  >
    <div class="cart-modal">
      <div class="cart-modal__header">
        <h5 class="cart-modal__title">Корзина</h5>
        <button class="cart-modal__close" @click="closeModal()">
          <img src="../assets/img/icons/close.svg" alt="close modal" />
        </button>
      </div>
      <div class="cart-modal__body">
        <div class="cart-item">
          <p class="cart-item__title">Ролл угорь стандарт</p>
          <div class="cart-item__conrols">
            <div class="cart-item__controls--price">250 ₽</div>
            <button class="btn btn-outline">-</button>
            <span class="cart-item__controls--count">1</span>
            <button class="btn btn-outline">+</button>
          </div>
        </div>
        <div class="cart-item">
          <p class="cart-item__title">Ролл угорь стандарт</p>
          <div class="cart-item__conrols">
            <div class="cart-item__controls--price">250 ₽</div>
            <button class="btn btn-outline">-</button>
            <span class="cart-item__controls--count">1</span>
            <button class="btn btn-outline">+</button>
          </div>
        </div>
        <div class="cart-item">
          <p class="cart-item__title">Ролл угорь стандарт</p>
          <div class="cart-item__conrols">
            <div class="cart-item__controls--price">250 ₽</div>
            <button class="btn btn-outline">-</button>
            <span class="cart-item__controls--count">1</span>
            <button class="btn btn-outline">+</button>
          </div>
        </div>
        <div class="cart-item">
          <p class="cart-item__title">Ролл угорь стандарт</p>
          <div class="cart-item__conrols">
            <div class="cart-item__controls--price">250 ₽</div>
            <button class="btn btn-outline">-</button>
            <span class="cart-item__controls--count">1</span>
            <button class="btn btn-outline">+</button>
          </div>
        </div>
        <div class="cart-item">
          <p class="cart-item__title">Ролл угорь стандарт</p>
          <div class="cart-item__conrols">
            <div class="cart-item__controls--price">250 ₽</div>
            <button class="btn btn-outline">-</button>
            <span class="cart-item__controls--count">1</span>
            <button class="btn btn-outline">+</button>
          </div>
        </div>
      </div>
      <div class="cart-modal__footer">
        <div class="cart-modal__footer--price">1250 ₽</div>
        <div class="cart-modal__footer--controls">
          <button class="btn btn-primery">Оформить заказ</button>
          <button class="btn btn-outline">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { isOpen } = defineProps({ isOpen: Boolean });
const emit = defineEmits(["toggleModal"]);
const closeModal = () => {
  emit("toggleModal");
};
</script>

<style scoped>
.cart-modal__overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  display: none;
  align-items: center;
  justify-content: center;
}

.cart-modal__overlay.open {
  display: flex;
}
.cart-modal {
  width: 100%;
  max-width: 788px;
  height: 552px;
  background: var(--gray---gray-1);
  padding: 40px 45px;
}
.cart-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
}
.cart-modal__title {
  margin: 0;
  font-weight: 700;
  font-size: 2.25rem;
  color: var(--gray---gray-10);
}

.cart-modal__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 50px;
}
.cart-modal__footer--price {
  background: var(--gray---gray-9);
  border-radius: 5px;
  padding: 15px 20px;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--gray---gray-2);
}
.cart-modal__footer--controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}
.cart-item:not(:last-child) {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #d9d9d9;
}
.cart-item__title {
  margin: 0;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 178%;
  color: var(--gray---gray-10);
}
.cart-item__conrols {
  display: flex;
  align-items: center;
}

.cart-item__conrols button {
  border-color: var(--daybreak-blue---blue-5);
  color: var(--daybreak-blue---blue-5);
}

.cart-item__controls--price {
  margin-right: 47px;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 160%;
  color: var(--gray---gray-10);
}

.cart-item__controls--count {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
