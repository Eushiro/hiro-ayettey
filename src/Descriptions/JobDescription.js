import threadsImage from "../images/threads.webp"
import textnowImage from "../images/textnow.webp"
import tdlabImage from "../images/tdlab.webp"
import figmaImage from "../images/figma.webp"

export default function JobDescription(title, jobPosition, location, text, link, image, date) {
    this.title = title
    this.jobPosition = jobPosition
    this.location = location
    this.image = image;
    this.text = text
    this.link = link
    this.date = date
}

var jobDescriptions = [
    new JobDescription(
        "Threads",
        "Mobile Engineering Intern",
        "San Francisco, CA",
        `Threads is a startup looking to make work more inclusive. They're doing this by making sure everyone has a voice when making decisions.
        I worked with Thread's Mobile team prior to its launch, adding features to its iOS and Android apps.
        The Threads apps are built primarily with Swift and Kotlin.`,
        "https://threads.com",
        threadsImage,
        "May '19-Aug '19"
    ),
    new JobDescription(
        "TextNow",
        "Android Developer Intern",
        "Waterloo, ON",
        `
        TextNow is working to help the world communicate for free or as close to free as possible. TextNow is a communication platform that even gives you a phone number for free.
        I worked on the Android team to on both internal and user-facing projects. 
        `,
        "https://www.textnow.com/",
        textnowImage,
        "Jan '20-Apr '20"
    ),
    new JobDescription(
        "TD Labs",
        "Software Developer Intern",
        "Waterloo, ON (Remote)",
        `Building financial solutions for students using new technologies as part of TD’s innovation lab`,
        "https://tdlab.io/",
        tdlabImage,
        "Sept '20-Dec '20"
    ),
    new JobDescription(
        "Figma",
        "Software Engineering Intern",
        "San Francisco, CA (Remote)",
        `Building features for Figma Community`,
        "https://figma.com/",
        figmaImage,
        "May '21-Aug '21"
    )
]

export { jobDescriptions };