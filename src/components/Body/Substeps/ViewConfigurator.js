import React, { Fragment } from "react";
import {
  Grid,
  Typography,
  Paper,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(3)
  },
  group: {
    margin: theme.spacing(1, 0)
  }
}));

export default props => {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");
  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <Fragment>
      <Paper>
        <Grid item xs="4">
          <Typography>Configuration: Viewer</Typography>
        </Grid>
        <Grid item>
          <Typography>Window/Level: Default</Typography>
        </Grid>
        <Grid item>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Orentation: </FormLabel>
            <RadioGroup
              aria-label="Orentation"
              name="Orentation"
              className={classes.group}
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Axial"
                control={<Radio />}
                label="Axial"
              />
              <FormControlLabel
                value="Sagital"
                control={<Radio />}
                label="Sagital"
              />
              <FormControlLabel
                value="Coronal"
                control={<Radio />}
                label="Coronal"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Paper>
    </Fragment>
  );
};
