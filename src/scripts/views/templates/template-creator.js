/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant_name">${restaurant.name}</h2>
  <img tabindex="4" class="restaurant_image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant_info">
  <h3>Information</h3>
    <h4>Restaurant Name</h4>
    <p>${restaurant.name}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address} minutes</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h3>Kategori Menu :</h3> 
  </div>
  <div class="restaurant_overview">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
    
  </div>
`;

/****
tambahkan ini nanti untuk review 
<h3>Review<h3>
    ${restaurant.customerReviews.map((review) => `
            <h6 tabindex="0">${review.name}</h6>
            <p tabindex="0" class="date-review">${review.date}</p>
            <p tabindex="0">${review.review}</p>
    `).join('')}

    atau pilih ini:
    <h3>Customer reviews :</h3> <span class="detail-item__reviewer">${restaurant.customerReviews.map((customerName) => customerName.name).join(', ')}</span>

    sambung setelah <category menu> :
    ${restaurant.categories.map((category) => category.name).join(', ')}
    <h3>Menu makanan :</h3> ${restaurant.menus.foods.map((food) => food.name).join(', ')}
    <h3>Menu minuman :</h3> ${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}
*****/

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__image" alt="${restaurant.name}"
            src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="movie-item__header__rating">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a tabindex="4" href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
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
