import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";


const useStyles = makeStyles({
    box: {
        background: `url(${'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=919&q=80'}) center/cover repeat-x #000`,
        height: '350px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        

        '& > *': {
            transform: 'translate(0, -10%)',
            letterSpacing: '0.6rem!important'
        },
        '& :first-child': {
            fontSize: '60px',
            paddingBottom: '10px',
            color: 'white',
            lineHeight: 1,
        },
        '& :last-child': {
            fontSize: '20px',
            background: '#fff',
            fontWeight: 'bold',
            borderRadius: '10px',
            width: '240px',
            display: 'flex',
            justifyContent: 'center'
        }
    }
})

const Banner = () => {
    const classes = useStyles();

    return (
        <>
           <Box className={classes.box}>
                <Typography>Neel</Typography>
                <Typography>Ghumakkad</Typography>
           </Box>
        </>
    )
}

export default Banner;