import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { QuillOptionsStatic, Quill } from 'quill';
import { cloneDeep } from 'lodash-es';

export type Dictionary<T> = { [key: string]: T };

export abstract class QuillEditor extends LitElement {
  @property()
  modules: Dictionary<any> = {};

  options: QuillOptionsStatic | undefined;

  _quill!: Quill;

  firstUpdated() {
    const QuillClass = cloneDeep(Quill);

    for (const [key, value] of Object.entries(this.modules)) {
      QuillClass.register(key, value);
    }

    this._quill = new QuillClass(
      this.shadowRoot?.getElementById('editor') as Element,
      this.options
    );

    this._quill.on('text-change', (delta, oldContents, source) =>
      this.dispatchEvent(
        new CustomEvent('text-change', {
          detail: {
            delta,
            oldContents,
            source,
          },
          bubbles: true,
          composed: true,
        })
      )
    );
  }

  render() {
    return html`<div id="editor"></div>`;
  }
}
