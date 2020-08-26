import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import avatar from "../../avatar.png";
import MobilRight from "@material-ui/core/Drawer";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "bock",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: { color: "tan" },
}));
const menuIcon = [
  {
    listIcon: <Home></Home>,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd></AssignmentInd>,
    listText: "ReSume",
  },
  {
    listIcon: <Apps></Apps>,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail></ContactMail>,
    listText: "Contact",
  },
];
function Navbar(props) {
  const classes = useStyles();
  const [state, setState] = useState({ right: false });
  const handleArowIconClick = (slider, open) => {
    setState({ ...state, [slider]: open });
  };
  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={() => handleArowIconClick(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="ToBao17"></Avatar>
      <Divider></Divider>
      <List>
        {menuIcon.map((lstItem, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}>
              {lstItem.listIcon}
            </ListItemIcon>
            <ListItemText className={classes.listItem}>
              {lstItem.listText}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={() => handleArowIconClick("right", true)}>
              <ArrowBack style={{ color: "red" }}></ArrowBack>
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
            <MobilRight
              anchor="right"
              onClose={() => handleArowIconClick("right", false)}
              open={state.right}
            >
              {sideList("right")}
            </MobilRight>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
