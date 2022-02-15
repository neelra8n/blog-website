import { Grid } from "@mui/material";
import Banner from "./Banner";
import Categories from "./Categories";
import Posts from "./Posts";

const Home = () => {
    return (
        <>
            <Banner />
            <Grid container>
                <Grid item lg={3} xs={12} sm={12} md={3}><Categories /></Grid>
                <Grid container item lg={9} xs={12} sm={12} md ={9}><Posts /></Grid>
            </Grid>
        </>
    )
}

export default Home;