/**
 * @param {any} items
 * @return {boolean}
 */
module.exports = items => typeof items === 'object' && !(items instanceof Array);
