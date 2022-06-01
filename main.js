import { LitElement, html } from 'lit';
import 'ninja-keys';
import { Router } from '@lit-labs/router';
// import { Editor } from '@tiptap/core';
// import StarterKit from '@tiptap/starter-kit';

class Home extends LitElement {
  static get properties() {
    return {
      // showEditor: { type: Boolean, state: true },
    };
  }
  constructor() {
    super();
    // this.showEditor = false;
  }
  render() {
    return html`<h1>Hello</h1>
      <a href="/">Home</a>
      <a href="/edit">Edit</a>
      <a href="/foo">Foo</a>
      <!-- <button type="button" @click=${this
        .handleClick}>Add editor</button> -->
      <!-- ${this.showEditor
        ? html` <div>
            <div class="element"></div>
          </div>`
        : ''}  --> `;
  }
  handleClick() {
    // this.showEditor = !this.showEditor;
  }
  updated() {
    // if (this.showEditor) {
    //   this.editor = new Editor({
    //     element: this.renderRoot.querySelector('.element'),
    //     injectCSS: false,
    //     extensions: [StarterKit],
    //     content: '<p>Hello World!</p>',
    //   });
    // }
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
  // editor;
  // el;
  render() {
    return html`<h1>Edit</h1>
      <a href="/">Home</a> <a href="/edit">Edit</a> <a href="/foo">Foo</a>
      <!-- <div>
        <div class="element"></div>
      </div> -->
      <ninja-keys></ninja-keys>`;
  }
  firstUpdated() {
    this.el = this.renderRoot.querySelector('.element');
    this.editor = new Editor({
      element: this.el,
      injectCSS: false,
      extensions: [StarterKit],
      content: '<p>Hello World!</p>',
    });
    const ninja = this.renderRoot.querySelector('ninja-keys');
    ninja.data = [
      {
        id: 'Projects',
        title: 'Open Projects',
        hotkey: 'ctrl+N',
        icon: 'apps',
        section: 'Projects',
        handler: () => {
          // it's auto register above hotkey with this handler
          alert('Your logic to handle');
        },
      },
      {
        id: 'Theme',
        title: 'Change theme...',
        icon: 'desktop_windows',
        children: ['Light Theme', 'Dark Theme', 'System Theme'],
        hotkey: 'ctrl+T',
        handler: () => {
          // open menu if closed. Because you can open directly that menu from it's hotkey
          ninja.open({ parent: 'Theme' });
          // if menu opened that prevent it from closing on select that action, no need if you don't have child actions
          return { keepOpen: true };
        },
      },
      {
        id: 'Light Theme',
        title: 'Change theme to Light',
        icon: 'light_mode',
        parent: 'Theme',
        handler: () => {
          // simple handler
          document.documentElement.classList.remove('dark');
        },
      },
      {
        id: 'Dark Theme',
        title: 'Change theme to Dark',
        icon: 'dark_mode',
        parent: 'Theme',
        handler: () => {
          // simple handler
          document.documentElement.classList.add('dark');
        },
      },
    ];
  }
  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    // this.editor.destroy();
    //console.log(this.editor.isDestroyed);
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

  render() {
    return html`${this.router.outlet()}`;
    // return html`<home-index></home-index>`;
  }
}

customElements.define('my-app', App);
