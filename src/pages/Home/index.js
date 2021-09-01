import { Container } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { ConCard } from '../../components/Card'
import Navbar from '../../components/Navbar'
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
//  import { getData } from '../../Api';

const useStyles = makeStyles({
    optionBtn: {
        display: "flex-row",
        color: "red"
    },
    likedLink: {
        marginRight: "auto",
        display: "flex",
        justifyContent: "right"
    }
});

export const Home = (props) => {
    const classes = useStyles();

    const [data, setData] = useState(null);

    useEffect(() => {
        // setData(getData())
        axios.get(`https://restcountries.eu/rest/v2/all`).then((response) => {
            setData(response.data);
        });
        if (!data) return null;
    }, []
    )
    const [like, setLike] = React.useState(true);
    const likePost = () => {
        setLike(!like);

    }
    console.log("data =" + data)
    return (

        <div>
            <Navbar />
            <Container style={{ marginTop: "5rem", display: "flex", flexWrap: "wrap" }} >

                <ConCard
                    img="https://restcountries.eu/data/afg.svg"
                    liked={like}
                    name="Afaganistan">

                    <IconButton size="small" className={classes.optionBtn} onClick={likePost}>
                        {like ? <AiFillHeart size={30} /> : <AiOutlineHeart size={30} />}
                    </IconButton>
                    {like ? <div className={classes.likedLink}>
                        <Link to="/saved"> <Typography variant="body" color="textPrimary" component="p">
                            Go to saved
                        </Typography> </Link>
                    </div> : null}
                </ConCard>
                {
                    data ? (data.slice(0, 11).map(place => {
                        return (
                            <section key={place.name} >
                                <ConCard
                                    img={place.flag}
                                    liked={like}
                                    name={place.name} >

                                    <IconButton size="small" className={classes.optionBtn} onClick={likePost}>
                                        {like ? <AiFillHeart size={30} /> : <AiOutlineHeart size={30} />}
                                    </IconButton>
                                    {like ? <div className={classes.likedLink}>
                                        <Link to="/saved"> <Typography variant="body" color="textPrimary" component="p">
                                            Go to saved
                                        </Typography> </Link>
                                    </div> : null}
                                </ConCard>
                            </section>
                        );
                    })) : null
                }



            </Container>
        </div>
    )

}
