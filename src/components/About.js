import React from 'react';
import './components.css';

function About() {
    return (
        <div>
        <div className="top">
         <h1 className="one">{'HEALING!'}</h1>
         <p className="tow">{'some cool one liner !'}</p>
         </div>
         <div className="middle">
           <p>At Healing, we believe there is a better way to do things. A more valuable way where customers are earned rather than bought. We're obsessively passionate about it, and our mission is to help people achieve it. We focus on search engine optimization. It's one of the least understood and least transparent aspects of great marketing, and we see that as an opportunity. We're excited to simplify SEO for everyone through our software, education, and community.</p>
         </div>
         <div className="bottom">
         <div >
           <img src="https://i.pinimg.com/736x/8c/11/82/8c1182b7336177e95679f5e1c8a1d7c2.jpg" className="foto" />
         </div>
         <div>
           <h1 className="Founding">{'Our Founding'}</h1>
           <p className="para">Healing was founded by Payam Abubakr in 2021. It was called Healing Online, and started as a blog and an online community where some of the world's therapists shared their research and ideas. We launched the Beginner's Guide to Therapy and our first study, and that hub of industry expertise transformed into a small consulting firm and led us to create the Online Therapist of today!</p>
           </div>
   </div>
         </div>
    );
  }

  export default About;