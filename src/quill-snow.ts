import { css } from 'lit';
import { customElement } from 'lit/decorators.js';
// @ts-ignore
import snowStyles from 'quill/dist/quill.snow.css';
import { QuillEditor } from './quill-editor';

@customElement('quill-snow')
export class QuillSnow extends QuillEditor {
  static styles = [
    snowStyles,
    css`
      :host {
        display: flex;
      }
      #editor {
        word-break: break-all;
      }
    `,
  ];
}
