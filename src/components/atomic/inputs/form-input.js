//Component branch register-login

import { LitElement, css, html } from "lit";

export class FormInput extends LitElement {
  
  static properties = {
    type: { type: String },
    _type: { type: String },
    placeholder: { type: String },
    id: { type: String },
    name: { type: String },
    isRequired: { type: Boolean }
  }

  constructor() {
    super();
    this.placeholder = "";
    this.type = "";
    this.id = "";
    this.name = "";
    this.isRequired = false;
  }


  static styles = css`
    
    .form-input{
      border: 1px solid #B3B3B3;
      border-radius: 10px;
      width: 100%;
    }
    
    .form-input input {
      box-sizing: border-box;
      border: 0;
      border-radius: 10px;
      width: 100%;
      font-size: 16px;
      padding: 10px;
    }

    .form-input input:focus {
      outline: none;
      box-shadow: none;
      border: none;
    }
    
    .error{
      border: 1px solid #E63329;
    }
    
    .error::placeholder{
      color: #E63329;
      opacity: 1;
    }
    
    .success{
      border: 1px solid #006935;
    }

    .success::placeholder{
      color: #006935;
      opacity: 1;
    }
  `;

  render() {
    console.log(this.isRequired);
    return html`
      <div class="form-input ${this.type}">
        <input type="${ !this._type ? "text" : this._type }" class="${this.type}" id="${this.id}" name="${this.name}" placeholder="${this.placeholder}">
      </div>
    `;
  }

}

customElements.define("form-input", FormInput);