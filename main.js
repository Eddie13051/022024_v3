let newsList = [];

const getLatestNews = async () => {
  const url = new URL(
    `https://astonishing-sprite-c6e487.netlify.app/top-headlines`
  );
  const response = await fetch(url);
  const data = await response.json();
  newsList = data.articles;
  render();
  console.log("dddd", newsList);
};

const render = () => {
  const newsHTML = newsList
    .map(
      (news) => `<div class="row news">
  <div class="col-lg-4">
    <img class="image" src=${news.urlToImage} alt="ddd" />
  </div>
  <div class="col-lg-8">
    <h2>${news.title}</h2>
    <p>${news.description}</p>
    <div>${news.source.name}*${news.source.publishedAt}</div>
  </div>
</div>`
    )
    .join("");

  document.getElementById("news-board").innerHTML = newsHTML;
};

getLatestNews();
