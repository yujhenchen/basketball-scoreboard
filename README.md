<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/yujhenchen/basketball-scoreboard">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">Basketball Scoreboard</h3>

  <p align="center">
    My solo project - Basketball Scoreboard (from The Frontend Developer Career Path of Scrimba)
    <br />
    <a href="https://github.com/yujhenchen/basketball-scoreboard"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://jen-basketball-scoreboard.netlify.app/" target=”_blank”>View Demo</a>
    ·
    <a href="https://github.com/yujhenchen/basketball-scoreboard/issues">Report Bug</a>
    ·
    <a href="https://github.com/yujhenchen/basketball-scoreboard/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <!-- <li><a href="#prerequisites">Prerequisites</a></li> -->
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <!-- <li><a href="#usage">Usage</a></li> -->
    <li><a href="#roadmap">Roadmap</a></li>
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <li><a href="#issues-and-solutions">Issues and solutions</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

<!-- Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `basketball-scoreboard`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description` -->
My solo project - Basketball Scoreboard. Built with Vanilla JavaScript and is powered by the Figma design resources from The Frontend Developer Career Path on Scrimba. The scoreboard includes a countdown feature that utilizes setInterval to track game time dynamically. To ensure efficient management of game-related data, I've applied the Singleton Design Pattern.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![JavaScript]][JavaScript]
* [![CSS3]][CSS3]
* [![HTML5]][HTML5]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

<!-- ### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ``` -->

### Installation
Right-click on the index.html file and select "Open with" and select the target browser.
<!-- 
1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/yujhenchen/basketball-scoreboard.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ``` -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- ROADMAP -->
## Roadmap

- [x] Set scores (set state variables, addEventListener)
- [x] Reset the game
- [x] Count down timer (setInterval and clearInterval)
- [x] Responsive web design (RWD)
- [x] Popup winner animation after the game is ended (using Animate.css)
- [ ] Disable score buttons after the game is over
- [ ] Refactor codes
    - [x] Remove duplicated codes in addEventListener
    - [x] Refactor end game and reset game codes for readability
    - [x] Strings to const variables
    - [x] Wrap scores, timer id, and time variables into a game data class, use getter and setter
    - [x] Avoid using id selector, use css and element selector instead
    - [ ] Error handling

See the [open issues](https://github.com/yujhenchen/basketball-scoreboard/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ISSUES AND SOLUTIONS -->
## Issues and solutions

### `<p>` tag overflows from its flex parent

#### Solution
Place the child element to the center of the parent by adding the properties and values `place-items: center;` and  `justify-content: center;` into the parent CSS class.
For example,
```
.score-container {
  display: flex;
  place-items: center;
  justify-content: center;
}

```


### There is extra space around the `<p>` tag
`<p>` tag has default top and bottom margins.

#### Solution
Remove the default margins by adding the property and value `margin: 0;`.


### Text in `<p>` tag is not vertical when using **Cursed Timer ULiL** font family
After setting `margin: 0;`, the text is still not vertically centered in the `<p>` tag due to the style of the font family.

#### Solution
Further study


### Entire page flicks when the game is ended, and before the popup model is shown
The full view port model container CSS display property is from none to flex?

#### Solution
Instead of changing the display from "none" to "flex", use the default display and change the layout top and left from `top: -9999px;` and `left: -9999px;` to `top: 0px;` and `left: 0px;`

When the model is hidden
```
#game-over-model-container {
  position: absolute;
  top: -9999px;
  left: -9999px;
}
```

When shows the model
```
#game-over-model-container {
  position: absolute;
  top: 0px;
  left: 0px;
}
```

### It might be  difficult to control the timer from setInterval in the JS file
When set the timer as below, it is possible to forget to invoke clearInterval to cancels the timer.
```
let gameTimerId = setInterval(playGame, gameData.timerInterval);
```

#### Solution
Wrap the setting and clearing timer into a function, and return a function to cancel the timer, with a parameter to determine whether the timer needs to be restarted.
```
function resetGameTimer() {
  gameData.gameTimerID = setInterval(playGame, gameData.timerInterval);
  return (isGameEnded = true) => {
    clearInterval(gameData.gameTimerID);
    if (!isGameEnded) {
      gameData.gameTimerID = setInterval(playGame, gameData.timerInterval);
    }
  };
}
```

Use a shared variable as timer variable
```
gameData.gameTimerID
```

Call the function and assign the returned function to a variable to control the timer later (the timer is already started after calling the `resetGameTimer` function)
```
const endGameTimer = resetGameTimer();
```

Cancel the timer
```
endGameTimer();
```

Restart the timer
```
endGameTimer(false);
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- LICENSE -->
## License
Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact
<!-- Jen Chen - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com -->
Jen Chen

Project Link: [https://github.com/yujhenchen/basketball-scoreboard](https://github.com/yujhenchen/basketball-scoreboard)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [What is the default margin value of p tag?](https://stackoverflow.com/questions/20850594/what-is-the-default-margin-value-of-p-tag)
* [[CSS] - How to remove the margin from a p element using CSS](https://www.shecodes.io/athena/44275-how-to-remove-the-margin-from-a-p-element-using-css)
* [setInterval() global function](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
* [Animate.css](https://github.com/animate-css/animate.css)
* [Places it’s tempting to use `display: none;`, but don’t](https://css-tricks.com/places-its-tempting-to-use-display-none-but-dont/)
* [Scrimba](https://scrimba.com/)
* [Singleton Pattern](https://www.patterns.dev/vanilla/singleton-pattern/)
<!-- * [emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet/tree/master) -->


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/yujhenchen/basketball-scoreboard.svg?style=for-the-badge
[contributors-url]: https://github.com/yujhenchen/basketball-scoreboard/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/yujhenchen/basketball-scoreboard.svg?style=for-the-badge
[forks-url]: https://github.com/yujhenchen/basketball-scoreboard/network/members
[stars-shield]: https://img.shields.io/github/stars/yujhenchen/basketball-scoreboard.svg?style=for-the-badge
[stars-url]: https://github.com/yujhenchen/basketball-scoreboard/stargazers
[issues-shield]: https://img.shields.io/github/issues/yujhenchen/basketball-scoreboard.svg?style=for-the-badge
[issues-url]: https://github.com/yujhenchen/basketball-scoreboard/issues
[license-shield]: https://img.shields.io/github/license/yujhenchen/basketball-scoreboard.svg?style=for-the-badge
[license-url]: https://github.com/yujhenchen/basketball-scoreboard/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[JavaScript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[CSS3]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[HTML5]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
