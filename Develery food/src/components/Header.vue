<template>
  <header class="header">
    <div class="container">
      <div class="header-box">
        <router-link to="./" class="header-logo logo">
          <img src="../assets/img/img-logo.png" alt="Delevery food" />
        </router-link>
        <div class="header-controls">
          <button class="btn btn-primery">
            <img src="../assets/img/icons/user.svg" alt="user" />
            Войти
          </button>
          <button class="btn btn-outline" @click="openModal()">
            <img src="../assets/img/icons/cart.svg" alt="cart" />
            Корзина
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const emit = defineEmits(["toggleModal"]);
const openModal = () => {
  emit("toggleModal");
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  min-height: 124px;
}

.header-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
