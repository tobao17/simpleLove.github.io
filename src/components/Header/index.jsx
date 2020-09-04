import React from "react";
import { Typography, Avatar, Grid, Box, ListItem } from "@material-ui/core";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../../mygirl.png";
import { Favorite } from "@material-ui/icons";
const date1 = new Date("2/27/2020");
const date2 = new Date();
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
const useStyle = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  subday: {
    position: "absolute",
    top: "80%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vm",
    textAlign: "center",
  },
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vm",
    textAlign: "center",
  },
}));
function Header(props) {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.container}>
        <Grid container justify="center">
          <Avatar className={classes.avatar} src={avatar}></Avatar>
        </Grid>

        <Typography className={classes.title} variant="h5">
          <Typed strings={["Pham To Bao17"]} typeSpeed={40} />
        </Typography>
        <br />
        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={[
              "Web design",
              "Mern afdsfasdafad fsasdfasd fasdfasdf sdfasdfaadfstack",
            ]}
            typeSpeed={40}
            backSpeed={40}
            loop
          />
        </Typography>
      </Box>
    </>
  );
}

export default Header;
