Tiny Towns
=======
This is a purely JS, CSS and HTML implementation of the Solo Version of the board game Tiny Towns

What is Tiny Towns?
-------
Tiny Towns is a board game made by AEG Games for 2 to 6 players, with a solo variant. This implementation of the game is only for the solo variant. You can find out more about the game from their website.

https://www.alderac.com/tiny-towns/

Description From Website:
Who will build the best Tiny Town?
2 to 6 players compete to build the most amazing Town. Each turn the “Master Builder” determines which resource will be produced, and all the players gain one unit of that resource. Players can decide to use their resources to construct buildings according to the construction cards in play. Choose carefully! Where you build, and what you build will determine how dense your Town will be and how many points it will score! At the end of the turn, a new player becomes Master Builder. Play continues until every player’s Town is at max density, and then each Town is scored to determine the winner.

I don't feel like watching a video on how to play. Teach me with an elevator pitch.
-------
Okay, but I promise the video will make more sense but here goes. This is for the Solo version, because thats what i'm doing here.

You have a deck of 15 cards, containing 3 cards of each resource in the game (Brick, Glass, Stone, Wood, and Wheat). You are given a 4x4 grid that represents your town. You start with a hand of 3 cards. You play one of these cards and that allows you to place that resource on a cell in your grid (Only one _**item**_ per cell). You are trying to play resources in specfic patterns of availiable buildings. Those patterns can be rotated or flipped on either the Y or X Axis as well, but they have to match in order to build a building. If you match a building, at any time you can remove the matching resources from the board and place a building into one of the cells you removed the resources from. Once a building is placed, it cannot be moved and you may only have one _**item**_ per cell, so your town will fill up quickly. Each building has different scoring conditions and you try to build the most prosperous town you can (Highest score). The game ends when you can no longer place any more buildings or resources on the board.

Okay what are the buildings and how do they score
-------
There are MANY different building options in the base game of Tiny Towns, but im only going to program for the teaching game case. Those buildings are

The Cottage:

Score 3 VP if this building is _fed_

![Cottage Pattern Small](https://user-images.githubusercontent.com/51708157/149029214-9de6b200-e4f5-4947-89d4-d5429aaec0ae.png)

Chapel:

Score 1 VP for each _fed_ Cottage

![Chapel Pattern Small](https://user-images.githubusercontent.com/51708157/149029196-4f1e1848-5f8d-44b6-b5a3-175dd5561bf4.png)

Farm:

Feeds 4 buildings anywhere in your town

![Farm Pattern Small](https://user-images.githubusercontent.com/51708157/149029181-c98f3292-8811-4bb1-8fd2-cc75fd2cdcc6.png)

Tavern:

Score VP based on the number of constructed Taverns in your town

Taverns |  1  |  2  |  3  |  4  |  5  |

VPs     |  2  |  5  |  9  |  14 |  20 |

![Tavern Pattern Small](https://user-images.githubusercontent.com/51708157/149029169-065e4612-44d6-453f-91b0-d1349964bf61.png)

Well:

Score 1 VP for each adjacent Cottage

![Well Pattern Small](https://user-images.githubusercontent.com/51708157/149029154-b68d91ad-22dd-469f-bb40-9a58c68e174a.png)

Theater:

Score 1 VP for each other unique building type in the same row and column as the built Theater

![Theater Pattern Small](https://user-images.githubusercontent.com/51708157/149029136-057daee1-6c88-474e-8f72-3ab8c87dfddc.png)

Factory:

When constructed, place 1 of the 5 resources on the constructed factory. When another player names this resource (or you select this resource from your hand) you may place any resource you want instead.

![Factory Pattern Small](https://user-images.githubusercontent.com/51708157/149029116-0e17f31e-e78b-4826-90b2-554c429f4554.png)

Why are you doing this?
-------
You sure do ask a lot of questions. I thought it would be fun. It started as a challenge to write a board game i knew inside and out in purely javascript, but it has evolved a bit. Maybe i can put it as an easter egg somewhere or something.

Can you get in trouble with AEG for this?
-------
¯\\_(ツ)_/¯

it's genuinely one of my favorite board games and this is a love letter to it. please dont sue me.
