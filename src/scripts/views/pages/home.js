import RestaurantSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Syaa's Restaurant List Menu</h2>
        <div id="restaurants" class="restaurants"></div>
      </div>
    `;
  },

  async afterRender() {
    document.querySelector('#hero').style.display = '';
    const restoran = await RestaurantSource.restaurantList();
    const restaurantContainer = document.querySelector('#restaurants');
    restoran.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Detail;
