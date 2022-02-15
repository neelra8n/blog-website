import { Box, Button, FormControl, InputBase } from "@mui/material";
import {makeStyles} from '@mui/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { TextareaAutosize } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostById, updateSinglePost, uploadFile } from "../../services/api";

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

const UpdateView = () =>{
    const url = "https://images.unsplash.com/photo-1643864839453-0203e40da92c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    const classes = useStyles();
    const [post, setPost] = useState(initialValue);
    const [file, setFile] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        const getDetails = async () =>{
            const postDetails =  await getPostById(id);
            setPost(postDetails.data)
        }
        getDetails();
    },[id]);


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




    const handleChange = (e) => {
        e.preventDefault();
        setPost({...post,[e.target.name]:e.target.value });
    }
    const updatePost = async () => {
        await updateSinglePost(id, post);
        navigate(`/ghumakkad-blog/details/${id}`);
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
                {/* <AddCircleIcon fontSize="large" color="action"/> */}
                <InputBase
                    placeholder="Title"
                    fullWidth={true}
                    className={classes.inputbase}
                    name="title"
                    value={post.title}
                    onChange={(e)=>handleChange(e)}
                    />
                <Button 
                    variant="contained"
                    className={classes.button}
                    onClick={()=>updatePost()}
                    >Update</Button>
                
               
            </FormControl>
            <TextareaAutosize 
            placeholder="tell me more..."
            name="discription"
            value={post.discription}
            onChange={(e)=>handleChange(e)}
            className={classes.textarea}/>
        </Box>
    )
}

export default UpdateView;