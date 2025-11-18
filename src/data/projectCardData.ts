import { ProjectData } from "utils/typesAndInterfaces";

export const projectsCardData: ProjectData[] = [
  {
    title: "EG Title",
    links: { git: "", video: "", hosted: "" },
    images: [
      "https://lh3.googleusercontent.com/d/1mMwJAHLsbowKc05fmui7rWg8q2OFcrpC",
      "https://lh3.googleusercontent.com/d/1mMwJAHLsbowKc05fmui7rWg8q2OFcrpC",
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExazU0bGJic2tzZHYzeHk4bHh3eTlsdXhkMHB3Yno4MTc5bmJmdGhyNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/B7o99rIuystY4/giphy.gif",
    ], // location of the image file(s)
    altTexts: ["this is image 1", "wow image 2", "last one"],
    info: [
      {
        h3: "always show",
        cardP: ["card p 1", "card p 2"],
        modelP: ["model p 1"],
      },
      {
        h3: "only show model",
        cardP: [],
        modelP: ["model p 1", "model p 2", "model p 3"],
      },
    ],
  },
  {
    title: "Pack Tack",
    links: {
      git: "https://github.com/Wot42/Pack_Tack",
      video: "",
      hosted: "https://pack-tack.netlify.app/",
    },
    images: [
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW1rMHFvazg1eXQwMGF6aXN5MnB1Nmd6NnNqbWZhZXh0bTMwdmhpbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MBJI2aAekmqBkR6ifY/giphy.gif",
      "https://i.ibb.co/4gS1rKgK/Screenshot-2025-11-17-at-00-50-20.png",
      "https://i.ibb.co/tjcTVpT/Screenshot-2025-11-17-at-00-59-53.png",
    ], // location of the image file(s)
    altTexts: [
      "Move Walls to change the shortest path.",
      "Built to scale.",
      "Vertical view.",
    ],
    info: [
      {
        h3: "Project idea",
        cardP: ["A puzzle game."],
        modelP: [
          "A puzzle game inspired by a board game I like. During my boot camp I didn’t like how little time was given to Javascript so I coded this on my commute to and from the course to get some extra experience.",
        ],
      },
      {
        h3: "Tools used",
        cardP: [
          "The project was made with pure html, css and Javascript. No add on’s",
        ],
        modelP: [
          "The project was made with pure html, css and Javascript. No add on’s",
        ],
      },
      {
        h3: "My part",
        cardP: ["I did everything from art to code."],
        modelP: [
          "I did everything from art to code. I designed the game inspired by a boardgame I like but modified it to be a better solo experience and set the scope to something I could get working by the end of my course (which I did). I was half teaching myself Javascript, so as I went I had to restart a few times. I tried to optimise performance, including having different pathfinding systems for different situations.",
        ],
      },
    ],
  },
  {
    title: "Hex Grid",
    links: {
      git: "https://github.com/Wot42/hex-bacground",
      video: "",
      hosted: "https://hexbackgroundwot.netlify.app/",
    },
    images: [
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHQxNmp2Nnh0NWliZzNiMjNwZDZ1YTJ2N2luc2ppYWgxbnpicDlpbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HRpGfRUzoglA7duAzT/giphy.gif",
      "https://i.ibb.co/tPpyRL21/Screenshot-2025-11-16-at-12-54-48.png",
      "https://i.ibb.co/zT8NrswP/Screenshot-2025-11-16-at-13-00-01.png",
    ], // location of the image file(s)
    altTexts: [
      "Lights follow mouse and explodes on click.",
      "Growing and shrinking hexes.",
      "Explosion.",
    ],
    info: [
      {
        h3: "Project idea",
        cardP: ["A cool background/art piece."],
        modelP: [
          "An art piece I made to serve as a cool background for a website. I converted this to React and svg files for the background or my portfolio page.",
        ],
      },
      {
        h3: "Tools used",
        cardP: ["The project was made with Javascript for the html canvas."],
        modelP: ["The project was made with Javascript for the html canvas."],
      },
      {
        h3: "My part",
        cardP: ["A solo project, so I did everything."],
        modelP: [
          "I was inspired by the background on Terry Pratchett's author site but ended up with a very different look using similar techniques.",
        ],
      },
    ],
  },
  {
    title: "Leap Block",
    links: {
      git: "https://github.com/Wot42/leap_block",
      video: "",
      hosted: "https://leapblock.netlify.app/",
    },
    images: [
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjd4dmJsNm05emo0dDE1OW9reW9ucjQ4bnFyaGxnaGQ4OWM0aHRweSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8xMSDWqtNTg97PjOmQ/giphy.gif",
      "https://i.ibb.co/gZpPGJ2G/Screenshot-2025-11-17-at-00-58-10.png",
      "https://i.ibb.co/gZWJVzRg/Screenshot-2025-11-16-at-14-04-05.png",
    ], // location of the image file(s)
    altTexts: [
      "Drag boxes over each other to match the goal.",
      "Multiple difficulties",
      "Vertical view.",
    ],
    info: [
      {
        h3: "Project idea",
        cardP: ["A puzzle game."],
        modelP: [
          "A puzzle game inspired by a board game I like which I changed to be a solo and streamlined experience.",
        ],
      },
      {
        h3: "Tools used",
        cardP: [
          "The project was made with React and Typescript as well as using Framer Motion for the animations.",
        ],
        modelP: [
          "The project was made with React and Typescript as well as using Framer Motion for the animations.",
        ],
      },
      {
        h3: "My part",
        cardP: ["A solo project, so I did everything."],
        modelP: [
          "I wrote the game code in Typescript, used React to make the interface and used Framer Motion to add the animations.  I then made a puzzle generator for players to solve.",
        ],
      },
    ],
  },
  {
    title: "Switcher",
    links: { git: "Switch_Sale_Sorter", video: "", hosted: "" },
    altTexts: [
      "User view where they can block games.",
      "Logged out view. Sides are colour coded to the users.",
    ],
    images: [
      "https://i.ibb.co/9HQMt4Ys/Screenshot-2025-11-16-at-13-46-14.png",
      "https://i.ibb.co/qL4z2v1v/Screenshot-2025-11-16-at-13-40-43.png",
    ], // location of the image file(s)
    info: [
      {
        h3: "Project idea",
        cardP: [
          "A site that searched for sales for the Nintendo Switch and offered searching and user preference options the official site lacks.",
        ],
        modelP: [
          "A site that searched for sales for the Nintendo Switch. We added new search criteria such as ordering items by sale end date which the official website lacks.  When users are signed in, they can select games of no interest to be hidden from future searches.",
        ],
      },
      {
        h3: "Tools used",
        cardP: ["The project was made with Ruby on Rails"],
        modelP: ["The project was made with Ruby on Rails"],
      },
      {
        h3: "My part",
        cardP: [
          "I ran the team and worked on the backend including scraping the official site, working with their api and setting up our own api to update user preferences.",
        ],
        modelP: [
          "I pitched the project at the end of my bootcamp and ran the team of 4 working on it. As a coder, I worked on the backend including scraping the official site for images and text of games, working with their api to obtain sale data and setting up our own api to update user preferences on our servers.",
        ],
      },
    ],
  },
];
