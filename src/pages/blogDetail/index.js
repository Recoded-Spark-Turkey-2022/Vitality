import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './blogDetail.css';
import { blogs } from '../../data/blog/blog';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (id) {
      const data = blogs.find((item) => item.id === id);
      console.log(data);
      setBlog(data);
    }
  }, [id]);

  console.log(blogs);

  if (!blog) {
    return <p>blog not found</p>;
  }

  return (
    <div key={blog.id} className="blog-detail d-flex flex-column gap-4">
      <img src={blog.image} alt={blog.title} />
      <h1> {blog.mainHeader} </h1>
      <p> {blog.mainParagraph} </p>
      <h2> {blog.subtitle} </h2>
      <p> {blog.subtitleParagraph} </p>
    </div>
  );
};

export default BlogDetail;
