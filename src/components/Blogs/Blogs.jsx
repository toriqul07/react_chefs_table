import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';
const Blogs = ({handleAddToBookmark}) => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json').then(res => res.json()).then(data => setBlogs(data));
    },[])
    return (
        <div className="md:w-2/3 grid grid-cols-2 gap-4">
            {/* <h1 className="text-3xl font-bold">Blog: {blogs.length}</h1> */}
            {
                blogs.map(blog => <Blog key={blog.recipe_id} blog={blog}
                    handleAddToBookmark={handleAddToBookmark}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    handleAddToBookmark:PropTypes.func
}
export default Blogs;