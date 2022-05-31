import { LitElement, html } from 'lit';
import { Router } from '@lit-labs/router';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';

class Home extends LitElement {
  render() {
    return html`<h1>Hello</h1>
      <a href="/">Home</a> <a href="/edit">Edit</a> <a href="/foo">Foo</a>`;
  }
}

customElements.define('home-index', Home);

class Foo extends LitElement {
  render() {
    return html`<h1>Hello</h1>
      <a href="/">Home</a> <a href="/edit">Edit</a> <a href="/foo">Foo</a>`;
  }
}

customElements.define('foo-index', Foo);

class Edit extends LitElement {
  editor;
  el;
  render() {
    return html`<h1>Edit</h1>
      <a href="/">Home</a> <a href="/edit">Edit</a> <a href="/foo">Foo</a>
      <div>
        <div class="element"></div>
      </div>`;
  }
  firstUpdated() {
    this.el = this.renderRoot.querySelector('.element');
    this.editor = new Editor({
      element: this.el,
      injectCSS: false,
      extensions: [StarterKit],
      content: '<p>Hello World!</p>',
    });
  }
  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    this.editor.destroy();
    super.disconnectedCallback();
  }
}

customElements.define('edit-index', Edit);

class App extends LitElement {
  router = new Router(this, [
    {
      path: '/',
      render: () => html`<home-index></home-index>`,
    },
    {
      path: '/edit',
      render: () => html`<edit-index></edit-index>`,
    },
    {
      path: '/foo',
      render: () => html`<foo-index></foo-index>`,
    },
  ]);

  constructor() {
    super();
  }
  render() {
    return html`${this.router.outlet()}`;
  }
}

customElements.define('my-app', App);
