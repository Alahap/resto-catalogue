/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
// import CONFIG from '../../globals/config';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailPage(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    // const foodList = document.querySelector('#movie');
    // restaurant.menus.foods.map((food) => {
    //   foodList.innerHTML += createMovieDetailTemplate(food);
    // });

    // const reviewList = document.querySelector('#movie');
    // restaurant.customerReviews.map((review) => {
    //   reviewList.innerHTML += createMovieDetailTemplate(review);
    // });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });
  },
};

export default Detail;
