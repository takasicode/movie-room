import "../components/search.js";
import $ from "jquery";

const main = () => {
  const APIKey = "api_key=a064b3b555457d5fd1dc005b54ba530c";
  const BaseURL = "https://api.themoviedb.org/3";
  const API_URL = BaseURL + "/movie/upcoming?" + APIKey;
  const ImageURl = "https://image.tmdb.org/t/p/original/";
  const searchURL = BaseURL + "/search/movie?" + APIKey;

  const navbarShadowRoot = document.getElementsByTagName("search-bar");
  const formElement =
    navbarShadowRoot[0].shadowRoot.getElementById("searchForm");
  const searchElement = navbarShadowRoot[0].shadowRoot.getElementById("search");

  let newUrl = "";

  const getMovies = url => {
    newUrl = url;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        showMovies(data.results);
        if (data.results.length !== 0) {
          showMovies(data.results);
        } else {
          $("#movies").html(
            `<h1 class="no-movie">Sorry, Movies not found!</h1>`
          );
          $("#pageSection").css("display", "none");
        }
      });
  };

  const showMovies = data => {
    $("#movies").html(``);
    data.forEach(movie => {
      const { title, poster_path, release_date, popularity } = movie;
      $("#movies").append(`
            <div class="card-movie">
                <img src="${ImageURl + poster_path}" alt="${title}">
                <div class="info-movie">
                    <p class="title-movie">${title}</p>
                    <p class="release-movie">${release_date}</p>
                    <p class="popularity-movie">${popularity}</p>
                </div>
            </div>
            `);
    });
  };
  getMovies(API_URL);

  formElement.addEventListener("submit", e => {
    e.preventDefault();
    const searchTerm = searchElement.value;
    if (searchTerm) {
      getMovies(`${searchURL}&query=${searchTerm}`);
    } else {
      getMovies(API_URL);
    }
  });
};

export default main;
