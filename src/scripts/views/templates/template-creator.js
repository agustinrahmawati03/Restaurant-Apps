import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster lazyload" data-src="${
  CONFIG.BASE_IMAGE_URL}${restaurant.pictureId
}" alt="${restaurant.name}" class="lazyload" />
  <div class="restaurant__info">
    <h4>Nama Restoran: <span class="isi">${restaurant.name}</span></h4>
    <h4>Kota: <span class="isi">${restaurant.city}</span></h4>
    <h4>Alamat: <span class="isi">${restaurant.address}</span></h4>
    <h4>Rating: <span class="isi">${restaurant.rating} ⭐️</span></h4>
    <h4>Menu Makanan :</h4>
    <p>${restaurant.menus.foods.map((food) => food.name)}</p>
    <h4>Menu Minuman :</h4>
    <p>${restaurant.menus.drinks.map((drink) => drink.name)}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
  </div>
  <br>
  <hr>
  <div class="restaurant__review">
  <h2>COMMENT</h2>
  <p>${restaurant.customerReviews
    .map(
      (comment) => `
    <p class="name">${comment.name}</p>
    <p class="date">${comment.date}</p>
    <p class="comment">"${comment.review}"</p>
    <hr>
    `,
    )
    .join('<br>')}
  </p>
  </div>
`;

const createRestaurantItemTemplate = (restaurants) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" alt="${
  restaurants.name
}"
      data-src="${CONFIG.BASE_IMAGE_URL}${restaurants.pictureId}">
      <div class="restaurant-item__header__rating">
        <p>Rating ⭐️<span class="restaurant-item__header__rating__score">${
  restaurants.rating
}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant-item-content__name"><a href="/#/detail/${
  restaurants.id
}" id="judulKonten">${restaurants.name}</a></h3>
      <h4 class="restaurant-item-content__city">Kota: ${restaurants.city}</h4>
      <p class="restaurant-item-content__description">${
  restaurants.description
}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
