# Odin Memory Card

## Live: https://odin-memory-card-woad.vercel.app/

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

## update 1
I tried to come up with a design for the page, but ended with something very basic, but enough to know where to start. Using OpenOffice's Draw, I made some mockups:

![](https://i.imgur.com/S3an1OD.png)
![](https://i.imgur.com/b91UGJi.png)
![](https://i.imgur.com/o616yGq.png)

## update 2
After placing the main components on the page, I started looking for some API I could use for this project, and found one that returns a list of videogame discounts with an image I could use. Maybe not the best API for this kind of project, but I can work with it.

Here's a mockup I made for the cards:

![](https://i.imgur.com/qfCKZcX.png)

But I decided to first make the game playable, so I'm using placeholders. This is what I have for now:

![](https://i.imgur.com/GEOHUHA.png)

It's nothing special and I don't like how slow my progress is, but I think its okay considering I just started learning `React`.

### what's next
Now I can start working on the game logic. I'm planning to keep all that on the component that holds the cards and the "new game"/"game over" menues. As I'll be working with placeholders, I don't need too much code here. Once it starts working as expected, I can start working with the API. I'm still not sure how I'll manage to make it work, but I'm pretty sure it's pure `useEffect()`, an intimidating but interesting `React` hook.

## update 3
I managed to make the game playable (kind of). To make it work I just used a bunch of `useState` to store the chosen cards in an array and stop the game if this array already have a previously chosen card (player loses) or the length of this list is the same as the quantity of cards the player wanted to play (player wins).

If player wins or loses, the parent's `gameOver` value is changed to `false`, so it will remove the cards from the page and replace it with what is going to be the menu.

This is not a big deal, but now I'm thinking with `Reach` logic, which is different from what I made until now with `JavaScript` vanilla, but still making sense and being faster to make.

### what's next
Now I should make the game menu where the player choses how many cards wants, and another for the game over. I think those two menues should be the same, just changing what it says (a welcome message, a "you win" and a "you lose").

Once I have it ready, I can start replacing the placeholders with the API response. This time I'm gonna need `useEffect`.

## update 4
Today I made the menu and added a few dynamic elements, like the numbers of correct cards chosen, high score, a "welcome"/"you win"/"you lose" title and a few buttons with different quantities of cards to play.

The code feels like a mess, I had to lift some `useState`s from cards and play area and pass them as properties to the children, and now it feels messy. I also have a `useState` that got more than one purpose (quantity of cards set to `undefined` on start to know if the game has started at least once or not), but at the same time got rid of other `useState`s, like the `isGameOver` one.

I'm not completely satisfied by the mess I made, but at least the game works. I don't feel like rewriting the code, I don't want to spend so much time in the same project when it comes to just a practice, so I'll try to improve on my next project.

### what's next
With the game working, now I can start using the API to get images and text for each card, then work in the dark mode, and the game will be finished.
