import React from 'react';
import BlogList from '../../components/blog/BlogList';

function Blog(props) {
  return (
    <React.Fragment>
      <BlogList blogs={props.blogs}></BlogList>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  // const wpdata = await fetch('https://blog-wpstg.iselect.com.au/wp-json/wp/v2/posts');
  // const data = await wpdata.json();
  const data = [
    {
      title: "test",
      content: "content"
    }
  ]
  return {
    props: {
      // blogs: data.map( d => ({
      //   title: d.title.rendered,
      //   content: d.content.rendered 
      // }))
      blogs: data
    },
    revalidate: 2,
  };
}

export default Blog;
