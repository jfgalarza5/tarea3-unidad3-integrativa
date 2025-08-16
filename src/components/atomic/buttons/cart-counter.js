//Component branch product-card

import { LitElement, css, html } from "lit";

export class CartCounter extends LitElement {
  static properties = {
    count: { type: Number }
  }

  constructor() {
    super();
    this.count = 1;
  }

  static styles = css`
    .counter-div{
      display: flex;
      align-items: center;
      gap: 10px;
      border: 1px solid #004D00;
      padding: 6.5px;
      border-radius: 20px
    }

    .counter-div .controller{
      background-color: #004D00;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      width: 10px;
      height: 10px;
      padding: 10px;
      margin: 0;
      border-radius: 20px;
      cursor: pointer;
    }
  `;

  increment() { 
    this.count += 1;
  }

  decrement() {
    if (this.count > 1) {
      this.count -= 1;
    }
  }

  render() {
    return html`
      <div class="counter-div">
        <div class="controller" @click=${this.decrement}>-</div>
        <div>${this.count.toString()}</div>
        <div class="controller" @click=${this.increment}>+</div>
      </div>
    `;
  }
}

customElements.define("cart-counter", CartCounter);