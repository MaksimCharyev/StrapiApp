'use strict';

/**
 * product router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::product.product', {
  config: {
    // Добавляем новый маршрут
    toggleRecommendation: {
      method: 'PUT',
      path: '/products/:id/toggle-recommendation',
      handler: 'product.toggleRecommendation',
      config: {
        policies: [],
        auth: true, // Требуется авторизация
      },
    },
  },
});