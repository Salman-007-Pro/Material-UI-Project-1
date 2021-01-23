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
    [theme.breakpoints.up("md")]: {
      "&:not(:last-child)": {
        marginRight: "1rem",
      },
    },
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
    [theme.breakpoints.down("xs")]: {
      "&:nth-child(2)": {
        maxWidth: "10rem",
      },
    },
  },
  itemContainer: {
    maxWidth: "40rem",
  },
  paragraphContainer: {
    maxWidth: "30rem",
  },
}));

const defaultOptions = (animationData) => ({
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});

const MobileApps = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const selectedHandle = (val) => {
    setValue(1);
    setSelectedIndex(val);
  };
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
        classes={{ root: classes.rowContainer }}
        justify={matchesSM ? "center" : undefined}
      >
        <Hidden smDown>
          <Grid item style={{ marginRight: "1em", marginLeft: "-3.5em" }}>
            <IconButton
              component={Link}
              to="/customsoftware"
              onClick={() => selectedHandle(1)}
              classes={{ root: classes.arrowContainer }}
              style={{ backgroundColor: "transparent" }}
            >
              <img src={backArrow} alt="back arrow" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid
          item
          align={matchesSM ? "center" : "justify"}
          style={{ maxWidth: "40rem" }}
        >
          <Typography variant="h2">iOS/Android App Development</Typography>
          <Typography variant="body1" paragraph>
            Mobile apps allow you to take your tools on the go.
          </Typography>
          <Typography variant="body1" paragraph>
            Whether you want an app for your customers, employees, or yourself,
            we can build cross-platform native solutions for any part of your
            business process. This opens you up to a whole new world of
            possibilities by taking advantage of phone features like the camera,
            GPS, push notifications, and more.
          </Typography>
          <Typography variant="body1" paragraph>
            Our custom solutions are designed from the ground up with your
            needs, wants, and goals at the core. This collaborative process
            produces finely tuned software that is much more effective at
            improving your workflow and reducing costs than generalized options.
          </Typography>
          <Typography variant="body1" paragraph>
            Convenience. Connection.
          </Typography>
        </Grid>
        <Hidden smDown>
          <Grid item>
            <IconButton
              component={Link}
              to="/websites"
              onClick={() => selectedHandle(3)}
              classes={{ root: classes.arrowContainer }}
              style={{ backgroundColor: "transparent" }}
            >
              <img src={forwardArrow} alt="forward arrow" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

      <Grid
        item
        container
        // direction={matchesSM ? "column" : "row"}
        direction="row"
        classes={{ root: classes.rowContainer }}
        style={{ marginTop: matchesXS ? "10em" : "12em" }}
        justify={matchesSM ? "center" : undefined}
      >
        <Grid md item align={matchesSM ? "center" : undefined}>
          <Typography variant="h4" gutterBottom>
            Integration
          </Typography>
          <Grid item style={{ maxWidth: "40rem" }}>
            <Typography variant="body1" paragraph>
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography variant="body1" paragraph>
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md style={{ margin: matchesSM ? "8rem 0" : 0 }}>
          <Lottie
            options={defaultOptions(integrationAnimation)}
            style={{ maxWidth: "20em" }}
            isClickToPauseDisabled
          />
        </Grid>

        <Grid md item align={matchesSM ? "center" : "right"}>
          <Typography variant="h4" gutterBottom>
            Simultaneous Platform Support
          </Typography>
          <Grid item style={{ maxWidth: "40rem" }}>
            <Typography variant="body1" paragraph>
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography variant="body1" paragraph>
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        justify={matchesSM ? undefined : "center"}
        alignItems={matchesSM ? "center" : undefined}
        classes={{ root: classes.rowContainer }}
        style={{ marginTop: "12rem", marginBottom: "15rem" }}
      >
        <Grid item md align="center" classes={{ root: classes.iconItem }}>
          <Typography variant="h4" gutterBottom>
            Extend Functionality
          </Typography>
          <img src={swiss} alt="swiss" className={classes.iconSize} />
        </Grid>

        <Grid item md align="center" classes={{ root: classes.iconItem }}>
          <Typography variant="h4" gutterBottom>
            Extend Access
          </Typography>
          <img src={access} alt="access" className={classes.iconSize} />
        </Grid>
        <Grid item md align="center" classes={{ root: classes.iconItem }}>
          <Typography variant="h4" gutterBottom>
            Increase Engagement
          </Typography>
          <img src={engagement} alt="engagement" className={classes.iconSize} />
        </Grid>
      </Grid>

      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default MobileApps;
