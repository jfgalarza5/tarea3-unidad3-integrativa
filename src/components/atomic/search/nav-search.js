//Component branch espe-layout

import { LitElement, css, html } from "lit";

export class NavSearch extends LitElement {
  static properties = {}

  static styles = css`
    .nav-search{
      position: relative;
      display: flex;
      align-items: center;
      gap: 10px;
      background-color: #004D00;
      border-radius: 10px;
      padding: 10px 10px
    }

    .nav-search input {
      background-color: #004D00;
      color: #FFFFCC;
      font-size: 16px;
      border: 0;
    }

    .nav-search input::placeholder {
      color: #FFFFCC;
      font-size: 16px;
      opacity: 1;
    }

    .nav-search input:focus {
      outline: none;
      box-shadow: none;
      border: none;
    }

    .nav-search i {
      display: flex;
      align-self: center;
      color: white;
    }
  `;

  render() {
    return html`
      <div class="nav-search">
        <input type="text" placeholder="Buscar...">
        <i>
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C11.381 15 12.6296 14.4415 13.5355 13.5355C14.4415 12.6296 15 11.381 15 10C15 7.23858 12.7614 5 10 5ZM3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.5719 16.481 13.0239 15.6063 14.1921L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L14.1921 15.6063C13.0239 16.481 11.5719 17 10 17C6.13401 17 3 13.866 3 10Z" fill="#FFFFCC"></path>
            </g>
          </svg>
        </i>
      </div>
    `;
  }
}

customElements.define("nav-search", NavSearch);