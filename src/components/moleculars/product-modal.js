import { LitElement, css, html } from "lit";
import '../atomic/buttons/fav-button.js';
import '../atomic/buttons/log-button.js';
import '../atomic/buttons/cart-counter.js';

export class ProductModal extends LitElement {
    static properties = {
        isOpen: { type: Boolean },
        image: { type: String },
        title: { type: String },
        isFav: { type: Boolean },
        discount: { type: String },
        price: { type: String },
        colors: { type: Array },
        selectedColor: { type: String },
        sizes: { type: Array },
        selectedSize: { type: String },
        description: { type: String }
    };

    constructor() {
        super();
        this.isOpen = false;

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
        this.title = "Nike Air Zoom Pegasus 41";
        this.discount = "20";
        this.price = "80.90";
        this.description = `Las Nike Air Zoom Pegasus 41 están diseñadas para ofrecer una experiencia de carrera superior, combinando innovación, 
        confort y estilo. Este modelo incorpora la reconocida amortiguación Zoom Airtanto en el antepié como en el talón, lo que proporciona una respuesta
        rápida y eficiente en cada zancada. Además, cuenta con espuma ReactX,una evolución de la tecnología React que mejora el retorno de energía, reduce 
        el impacto y ofrece mayor suavidad en la pisada, incluso durante carreras  largas o entrenamientos intensos.El upper ha sido renovado para mejorar 
        la transpirabilidad y el ajuste dinámico al pie, manteniendo una sensación de frescura y ligereza incluso en climas cálidos. Su diseño ergonómico se 
        adapta al movimiento natural del pie, mientras que los refuerzos estratégicos brindan soporte y estabilidad donde más se necesita.`;
    }

    changeColor(color) {
        this.selectedColor = color.name;
        this.image = color.img;
        this.requestUpdate();
    }

    openModal() {
        this.isOpen = true;
    }

    closeModal() {
        this.isOpen = false;
    }

    // Prevenir que el click en el contenido cierre el modal
    handleContentClick(e) {
        e.stopPropagation();
    }

    static styles = css`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }

    .modal-overlay.open {
      opacity: 1;
      visibility: visible;
    }

    .modal-content {
      background-color: #f0f0f0;
      border-radius: 20px;
      max-width: 800px;
      width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      transform: scale(0.7);
      transition: transform 0.3s ease;
    }

    .modal-overlay.open .modal-content {
      transform: scale(1);
    }

    .modal-header {
      position: relative;
      padding: 20px;
      border-bottom: 1px solid #ddd;
    }

    .close-button {
      position: absolute;
      top: 15px;
      right: 15px;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #666;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s ease;
    }

    .close-button:hover {
      background-color: #f0f0f0;
    }

    .modal-body {
      display: flex;
      gap: 20px;
      padding: 20px;
    }

    .left-section {
      flex: 1;
      background-color: #004D00;
      border-radius: 15px;
      padding: 20px;
      color: white;
      display: flex;
      flex-direction: column;
      position: relative;
      min-height: 400px;
    }

    .product-title {
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
      color: #FFFFCC;
    }

    .product-section {
      display: flex;
      width: 100%;
      height: 100%;
      position: relative;
    }

    .talla-box {
      background-color: rgba(51, 102, 51, 0.8);
      border: 2px solid rgba(255, 255, 255, 0.3);
      padding: 8px 12px;
      border-radius: 20px;
      min-width: 45px;
      position: absolute;
      bottom: 80px;
      left: 20px;
      z-index: 10;
      color: #FFFFCC;
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

    .image-content {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    .image-content img {
      width: 380px;
      height: 380px;
      object-fit: cover;
      transform: rotate(270deg);
      transition: transform 0.3s ease;
    }

    .fav-button-container {
      position: absolute;
      bottom: 20px;
      left: 20px;
    }

    .color-select {
      background-color: rgba(51, 102, 51, 0.8);
      border-radius: 20px;
      padding: 8px 15px;
      display: flex;
      align-items: center;
      gap: 12px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      width: fit-content;
      position: absolute;
      bottom: 20px;
      right: 20px;
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

    .right-section {
      flex: 1;
      padding: 20px;
    }

    .product-description {
      font-size: 14px;
      line-height: 1.5;
      color: #333;
      margin-bottom: 20px;
    }

    .price-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .price {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .price .discount {
      color: #990000;
      font-size: 14px;
      font-weight: bold;
    }

    .price .price-f {
      color: #004D00;
      font-size: 24px;
      font-weight: bold;
    }

    .add-to-cart-button {
      background-color: #004D00;
      color: white;
      border: none;
      padding: 15px 30px;
      border-radius: 25px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      width: 100%;
      transition: background-color 0.2s ease;
    }

    .add-to-cart-button:hover {
      background-color: #003300;
    }

    @media (max-width: 768px) {
      .modal-body {
        flex-direction: column;
      }
      
      .product-section {
        flex-direction: column;
        align-items: center;
      }
      
      .image-content img {
        width: 200px;
        height: 200px;
      }
  `;

    render() {
        return html`
      <div class="modal-overlay ${this.isOpen ? 'open' : ''}" @click="${this.closeModal}">
        <div class="modal-content" @click="${this.handleContentClick}">
          <div class="modal-header">
            <button class="close-button" @click="${this.closeModal}" style="border: none; background: none; cursor: pointer; color: red;">×</button>
          </div>
          
          <div class="modal-body">
            <div class="left-section">
              <div class="product-title">${this.title}</div>
              
              <div class="product-section">
                <div class="talla-box">
                  <p>Talla</p>
                  <div class="talla-list-vertical">
                    ${this.sizes.map(
            size => html`
                        <button
                          class="${this.selectedSize === size ? 'active' : ''}"
                          @click="${() => this.selectedSize = size}"
                        >${size}</button>
                      `
        )}
                  </div>
                </div>

                <div class="image-content">
                  <img src="${this.image}" alt="Imagen del producto" />
                </div>

                <div class="color-select">
                  <p>Color</p>
                  <div class="color-list">
                    ${this.colors.map(
            color => html`
                        <button
                          style="background-color: ${color.hex}"
                          class="${this.selectedColor === color.name ? 'active' : ''}"
                          @click="${() => this.changeColor(color)}"
                        ></button>
                      `
        )}
                  </div>
                </div>
              </div>

              <div class="fav-button-container">
                <fav-button></fav-button>
              </div>
            </div>

            <div class="right-section">
              <div class="product-description">
                ${this.description}
              </div>
              
              <button class="add-to-cart-button">
                🛒 Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    }
}

customElements.define("product-modal", ProductModal);