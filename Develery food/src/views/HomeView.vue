<template>
  <section class="banner">
    <div class="container">
      <div class="banner-item">
        <h2 class="banner-item__title">
          Онлайн-сервис доставки еды на&nbsp;дом
        </h2>
        <p class="banner-item__subtitle">
          Блюда из&nbsp;любимого ресторана привезет курьер в&nbsp;перчатках,
          маске и&nbsp;с&nbsp;антисептиком
        </p>
      </div>
    </div>
  </section>
  <section class="products">
    <div class="container">
      <div class="products-header">
        <h3 class="products-header__title">Рестораны</h3>
        <input
          type="text"
          class="products-header__search"
          placeholder="Поиск блюд и ресторанов"
        />
      </div>
      <div class="products-wrapper">
        <div class="products-card" id="rest-container">
          <router-link
            :to="`/rest?id=${rest.id}`"
            class="products-card__item"
            v-for="rest in store.rests"
            :key="rest.id"
          >
            <div class="products-card__image">
              <img :src="getUrl(rest.image)" alt="Пицца плюс" />
            </div>
            <div class="products-card__description">
              <div class="products-card__description-row">
                <h4 class="products-card__description--title">
                  {{ rest.title }}
                </h4>
                <div class="products-card__description-bage">
                  {{ rest.time }} мин
                </div>
              </div>
              <div class="products-card__description-row">
                <div class="products-card__description-info">
                  <div class="products-card__description-info__raiting">
                    <img
                      src="../assets/img/icons/star.svg"
                      alt="start raiting"
                    />
                    {{ rest.raiting }}
                  </div>
                  <div class="products-card__description-info__price">
                    От {{ rest.price }} ₽
                  </div>
                  <div class="products-card__description-info__group">
                    {{ rest.type }}
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import { restArray } from "../constanst/rests";
import { store } from "../store/index";
const getUrl = name => {
  return new URL(`../assets/img/rests/${name}`, import.meta.url);
};
</script>
