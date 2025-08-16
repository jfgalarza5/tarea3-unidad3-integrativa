//Component branch espe-layout

import { LitElement, css, html } from "lit";

export class EspeFooter extends LitElement {

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #990000;
      color: #FFFFCC;
      padding: 30px;
    }
  `;

  render() {
    return html`
      <footer>
        © Universidad de las Fuerzas Armadas ESPE 2021. Todos los derechos reservados. Grupo B
      </footer>
    `;
  }

}

customElements.define("espe-footer", EspeFooter);