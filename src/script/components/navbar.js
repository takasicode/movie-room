class Navbar extends HTMLElement {
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
            * {
                margin: 0;
                padding: 0;
                border: 0;
                outline: 0;
                text-decoration: none;
                list-style: none;
                box-sizing: border-box;
            }
            
            html{
                scroll-behavior: smooth;
            }
            
            body{
                font-family:'Poppins', sans-serif;
                background-color:#100F17 ;
                color: #fff;
                line-height: 1.7;
                overflow-x: hidden;
            }
            
            a {
                font-size: 1rem;
                color: #fff;
            }

            .logo {
                font-size: 1.5rem;
                font-weight: 700;
                color: #E00712;
            }
            
            .container{
                width: 80%;
                margin: 0 auto;
            }
            
            nav {
                background-color:#000000 ;
                box-shadow: 0 0rem 1rem rgba(0, 0, 0, 0.1);
                width: 100vw;
                height: 4rem;
                position: fixed;
                top: 0;
            }

            .navbar-container{
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .navbar-menu{
                display: flex;
                gap: 2rem;
                align-items: center;
                margin-right: 3rem;
            }

            @media screen and (max-width: 600px){
                .container{
                    width: 90%;
                }

                .logo {
                    font-size: 1rem;
                }

                .nav {
                    background-color:#000000 ;
                    box-shadow: 0 0rem 1rem rgba(0, 0, 0, 0.1);
                    width: 100vw;
                    height: 4rem;
                    position: fixed;
                    top: 0;
                }

                .navbar-container{
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .navbar-menu{
                    display: flex;
                    gap: 0.8rem;
                    align-items: center;
                    margin-right: 0;
                }

                .navbar-link {
                    font-size: 0.8rem;
                }
            }
        </style>

        <nav id="navbar">
            <div class="container navbar-container">
                <a href="index.html" class="logo">Movie Room</a>
                <ul class="navbar-menu">
                    <li><a class="navbar-link navbar-active" href="#">Home</a></li>
                    <li><a class="navbar-link" href="#upcoming-movies">Upcoming Movies</a></li>
                </ul>
            </div>
        </nav>        
        `;
  }
}

customElements.define("nav-bar", Navbar);
