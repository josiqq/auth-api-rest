## Installation

```bash
$ npm install --save-dev @webcomponents/webcomponentsjs
```

## Usage

```js
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import { PolymerExpressions } from '@polymer/expressions/expressions.js';

class MyElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <div>[[value]]</div>
    `;
  }

  static get properties() {
    return {
      value: {
        type: String,
        value: 'Hello World!',
        computed: '_computedValue(value)'
      }
    };
  }

  _computedValue(value) {
    return PolymerExpressions.format('Hello {0}!', value);
  }
}

window.customElements.define('my-element', MyElement);
```

## API

### PolymerExpressions.format(format, ...args)

Formats a string using the given format string and arguments.

#### format

Type: `string`

The format string to use.

#### args

Type: `any[]`

The arguments to use.

### PolymerExpressions.formatNumber(value, options)

Formats a number using the given options.

#### value

Type: `number`

The number to format.

#### options

Type: `object`

The options to use.

##### options.decimals

Type: `number`

The number of decimals to use.