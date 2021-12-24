import uofAHospital from "../../../images/employer/uofahospital-logo.png";
import teamupsci from "../../../images/employer/teamup-logo.png";
import intrap from "../../../images/employer/intrap-logo.png";
import ghostlab from "../../../images/employer/Ghostlab-logo.png";

export const expData = [
    {
        id: 4,
        employer: "Ghost Lab",
        employerImg: {
            img: ghostlab,
            bkgColor: "#474044"
        },
        jobTitle: "Full Stack Student Web Developer",
        date: "01/2021 - 04/2021",
        descs: [
            "Creating a project that build a new self-contained module for an existing system which enables users to create and use promo codes on Bitcoin Well's ATM Machines",
            "Full stack web development using language TypeScript, libraries Angular, Express, NestJS, and database PostgreSQL",
            "Website testing",
        ]
    },
    {
        id: 3,
        employer: "University of Alberta Hospital",
        employerImg: {
            img: uofAHospital,
            bkgColor: "#2E3O47"
        },
        jobTitle: "Volunteer at Division of CT scan/Cardiology/Emergency",
        date: "05/2018 - 03/2020",
        descs: [
            "Leading patients to the right places",
            "Making sure that patients are feeling as comfortable as possible",
            "Organizing and delivering files; Storage stock up"
        ]
    },
    {
        id: 2,
        employer: "TeamUp Science",
        employerImg: {
            img: teamupsci,
            bkgColor: "#707793"
        },
        jobTitle: "Group Lead",
        date: "02/2019 - 04/2019",
        descs: [
            "Taking care of students participating in the science competition",
            "Work with TAs to help student with projects in the labs"
        ]
    },
    {
        id: 1,
        employer: "InTrap Escape Room",
        employerImg: {
            img: intrap,
            bkgColor: "#242424"
        },
        jobTitle: "Escape Room Host and Instructor",
        date: "05/2018 - 12/2018",
        descs: [
            "Help with game room puzzle designing",
            "Interacted and guided the players with introductions, instructions, and hints to help them solve the puzzles and escape the room."
        ]
    },
]