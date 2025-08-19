// Dog API
function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
      document.getElementById('dog-output').innerHTML = `<img src="${data.message}" alt="Dog" style="max-width:100%">`;
    });
}

// Cat API
function getCatImage() {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(data => {
      document.getElementById('cat-output').innerHTML = `<img src="${data[0].url}" alt="Cat" style="max-width:100%">`;
    });
}

// Weather API (Open-Meteo, no key required)
function getWeather() {
  fetch('https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true')
    .then(res => res.json())
    .then(data => {
      const weather = data.current_weather;
      document.getElementById('weather-output').innerHTML = `Temp: ${weather.temperature}°C, Windspeed: ${weather.windspeed} km/h`;
    });
}

// Exchange Rate API (USD to PHP) using Frankfurter API
function getExchangeRates() {
  const currencies = ['PHP', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD'];
  fetch(`https://api.frankfurter.app/latest?from=USD&to=${currencies.join(',')}`)
    .then(res => res.json())
    .then(data => {
      if (data && data.rates) {
        let table = '<table class="currency-table"><thead><tr><th>Currency</th><th>Rate</th></tr></thead><tbody>';
        currencies.forEach(cur => {
          table += `<tr><td>${cur}</td><td>${data.rates[cur] ? data.rates[cur] : 'N/A'}</td></tr>`;
        });
        table += '</tbody></table>';
        document.getElementById('currency-output').innerHTML = table;
      } else {
        document.getElementById('currency-output').innerHTML = 'Exchange rates unavailable.';
      }
    })
    .catch(err => {
      document.getElementById('currency-output').innerHTML = 'Error fetching exchange rates.';
    });
}

// Movies API 
function getMovies() {
  const apiKey = 'c038186d9e9e871a62b5d3796c56c844'; // <-- User's TMDB API key
  if (apiKey === 'REPLACE_WITH_YOUR_TMDB_API_KEY') {
    document.getElementById('movies-output').innerHTML = 'Please set your TMDB API key in script.js.';
    return;
  }
  fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      if (data.results) {
        document.getElementById('movies-output').innerHTML = data.results.slice(0,5).map(m => `<div>${m.title}</div>`).join('');
      } else {
        document.getElementById('movies-output').innerHTML = 'No trending movies found.';
      }
    });
}

// User API (Random User)
function getGitHubUser() {
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
      const user = data.results[0];
      document.getElementById('github-output').innerHTML = `<img src="${user.picture.medium}" alt="User"><br>${user.name.first} ${user.name.last}`;
    });
}

// Joke API
function getJoke() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => res.json())
    .then(data => {
      document.getElementById('joke-output').innerHTML = `${data.setup}<br><b>${data.punchline}</b>`;
    });
}

// Public APIs (Show one random from publicapis.org)
function getPublicApiInfo() {
  // Art Institute of Chicago API for random artwork
  fetch('https://api.artic.edu/api/v1/artworks?page=' + Math.floor(Math.random()*100+1) + '&limit=1')
    .then(res => res.json())
    .then(data => {
      if (data.data && data.data.length > 0) {
        const art = data.data[0];
        const imgUrl = art.image_id ? `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg` : '';
        document.getElementById('publicapi-output').innerHTML = `
          <div>
            <img src="${imgUrl}" alt="${art.title}" class="art-img" />
            <h2 class="art-title">${art.title}</h2>
            <div class="art-artist">${art.artist_title ? art.artist_title : 'Unknown Artist'}</div>
            <a class="art-link" href="https://www.artic.edu/artworks/${art.id}" target="_blank">View on Art Institute of Chicago</a>
          </div>
        `;
      } else {
        document.getElementById('publicapi-output').innerHTML = 'No artwork found.';
      }
    })
    .catch(() => {
      document.getElementById('publicapi-output').innerHTML = 'Error fetching artwork.';
    });
}

// Attach event listeners for all API buttons
window.addEventListener('DOMContentLoaded', function() {
  const dogBtn = document.getElementById('get-dog-btn');
  if (dogBtn) dogBtn.addEventListener('click', getDogImage);

  const catBtn = document.getElementById('get-cat-btn');
  if (catBtn) catBtn.addEventListener('click', getCatImage);

  const weatherBtn = document.getElementById('get-weather-btn');
  if (weatherBtn) weatherBtn.addEventListener('click', getWeather);

  const ratesBtn = document.getElementById('get-rates-btn');
  if (ratesBtn) ratesBtn.addEventListener('click', getExchangeRates);

  const moviesBtn = document.getElementById('get-movies-btn');
  if (moviesBtn) moviesBtn.addEventListener('click', getMovies);

  const userBtn = document.getElementById('get-user-btn');
  if (userBtn) userBtn.addEventListener('click', getGitHubUser);

  const jokeBtn = document.getElementById('get-joke-btn');
  if (jokeBtn) jokeBtn.addEventListener('click', getJoke);

  const artBtn = document.getElementById('get-art-btn');
  if (artBtn) artBtn.addEventListener('click', getPublicApiInfo);
});
