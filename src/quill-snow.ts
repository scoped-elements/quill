import * as snowStyles from 'quill/dist/quill.snow.css';
import { QuillEditor } from './quill-editor';
// @ts-ignore

export class QuillSnow extends QuillEditor {
  static styles = [snowStyles];
}
