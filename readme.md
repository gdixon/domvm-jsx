# domvm-jsx

 > This package supplies the el function defined in the [using JSX with domvm wiki](https://github.com/domvm/domvm/wiki/JSX).

--------

## Using domvm and JSX
While not all of domvm's features can be accommodated by JSX syntax, it's possible to cover a fairly large subset via a defineElementSpread pragma. Please refer to demos and examples in the [JSX wiki](https://github.com/domvm/domvm/wiki/JSX).

## Quick start

- install via npm/yarn
    ```
    npm install domvm-jsx --save
    ```

## Combining domvm and JSX with webpack and babel

- package.json
    ```
    ...

    "devDependencies": {
        "webpack": "^3.8.1",
        "babel-core": "^6.26.0",
        "babel-loader": "^7.1.2",
        "babel-preset-env": "^1.6.1",
        "babel-plugin-transform-react-jsx": "^6.24.1"
    },
    "dependencies": {
        "domvm": "^3.3.3",
        "domvm-jsx": "^1.0.0"
    }

    ...
    ```
- webpack.config.js
    ```
    ...

    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                loader: ['babel-loader']
            }
        ]
    }

    ...
    ```
- babel.rc
    ```
    {
        "presets": [
            "env"
        ],
        "plugins": [
            [
                "transform-react-jsx",
                {
                    "pragma": "el"
                }
            ]
        ]
    }
    ```
- your-project-file.js
    ```
    ...

    // jsx entry function
    const el = require('domvm-jsx');

    // define a component to be included via JSX (*note that components must start with a capital to differentiate them from element tags)
    const Component = (vm) => {

        return (vm) => {

            return (
                <div>{vm.data.step}{vm.data.children}</div>
            );
        };
    };

    // create a view using JSX and bind component
    const view = function (vm) {
        let step = 0;

        setInterval(() => {
            step = step +1;
            vm.redraw();
        }, 1000);

        return function() {

            /* has own content */
            return (
                <div>
                    {/* includes the component as a child */}
                    <Component
                      name='foo'
                      step={step}
                    >
                        <div>I'm a child</div>
                </div>
            );
        };
    };

    // create a vm from the view
    const vm = domvm.createView(view);

    // mount to the dom
    vm.mount(document.getElementById('root'));

    ...

    ```

## Acknowledgements
 - [Leon Sorokin (leeoniya)](https://github.com/leeoniya) - Author of domvm
 - [John Long (iamjohnlong)](https://github.com/iamjohnlong)
 - [Fred Daoud (foxdonut)](https://github.com/foxdonut)

[See discussion here](https://github.com/domvm/domvm/issues/179)

## License
* [Licensed](https://github.com/gdixon/domvm-jsx/blob/master/LICENSE) under the MIT License (MIT).
