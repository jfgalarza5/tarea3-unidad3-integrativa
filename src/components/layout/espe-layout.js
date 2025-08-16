//Component branch espe-layout

import { css, html, LitElement } from 'lit';
import '../complex/espe-footer.js';
import '../complex/espe-navbar.js';
import '../complex/espe-aside.js';

export class EspeLayout extends LitElement {

  static properties = {
    isLoggedIn: { type: Boolean }
  };

  constructor() {
    super();
    this.isLoggedIn = false;
  }

  static styles = css`
    .container {
      font-family: 'Arial', sans-serif;
      display: flex;
      flex-direction: column;
      height: 100vh;
      gap: 10px;
    }

    .content {
      flex: 1;
      padding: 20px 40px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      align-items: start;
      justify-items: center;
    }

    /* 📱 Tablets (pantallas medianas) */
    @media (max-width: 1024px) {
      .content {
        grid-template-columns: repeat(2, 1fr);
        padding: 20px;
      }
    }

    /* 📱 Celulares (pantallas pequeñas) */
    @media (max-width: 600px) {
      .content {
        grid-template-columns: 1fr;
        padding: 15px;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <espe-navbar></espe-navbar>
        <div class="content">
          <slot></slot>
        </div>
        <espe-footer></espe-footer>
      </div>
    `;
  };

}

customElements.define('espe-layout', EspeLayout);
