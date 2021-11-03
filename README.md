# @scoped-elements/quill

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @scoped-elements/quill
```

## Usage

### As an sub element in your own custom element

```js
import { QuillSnow } from '@scoped-elements/quill';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

export class CustomElement extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'quill-snow': QuillSnow
    };
  }

  render() {
    return html`
      <quill-snow></quill-snow>
    `;
  }
}
```

### As a globally defined custom element

```js
import { QuillSnow } from '@scoped-elements/quill';

customElements.define('quill-snow', QuillSnow);
```

## Documentation for the elements

As this package is just a re-export, you can find the documentation for Quill [here](https://quilljs.com/). API documentation for is yet to be done.