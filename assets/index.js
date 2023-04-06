//Start by initializing the api endpoints to use from newsapi.org
const apiKey = "1240cc9927f9486b85a82c75db3aa6df-N8V08"
const topHeadlines = "https://newsapi.org/v2/top-headlines?country=us&apiKey="
const businessHeadlines="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey="
const generalHeadlines="https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey="
const scienceHeadlines="https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey="
const sportsHeadlines="https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey="
const techHeadlines="https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey="
const healthHeadlines="https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey="
const entHeadlines="https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey="


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

});

lifestyleNav.addEventListener("click", function() {

});

sportNav.addEventListener("click", function() {

});

technologyNav.addEventListener("click", function() {

});

entertainmentNav.addEventListener("click", function() {

});

searchBtn.addEventListener("click", function() {

});

