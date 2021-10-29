import { css } from 'lit';
// @ts-ignore
import snowStyles from 'quill/dist/quill.snow.css';
import { QuillEditor } from './quill-editor';

export class QuillSnow extends QuillEditor {
  static styles = [
    snowStyles,
    css`
      :host {
        display: flex;
      }
    `,
  ];
}
