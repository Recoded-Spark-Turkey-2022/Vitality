import React from 'react';

function About() {
  return (
    <div>
      <div className="">
        <h1 className="font-[400] text-4xl ml-24">HEALING!</h1>
        <h4 className="text-[#00000080] ml-24 mb-12">some cool one liner !</h4>
      </div>
      <div className="text-[#424A4F] ml-24 mr-20 mb-36">
        <p>At Healing, we believe there is a better way to do things. A more valuable way where customers are earned rather than bought. We&apos;re obsessively passionate about it, and our mission is to help people achieve it. We focus on search engine optimization. It&apos;s one of the least understood and least transparent aspects of great marketing, and we see that as an opportunity. We&apos;re excited to simplify SEO for everyone through our software, education, and community.</p>
      </div>
      <div className="flex ... flex-row flex-wrap  bg-[#EAF8F9]">
        <div className=''>
          <img src="https://i.pinimg.com/736x/8c/11/82/8c1182b7336177e95679f5e1c8a1d7c2.jpg" alt="foto" className="flex-initial w-64 h-52 ... mr-14 mt-14 ml-24 mb-9" />
        </div>
        <div className=' flex-1 mt-20  '>
          <h1 className="text-[#424A4F] text-3xl space-y-36 mb-7">Our Founding</h1>
          <p className=" mr-20">Healing was founded by Payam Abubakr in 2021. It was called Healing Online, and started as a blog and an online community where some of the world&apos;s therapists shared their research and ideas. We launched the Beginner&apos;s Guide to Therapy and our first study, and that hub of industry expertise transformed into a small consulting firm and led us to create the Online Therapist of today!</p>
        </div>
      </div>
    </div>
  );
}

export default About;