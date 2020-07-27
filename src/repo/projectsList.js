import automation from '../images/react_automation.png';
import recognition from '../images/facerecognition.jpeg';
import robot from '../images/robotfriends.png';
import marvel from '../images/marvel.png';
import resume from '../images/resume.png';

const projectsList = [
  {
    name: 'React Automation',
    picture: automation,
    technos: 'React,Redux, Node, MQTT, Low level socket, MongoDB, API, Arduino',
    github:'https://github.com/adrianmonteil1983/react_automation_front',
    website:'https://practical-bell-ac50ec.netlify.app'
  },
  {
    name: 'Portfolio',
    picture: resume,
    technos: 'React, React Transition Group, Grid',
    github:'https://github.com/adrianmonteil1983/port-folio',
    website:'https://5f1e4c86b92e3aba00c7821b--sad-liskov-3bed62.netlify.app'
  },
  {
    name: 'Face Recognition',
    picture: recognition,
    technos: 'React, Node, PostgreSQL, Heroku, API',
    github:'https://github.com/adrianmonteil1983/facerecognitionbrain',
    website:'https://salty-beyond-55903.herokuapp.com/'
  },
  {
    name: 'Robots Friends',
    picture: robot,
    technos: 'React, Redux, API, PWA',
    github:'https://github.com/adrianmonteil1983/robotsfriend',
    website:'https://adrianmonteil1983.github.io/robotsfriend/'
  },
  {
    name: 'Vue Marvel',
    picture: marvel,
    technos: 'Vue, Vuex, Vue Router, API',
    github:'https://github.com/adrianmonteil1983/marvel',
    website:'https://nervous-dubinsky-1f3a6d.netlify.app'
  }
]

export default projectsList;