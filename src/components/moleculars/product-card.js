import { LitElement, css, html } from "lit";
import '../atomic/buttons/fav-button.js';
import '../atomic/buttons/log-button.js';
import '../atomic/buttons/cart-counter.js';
import './product-modal.js';



export class ProductCard extends LitElement {
  static properties = {
    image: { type: String },
    title: { type: String },
    isFav: { type: Boolean },
    discount: { type: String },
    price: { type: String },
    extended: { type: Boolean },
    colors: { type: Array },
    selectedColor: { type: String },
    sizes: { type: Array },
    selectedSize: { type: String }
  };

  constructor() {
    super();
    this.extended = false;

    this.colors = [
      {
        name: "verde",
        hex: "#B8FF32",
        img: "https://static.nike.com/a/images/t_default/63c4596a-ca9a-4a56-82f3-0387903ed5f1/AIR+ZOOM+PEGASUS+41.png"
      },
      {
        name: "azul",
        hex: "#2B59C3",
        img: "https://static.nike.com/a/images/t_default/ec36cda3-15e1-4518-87ee-37ec0c5c5fa2/NIKE+ZOOM+PEGASUS+41+MICHIGAN.png"
      },
      {
        name: "rojo",
        hex: "#D7263D",
        img: "https://static.nike.com/a/images/t_default/c04338c5-eb06-4b29-a6d0-57261d4cd562/NIKE+ZOOM+PEGASUS+41+CARDINALS.png"
      },
      {
        name: "morado",
        hex: "#7F00FF",
        img: "https://www.thenextsole.com/storage/images/FD2722-500.png"
      },
      {
        name: "Naranja",
        hex: "#E6A66E",
        img: "https://www.thenextsole.com/storage/images/DH4072-800.png"
      }
    ];

    this.selectedColor = this.colors[0].name;
    this.image = this.colors[0].img;

    this.sizes = ["38", "39", "40", "41"];
    this.selectedSize = this.sizes[0];
  }

  changeColor(color) {
    this.selectedColor = color.name;
    this.image = color.img;
  }

  openModal() {
    const modal = this.shadowRoot.querySelector('product-modal');
    modal.openModal();
  }

  static styles = css`
    .card {
      position: relative;
      background-color: #004D00;
      color: #FFFFCC;
      display: flex;
      flex-direction: column;
      min-width: 350px;
      max-width: 400px;
      border-radius: 20px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.2s ease;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .title {
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      padding: 20px 40px 10px 40px;
    }

    .main-section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 30px;
      gap: 20px;
    }

    /* Tallas */
    .talla-box {
      background-color: rgba(51, 102, 51, 0.8);
      border: 2px solid rgba(255, 255, 255, 0.3);
      padding: 8px 12px;
      border-radius: 20px;
      min-width: 45px;
    }

    .talla-box p {
      text-align: center;
      font-weight: bold;
      margin: 0 0 8px 0;
      font-size: 12px;
    }

    .talla-list-vertical {
      display: flex;
      flex-direction: column;
      gap: 6px;
      align-items: center;
    }

    .talla-list-vertical button {
      border: none;
      background-color: transparent;
      color: #FFFFCC;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      padding: 3px 8px;
      border-radius: 4px;
      transition: all 0.2s ease;
      min-width: 30px;
      position: relative;
      border-left: 3px solid transparent;
    }

    .talla-list-vertical button:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .talla-list-vertical button.active {
      background-color: transparent;
      color: #FFFFCC;
      border-left: 3px solid #FFFFCC;
    }

    /* Imagen */
    .image-content {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image-content img {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }

    /* Colores */
    .color-select {
      margin: 10px 20px 15px auto;
      margin-right: 30px;
      background-color: rgba(51, 102, 51, 0.8);
      border-radius: 20px;
      padding: 8px 15px;
      display: flex;
      align-items: center;
      gap: 12px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      width: fit-content;
    }

    .color-select p {
      margin: 0;
      font-weight: bold;
      font-size: 14px;
    }

    .color-list {
      display: flex;
      gap: 6px;
    }

    .color-list button {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 2px solid transparent;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .color-list button:hover {
      transform: scale(1.1);
    }

    .color-list button.active {
      border: 2px solid white;
      transform: scale(1.1);
    }

    /* Descripción */
    .description {
      background-color: #E0E0E0;
      color: black;
      border-radius: 20px 20px 0 0;
      width: 100%;
      flex: 1;
    }

    .description .desc-content {
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .top-content {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .price {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin: 0;
      gap: 5px;
    }

    .price p {
      margin: 0;
      text-align: end;
      font-weight: 600;
    }

    .price .discount {
      color: #990000;
      font-size: 14px;
    }

    .price .price-f {
      color: #004D00;
      font-size: 24px;
      font-weight: bold;
    }

    .desc-text {
      font-size: 12px;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .desc-text p {
      margin: 0;
    }

    .buttons {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  `;

  render() {
    return html`
      <div class="card" @click="${this.openModal}">
        <span class="title">${this.title || "Nike Air Zoom Pegasus 41"}</span>

        <div class="main-section">
          <!-- Tallas -->
          <div class="talla-box">
            <p>Talla</p>
            <div class="talla-list-vertical">
              ${this.sizes.map(
                size => html`
                  <button
                    class="${this.selectedSize === size ? 'active' : ''}"
                    @click="${(e) => {
                      e.stopPropagation();
                      this.selectedSize = size;
                    }}"
                  >${size}</button>
                `
              )}
            </div>
          </div>

          <!-- Imagen -->
          <div class="image-content">
            <img src="${this.image || 'https://static.thenounproject.com/png/1269202-200.png'}" alt="Imagen del producto" />
          </div>
        </div>

        <!-- Colores -->
        <div class="color-select">
          <p>Color</p>
          <div class="color-list">
            ${this.colors.map(
              color => html`
                <button
                  style="background-color: ${color.hex}"
                  class="${this.selectedColor === color.name ? 'active' : ''}"
                  @click="${(e) => {
                    e.stopPropagation();
                    this.changeColor(color);
                  }}"
                ></button>
              `
            )}
          </div>
        </div>

        <!-- Descripción, precio y botones -->
        <div class="description">
          <div class="desc-content">
            <div class="top-content">
              <fav-button></fav-button>
              <div class="price">
                <p class="discount">${this.discount ? this.discount + "% OFF" : "20% OFF"}</p>
                <p class="price-f">${this.price ? "$" + this.price : "$80.90"}</p>
              </div>
            </div>
            <div class="desc-text">
              <p><slot></slot></p>
            </div>
            <div class="buttons">
              <cart-counter></cart-counter>
              <log-button>Agregar al carrito</log-button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <product-modal></product-modal>
    `;
  }
}

customElements.define("product-card", ProductCard);