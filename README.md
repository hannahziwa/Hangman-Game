# Hangman Game

## Project Description

The hangman game I created is a simple game using the languages Javascript, HTML and CSS. The game requires the player to select letters using the buttons to guess the word hidden with underscores. For Each wrong letter guess, parts of the hangman drawing begins to appear. The full diagram makes an appearance when the player has run out of lives and lost the game.

## Key Features

The game consists of the following feautures:
* Buttons to selects letters. Once the game is won or lost, the buttons have been designed to prevent futher clicks
* The hangman drawing upon each wrong guess.
* A 'Play Again' button which resets the game when clicked.
* A 'Hint' button which when clicked, displays the word's definition when the player is stuck.  
* Underscores which are replaced when the correct letter is clicked.
* The number of moves taken to win the game is displayed next to the 'Moves' text.
* The number of lives the player has is also displayed and reduced upon each wrong guess. 
* The player's success or failure is also displayed.
Note: If the game page is zoomed in, zoom out at 80%.

## Launching the Application

The application can be launched using 
```
npm install hangman
```
Then, 
```
npm start
```
which is reachable through http on port 8080.

## Design Details 

Using my knowledge from lectures and personal research, I was able to create functions on JavaScript to perform tasks such as getting the list of words to be selected at random. Other functions were linked with the DOM to create HTML elements, add to them and so on. This makes it possible to interact with the web page of the game. Event listeners were also implemented in the creation of letter buttons specifically, to enable them to react when clicked. The CSS code was used in the design of the web page such as the fonts used, colors of the text boxes, buttons and body, it was also used to change the positions of the page contents and make them look organised. Using CSS I was able to make the parts of the hangman drawing disapper before guessing and appear whenever there's a wrong guess.

## Project Status

So far, I was able to cover the key features of the game, but later on I would want to include extra features such as a multiplayer mode, word categories, game levels and the game's ability to store game histories.


