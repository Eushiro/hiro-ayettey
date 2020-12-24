import SnakeGif from "../images/SnakeGif.gif"
import hiroayettey from '../images/hiroayettey.png';
import WomenInStem from "../images/WomenInStem.gif"

function ProjectDescription(title, languages, description, image, link) {
    this.title = title;
    this.languages = languages;
    this.description = description;
    this.image = image;
    this.link = link;
}

var projectDescriptions = [
    new ProjectDescription(
        "Snake Brawl",
        "Made with Swift, Arduino",
        `An adaptation of the classic game "Snake", "Snake Brawl" is a joystick controlled iOS game in which two snakes fight against each other! 
        Use the joysticks to control your snake. Eat some food to grow in size, when you hit the other snake head on, 
        they lose health. When a snake is hit at 3 health or runs into itself at any health, it dies. 
        Click the Github icon to see the project's source code.   
        `,
        SnakeGif,
        "https://github.com/Eushiro/Snake_Brawl"
    ),
    new ProjectDescription(
        "Women in STEM",
        "Made with Swift, SwiftUI, Firebase",
        `
        My friend was writing a book about some of these women and she wanted to make an app to go along with it.
        Over history there have been many minority women who have made significant contributions to various STEM fields.
        This app recognizes their efforts and encourage you to learn more about their stories and try the quiz to test your learning.
        Click the Github icon to see the project's source code.   
        `,
        WomenInStem,
        "https://github.com/Eushiro/Women-In-Stem"
    ),
    new ProjectDescription(
        "HiroAyettey.com",
        "Made with React, Chakra-UI, Gatsby",
        `
        My personal website describing who I am, my past work experience and some of the projects I've worked on. Hope you like it!
        Click the Github icon to see the project's source code.   
        `,
        hiroayettey,
        "https://github.com/Eushiro/hiroayettey"
    )
]

export { projectDescriptions };