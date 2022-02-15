import { Button, Table, TableBody, TableCell, TableHead, TableRow, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, NavLink } from "react-router-dom";

import { categories } from "../../constants/data";


const useStyles = makeStyles((theme)=>({
    create: {
        margin: '20px 7%!important',
        background: '#798686!important',
        fontWeight: 'bold!important',
        width: '86%',
        letterSpacing: '0.3em!important',
    },
    container: {
        alignItems: 'center'
    },
    table: {
        border: '1px solid rgba(224,224,224,1)'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
    }))


const Categories = () => {
    const classes = useStyles();
    return (
        < >
        <Box className={classes.container}>
            <NavLink to='/ghumakkad-blog/create' style={{textDecoration: "none"}} >
                <Button variant="contained" className={classes.create}>Create Blog</Button>
            </NavLink>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <Link to={`/ghumakkad-blog/`} className={classes.link}>
                            <TableCell>All Categories</TableCell>
                        </Link>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow>
                                <TableCell key={category}>
                                    <Link to={`/ghumakkad-blog/?category=${category}`} 
                                    className={classes.link} > 
                                        {category}
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </Box>
        </>
    )
}

export default Categories;