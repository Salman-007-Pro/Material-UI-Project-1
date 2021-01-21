import React from "react";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ServiceCard from "./ServiceCard/ServiceCard";

//img
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  serviceContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  marginBotton: {
    marginBottom: "10rem",
  },
}));

const ServicePage = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const selectedHandle = (val) => {
    setValue(1);
    setSelectedIndex(val);
  };
  const serviceCard = [
    {
      title: "IOS/Android App Development",
      subTitle1: "Extend Functionality. Extend Access. Increase Engagement.",

      subTitle2: () => (
        <>
          Integrate your web experience or create a standalone app{" "}
          {matchesXS ? null : <br />}
          with either mobile platform.
        </>
      ),
      link: "/mobileapps",
      onClick: () => selectedHandle(2),
      pic: {
        src: mobileIcon,
        alt: "Mobile App Icon",
      },
      right: true,
    },

    {
      title: "Custom Software Development",
      subTitle1: "Save Energy. Save Time. Save Money.",
      subTitle2: () => (
        <>
          Complete digital solutions, from investigation to{" "}
          <span className={classes.specialText}>Celebration</span>
        </>
      ),
      link: "/customsoftware",
      onClick: () => selectedHandle(1),
      pic: {
        src: customSoftwareIcon,
        alt: "Custom Software Icon",
      },
    },

    {
      title: "Website Development",
      subTitle1: "Reach More. Discover More. Sell more.",
      subTitle2: () => <>Optimized for Search Engines, built for speed.</>,
      link: "/websites",
      onClick: () => selectedHandle(3),
      pic: {
        src: websiteIcon,
        alt: "Websites Icon",
      },
      right: true,
    },
  ];
  return (
    <Grid container direction="column">
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          marginTop: matchesSM ? "1em" : "2em",
        }}
      >
        <Typography
          variant="h2"
          align={matchesSM ? "center" : undefined}
          gutterBottom
        >
          Services
        </Typography>
      </Grid>
      {serviceCard.map((el, index) => (
        <Grid item key={index}>
          <div className={classes.serviceContainer}>
            <ServiceCard
              title={el.title}
              subTitle1={el.subTitle1}
              subTitle2={el.subTitle2}
              link={el.link}
              onClick={el.onClick}
              pic={el.pic}
              right={el.right}
            />
          </div>
        </Grid>
      ))}
      <div className={classes.marginBotton} />
    </Grid>
  );
};

export default ServicePage;
