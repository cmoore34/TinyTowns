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
Pattern:
![image (17)](https://user-images.githubusercontent.com/51708157/149024726-ca23d43e-cd27-4a83-8b3c-8ea21dd499a0.png)

Chapel:

Score 1 VP for each _fed_ Cottage

Pattern:
![image (18)](https://user-images.githubusercontent.com/51708157/149024941-e6325d6e-5485-43a9-b5e2-f36f74edbced.png)

Farm:

Feeds 4 buildings anywhere in your town

Pattern:
![image (20)](https://user-images.githubusercontent.com/51708157/149025381-2a4362d0-85dc-4487-9109-1714f3d64982.png)

Tavern:

Score VP based on the number of constructed Taverns in your town

Taverns |  1  |  2  |  3  |  4  |  5  |

VPs     |  2  |  5  |  9  |  14 |  20 |

Pattern:
![image (19)](https://user-images.githubusercontent.com/51708157/149025980-d20fa843-872e-448b-9b9f-8762a623c93e.png)

Well:

Score 1 VP for each adjacent Cottage

Pattern:
![image (16)](https://user-images.githubusercontent.com/51708157/149026183-d0e9724c-441e-4cae-b11b-b61799d8c552.png)

Theater:

Score 1 VP for each other unique building type in the same row and column as the built Theater

Pattern:
![image (18)](https://user-images.githubusercontent.com/51708157/149026393-54d055ef-8b38-4831-a225-b9fe8456ca7d.png)

Factory:

When constructed, place 1 of the 5 resources on the constructed factory. When another player names this resource (or you select this resource from your hand) you may place any resource you want instead.

Pattern:
![image (17)](https://user-images.githubusercontent.com/51708157/149026673-6657e21a-6627-4fb3-a7e8-61e08d34687d.png)

Why are you doing this?
-------
You sure do ask a lot of questions. I thought it would be fun. It started as a challenge to write a board game i knew inside and out in purely javascript, but it has evolved a bit. Maybe i can put it as an easter egg somewhere or something.

Can you get in trouble with AEG for this?
-------
¯\_(ツ)_/¯
it's genuinely one of my favorite board games and this is a love letter to it. please dont sue me.
