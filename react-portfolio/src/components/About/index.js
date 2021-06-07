import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          I'm a very tired full time student and finishing this bootcamp was a good decision, the sleepless nights were worth all of this glory. 
          But in better news, my demon summoning skills have gotten better and who knows, maybe I'll be a coding witch. A coding
          wizard perhaps. Nonetheless, I have started to run an occult of coders and make evil schemes against Mark Zuckerberg. 
        </p>
      </div>
    </section>
  );
}

export default About;
