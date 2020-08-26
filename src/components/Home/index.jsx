import React from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import Particles from "react-particles-js";
import heart from "../../heart.png";
import heart3 from "../../heart3.png";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
  },
});

function Home(props) {
  const classes = useStyles();
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 1,
              out_mode: "out",
            },
            shape: {
              type: ["image", "circle"],
              image: [
                {
                  src: heart,
                  height: 30,
                  width: 30,
                },
                {
                  src: heart3,
                  height: 30,
                  width: 30,
                },
                {
                  src: heart3,
                  height: 30,
                  width: 30,
                },
              ],
            },
            color: {
              value: "#CCC",
            },
            size: {
              value: 20,
              random: false,
              anim: {
                enable: true,
                speed: 4,
                size_min: 10,
                sync: false,
              },
            },
          },
          retina_detect: false,
        }}
      />
    </div>
  );
}

export default Home;
