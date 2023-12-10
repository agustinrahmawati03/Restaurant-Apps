/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking and Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants initially', ({ I }) => {
  I.dontSeeElement('.restaurant-item');
});

Scenario('liking one restaurant and unliking it', async ({ I }) => {
  // Liking a restaurant
  I.amOnPage('/');
  I.waitForElement('.restaurant-item-content__name a');
  const firstRestaurant = locate('.restaurant-item-content__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(2); // Wait for 2 seconds for like process (adjust the time if necessary)
  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item');
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-item-content__name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  // Unliking the restaurant
  I.click('.restaurant-item-content__name a');
  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(2); // Wait for 2 seconds for unlike process (adjust the time if necessary)
  I.amOnPage('/#/favorite');
  I.dontSeeElement('.restaurant-item');
});
