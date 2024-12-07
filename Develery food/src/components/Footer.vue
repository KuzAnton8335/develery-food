<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-box">
        <router-link to="./" class="footer-logo logo">
          <img src="../assets/img/img-logo.png" alt="Delevery food" />
        </router-link>
        <nav class="footer-nav">
          <ul class="nav-list">
            <li>
              <a href="./goods.html" class="nav-list__link">Ресторанам</a>
            </li>
            <li>
              <a href="./goods.html" class="nav-list__link">Курьерам</a>
            </li>
            <li>
              <a href="./goods.html" class="nav-list__link">Пресс-центр</a>
            </li>
            <li>
              <a href="./goods.html" class="nav-list__link">Контакты</a>
            </li>
          </ul>
        </nav>
        <div class="footer-social">
          <a href="#">
            <img src="../assets/img/icons/instragramm.svg" alt="instragramm" />
          </a>
          <a href="#">
            <img src="../assets/img/icons/facebook.svg" alt="facebook" />
          </a>
          <a href="#">
            <img src="../assets/img/icons/vk.svg" alt="vkontacte" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  min-height: 156px;
  padding: 60px 0;
}

.footer-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  flex-wrap: wrap;
}
.footer-logo {
  margin-right: 35px;
}
.footer-nav {
  flex-grow: 1;
}

.footer-social {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}
.nav-list {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.nav-list__link {
  font-size: 1.125rem;
  color: var(--gray---gray-8);
}
</style>
