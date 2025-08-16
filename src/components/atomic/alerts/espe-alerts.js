// ../atomic/alerts/espe-alerts.js
import { LitElement, css, html } from "lit";

export class EspeAlerts extends LitElement {
  static properties = {
    type: { type: String, reflect: true },
    message: { type: String },
    isVisible: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.type = "success"; 
    this.message = "La acción se ha completado.";
    this.isVisible = false; 
  }

  static styles = css`
    :host {
      display: block; 
      position: fixed; 
      top: 20px;
      right: 20px;
      z-index: 1000;
      width: fit-content;
      max-width: 300px;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-20px);
      transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
    }

    :host([isvisible]) {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .alert-container {
      padding: 15px 20px;
      border-radius: 10px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .alert-container.error {
      background-color: #f44336;
      color: white;
    }

    .alert-container.success {
      background-color: #4caf50;
      color: white;
    }

    .alert-content {
      flex-grow: 1;
    }

    .alert-title {
      font-weight: bold;
      margin-bottom: 5px;
      font-size: 1.2em;
    }

    .alert-message {
      font-size: 0.9em;
    }

    .close-button {
      background: none;
      border: none;
      color: inherit;
      font-size: 1.2em;
      cursor: pointer;
      padding: 0 5px;
      line-height: 1;
    }

    .close-button:hover {
      opacity: 0.8;
    }
  `;

  render() {
    const title = this.type === "error" ? "Error !!!" : "Success...";
    const containerClass = `alert-container ${this.type}`;

    return html`
      <div class=${containerClass}>
        <div class="alert-content">
          <div class="alert-title">${title}</div>
          <div class="alert-message">${this.message}</div>
        </div>
        <button @click=${this._closeAlert} class="close-button">x</button>
      </div>
    `;
  }

  _closeAlert() {
    this.isVisible = false;
    this.dispatchEvent(new CustomEvent("alert-closed"));
  }

  showAlert(type, message) {
    this.type = type;
    this.message = message;
    this.isVisible = true;

    setTimeout(() => {
      this.isVisible = false;
    }, 3000);
  }
}

customElements.define("espe-alerts", EspeAlerts);