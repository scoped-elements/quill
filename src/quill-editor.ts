import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import Quill, { QuillOptionsStatic } from 'quill';

export type Dictionary<T> = { [key: string]: T };

export abstract class QuillEditor extends LitElement {
  @property()
  modules: Dictionary<any> = {};

  @property()
  options: QuillOptionsStatic | undefined;

  quill!: Quill;

  firstUpdated() {
    for (const [key, value] of Object.entries(this.modules)) {
      Quill.register(key, value);
    }

    this.quill = new Quill(
      this.shadowRoot?.getElementById('editor') as Element,
      this.options
    );

    this.quill.on('text-change', (delta, oldContents, source) =>
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
    return html`<div id="editor" style="flex: 1;"></div>`;
  }
}
