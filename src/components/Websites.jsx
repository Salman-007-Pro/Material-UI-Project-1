import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  useMediaQuery,
  IconButton,
  Hidden,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Lottie from "react-lottie";

//components
import CallToAction from "./ui/CallToAction";

//icon
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import swiss from "../assets/swissKnife.svg";
import access from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";

//animation
import integrationAnimation from "../animations/integrationAnimation/data.json";

const useStyles = makeStyles((theme) => ({
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  iconItem: {
    [theme.breakpoints.down("sm")]: {
      "&:nth-child(2)": {
        marginTop: "8rem",
        marginBottom: "8rem",
      },
    },
  },
  iconSize: {
    [theme.breakpoints.down("md")]: {
      "&:nth-child(2)": {
        maxWidth: "20rem",
      },
    },
  },
  itemContainer: {
    maxWidth: "40rem",
  },
}));
const Websites = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const selectedHandle = (val) => {
    setValue(1);
    setSelectedIndex(val);
  };
  return <div>Websites</div>;
};

export default Websites;
