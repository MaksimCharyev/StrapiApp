'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({
  async toggleRecommendation(ctx) {
    const { id } = ctx.params; // ID товара из запроса

    // Получаем текущий товар
    const product = await strapi.entityService.findOne('api::product.product', id, {
      fields: ['isRecommended'],
    });

    if (!product) {
      return ctx.notFound('Товар не найден');
    }

    // Инвертируем значение isRecommended
    const updatedProduct = await strapi.entityService.update('api::product.product', id, {
      data: {
        isRecommended: !product.isRecommended,
      },
    });

    return ctx.send({ product: updatedProduct });
  },
}));