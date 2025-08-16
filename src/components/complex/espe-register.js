//Component branch register-login

import { LitElement, css, html } from "lit";
import { User } from "../../models/user.js";
import '../atomic/buttons/log-button.js';
import '../atomic/inputs/form-input.js';

export class EspeRegister extends LitElement {

  static properties = {

  }

  constructor() {
    super();
  }

  firstUpdated() {
    const dialog = this.shadowRoot.querySelector('dialog');
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }

  _openLogin(e) {
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent('open-login', {
      bubbles: true,
      composed: true,
      detail: { source: 'register' }
    }));
  }

  closeDialog() {
    this.dispatchEvent(new CustomEvent('close-register', {  // Nombre cambiado
      bubbles: true,
      composed: true
    })); // Primero despacha el evento
    setTimeout(() => {
      const dialog = this.shadowRoot.querySelector('dialog');
      if (dialog.open) dialog.close();
    }, 10); // Pequeño delay para permitir el manejo del evento
  }

  handleRegister(e) {
    e.preventDefault();
    // Obtén los componentes form-input
    const nameInput = this.shadowRoot.getElementById('name');
    const emailInput = this.shadowRoot.getElementById('email');
    const passwordInput = this.shadowRoot.getElementById('password');
    const repPasswordInput = this.shadowRoot.getElementById('rep-password');

    // Accede al input interno de cada uno
    const name = nameInput?.shadowRoot.querySelector('input')?.value || '';
    const email = emailInput?.shadowRoot.querySelector('input')?.value || '';
    const password = passwordInput?.shadowRoot.querySelector('input')?.value || '';
    const repPassword = repPasswordInput?.shadowRoot.querySelector('input')?.value || '';

    // Validaciones
    if (!name || !email || !password || !repPassword) {
      alert('Por favor completa todos los campos');
      return;
    }
    
    if (password !== repPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Crear nuevo usuario
    const user = new User(name, email, password);
    
    // Despachar evento con los datos del usuario
    this.dispatchEvent(new CustomEvent('register-success', {
      bubbles: true,
      composed: true,
      detail: { user }
    }));

    this.closeDialog();
  }

  static styles = css`
  :host {
    display: block;
  }
  dialog {
    position: relative;
    border: none;
    background-color: white;
    max-width: 400px;
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  dialog[open] {
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .title h2 {
    margin: 0;
  }

  .title {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px 50px;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }

  .change-form p{
    margin: 0;
    padding: 0;
    text-align: center;
  }

  .change-form span {
    font-weight: bold;
    cursor: pointer;
  }

  .close-icon {
    position: absolute;
    display: flex;
    align-items: center;
    right: 10px;
    cursor: pointer;
  }
  `;

  render() {
    return html`
      <dialog>
        <form method="dialog">
          <div class="title">
            <h2>REGISTRATE</h2>  
            <div class="close-icon" @click=${this.closeDialog}>
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"></path>
              </svg>
            </div>
          </div>
          <div class="inputs">
            <form-input _type="text" type="success" id="name" name="name" placeholder="Nombre" isRequired=true></form-input>
            <form-input _type="email" type="error" id="email" name="email" placeholder="Correo" isRequired=true></form-input>
            <form-input _type="password" id="password" name="password" placeholder="Contraseña" isRequired=true"></form-input>
            <form-input _type="password" id="rep-password" name="rep-password" placeholder="Repetir contraseña" isRequired=true"></form-input>
            <div class="change-form">
              <p>Ya tienes una cuenta? <span @click=${this._openLogin}>Inicia Sesión</span></p>
            </div>
          </div>
          <div class="buttons">
            <log-button @click=${this.handleRegister}>Registrarse</log-button>
            <log-button @click=${this.closeDialog}>Cancelar</log-button>
          </div>
        </form>
      </dialog>
    `;
  }
}

customElements.define("espe-register", EspeRegister);