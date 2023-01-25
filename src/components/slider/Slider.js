import React from 'react';
import { Link } from 'react-router-dom';

import Slider from 'react-slick';
import './slider.css';

import { blogs } from '../../data/blog/blog';

export default function SimpleSlider() {
  console.log(blogs);

  const blogItems = blogs.map((blog) => {
    return (
      <div key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>
          <img src={blog.image} alt={blog.title} />
        </Link>
      </div>
    );
  });

  const settings = {
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-blog mb-5" >
      <div className="blog-container container">
        <h2>RECENT BLOGS</h2>
        <Slider {...settings}>{blogItems}</Slider>
      </div>
    </div>
  );
}
