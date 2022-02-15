import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    container: {
        height:  '360px',
        margin: '20px 20px',
        border: '1px solid rgba(0,0,0,0.3)',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
        overflow: 'hidden',
        alignItems: 'center',
        padding: '20px 20px',
        justifyContent: 'center',

        '& > *' : {
            padding: '8px 5px',
            fontSize: '25px!important'
        }
    },
    image: {
        height: '180px',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0',
        width: '250px'
    },
    text: {
        fontSize: '12px!important',
        opacity: '0.8',
        padding: '5px 10px 1px 10px'
    },
    heading: {
        fontSize: '18px',
        fontWeight: 'bold!important',
        textAlign: 'center'
    },
    details: {
        fontSize: '12px!important',
        wordBreak: 'break-word',
    }
})


const Post = (props) => {
    const url = props.post.picture || `https://images.unsplash.com/photo-1542650742-d3150fb66298?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`
    
    const classes = useStyles();

    return (
        <Box className= {classes.container}>
            <img src={url} alt='posts' className={classes.image} />
            <Typography className = {classes.text}>{props.post.categories}</Typography>
            <Typography className = {classes.heading}>{props.post.title.substring(0,30)}</Typography>
            <Typography className = {classes.text}>Author: {props.post.username}</Typography>
            <Typography className = {classes.details}>{props.post.discription.substring(0, 80)}</Typography>
        </Box>
    )
}


export default Post;