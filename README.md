# Odin Memory Card

Welcome to my new project! I've been using the `readme.md` files less and less on my projects, so I'm starting with this one writing on it.

On this project, which is another practice from The Odin Project, I'm making a very simple memory game. The goal is to apply everything I've  learned so far about `React`, react hooks (`useState` and `useEffect`) and fetching information from an API of my choice to make sure I can handle `async` components.

## about the game:
This is a memory card game: the page will show a certain number of card with different images and the player must choose each image just once, but at each choice the cards will be shuffled.

## Odin requisites:
This is what Odin wants for this project:

- Take some time to think about the features you want to implement:
  - which components you need
  - how to structure your application
  - and how to get the images from an API
- Your application should include:
  - a scoreboard, which counts the current score
  - a “Best Score”, which shows the highest score you’ve achieved thus far.
- There should be a function that displays the cards in a random order anytime a user clicks one. Be sure to invoke that function when the component mounts.
- You also need:
  - a handful of cards that display images and possibly informational text
  - these cards and texts need to be fetched from an external API

## planning:
I like to write what I need for each of my projects as a list, then decompose each item into smaller requisites, the typical problem solving. I still don't know what theme I want for the cards.

First I should look for an API to be able to access to a database that includes image URLs that allow hotlinks. I prefer not to use API keys, I don't know how to hide them yet, but that's not a big problem for such a simple project.

### the game:
- the player starts the game by choosing how many cards they want to see on the board:
  - a few buttons will appear in the center of the page with predefined numbers
- a new game starts by placing the cards
- when the player chooses a card:
  - if the card has not been chosen and there's still unchosen cards:
    - a point is added
    - the cards will shuffle
    - the game will check if it was the last one to be chosen
  - if the card has been chosen or was the last one to be chosen:
    - the game ends
    - a message appears on screen announcing it:
      - show the results:
        - \<picked>/\<unpicked> cards
        - high score
      - include a restart button that:
        - removes the cards from the play area
        - show the first screen again to choose how many cards are in the next match

### the page:
- header:
  - project title
  - current score
  - high score
  - light/dark theme button
- play area with cards:
  - cards are placed in a random order
  - each card contains:
    - an image
    - a name or description
- accesibility:
  - use `prefers-reduced-motion` for the cards
  - `alt` for each card
  - allow playing with WASD/arrow keys and Enter/spacebar if possible

### the code:
components:
- an app component to wrap the entire page and store data with `useState` for:
  - current score for header component as integer
  - high score for header component as integer
  - light/dark theme preferences as boolean for all child components
- a header component:
  - title
  - current score with `useState` for its value
  - high score with `useState` for its value
  - a light/dark theme button with `useState` value and setter
- a main component:
  - stores:
    - game logic and rules
    - API response stored as an array of objects:
      - quantity defined by how many cards the user wants
    - `gameOver` `useState` as boolean
    - an empty array for picked cards with `useState`
  - on start when `gameOver` is `true`:
    - ask the user how many cards
    - list as buttons predefined quantities
  - when user starts game:
    - set `gameOver` as `false`
    - a new fetch from the API will be run, picking random items
    - from fetched values from the API, replace content with a list of cards:
      - each card will have different IDs
      - the image `src` will come from the API response
      - the card title or description will come from the API response
      - `onClick`:
        - check if card ID is on the list
        - if it is on the list:
          - set `gameOver` as `true`
        - if it's not on the list:
          - add the card ID to the list
          - shuffle cards on screen
          - if `list.length` is now equal to the quantity of cards:
            - set `gameOver` as `true`

I'm pretty sure I'm missing a lot of details here, but this should be enough to start. I'll try to update this `readme.md` with my progress and some thoughts once I have something to show.
