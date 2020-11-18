'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  // async findOne(ctx) {
  //   const { id } = ctx.params;

  //   const entity = await strapi.services.carts.findOne({ id });
  //   return sanitizeEntity(entity, { model: strapi.models.carts });
  // }

  async myCart(ctx) {
    const { id } = ctx.params;
    console.log(ctx.state.user);

    const entity = await strapi.services.cart.findOne({
      id,
      'user.id': ctx.state.user.id
    });
    if (!entity) return ctx.unauthorized(`Forbidden`);
    return sanitizeEntity(entity, { model: strapi.models.cart });
  }
};
