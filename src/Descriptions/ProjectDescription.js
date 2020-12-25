import hiroayettey from '../images/hiroayettey.jpg';

import YoutrendsVideo from "../images/youtrends.mp4"
import SnakeVideo from "../images/SnakeGif.mp4"
import WomenInStemVideo from "../images/WomenInStem.mp4"
import LecturesPlusPlusVideo from "../images/Lectures++.mp4"

import YouTrendsImage from "../images/youtrends.jpg"
import WomenInStemImage from "../images/WomenInStem.jpg"
import SnakeGifImage from "../images/SnakeGif.jpg"
import LecturesPlusPlusImage from "../images/Lectures++.jpg"

function ProjectDescription(title, languages, description, image, link) {
    this.title = title;
    this.languages = languages;
    this.description = description;
    this.image = image;
    this.link = link;
}

var useVideos = true;

// Projects are ordered based on the size of the associated image
// Smaller images/assets load faster so are placed at the top

var projectDescriptions = [
    new ProjectDescription(
        "HiroAyettey.com",
        "React, Chakra-UI, Gatsby",
        `
        My personal website describing who I am, my past work experience and some of the projects I've worked on. Hope you like it!
        `,
        hiroayettey,
        "https://github.com/Eushiro/hiroayettey"
    ),
    new ProjectDescription(
        "Youtrends",
        "React, Flask, SQL",
        `A Youtube analytics platform that makes use of its API to provide insights into global trends.
        Built the frontend of the application with React to display videos, create playlists and visualize trends.
        Created in a team of 5, using Github for version control
        `,
        useVideos ? YoutrendsVideo : YouTrendsImage,
        "https://github.com/Eushiro/YouTrends"
    ),
    new ProjectDescription(
        "Women in STEM",
        "Swift, SwiftUI, Firebase",
        `
            My friend was writing a book about some of these women and she wanted to make an app to go along with it.
            Over history there have been many minority women who have made significant contributions to various STEM fields.
            This app recognizes their efforts and encourage you to learn more about their stories and try the quiz to test your learning.
            `,
        useVideos ? WomenInStemVideo : WomenInStemImage,
        "https://github.com/Eushiro/Women-In-Stem"
    ),
    new ProjectDescription(
        "Snake Brawl",
        "Swift, Arduino",
        `An adaptation of the classic game "Snake", "Snake Brawl" is a joystick controlled iOS game in which two snakes fight against each other! 
                Use the joysticks to control your snake. Eat some food to grow in size, when you hit the other snake head on, 
                they lose health. When a snake is hit at 3 health or runs into itself at any health, it dies. 
                `,
        useVideos ? SnakeVideo : SnakeGifImage,
        "https://github.com/Eushiro/Snake_Brawl"
    ),
    new ProjectDescription(
        "Lectures++ (Hack Western 7)",
        "Javascript, Google Cloud API, Docker, Express",
        `A chrome extension that speeds up lectures intelligently, displays a live chat, and generates a transcript.
                    Created the overlay that displays the chat/transcript, and wrote the live chat API 
                    `,
        useVideos ? LecturesPlusPlusVideo : LecturesPlusPlusImage,
        "https://github.com/Eushiro/LecturesPlusPlus"
    ),
]

export { projectDescriptions };