const modalFunc = () => {
  const modal = document.querySelector(".cart-modal__overlay");
  const cartBtn = document.querySelector("#cart-button");

  const openModal = () => {
    modal.classList.add("open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
  };

  cartBtn.addEventListener("click", () => {
    openModal();
  });

  modal.addEventListener("click", e => {
    if (
      e.target.classList.contains("cart-modal__overlay") ||
      e.target.closest(".cart-modal__close")
    ) {
      closeModal();
    }
  });
};

const restFunc = () => {
  const container = document.querySelector("#rest-container");

  const restArray = [
    {
      id: 0,
      title: "Пицца Плюс",
      time: 50,
      raiting: 4.5,
      price: 900,
      group: "Пицца",
      type: "Пицца",
      image: "products-img-1.jpg",
    },
    {
      id: 1,
      title: "Тануки",
      time: 50,
      raiting: 4.5,
      price: 900,
      group: "Пицца",
      type: "Пицца",
      image: "products-img-2.jpg",
    },
    {
      id: 2,
      title: "FoodBand",
      time: 50,
      raiting: 4.5,
      price: 900,
      group: "Пицца",
      type: "Пицца",
      image: "products-img-3.jpg",
    },
    {
      id: 3,
      title: "Жадина-пицца",
      time: 50,
      raiting: 4.5,
      price: 900,
      group: "Пицца",
      type: "Пицца",
      image: "products-img-4.jpg",
    },
    {
      id: 4,
      title: "Точка еды",
      time: 50,
      raiting: 4.5,
      price: 900,
      group: "Пицца",
      type: "Пицца",
      image: "products-img-5.jpg",
    },
    {
      id: 5,
      title: "PizzaBurger",
      time: 50,
      raiting: 4.5,
      price: 900,
      group: "Пицца",
      type: "Пицца",
      image: "products-img-6.jpg",
    },
  ];

  const renderRest = array => {
    container.innerHTML = "";
    array.forEach(card => {
      container.insertAdjacentHTML(
        "beforeend",
        `
          <a href="./goods.html?${card.id}" class="products-card__item">
                <div class="products-card__image">
                  <img src="./img/rests/${card.image}" alt="${card.image}">
                </div>
                <div class="products-card__description">
                  <div class="products-card__description-row">
                    <h4 class="products-card__description--title">${card.title}</h4>
                    <div class="products-card__description-bage">
                      ${card.time} минут
                    </div>
                  </div>
                  <div class="products-card__description-row">
                    <div class="products-card__description-info">
                      <div class="products-card__description-info__raiting">
                        <img src="./img/icons/star.svg" alt="start raiting">
                        ${card.raiting}
                      </div>
                      <div class="products-card__description-info__price">
                        От ${card.price} ₽
                      </div>
                      <div class="products-card__description-info__group">
                        ${card.type}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
        `
      );
    });
  };

  const loading = () => {
    container.innerHTML = `<p style=" width: 100%; text-align: center;">Загрузка ресторанов!!!</p>`;
  };

  if (container) {
    loading();

    setTimeout(() => {
      renderRest(restArray);
    }, 1500);
  }
};

const restGoods = () => {
  const container = document.querySelector("#rest-goods");
  const goodsArray = [
    {
      id: 0,
      image: "goods-img-1.jpg",
      name: "Ролл угорь стандарт",
      text: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 250,
    },
    {
      id: 1,
      image: "goods-img-2.jpg",
      name: "Калифорния лосось стандарт",
      text: "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
      price: 395,
    },
    {
      id: 2,
      image: "goods-img-3.jpg",
      name: "Окинава стандарт",
      text: "Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...",
      price: 250,
    },
    {
      id: 3,
      image: "goods-img-4.jpg",
      name: "Цезарь маки хl",
      text: "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...",
      price: 250,
    },
    {
      id: 4,
      image: "goods-img-5.jpg",
      name: "Ясай маки стандарт 185 г",
      text: "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
      price: 250,
    },
    {
      id: 5,
      image: "goods-img-6.jpg",
      name: "Ролл с креветкой стандарт",
      text: "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
      price: 250,
    },
  ];

  const renderGoods = array => {
    container.innerHTML = "";
    array.forEach(card => {
      container.insertAdjacentHTML(
        "beforeend",
        `
                <li class="products-card__item">
                  <div class="products-card__image">
                    <img src="./img/goods/${card.image}" alt="${card.image}">
                  </div>
                  <div class="products-card__description">
                    <div class="products-card__description-row">
                      <h4 class="products-card__description--name">
                        ${card.name}
                      </h4>
                    </div>
                    <div class="products-card__description-row">
                      <p class="products-card__description-text">
                       ${card.text}
                      </p>
                    </div>
                    <div class="products-card__description-row">
                      <div class="products-card__description-controls">
                        <button class="btn btn-primery">
                          В корзину
                          <img src="./img/icons/cart-white.svg" alt="cart">
                        </button>
                        <span class="products-card__description-controls__price">
                          ${card.price} ₽
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
        `
      );
    });
  };
  const loading = () => {
    container.innerHTML = `<p style=" width: 100%; text-align: center;">Загрузка блюд!!!</p>`;
  };

  if (container) {
    loading();

    setTimeout(() => {
      renderGoods(goodsArray);
    }, 1500);
  }
};

modalFunc();
restFunc();
restGoods();
