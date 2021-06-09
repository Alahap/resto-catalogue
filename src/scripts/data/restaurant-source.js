/* eslint-disable linebreak-style */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  // static async homePage() {
  //   const response = await fetch(API_ENDPOINT.HOME);
  //   const responseJson = await response.json();
  //   return responseJson.restaurants;
  // }

  static async listPage() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    console.log(responseJson.restaurants);
    return responseJson.restaurants;
  }

  static async detailPage(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantSource;
