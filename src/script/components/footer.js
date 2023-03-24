class Footer extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
            #footer {
                padding-top: 100px;
                padding-bottom: 30px;
            }

            .copyright {
                padding-top: 30px;
                text-align: center;
                color: #000000;
            }
        </style>

            <footer id="footer">
                <div class="copyright">
                    <p>© 2023 Movie Room. All Rights Reserved.</p>
                </div>
            </footer>
        `;
  }
}

customElements.define("footer-bar", Footer);
