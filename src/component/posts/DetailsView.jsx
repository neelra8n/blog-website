import { Box, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import {Link} from 'react-router-dom';

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {getPostById, deletePostById} from '../../services/api'

//icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const imgUrl = "https://images.unsplash.com/photo-1643944398479-0fd9eaee5cbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80";

const useStyles = (theme)=>({
    container: {
        // padding: '0 30px',
        background: `url(${imgUrl}) center/cover repeat-x #000`,
        height: '360px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ovrflow: 'hidden',
        margin: '0 0 30px 0',
        '& > *': {
            fontSize: '8vw!important',
            color: '#fff',
            fontWeight: 'bold!important',
            letterSpacing: '20px!important'
        }
    },
    img :{
        height: '360px',
        width: '100%',
        objectFit: 'cover',
    },
    icons:{
        float: 'right',
        display: 'block',
        '& > *' : {
            margin: '1px 10px',
        },
    },
    editIcon : {    
        background: 'rgba(112, 134, 134, 0.3)',
        borderRadius: '10px',
        padding: '4px 0',
    },
    deleteIcon:{
        background: 'rgba(112, 134, 134, 0.3)!important',
        borderRadius: '10px',
        padding: '3px 0',
    },
    main: {
        padding: '0 5%'
    },
    title: {
        padding: 'inherit',
        fontSize: '34px!important',
        fontWeight: '600!important',
        letterSpacing: '2px!important',
        textAlign: 'center',
    },
    subHeading: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '#7C99AC',
        padding: '0px 15px',
        '& > *':{
            fontSize: '12px!important',
            '& >*': {
                fontWeight: '600'
            }
        }
    },
    discription: {
        padding: '20px 15px'
    },
    link: {
        textDecoration: 'none',
        color : 'inherit'
    }

})

const DetailsView = (props) =>{
    const {classes} = props;
    const [post, setPost] = useState({});

    let {id} = useParams();

    const navigate = useNavigate();

    useEffect(()=>{
        const  getPostDetails = async () => {
            let response = await getPostById(id);
            setPost(response.data);
        }
        getPostDetails();    
    },[id])

    const deletePost = async () => {
        await deletePostById(id);
        navigate(`/ghumakkad-blog/`);
        
    }
  
    
    return(
        <Box className={classes.main}>
            <Box className={classes.container}>
                {/* <Typography>{post.title}</Typography> */}
                <img src={post.picture ? post.picture : imgUrl} alt="headImage" className={classes.img} />
            </Box>
            <Box className={classes.icons}>
                <DeleteIcon 
                onClick = {()=>deletePost()}
                className={classes.deleteIcon} fontSize="medium" 
                color="error"
                />
                <Link to={`/ghumakkad-blog/update/${id}`} ><EditIcon className={classes.editIcon} color="primary" fontSize="medium" /></Link>
            </Box>
            <Typography className={classes.title}>{post.title}</Typography>
            <Box className={classes.subHeading}>
                <Link to={`/ghumakkad-blog/?username=${post.username}`} className={classes.link}>
                    <Typography>Author: <span>{post.username}</span></Typography>   
                </Link>
                <Typography>{new Date(post.createdDate).toDateString()}</Typography>
            </Box>
            <Typography className={classes.discription}>
                {post.discription}
            </Typography>
        </Box>
    )
}

export default withStyles(useStyles)(DetailsView);