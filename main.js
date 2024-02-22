let newsList = [];
const menus = document.querySelectorAll(".menus button");
console.log("mmm", menus);
menus.forEach((menu) =>
  menu.addEventListener("click", (event) => getNewsByCategory(event))
);

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

const getNewsByCategory = async (event) => {
  const category = event.target.textContent.toLowerCase();
  console.log("category", category);
  const url = new URL(
    `http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines?category=${category}`
  );
  const response = await fetch(url);
  const data = await response.json();
  console.log("DDD", data);
  newsList = data.articles;
  render();
};

const getNewsByKeyword = async () => {
  const keyword = document.getElementById("search-input").value;
  console.log("keyword", keyword);
  const url = new URL(
    `http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines?q=${keyword}`
  );
  const response = await fetch(url);
  const data = await response.json();
  console.log("keyword-data", data);
  newsList = data.articles;
  render();
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

const openNav = () => {
  document.getElementById("mySidenav").style.width = "250px";
};

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
};
