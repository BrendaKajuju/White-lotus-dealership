//Start by initializing the api endpoints to use from newsapi.org
const apiKey = "1240cc9927f9486b85a82c75db3aa6df"

const topHeadlines = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

const businessHeadlines=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
const generalHeadlines=`https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${apiKey}`
const scienceHeadlines=`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${apiKey}`
const sportsHeadlines=`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${apiKey}`
const techHeadlines=`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`
const healthHeadlines=`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${apiKey}`
const entHeadlines=`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${apiKey}`
const searchEverything =`https://newsapi.org/v2/everything?q=`

window.onload = function(){
    newsType.innerHTML="<h3> Headlines </h4>"
    fetchHeadlines();
};

//Create an array to store all the news objects that will be fetched
var newsArr = [];

// Define the major variables that are displayed on the navbar and api
const generalNav = document.getElementById("general");
const scienceNav= document.getElementById("science");
const sportNav = document.getElementById("sports");
const technologyNav = document.getElementById("technology");
const healthNav = document.getElementById("health");
const businessNav = document.getElementById("business");
const entertainmentNav = document.getElementById("entertainment");
const searchBtn = document.getElementById("searchBtn");
const searchNews = document.getElementById("searchNews");
const newsDetails = document.getElementById("newsDetails")

//add an event listener to the Navbar elements
//user clicks on the buttons to call the functions below
generalNav.addEventListener("click", function() {
    newsType.innerHTML="<h3> General News </h4>"
    fetchGeneralNav();
});

scienceNav.addEventListener("click", function() {
    newsType.innerHTML="<h3> Science News </h4>"
    fetchScienceNav();
});

sportNav.addEventListener("click", function() {
    newsType.innerHTML="<h3> Sports News </h4>"
    fetchSportsNav();
});

technologyNav.addEventListener("click", function() {
    newsType.innerHTML="<h3> Tech News </h4>"
    fetchTechnologyNav();
});

entertainmentNav.addEventListener("click", function() {
    newsType.innerHTML="<h3> Entertainment News </h4>"
    fetchEntNav();
});

businessNav.addEventListener("click", function() {
    newsType.innerHTML="<h3> Business News </h4>"
    fetchBusinessNav();
});

healthNav.addEventListener("click", function() {
    newsType.innerHTML="<h3> Health News </h4>"
    fetchHealthNav();
});

searchBtn.addEventListener("click", function() {
    newsType.innerHTML="<h3>Search : "+searchNews.value+"</h3>"
    fetchSearchNews();
});

//Async-function used to fetch data for the headlines
const fetchHeadlines = async () => {
    const response = await fetch(topHeadlines);
    newsArr = [];
    // Check if response status is ok
    if (response.status >= 200 && response.status < 300){
    const newsObj = await response.json ()
    newsArr = newsObj.articles;
    } else {
        //Handle errors
        console.log(response.status, response.statusText);
    }
    //Pass the resulting objects into a function that will handle the display
    displayNews ();
}

const fetchGeneralNav = async () => {
    const response = await fetch(generalHeadlines);
    newsArr = [];
    // Check if response status is ok
    if (response.status >= 200 && response.status < 300){
    const newsObj = await response.json ()
    newsArr = newsObj.articles;
    } else {
        //Handle errors
        console.log(response.status, response.statusText);
    }
    //Pass the resulting objects into a function that will handle the display
    displayNews ();
}
const fetchBusinessNav = async () => {
    const response = await fetch(businessHeadlines);
    newsArr = [];
    // Check if response status is ok
    if (response.status >= 200 && response.status < 300){
        const newsObj = await response.json ()
        newsArr = newsObj.articles;
        } else {
        console.log(response.status, response.statusText);
    }
    //Pass the resulting objects into a function that will handle the display
    displayNews ();
}
const fetchHealthNav = async () => {
    const response = await fetch(healthHeadlines);
    newsArr = [];
    // Check if response status is ok
    if (response.status >= 200 && response.status < 300){
        const newsObj = await response.json ()
        newsArr = newsObj.articles;
        } else {
        console.log(response.status, response.statusText);
    }
    //Pass the resulting objects into a function that will handle the display
    displayNews ();
}
const fetchEntNav = async () => {
    const response = await fetch(entHeadlines);
    newsArr = [];
    // Check if response status is ok
    if (response.status >= 200 && response.status < 300){
        const newsObj = await response.json ()
        newsArr = newsObj.articles;
        } else {
        console.log(response.status, response.statusText);
    }
    //Pass the resulting objects into a function that will handle the display
    displayNews ();
}
const fetchScienceNav = async () => {
    const response = await fetch(scienceHeadlines);
    newsArr = [];
    // Check if response status is ok
    if (response.status >= 200 && response.status < 300){
        const newsObj = await response.json ()
        newsArr = newsObj.articles;    } else {
        console.log(response.status, response.statusText);
    }
    //Pass the resulting objects into a function that will handle the display
    displayNews ();
}
const fetchSportsNav = async () => {
    const response = await fetch(sportsHeadlines);
    newsArr = [];
    // Check if response status is ok
    if (response.status >= 200 && response.status < 300){
        const newsObj = await response.json ()
        newsArr = newsObj.articles;
        } else {
        console.log(response.status, response.statusText);
    }
    //Pass the resulting objects into a function that will handle the display
    displayNews ();
}
const fetchTechnologyNav = async () => {
    const response = await fetch(techHeadlines);
    newsArr = [];
    // Check if response status is ok
    if (response.status >= 200 && response.status < 300){
        const newsObj = await response.json ()
        newsArr = newsObj.articles;    } else {
        console.log(response.status, response.statusText);
    }
    //Pass the resulting objects into a function that will handle the display
    displayNews ();
}

//Async function to fetch data from search news function
const fetchSearchNews = async() => {
    //Handle the search news
    if (searchNews.value == null)
    return;

    const response = await fetch (searchEverything + encodeURIComponent(searchNews.value) + `&apiKey=` + apiKey);
    newsArr = [];
    if (response.status >= 200 && response.status < 300){
        const newsObj = await response.json ()
        newsArr = newsObj.articles;
            } else {
            //Handle errors
        }
}

//Main Function that adds News to our html Page

function displayNews() {
    newsDetails.innerHTML = "";

    if (newsArr.length == 0) {
        newsDetails.innerHTML = `<h5> No News Found. </h5>`
        return;
    }
    newsArr.forEach(article => {
        // Work with objects in the api to create displayed elements
        var date = article.publishedAt.split("T")
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-3 card";

        var card = document.createElement('div');
        card.className ="p-2";

        var image = document.createElement('img');
        image.setAttribute("height", "matchparnt");
        image.setAttribute("width", "100%")
        image.src = article.urlToImage;

        var cardBody = document.createElement('div');

        var newsTitle = document.createElement('h4');
        newsTitle.className = "card-title"
        newsTitle.innerHTML= article.title

        var dateTitle = document.createElement('h5');
        dateTitle.className="text-success";
        dateTitle.innerHTML = date[0];

        var description = document.createElement('p');
        description.className = "text-muted";
        description.innerHTML = article.description;

        var link = document.createElement('a');
        link.className= "btn btn-dark";
        //Open the news in a blank tab
        link.setAttribute("target", "_blank");
        link.href = article.url
        link.innerHTML="Read more..."

        //Append all relevant text details to the cardbody
        cardBody.appendChild(newsTitle);
        cardBody.appendChild(dateTitle);
        cardBody.appendChild(description);
        cardBody.appendChild(link);

        //Append image and card body to fill in the card
        card.appendChild(image);
        card.appendChild(cardBody);

        //Append card to the column
        col.appendChild(card)

        newsDetails.appendChild(col);
    })
}