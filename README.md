# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Alan Li**

Time spent: **3** hours spent in total

Link to project: https://glitch.com/edit/#!/checker-motley-box

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![gif](https://github.com/yuyeon/light-and-sound-game/blob/main/light-sound-game.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
MDN Web Docs for JavaScript documentation (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
W3 CSS RGB (https://www.w3schools.com/css/css_colors_rgb.asp)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
In creating the game, I had no technical challenges, as the JavaScript, HTML, and CSS involved were all quite basic. One challenge I did face was implementing the additional features, especially in design choices for the buttons. The pitches in the original spec are C4 -> E4 -> G4 -> B4. I decided to instead change the pitch to C4, D4, E4, F4, etc, so a total of 7 buttons. But then I had trouble selecting the correct colors. I wanted the colors to not be too grating on the eyes, but also easily differentiable, while leaving room for their clicked colors (darker shade of those colors) to also be differentiable. I liked the colors of the original specs, so I wanted to keep those in some way. I decided to put the colors on a scale, to mimic the musical scale (so the buttons representing C4 and D4 should have colors closer together on the spectrum than C4 and G4, etc.). I kept the original colors, but I moved them across buttons and added some colors in between them on the spectrum. The end result, however, was a bit unsatisfactory because the C4, D4, and B4 buttons are too similar for my liking. I originally didn't want to use a rainbow scheme because indigo and violet seemed too close to each other, but I ended up falling prey to the same issue. So I wasn't able to make the colors all very differentiable, but the button colors were all relatively easy to look at, and matched my scale idea well.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
After completing this short project, I have more questions about cross browser compatibility, and how to make sure the application runs in different environments. I used Glitch's live site share link to try and test if the site actually worked, but it seemed like the sound wasn't playing using the live site. I'm not sure if this is because of issues with Glitch's live site functionality, or if I made some mistake somewhere. I further tried testing the site in safari, but it was totally unplayable because the buttons would not unclick once clicked. I would like to find some way to make sure my features work correctly in different environments, or figure out what the correct way to ensure cross browser compatibility is. I also am interested in learning further about how to build more advanced web applications and features, as this app is quite simple.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had more time to work on this project, I would improve the game by adding features. Right now, the game is quite barebones; there's minimal replay value, because if you can beat the game once you can probably beat it any number of times. I would make the number of levels endless, so as long as the player doesn't make a mistake, the game keeps going. Then I would store their high score and display that somewhere on the page, or perhaps even add a global leaderboard. This would add much more replay value to the game, as it continuously tests memory. I would also try to make this site mobile compatible, by making it a progressive web app. I don't think many people would play this game on desktop or when they're at a computer. Instead, it seems like the type of game someone plays on their phone when they have some extra time. By making it a PWA, users can play it on their phone with no issues. Even better, I would add functionality so that users add the site to their mobile home screen and play it offline, through Chrome.


## License

    Copyright Alan Li

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
