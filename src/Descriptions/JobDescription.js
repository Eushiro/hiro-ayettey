import threadsImage from "../images/threads.jpg"
import textnowImage from "../images/textnow.jpg"
import tdlabImage from "../images/tdlab.jpg"

export default function JobDescription(title, jobPosition, location, text, link, image) {
    this.title = title;
    this.jobPosition = jobPosition
    this.location = location
    this.image = image;
    this.text = text;
    this.link = link
}

var jobDescriptions = [
    new JobDescription(
        "Threads",
        "Mobile Engineering Intern",
        "San Francisco, CA",
        `Threads is a startup looking to make work more inclusive. They're doing this by making sure everyone has a voice when making decisions.
        I worked with Thread's Mobile team prior to its launch, adding features to its iOS and Android apps.
        The Threads apps are built primarily with Swift and Kotlin. You can click the image to the left to visit Threads' website, 
        or check out my resume to learn more about the projects I worked on.`,
        "https://threads.com",
        threadsImage
    ),
    new JobDescription(
        "TextNow",
        "Android Developer Intern",
        "Waterloo, ON",
        `
        TextNow is working to help the world communicate for free or as close to free as possible. TextNow is a communication platform that even gives you a phone number for free.
        I worked on the Android team to on both internal and user-facing projects. 
        You can click the image to the left to visit TextNow's website, or check out my resume to learn more about the projects I worked on.
        `,
        "https://www.textnow.com/",
        textnowImage
    ),
    new JobDescription(
        "TD Labs",
        "Software Developer Intern",
        "Waterloo, ON (Remote)",
        `Building financial solutions for students using new technologies as part of TD’s innovation lab`,
        "https://tdlab.io/",
        tdlabImage
    )
]

export { jobDescriptions };