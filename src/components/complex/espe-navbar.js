//Component branch espe-layout
import { LitElement, css, html } from "lit";
import { User } from "../../models/user.js";
import './espe-loggin.js';
import './espe-register.js'
import '../atomic/search/nav-search.js'

export class EspeNavbar extends LitElement {
  static properties = {
    user: { type: Object },
    showLogin: { type: Boolean },
    showRegister: { type: Boolean },
    menuOpen: { type: Boolean }
  }

  constructor() {
    super();
    this.isLoggedIn = false;
    this.showLogin = false;
    this.showRegister = false;
    this.user = null;
    this.menuOpen = false;
  }
  
  _toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  _closeLogin() { this.showLogin = false; }
  _closeRegister() { this.showRegister = false; }
  _openRegister() { this.showLogin = false; this.showRegister = true; }
  _openLogin() { this.showRegister = false; this.showLogin = true; }
  _openRegisterFromEvent(e) { this._openRegister(); e.stopPropagation(); }
  _openLoginFromEvent(e) { this._openLogin(); e.stopPropagation(); }

  _handleLoginSuccess(e) {
    this.user = e.detail.user;
    this.isLoggedIn = true;
    this.showLogin = false;
  }

  _handleRegisterSuccess(e) {
    this.user = e.detail.user;
    this.isLoggedIn = true;
    this.showRegister = false;
  }

  validateUser() { return this.user !== null; }

  static styles = css`
    :host {
      background-color: #FFFFCC;
      display: block;
      width: 100%;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
    }

    .logo img {
      height: 50px;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .menu {
      display: flex;
      gap: 20px;
    }

    .menu a {
      text-decoration: none;
      color: black;
    }

    .search {
      display: flex;
      justify-content: center;
      flex: 1;
    }

    .profile-section {
      display: flex;
      align-items: center;
    }

    .hamburger {
      display: none;
      flex-direction: column;
      cursor: pointer;
      gap: 4px;
    }

    .hamburger span {
      width: 25px;
      height: 3px;
      background: black;
      border-radius: 2px;
    }

    /* 📱 Estilos para móviles */
    @media (max-width: 768px) {
      nav {
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        flex-direction: column;
        background: #FFFFCC;
        padding: 10px 0;
        display: none;
      }

      nav.open {
        display: flex;
        z-index: 100;
      }

      .menu {
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }

      .search {
        order: 3;
        width: 100%;
      }

      .profile-section {
        order: 4;
        justify-content: center;
        padding: 10px;
      }

      .hamburger {
        display: flex;
      }
    }
  `;

  render() {
    return html`
      <header>
        <div class="logo">
          <a href="/">
            <img src="https://www.espe.edu.ec/wp-content/uploads/2022/01/ESPEtransparente.png" alt="ESPE Logo">
          </a>
        </div>

        <!-- Botón hamburguesa (solo móvil) -->
        <div class="hamburger" @click=${this._toggleMenu}>
          <span></span><span></span><span></span>
        </div>

        <!-- Menú -->
        <nav class=${this.menuOpen ? "open" : ""}>
          <div class="menu">
            <a href="/">Inicio</a>
            <a href="#">Contactanos</a>
          </div>
          <div class="search"><nav-search></nav-search></div>
          <div class="profile-section">${
            this.validateUser()
              ? html`<span>${this.user.getName()}</span>`
              : html`<span @click=${this._openLogin}>Iniciar Sesion</span>`
          }</div>
        </nav>
      </header>

      ${this.showLogin ? html`
        <espe-loggin
          @close-login=${this._closeLogin}
          @open-register=${this._openRegisterFromEvent}
          @login-success=${this._handleLoginSuccess}>
        </espe-loggin>
      ` : null}

      ${this.showRegister ? html`
        <espe-register
          @close-register=${this._closeRegister}
          @open-login=${this._openLoginFromEvent}
          @register-success=${this._handleRegisterSuccess}>
        </espe-register>
      ` : null}
    `;
  }
}

customElements.define("espe-navbar", EspeNavbar);
