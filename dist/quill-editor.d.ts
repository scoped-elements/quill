import { LitElement } from 'lit';
import Quill, { QuillOptionsStatic } from 'quill';
export declare type Dictionary<T> = {
    [key: string]: T;
};
export declare abstract class QuillEditor extends LitElement {
    modules: Dictionary<any>;
    options: QuillOptionsStatic | undefined;
    quill: Quill;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
