import { LitElement, css, html } from 'lit';

export class EspeAside extends LitElement {
  static properties = {
  };

  constructor() {
    super();
  }

  static styles = css`
    :host {
      display: block;
      position: fixed;
      top: 0;
      right: 0;
      height: 100%;
      width: 50px;
      background-color: #004D00;
      color: #FFFFCC;
      overflow: hidden;
      transition: width 0.3s ease-in-out; 
      z-index: 999;
      box-shadow: -5px 0 10px rgba(0, 0, 0, 0.2);
    }

    :host(:hover) {
      width: 300px;
    }

    .aside-content {
      padding: 20px;
      padding-top: 80px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      height: 100%;
      width: 300px;
    }

    .aside-header {
      font-size: 1.5em;
      font-weight: bold;
      margin-bottom: 15px;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%) rotate(180deg);
      white-space: nowrap;
    }

    .coupon-item {
      background-color: #E0E0E0;
      color: black;
      border-radius: 10px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .coupon-item img {
      width: 100%;
      max-width: 200px;
      height: auto;
      border-radius: 5px;
      margin-bottom: 10px;
    }

    .coupon-item p {
      font-size: 0.9em;
      margin: 0;
    }
  `;

  render() {
    return html`
      <div class="aside-header">Cupones</div>
      <div class="aside-content">
        <div class="coupon-item">
          <img src="https://via.placeholder.com/200x150/ADD8E6/000000?text=Cup%C3%B3n+10%25" alt="Cupón de descuento">
          <p>Cupón 15% de descuento por nuevo ingreso ▶</p>
        </div>
        <div class="coupon-item">
          <img src="https://via.placeholder.com/200x150/ADD8E6/000000?text=Cup%C3%B3n+20%25" alt="Cupón de descuento">
          <p>Cupón 15% de descuento por nuevo ingreso ▶</p>
        </div>
        <div class="coupon-item">
          <img src="https://via.placeholder.com/200x150/ADD8E6/000000?text=Cup%C3%B3n+30%25" alt="Cupón de descuento">
          <p>Cupón 15% de descuento por nuevo ingreso ▶</p>
        </div>
        </div>
    `;
  }
}

customElements.define('espe-aside', EspeAside);