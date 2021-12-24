import fgtb_desktopDemo from "../../../../images/project/fgtb_desktopDemo.gif";
import fgtb_mobileDemo from "../../../../images/project/fgtb_mobileDemo.gif";

export const wbprjData = [
    {
        id: 1,
        name: "Forgettable",
        github: "https://github.com/WenrrrBeth/forgettable",
        website: "",
        desc: "Full Stack MERN CRUD Project that allows clients to share images. It enables feature like saving and sharing daily events with pictures, texts, and tags as well as exploration of other's posts in the form of image grid",
        desktopGif: fgtb_desktopDemo,
        mobileGif: fgtb_mobileDemo,
        features: [
            "Login/Signup/Google login",
            "Upload images",
            "Sharing images/texts/tags",
            "Saving other's shared images",
            "Author may see the number of saves (only visible to the author who post it)",
            "Save personal images/texts/tags (will not be shared in Home)",
            "Image Grid",
        ],
        techs: [
            "JavaScript",
            "React",
            "material-ui",
            "react-router-dom",
            "react-redux",
            "jwt-decode",
            "jsonwebtoken",
            "bcryptjs",
            "mongoose",
            "express",
        ]
    },
    {
        id: 2,
        name: "Local4Local",
        github: "https://github.com/Hackathon401/loco4local",
        website: "",
        desc: "Full Stack CRUD Project that allows clients to share local businessess. It provides a platform for small businesses to be discovered and promoted by allowing clients to share images on the products that they want to sell.",
        desktopGif: "",
        mobileGif: "",
        features: [
            "Google login",
            "Upload images",
            "Sharing seller's product",
            "Browsing other businessess",
        ],
        techs: [
            "Python",
            "Django",
            "SQLite"
        ]
    }
]