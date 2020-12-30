import resumeIllustration from "../images/resume.svg"
import workExperienceIllustration from "../images/workExperience.svg"
import projectsIllustration from "../images/projects.svg"
import resume from "../../static/resume.pdf"

export default function IconDescription(text, image, link) {
    this.image = image;
    this.text = text;
    this.link = link
}

var aboutDescriptions = [
    new IconDescription(
        "Resume",
        resumeIllustration,
        resume
    ),
    new IconDescription(
        "Work Experience",
        workExperienceIllustration,
        "/work-experience"
    ),
    new IconDescription(
        "Projects",
        projectsIllustration,
        "/projects"
    )
]

export { aboutDescriptions };