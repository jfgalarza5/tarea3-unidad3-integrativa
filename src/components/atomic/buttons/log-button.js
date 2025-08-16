//Component branch register-login

import { LitElement, css, html } from "lit";

export class LogButton extends LitElement {
  static styles = css`

    :host{
      width: 100%;
    }

    button {
      cursor: pointer;
      background-color: #004D00;
      color: #FFFFCC;
      border: none;
      padding: 15px 40px;
      border-radius: 20px;
      width: 100%;
    }
  `;

  static properties = {

  }

  constructor() {
    super();
  }

  render() {
    return html`
      <button>
        <slot></slot>
      </button>
    `;
  }


}

customElements.define("log-button", LogButton);