# White-lotus-dealership
This is a news web application built with JavaScript and the News API that allows users to fetch news articles from various categories such as general news, business, science, sports, technology, health, and entertainment.

# Installation
Clone the repository to your local machine or download the files as a zip. You will need a text editor or an integrated development environment (IDE) to run the code.
git clone https://github.com/your_username/news-web-app.git

# Usage
The web application is simple to use. Once you have the files on your local machine, open the index.html file in your browser. You can then do the following:

View headlines by default. This displays the latest news articles.

Click on any of the navbar buttons to view news articles from that category.

Search for news articles using the search bar.

# Setup
To use this app, you will need an API key from newsapi.org. Once you have obtained the API key, replace the value of apiKey in the JavaScript code with your own API key.

# Code Explanation
This code is a JavaScript program that fetches news data from newsapi.org, displays the data on a webpage, and allows users to interact with the site to retrieve news data on specific topics or search for news data using keywords.

The code initializes API endpoints for different categories of news such as business, general, science, sports, technology, health, and entertainment. Then it defines variables for navbar elements and event listeners to trigger API calls to fetch data when a user clicks on them. It also defines an async function that fetches news data and stores the objects into an array. The data objects in the array are then passed to another function that handles displaying the news data on the webpage.

The code also includes a search functionality that lets users search for news data using keywords. When the user submits a search query, an API call is made using the search query and the resulting data objects are passed to a display function to show the search results.

To use this program, a developer would need to have an API key from newsapi.org and replace the placeholder key in the code with the actual key. The code could also be modified to include more categories of news or to customize the layout and styling of the webpage.



# News API documentation
Bootstrap documentation
License
This project is licensed under the MIT License. See the LICENSE file for more information.