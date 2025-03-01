export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};