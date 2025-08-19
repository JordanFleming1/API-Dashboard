# Multi-API Art-Themed Dashboard

This project is a visually appealing, art-themed dashboard that lets you explore and interact with a variety of public APIs. Each API has its own dedicated page, unified navigation, and modern design.

## Features
- **Dog API**: Get random dog images.
- **Cat API**: Get random cat images.
- **Weather API**: View current weather for London (Open-Meteo).
- **Currency API**: See USD exchange rates for PHP, EUR, GBP, JPY, AUD, and CAD.
- **Movies API**: View trending movies (TMDB, requires API key).
- **User API**: Get random user profiles.
- **Joke API**: Get a random joke.
- **Art Explorer**: Discover random artworks from the Art Institute of Chicago.

## Getting Started

### 1. Clone the Repository
```
git clone https://github.com/yourusername/your-repo-name.git
```

### 2. Open the Project
Open the folder in VS Code or your preferred editor.

### 3. Install/Configure
No installation required. All dependencies are public APIs. For the Movies API, set your TMDB API key in `script.js`:
```js
const apiKey = 'YOUR_TMDB_API_KEY';
```

### 4. Run Locally
Just open `index.html` in your browser. All pages work locally.

## Project Structure
```
index.html                # Home page
styles.css                # All styles
script.js                 # All JavaScript logic
apis/                     # Folder for each API page
  dog.html
  cat.html
  weather.html
  currency.html
  movies.html
  user.html
  joke.html
  public.html
```

## Accessibility & Best Practices
- Semantic HTML and ARIA attributes
- All scripts in `script.js`, all styles in `styles.css`
- Responsive, modern UI

## Credits
- Dog API: https://dog.ceo/
- Cat API: https://thecatapi.com/
- Weather API: https://open-meteo.com/
- Currency API: https://www.frankfurter.app/
- Movies API: https://www.themoviedb.org/
- User API: https://randomuser.me/
- Joke API: https://official-joke-api.appspot.com/
- Art API: https://api.artic.edu/

## License
MIT

---

**Enjoy exploring APIs with art-inspired style!**
