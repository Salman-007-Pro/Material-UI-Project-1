import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72b9";
const arcOrange = "#ffba60";

export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
});
