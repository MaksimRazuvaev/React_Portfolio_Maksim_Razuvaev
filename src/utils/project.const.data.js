/* jshint esversion: 6 */
import goalkeeper from "../../src/assets/images/Goalkeepers.PNG";
import funnymoovie from "../../src/assets/images/funnymoovie.png";
import noSQLAPI from "../../src/assets/images/NoSQLAPI.PNG";
import pwatxted from "../../src/assets/images/PWATextEdditor.PNG";
import ecomorm from "../../src/assets/images/EcommerceBackendORM.PNG";
import weatherForecast from "../../src/assets/images/weatheForecast.PNG";


export const projectArray = [
    { 
        title: 'Goalie',
        description: "Application to share and view goals with piers using chart.js to be able to vizualize the data. Live deployed on Heroku!",
        tech: ["Node", "Sequelize", "Express", "MySQL Workbench", "Bootstrap", "Chart.js", "MVC framework", "Heroku" ],
        appLink: "https://gp2-your-goals-tracker.herokuapp.com/",
        gitHubLink: "https://github.com/sely1724/your-goals-tracker",
        image: goalkeeper,
    },
    { 
        title: 'Funny Movie Gifs',
        description: "This is a group collaborative project to entertain users with funny gifs during users' search for info about movies.",
        tech: ["HTML", "CSS", "Third party API", "JavaScript"],
        appLink: "https://maksimrazuvaev.github.io/funny_movie_gif/",
        gitHubLink: "https://github.com/MaksimRazuvaev/funny_movie_gif",
        image: funnymoovie,
    },
    { 
        title: 'NoSQL Social Network API Back-end App',
        description: "A social media plathform using an API for my social network that uses a NoSQL database so, my website can handle large amounts of unstructured dat",
        tech: ["Express", "MongoDB", "Mongoose ODM", "JavaScript date library", "Insomnia"],
        appLink: "https://github.com/MaksimRazuvaev/NoSQL_Social_Network_API",
        gitHubLink: "https://github.com/MaksimRazuvaev/NoSQL_Social_Network_API",
        image: noSQLAPI,
    },
    { 
        title: 'PWA Text Edditor',
        description: " A text editor that runs in the browser. The app is a single-page application that meets the PWA criteria. The application functions offline",
        tech: ["Progressive web apps (PWAs)", "Webpack", "AG Grid", "Babel JavaScript compiler", "DevServer"],
        appLink: "https://pwa-text-edditor.herokuapp.com/",
        gitHubLink: "https://github.com/MaksimRazuvaev/PWA_Text_Edditor",
        image: pwatxted,
    },
    { 
        title: 'Sequelize E-commerce Back-end ORM',
        description: "Back end for an e-commerce site. Express.js API and configured to use Sequelize to interact with a MySQL database",
        tech: ["Express", "Sequelize", "MySQL"],
        appLink: "https://github.com/MaksimRazuvaev/Sequelize_E-commerce_Back-end_ORM",
        gitHubLink: "https://github.com/MaksimRazuvaev/Sequelize_E-commerce_Back-end_ORM",
        image: ecomorm,
    },
    { 
        title: 'Weather Forecast',
        description: "Current weather and 5-day forecast app",
        tech: ["HTML", "Javascript", "Javascript local storage ", "Key API"],
        appLink: "https://maksimrazuvaev.github.io/server_side_api_weather_app/",
        gitHubLink: "https://github.com/MaksimRazuvaev/server_side_api_weather_app",
        image: weatherForecast,
    },
];

export const resumeArray = [
    { 
        title: 'Front-end Proficiencies',
        technologies: ["HTML", "CSS", "JavaScript", "JQuery", "responsive design", "React", "Bootstrap"],
    },
    { 
        title: 'Back-end Proficiencies',
        technologies: ["APIs", "Node", "Express", "MySQL, Sequelize", "MongoDB, Mongoose", "REST", "GraphQL"],
    }
];

export const resumeLink = "https://docs.google.com/document/d/1EzhJr4oBWZ68WQOzwxx_XtJQx2QupdQBHGWZfru4zNM/edit";
export const gitHubLink = "https://github.com/MaksimRazuvaev";
export const linkedInLink = "https://www.linkedin.com/in/maksim-razuvaev/";
export const devLink = "https://dev.to/maksimrazuvaev/";