const isObject = require('../utils/isObject');
const isObjectIsEmpty = require('../utils/isObjectIsEmpty');

module.exports = class Statefull {
  constructor() {
    this.state = [];
  }

  getStateHistory() {
    return this.state;
  }

  getState() {
    return this.state[this.state.length - 1] || {};
  }

  setState(data) {
    if (!isObject(data)) throw new Error('New state must be a object');
    if (isObjectIsEmpty(data)) throw new Error('New state can\'t be empty');
    const lastState = this.getState();
    const state = Object.assign({}, lastState, data);
    this.state = [...this.state, state];
    return state;
  }
};
