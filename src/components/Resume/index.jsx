import React from "react";

import Navbar from "../Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
const useStyle = makeStyles((theme) => ({
  mainContainer: {
    background: "#223",
  },
  timeline: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    position: "relative",
    color: "white",
    lineHeight: 1,
    padding: "1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",

      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: 0,
    textTransform: "uppercase",
  },
}));
function Resume(props) {
  const classes = useStyle();
  return (
    <>
      <Navbar></Navbar>
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          working expreience
        </Typography>
        <Box component="div" className={classes.timeline}>
          <Typography className={` ${classes.timeLineYear} `} variant="h2">
            2013
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Web design
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              company name where work
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate perferendis saepe praesentium nemo nesciunt porro
              ratione, quia aut neque nobis animi esse delectus reiciendis id
              aperiam soluta doloremque ea ut.
            </Typography>
          </Box>
          <Typography className={` ${classes.timeLineYear} `} variant="h2">
            2013
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Web design
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              company name where work
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate perferendis saepe praesentium nemo nesciunt porro
              ratione, quia aut neque nobis animi esse delectus reiciendis id
              aperiam soluta doloremque ea ut.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Resume;
