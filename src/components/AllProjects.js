import skillSync from '../images/projectThumbnail/skillSync.png'
import bloggify from '../images/projectThumbnail/bloggify.png'
import coincurt from '../images/projectThumbnail/coincurt.png'
import huly from '../images/projectThumbnail/hulyIoClone.png'
import hstore from '../images/projectThumbnail/hstore.png'
import portfolio from '../images/projectThumbnail/portfolio.png'
import netflix from '../images/projectThumbnail/netflix.png'
import findCa from '../images/projectThumbnail/findCa.png'
import textUtils from '../images/projectThumbnail/textUtils.png'
import todoList from '../images/projectThumbnail/todoList.png'
import calculator from '../images/projectThumbnail/calculator.png'
import weather from '../images/projectThumbnail/weather.png'
import batchSystem from '../images/projectThumbnail/batchSystem.png'
import usabilityHub from '../images/projectThumbnail/usabilityHub.png'
import zwigato from '../images/projectThumbnail/zwigato.png'

export const allProjects = [
    {
        id: 1,
        title: "Bloggify",
        img: bloggify,
        desc: "Bloggify is a responsive blogging website with user authentication, React Quill-powered posting/editing, Cloudinary integration, MongoDB CRUD operations, and Tailwind CSS styling.",
        tech: ['Reactjs', 'Nodejs', 'Expressjs', 'MongoDB', 'Tailwind CSS'],
        link: "https://thebloggify.vercel.app/",
        github: "https://github.com/hardiksinghh18/bloggify-mern-blog"
    },
    {
        id: 2,
        title: "SkillSync",
        img: skillSync,
        desc: "SkillSync is a comprehensive mentorship platform designed to connect mentors and mentees seamlessly. The platform facilitates knowledge sharing and professional growth through a robust matching algorithm and intuitive interface.",
        tech: ["Reactjs", "Nodejs", "Expressjs", "MySQL", "Tailwind CSS", "JWT"],
        link: "https://skillssync.vercel.app/",
        github: "https://github.com/hardiksinghh18/mentorship-frontend"
    },
    {
        id: 3,
        title: "Coincurt",
        img: coincurt,
        desc: "Coincurt is a cryptocurrency dashboard providing real-time data on coins, exchanges, and announcements. It features an admin panel for managing updates, user profiles, and notifications, ensuring a seamless and secure user experience.",
        tech: ["Reactjs", "Nodejs", "Expressjs", "Appwrite", "Tailwind CSS"],
        link: "https://coincurt-v1.vercel.app/",
        github: "https://github.com/iamrajsingh/coincurt-v1"
    },
    {
        id: 4,
        title: "Huly.io Clone",
        img: huly,
        desc: "A high-fidelity frontend clone of Huly.io, demonstrating advanced frontend capabilities including complex layouts, smooth animations with Framer Motion and GSAP, and a modern tech stack with Next.js 14 and TypeScript.",
        tech: ["Next.js 14", "TypeScript", "GSAP", "Framer Motion", "Tailwind CSS", "Radix UI"],
        link: "https://huly-io-clone.vercel.app/",
        github: "https://github.com/hardiksinghh18/huly.io-clone"
    },
    {
        id: 5,
        title: "E-Commerce - hstore",
        img: hstore,
        desc: "This is an E-Commerce Website which is based on Reactjs.It has multiple functionalities like User authentication,User Login,Add to Cart,Filtering products,Browsing Each Product etc.",
        tech: ['HTML', 'CSS', 'Reactjs', 'React Context API', 'Firebase'],
        link: "https://ecommerce-hstore.web.app",
        github: "https://github.com/hardiksinghh18/E-commerce-hstore"
    },
    {
        id: 6,
        title: "Portfolio",
        img: portfolio,
        desc: "This is my Portfolio website which is completely based on Reactjs. It displays all the required information about me which includes my skills,projects,services etc.",
        tech: ['HTML', 'CSS', 'Reactjs'],
        link: "https://hardiksingh.vercel.app/",
        github: "https://github.com/hardiksinghh18/Personal-PortFolio"
    },
    {
        id: 7,
        title: "Netflix Clone",
        img: netflix,
        desc: "This is a Netflix frontend Clone which is made with Reactjs. It displays trending movies , movies by category.Users can also see the details of the movies and watch their trailers which is fetched from youtube api. Will add more functionalities to this.",
        tech: ['HTML', 'CSS', 'Reactjs', 'Firebase'],
        link: "https://netflix-clone-f3502.web.app",
        github: "https://github.com/hardiksinghh18/netflix-clone-react"
    },
    {
        id: 8,
        title: "NewsPedia",
        img: null,
        desc: "This is a website based on Reactjs which is used to display latest news across the globe . Users can browse through multiple news categories via the navbar and they can go through a particular news in detail by clicking the read more button .",
        tech: ['HTML', 'CSS', 'Reactjs'],
        link: "",
        github: "https://github.com/hardiksinghh18/newsApp"
    },
    {
        id: 9,
        title: "Find Ur CA",
        img: findCa,
        desc: "This is a sample project in which a user can search any specific name and the website fetches details of that specific CA.",
        tech: ['HTML', 'CSS', 'Reactjs', 'Tailwind'],
        link: "https://findyourca-b1f0b.web.app/",
        github: "https://github.com/hardiksinghh18/ca-finder"
    },
    {
        id: 10,
        title: "Text-Utils",
        img: textUtils,
        desc: "This is a very basic Reactjs webapp that can be used to convert a given input text into upper case,lower case,copy and clear text.Main aim of building this was to get started through Reactjs.",
        tech: ['HTML', 'CSS', 'Reactjs'],
        link: "https://text-utils-5331c.web.app",
        github: "https://github.com/hardiksinghh18/Text-utils"
    },
    {
        id: 11,
        title: "To-do-list",
        img: todoList,
        desc: "This is a webapp made by using javascript.Users can add a particular task and save it.Saved tasks can also be edited and you can also delete it when it is no longer needed.",
        tech: ['HTML', 'CSS', 'Javascript'],
        link: "https://hardiksinghh18.github.io/ToDo-List/",
        github: "https://github.com/hardiksinghh18/ToDo-List"
    },
    {
        id: 12,
        title: "Calculator",
        img: calculator,
        desc: "This is a very basic calculator made using Javascript. It takes an input value and evaluates and displays the result.",
        tech: ['HTML', 'CSS', 'Javascript'],
        link: "https://hardiksinghh18.github.io/calculator/",
        github: "https://github.com/hardiksinghh18/calculator"
    },
    {
        id: 13,
        title: "Weather App",
        img: weather,
        desc: "This app is based on Javascript . It uses weather api to fetch the weather updates and then displays all the required information",
        tech: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
        link: "https://weather-app-eight-opal-20.vercel.app/",
        github: "https://github.com/hardiksinghh18/kraftshala-assignment"
    },
    {
        id: 14,
        title: "Contest Finder",
        img: null,
        desc: "This app is based on Javascript. The users can see all the available contest in the form of cards.They can also visit the page of that contest by clicking the visit now button. ",
        tech: ['HTML', 'CSS', 'Bootsrap', 'Javascript'],
        link: "https://hardiksinghh18.github.io/contest-app/",
        github: 'https://github.com/hardiksinghh18/contest-app'
    },
    {
        id: 15,
        title: "Batch System Frontend Assignment",
        img: batchSystem,
        desc: "The Batch System Assignment is a responsive web application for managing and organizing batches. It includes features for creating, editing, and deleting batches, tracking participants, and handling assignments efficiently.",
        tech: ["Reactjs", "TailwindCSS"],
        link: "https://batch-system-assignment-hazel.vercel.app/",
        github: "https://github.com/hardiksinghh18/batch-system-assignment"
    },
    {
        id: 16,
        title: "Usability hub clone",
        img: usabilityHub,
        desc: "This is a frontent clone of a website called Usability Hub.The Project is made using CSS.My main aim was to sharpen my css skills.",
        tech: ['HTML', 'CSS'],
        link: "https://hardiksinghh18.github.io/Usability-Hub/",
        github: 'https://github.com/hardiksinghh18/Usability-Hub'
    },
    {
        id: 17,
        title: "Zwigato",
        img: zwigato,
        desc: "This is an app that uses CSS.I made this app to get command on my css skills.",
        tech: ['HTML', 'CSS'],
        link: "https://hardiksinghh18.github.io/Zwigato/",
        github: "https://github.com/hardiksinghh18/Zwigato"
    }
];