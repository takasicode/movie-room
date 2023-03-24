class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
            .description {
              text-align: center;
              justify-content: center;
              padding-top: 100px;
              margin-bottom: -100px;
            }

            .search-bar {
              display: flex;
              width: 80%;
              max-width: 380px;
              align-items: center;
              padding: 16px;
              margin: 0 auto;
              border-radius: 5px;
              background-color: #ffffff;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }

            .search-bar input {
              flex: 1;
              border: 0;
              outline: none;
              font-size: 14px;
              color: #000000;
              background-color: transparent;
            }

            .search-bar input {
              width: 100%;
              font-size: 18px;
              font-weight: bold;
              border: 0;
              padding: 16px;
              border-bottom: 1px solid #000000;
            }

            .search-bar input:focus {
              outline: 0;
              border-bottom: 2px solid #E00712;
            }
            
            .search-bar input::placeholder {
              font-size: 18px;
              font-weight: normal;
              color: #000000;
            }

            .search-bar input:focus::placeholder {
              font-weight: bold;
            }
            
            .search-bar button {
              width: 25%;
              font-size: 18px;
              border: 0;
              padding: 14px;
              color: white;
              cursor: pointer;
              margin-left: 20px;
              background-color: #E00712;
            }

            @media screen and (max-width: 600px){
              .description {
                text-align: center;
                justify-content: center;
                margin-bottom: -100px;
              }
              
              .search-bar {
                flex-direction: column;
              }

              .search-bar input {
                width: 100%;
                margin-bottom: 10px;
              }

              .search-bar button {
                width: 100%;
                font-size: 18px;
                border: 0;
                padding: 14px;
                color: white;
                cursor: pointer;
                margin-left: 0;
                background-color: #E00712;
              }
            }
        </style>
        
        <div class="description">
          <form class="search-bar" id="searchForm">
            <input type="text" placeholder="Search.." id="search" name="search">
            <button id="searchButtonElement" type="submit">Search</button>
          </form>
        </div>
        `;
    this.shadowDOM
      .querySelector("#search")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
