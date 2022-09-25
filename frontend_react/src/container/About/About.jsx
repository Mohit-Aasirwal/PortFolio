import React,{ useState, useEffect } from 'react'
import {motion} from 'framer-motion'
import {images} from'../../constants'
const about=[
  {title: 'Cosmology',
description:'I\'ve read so many books and listened to many podcasts on Astronomy and Cosmology. I am also enthusiastic and keen in learning it and pursuing it full time as a passion.',
imgUrl:images.about01},
{title: 'Web Development',
description:'I\'ve prior knowledge in CSS frameworks like tailwindCSS, materializeCSS, SASS, BootStrap etc. Beside that I also know ',
imgUrl:images.about02},
{title: 'Web Development',
description:'I am a good web developer',
imgUrl:images.about03},
{title: 'Web Development',
description:'I am a good web developer',
imgUrl:images.about01}
];
const About = () => {
  return (
    <div>
      <h2 className='head-text'>I Know that
      <span>Good Design</span>
     <br />
      means
      <span>Good Business</span>
      </h2>
      <div className='app__profiles'>
        {about.map((about,index)=>(
          <motion.div
          whileInView={{opacity: 1}}
          whileHover={{scale:1.1}}
          transition={{duration: 0.5, type:'tween'}}
          className="app__profile-item"
          key={about.title+index}>
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
             <p className="p-text" style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default About