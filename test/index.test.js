const StateContainer = require('../lib');

describe('StateContainer instance', () => {
  describe('after initialization', () => {
    const shopList = new StateContainer();

    test('is a StateContainer instance', () => {
      expect(shopList).toBeInstanceOf(StateContainer);
    });

    test('has no state', () => {
      expect(shopList.getStateHistory()).toEqual([]);
      expect(shopList.getState()).toEqual({});
    });
  });

  describe('new state', () => {
    test('can\'t be anything but an object', () => {
      const shopList = new StateContainer();
      const badValues = [[], 1, 'a', true, /object/];
      const obj = { a: 7, b: 9 };

      badValues.map(() => expect(() => shopList.setState([])).toThrow(/object/));

      expect(shopList.setState(obj)).toEqual(obj);
      expect(shopList.getState()).toEqual(obj);
    });

    test('can\'t be an empty object', () => {
      const shopList = new StateContainer();
      expect(() => shopList.setState({})).toThrow(/empty/);
    });
  });

  describe('when he has a state', () => {
    const shopList = new StateContainer();
    const items = [
      { id: 0, item: 'Apple' },
      { id: 1, item: 'Strawberry' },
      { id: 2, item: 'Ketchup' },
    ];

    beforeAll(() => {
      items.map(item => shopList.setState(item));
    });

    test('returns a correct history', () => {
      expect(shopList.getStateHistory()).toEqual(items);
    });

    test('returns the correct last item', () => {
      expect(shopList.getState())
        .toEqual(items[items.length - 1]);
    });
  });
});
