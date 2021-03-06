const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://motohoy122.github.io/alex-hoyer--portfolio/',
  title: 'AH.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Alex Hoyer',
  role: 'Front-End Developer',
  description:
    'Creative React developer with three years of experience delivering web applications to clients. Skilled at connecting creative UI frameworks to functional assets that deliver a smooth experience to the user. Created a subcontractor scheduling application to allocate resources, crews and tasks, which resulted in the company\'s field efficiency improving by 8%.',
  resume: 'https://drive.google.com/file/d/144hvx1jBuHunjCe9FbgTFlcMAKY0TQKs/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/alex-hoyer-479255158/',
    github: 'https://github.com/Motohoy122',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Dev Connect',
    description:
      'Dev Connect is an online social media site specifically for developers. Developers have the opportunity to share their work, link their github repositories through the github API, highlight their education and professional accomplishments. This application was built with the MERN stack and is hosted on heroku. MongoDB atlas stores all of the applications data, Express and Node.js create the server functionality and React was used for the frontend. Key components include user authentication, private routing after logging in and a fully functional api.',
    stack: ['MongoDB', 'ExpressJs', 'React', 'Redux', 'Node.js', 'heroku'],
    sourceCode: 'https://github.com/Motohoy122/dev-connect',
    livePreview: 'https://floating-shelf-33514.herokuapp.com/',
  },
  {
    name: 'Disney+ Clone',
    description:
      'A clone of the disney plus web application. The app utilizes the power of firebase to allow users to make an account through google authentication and host the application. Within Firebase, the Firestore manages the data for each movie within the movies database.  Redux was implemented to control the state of the user???s logged in status and the state of the movie information within the database. The styled-components library was downloaded from npm to style components and make them mobile responsive within the .js component files.',
    stack: ['Firebase', 'Redux', 'styled-components'],
    sourceCode: 'https://github.com/Motohoy122/disney-plus-clone',
    livePreview: 'https://disney-plus-clone-523b8.web.app/',
  },
  {
    name: 'Smart-Brain',
    description:
      'An application that will recognize a face in any image that is provided to it and insert a box around the individual\'s face utilizing the clarifai AI image recognition API. The app has its own server utilizing Node and Express, which allows for management of user authentication and the user data in the database. The Tachyon library was used to style the react components.',
    stack: ['AI Image Recognition API', 'Node', 'Express', 'Tachyons'],
    sourceCode: 'https://github.com/Motohoy122/smart-brain',
    livePreview: 'https://smart-brain-front-end-alex.herokuapp.com/',
  },
  {
    name: 'Robofriends',
    description:
      'The application receives a list of randomized robots through an API, each robot is displayed in a card along with their name and contact information. A user can search through the list by typing into the search box, and the robots will be filtered out upon each keystroke. The state of the information within the search box is managed by Redux for the robot filtering functionality to take place. The Jest library was utilized to test that the api was sending the JSON formatted robot information and Tachyons were used for styling the components.',
    stack: ['API', 'Jest', 'Redux', 'Tachyons'],
    sourceCode: 'https://github.com/Motohoy122/robofriends',
    livePreview: 'https://motohoy122.github.io/robofriends/',
  },
  {
    name: 'Merchant Candy',
    description:
      'This is a mockup of Merchant Candy\'s checkout process. The frontend was built using react and material UI. It wasn\'t intended to have full checkout functionality, it was built strictly for the aesthetic look. The app is utilizing React hooks, such as useState and useEffect to manage the state and change the visual components throughout the checkout process.',
    stack: ['React', 'Material UI'],
    sourceCode: 'https://github.com/Motohoy122/robofriends',
    livePreview: 'https://motohoy122.github.io/robofriends/',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'MongoDB',
  'ExpressJs',
  'Node.js',
  'Firebase',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'alexhoyer22@gmail.com',
}

export { header, about, projects, skills, contact }
