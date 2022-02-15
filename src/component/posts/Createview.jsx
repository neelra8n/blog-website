import { Box, Button, FormControl, InputBase } from "@mui/material";
import {makeStyles} from '@mui/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { TextareaAutosize } from "@mui/material";

import { useEffect, useState } from "react";
import { createPost, uploadFile } from '../../services/api'
import {useNavigate} from 'react-router-dom';

const useStyles = makeStyles({
    image : {
        display: 'block',
        width: '100%',
        margin: 'auto',
        height: '40vh',
        objectFit: 'cover'
    },
    container:{
        overflow: 'hidden',
        padding: '0 5%',
    },
    form : {
        width: '100%',
        display: 'flex',
        flexDirection: 'row!important',
        margin: '20px 0!important',
    },
    inputbase : {
        margin: '0 50px',
        fontSize: '34px!important'

    },
    button: {
        height: '40px',
        width: '10em'
    },
    textarea: { 
        width: '100%',
        border: 'none',
        fontSize: '18px',
        margin: '30px',
        '&:focus-visible':{
            outline: 'none'
        }
    }

})


const initialValue = {
    title: '',
    discription: '',
    picture: '',
    username: 'neel',
    categories: 'All',
    createdDate: new Date(),
}


const Createview = () =>{
    const url = "https://images.unsplash.com/photo-1643864839453-0203e40da92c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

    const [post , setPost] = useState(initialValue);
    const [file, setFile] = useState('');
    const navigate = useNavigate();
    const classes = useStyles();

    const handleChange = (e) => {
        e.preventDefault();
        setPost({...post,[e.target.name]:e.target.value});
         
    }

    useEffect(()=>{
        const getImageData = async () => {
            if(file){
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const image = await uploadFile(data);
                post.picture = image.data;
            }
        }
        getImageData();
    } ,[file, post])

    const savePost = async () => {
        await createPost(post);
        navigate('/ghumakkad-blog/')
    }

    return (
        <Box className={classes.container}>
            <img src = {post.picture ? post.picture : url} alt = "imageTitle" className = {classes.image} />

            <FormControl className={classes.form}>
                <label htmlFor="fileInput">
                    <AddCircleIcon 
                    fontSize="large" 
                    color="action"
                    />
                </label>
                <input 
                type="file"
                id= "fileInput" 
                style={{display:'none'}}
                onChange={(e)=>setFile(e.target.files[0])}
                />
                <InputBase placeholder="Title" fullWidth={true} className={classes.inputbase} 
                onChange={(e)=>handleChange(e)}
                name="title"
                />
                <Button 
                variant="contained"
                className={classes.button}
                onClick={()=>savePost()}
                >Publish</Button>
                
            </FormControl>
            <TextareaAutosize 
            placeholder="tell me more..."
            className={classes.textarea}
            onChange={(e)=>handleChange(e)}
            name="discription"
            />
        </Box>
   )
}

export default Createview;