import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import {NavLink, useLocation} from 'react-router-dom';
import Post from "./Post";

import { getAllPosts } from "../../services/api";

const useStyles = makeStyles({
    box: {
        // border: '1px solid black',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > *' : {
            textDecoration : 'none',
            color: 'inherit'
        }   
    }
})


const Posts = () => {
    const [posts, setPosts] = useState([]);
    let {search} = useLocation();
    useEffect(()=>{
        const fetchPosts = async () => {
            let allPosts = await getAllPosts(search);
            setPosts(allPosts);
        }
        fetchPosts();
    },[search])
    const classes = useStyles()
    return (
        <Box className={classes.box}>
            {
                posts.map(post=>(
                    <NavLink to={`/ghumakkad-blog/details/${post._id}`}>
                        <Post
                         post={post}
                         
                    /></NavLink> 
                ))
            }
        </Box>
    )
} 

export default Posts;