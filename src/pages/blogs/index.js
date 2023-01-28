import React from 'react'
import blogs from './blogs.jpg'
import blogs1 from './blogs_1.jpg'
import blogs2 from './blogs_2.png'
import './blogs.css'

function Blogs() {
  return (
    <div>
      <img src={blogs} alt='blog' className='blog_img'/>
      <h1 className='blog_text'>Mental Health and Technology</h1>
      <p className='para1'>Technology and mental well-being might seem like profoundly antagonistic terms. However, there are excellent digital tools to help you reach mindfulness and to practice meditation. You can even use smartphone apps, virtual reality solutions and digital devices as a form of relieving stressing and achieving digital detox – as, after a while, you will be able to practice all types of anti-anxiety skills on your own. So, let The Medical Futurist show you how you can enhance your mental and emotional health with the help of technology.</p>
      <h1 className='blog_text'>The need for taking care of our emotional health</h1>
      <p className='para1'>“Just as we observe physical hygiene to stay well, we need to cultivate a kind of emotional hygiene too,” wrote the Dalai Lama on his Twitter-feed. There are three crucial points around His Holiness’ statement. First and foremost, the popularity of health-enhancing, physically active lifestyle is soaring worldwide. Nevertheless, there’s always room for improvement: the WHO says that globally, 23 percent of adults and 81 percent of school-going adolescents are not active enough. According to the organization, adults aged 18-64 should do at least 150 minutes of moderately intense physical activity each week, which is not unaccomplishable. Moreover, the numerically and statistically driven 21st-century mind could take a great inspiration and power from the various fitness trackers and wearables.</p>
      <p className='para1'>Secondly, emotional hygiene seems to be thrown into the shade nowadays. Somehow, the culture of busyness prevents us from squeezing some time for mental health into our packed schedules. Information is pouring on us from millions of communication channels; we are connecting with hundreds of ‘friends’ on social media, we are obsessed with data due to the fear of missing out and time management slices up our days into meetings and to-do-lists.</p>
      <p className='para1'>The pressure to perform and the stress to achieve is the air every busy-bee is breathing. However, turbulent lifestyle comes with a price. No wonder so many people have mental health issues. In the US, that means one in five adults – more than 40 million Americans! On the old continent, 27 percent of the population has to cope with mental disorders, which means 83 million struggling Europeans. In Asia, the prevalence of depression is 20 percent in Thailand, 19.9 percent in Taiwan, 19.4 percent in Korea, 17.5 in Malaysia and 16.5 percent in China.</p>
      <h1 className='blog_text'>Sign up for The Healing blog</h1>   
      <h2 className='blog_text'>A weekly, ad-free Blog that helps you stay in the know.</h2>

      <div className='con_blog'>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control sub-input"
                placeholder="Enter your e-mail"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="sub-btn d-flex align-items-center justify-content-center"
                type="button"
                id="button-addon2"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6327 12.3673L8.04212 14.5401C7.59967 14.7861 7.05302 14.7438 6.65376 14.4325L0.486233 9.74981C-0.307758 9.13085 -0.0922473 7.87688 0.862835 7.55852L23.3377 0.0669056C24.3237 -0.261766 25.2618 0.676297 24.9331 1.66231L17.4415 24.1372C17.1231 25.0922 15.8691 25.3078 15.2502 24.5138L10.5675 18.3462C10.2562 17.947 10.2139 17.4003 10.4599 16.9579L12.6327 12.3673Z"
                    fill="#1A1A1A"
                  />
                </svg>
              </button>
            </div>
          </div>
          <h2 className='blog_text'>Recommended for you</h2>
          <div className='con_img'>
            <img src={blogs1} alt='blogs_1'/>
            <img src={blogs2} alt='blogs_2'/>
          </div>
    </div>
    
  )
}

export default Blogs