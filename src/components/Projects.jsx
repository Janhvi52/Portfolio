import './Projects.css';
import item1 from '../assets/item11.png';
import item2 from '../assets/item2.jpg';
import item3 from '../assets/threejs.jpg'
import {BsGithub} from "react-icons/bs";
import {FiLink} from "react-icons/fi";

const data =[
  {
    id: 1,
    image: item1,
    title:'Femmcare',
    text:'A platform that provides users to converse over the globe though a ChatRoom.Further Users can add notes, thoughts and espy Graph of Emotions, Word Cloud and track Mental Health through it.Uses Socket.io for ChatRoom and Node JS, Express JS for implementing client and server sides.React JS and Tailwind CSS for applications UI .HTML and Pure JS for Mental Health implementation.',
    github:'https://github.com/Janhvi52/TechMonk',
    demo:'https://tech-monk-femmcare.vercel.app/'
  },
  {
    id: 2,
    image: item2,
    title:'Cocktail Maker Game',
    text:'A platform that provides users to converse over the globe though a ChatRoom.Further Users can add notes, thoughts and espy Graph of Emotions, Word Cloud and track Mental Health through it.Uses Socket.io for ChatRoom and Node JS, Express JS for implementing client and server sides.React JS and Tailwind CSS for applications UI .HTML and Pure JS for Mental Health implementation.',
    github:'https://github.com/Janhvi52/desktop-ddg',
    demo:'https://desktop-ddg.vercel.app/'
  },
  {
    id: 3,
    image: item3,
    title:'A 3D Portfolio Website',
    text:'An Animated 3D Portfolio Website built using Next.js ,Three.js, GSAP, Tailwind CSS.',
    github:'NA',
    demo:'https://drive.google.com/file/d/1F3HsLepSwwk5RNsOLYAzRX0glscTeG4c/view?usp=sharing'
  },
  // {
  //   id: 4,
  //   image: item1,
  //   title:'Femmcare',
  //   text:'A platform that provides users to converse over the globe though a ChatRoom.Further Users can add notes, thoughts and espy Graph of Emotions, Word Cloud and track Mental Health through it.Uses Socket.io for ChatRoom and Node JS, Express JS for implementing client and server sides.React JS and Tailwind CSS for applications UI .HTML and Pure JS for Mental Health implementation.',
    
  //   github:'https://github.com/Janhvi52/TechMonk',
  //   demo:'tech-monk-femmcare.vercel.app/'
  // },
]

const Projects = () => {
  return (
    <div id='projects'>
    <h2>Some of my Recent Work</h2>
    <div className='container portfolio_container'>
 {
  data.map(({id,image,title,github,demo,text})=>{
    return(
      <article key={id} className='portfolio_item'>
        <div className='portfolio_item-image'>
        {/* <p className='textt'>{text}</p> */}
        <img src={image} alt="image1"/>
        </div>
          <h3>{title}</h3>
          <div className='button_proj'>          
          <a href={github} className='btn'>GitHub <BsGithub/></a>
          <a href={demo} target='_blank' rel="noreferrer" className='btn btn-primary'>Live <FiLink/></a>
      </div>
</article>
    )
  })
 }
    
    </div>
    </div>
  )
}

export default Projects