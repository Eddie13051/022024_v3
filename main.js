let news = [];

const getLatestNews = async () => {
  const url = new URL(
    `https://astonishing-sprite-c6e487.netlify.app//top-headlines`
  );
  const response = await fetch(url);
  const data = await response.json();
  news = data.articles;
  console.log("dddd", news);
};

getLatestNews();
