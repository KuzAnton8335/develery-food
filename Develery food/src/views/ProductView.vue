<template>
  <section class="products">
    <div class="container">
      <div class="products-wrapper">
        <ul class="products-card" id="rest-goods">
          <li
            class="products-card__item"
            v-for="rest in goodsArray"
            :key="rest.id"
          >
            <div class="products-card__image">
              <img :src="getUrl(rest.image)" alt="Ролл угорь стандарт" />
            </div>
            <div class="products-card__description">
              <div class="products-card__description-row">
                <h4 class="products-card__description--name">
                  {{ rest.name }}
                </h4>
              </div>
              <div class="products-card__description-row">
                <p class="products-card__description-text">
                  {{ rest.text }}
                </p>
              </div>
              <div class="products-card__description-row">
                <div class="products-card__description-controls">
                  <button class="btn btn-primery">
                    В корзину
                    <img src="../assets/img/icons/cart-white.svg" alt="cart" />
                  </button>
                  <span class="products-card__description-controls__price">
                    {{ rest.price }} ₽
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { goodsArray } from "../constanst/goods";
const getUrl = name => {
  return new URL(`../assets/img/goods/${name}`, import.meta.url);
};
</script>
