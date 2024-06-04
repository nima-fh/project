const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a0814a81d9e0ea8e164320078c18b3cb&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=a0814a81d9e0ea8e164320078c18b3cb&query="';

const main = document.querySelector("#main");
const form = document.querySelector("form");
const search = document.querySelector("#search");
const value = document.querySelectorAll("#value");

async function getmovie(url) {
  const result = await fetch(url);
  const data = await result.json();
  console.log(data);
  showmovies(data.results);
}
getmovie(API_URL);

function showmovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEL = document.createElement("div");
    movieEL.innerHTML = `      <div
        id="card"
        class="w-80  m-5 bg-blue-950 shadow-2xl shadow-purple-950 relative overflow-hidden rounded-2xl"
      >
        <img
          src="${IMG_PATH + poster_path}"
          alt="${title}"
          class="w-full"
        />
        <div
          id="info"
          class="text-white flex justify-between items-center p-4 tracking-wider"
        >
          <h3 class="text-2xl">${title}</h3>
          <span class="${getclassbyrate(
            vote_average
          )} p-2 font-bold">${vote_average}</span>
        </div>
        <div
          id="overview"
          class="bg-white p-4 absolute bottom-0 right-0 left-0 translate-y-full overflow-y-auto transition duration-500 ease-in h-full"
        >
          <h3>
           ${overview}
          </h3>
        </div>
      </div>
`;
    main.appendChild(movieEL);
  });
}

function getclassbyrate(rate) {
  if (rate >= 8) {
    return "green";
  } else if (rate < 8 && rate >= 5) {
    return "yellow";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchterm = search.value;
  if (searchterm && searchterm !== "") {
    getmovie(SEARCH_API + searchterm);
    search.value = "";
  } else {
    location.reload();
  }
});
