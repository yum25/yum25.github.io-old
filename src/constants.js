export const PROJECTS = [
    { 
        title: "Avenu Mobile App",
        description: `A social events app in the App Store built with React Native and Firebase. This app also utilizes a variety of messaging services, Google location services, notifications services, Stripe payments, e.t.c. I've done a variety of work over 2 years in improving and creating new features such as tagging events and venues in photos, adding ticket scanners, and allowing users to upload featured photos.`,
        image: require("./assets/avenu-home.png"),
        style: {height: "80vmin", width: "40vmin", marginTop: "10vmin"},
        backgroundColor: "black",
        altText: "Avenu"
    },
    {
        title: "The Michigan Daily Mobile App",
        description: "A news app on the App Store and Google Play built with React Native and WordPress API by fetching the latest stories from The Michigan Daily. As a Mobile Developer, I worked on a variety of features to display specially rendered websites on the mobile app as well as create a reading list feature. In recent times, as Mobile Product Manager, I've overseen hiring, quality management, and deployment of the mobile app.",
        image: require("./assets/TMD-promo.png"),
        style: {height: "60vmin", width: "40vmin"},
        backgroundColor: "#fdfdfd",
        backgroundImage: "linear-gradient(to bottom, white, rgb(239, 238, 238))",
        altText: "The Michigan Daily",
    },
    {
        title: "FLAMINGO - Mapping Chromosomes",
        description: "A bioinformatics project written in Python using Jupyter notebooks for a research study in chromosome prediction and imaging. By using FLAMINGO chromosome imaging predictions and the seaborn library, I compared average substructures and plotted chromosome substructures within a heatmap. This data was then analyzed with RAD21 and promoter occurrences.",
        image: require("./assets/chr1-4.png"),
        style: {height: "53vmin", width: "75vmin"},
        altText: "FLAMINGO",
    },
    {
        title: "My Teaching Experience",
        description: "As someone who didn't come from a coding background, for the longest time, the field of Computer Science felt daunting and inaccessible to me. That's why promoting Computer Science education is very near and dear to me- especially when it comes to underpriviledged communities. Teaching coding with Seven Mile and Joy of Coding has made me hopeful for the future of CS education- come check out these organizations and the work we do!",
        image: require("./assets/scratch.png"),
        style: {height: "53vmin"},
        backgroundColor: "#f9f9f9",
        altText: "Teaching",
    },
    {
        title: "Other Cool Stuff I've Done!",
        description: "Other than being a passionate coder, I'm also an orchestral violinist, an amateur guitarist, and a hobby artist. Come explore some of my interests with me!",
        image: require("./assets/stage.jpeg"),
        style: {height: "98vmin"},
        altText: "Other",
    }
];