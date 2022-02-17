import React from "react";
import BlogItem from "./BlogItem";
import classes from './BlogList.module.css';

const BlogList = (props) => {

    return (
        <ul className={classes.list}>
            { props.blogs.map( blog => (
                <BlogItem title={blog.title} content={blog.content} key={blog.title}></BlogItem>
            )) }
        </ul>
    )
        
    
}

export default BlogList;