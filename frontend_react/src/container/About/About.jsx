import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { images } from "../../constants";
import "./About.scss";
import { urlFor, client } from "../../client";
import { AppWrap } from "../../wrapper";

// const about=[
//   {title: 'Cosmology',
// description:'I\'ve read so many books and listened to many podcasts on Astronomy and Cosmology. I am also enthusiastic and keen in learning it and pursuing it full time as a passion.',
// imgUrl:images.about01},
// {title: 'Web Development',
// description:'I\'ve prior knowledge in CSS frameworks like tailwindCSS, materializeCSS, SASS, BootStrap etc. Beside that I also know ',
// imgUrl:images.about02},
// {title: 'Web Development',
// description:'I am a good web developer',
// imgUrl:images.about03},
// {title: 'Web Development',
// description:'I am a good web developer',
// imgUrl:images.about01}
// ];
const About = () => {
  const [abouts, setabouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setabouts(data));
  }, []);
  return (
    <div className="app__about">
      <h2 className="head-text">
        I Write<span> Good Code</span> <br />aiming for{" "}
        <span>World to be a better place.</span>
      </h2>
      <div className="app__about app__profiles">
        {abouts.map((About, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={About.title + index}
          >
            <img src={urlFor(About.ImgUrl)} alt={About.Title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {About.Title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {About.Description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(About, "About");
