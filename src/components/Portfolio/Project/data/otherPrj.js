import mnist_image from "../../../../images/project/MNIST-demo.png";
import siblingsStory_demo from "../../../../images/project/siblingsStory_demo.gif";
import chatterbox_demo from "../../../../images/project/chatterbox_demo.gif";


export const othprjData = [
    {
        id: 1,
        name: "Image Detection and Classification on MNISTDD datasets",
        tags: [{name: "Machine Learning", color: "pink"}, {name: "Deep Learning", color: "lightblue"}, {name: "Visual Recognition", color: "#83ccbb"}],
        github: "https://github.com/WenrrrBeth/classification-MNISTDD",
        desc: "Using a deep neural network to create a model that classify the digits on the dataset images and predict digits' position. The Classification accuracy can reach up to 99.63% and detection IoU around 95% under the time of 23.28 using GPU.",
        demo: {
            image: mnist_image,
            half: true,
            name: "EXAMPLE"
        },
        half: true,
        features: ["Image Detection", "Image Classification"],
        techs: ["Python", "Pytorch", "Numpy", "Deep Neural Network", "Convolutional Neural Network"],
    },
    {
        id: 2,
        name: "Siblings Story",
        tags: [{name: "Game Development", color: "lightgreen"}, {name: "RPG Maker", color: "#c783cc"}],
        github: "https://github.com/dkrammer/back-alley-games",
        desc: "This is a 15 minutes to 20 minutes story telling game developped by RPG maker. To view full trailer of this game, please visit https://www.youtube.com/watch?v=WMWMpUlnL4c",
        demo: {
            image: siblingsStory_demo,
            half: false,
            name: "GAME TRAILER"
        },
        half: false,
        features: ["Story game", "Puzzle solving"],
        techs: ["RPG Maker", "JavaScript"],
    },
    {
        id: 3,
        name: "Chatter Box",
        tags: [{name: "Hackathon", color: "lightgray"}, {name: "Machine Learning", color: "pink"}, {name: "Deep Learning", color: "lightblue"}, {name: "Natural Language Processing", color: "#c6cc83"}],
        github: "https://github.com/WenrrrBeth/chatterBox",
        desc: "An artificially intelligent chatbot that can answer basic questions for University of Alberta undergrad students.",
        demo: {
            image: chatterbox_demo,
            half: false,
            name: "DEMO"
        },
        half: false,
        features: ["Chatting", "Get information", "Artificially intelligent"],
        techs: ["Python", "Pytorch", "Numpy", "Deep Neural Network", "Convolutional Neural Network"],
    },
]