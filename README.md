# Statefull

Give the state mechanics to anything !

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need nodeJS for run this package and NPM or Yarn for manage it.

### Installing

NPM link is coming.

## Running the tests

```
yarn test
```

## Running the linter

```
yarn lint
```

## How to use

Import package in your project.

```
const Statefull = require('statefull');
```

or

```
import Statefull from 'statefull';
```

and now, extends your items with ES6 class or new operator.

```
class items extends Statefull {
  constructor() {
    super()
  }

  ...
}
```
or 

```
const items = new Statefull();
```

## API

Use **getState** method to get the last state.

```
// Return Object
const lastState = items.getState();
```

Use **getStateHistory** to get the state history.

```
// Return Array
const stateHistory = items.getStateHistory();
```

Use **setState** to set a new state. (Object) => (Object)

```
// Return Object
const state = { color: 'blue' };
const lastState = items.setState(state);
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/jonathangiamp/64db04e6b25cbd2268dd57eef918a1d5) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Jonathan Giamporcaro** - *Initial work* - [Github](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the WTFPL - see the [LICENSE.md](LICENSE.md) file for details