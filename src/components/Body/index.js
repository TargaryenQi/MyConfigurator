import React from "react";
import Substep1 from "./Substeps/Substep1";
import Substep2 from "./Substeps/Substep2";
import Substep3 from "./Substeps/Substep3";
import Steper from "./steper";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(1)
  }
}));

export default ({ subSteps }) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Grid container spacing="1">
        <Grid item xs="12">
          <Steper subSteps={subSteps} />
        </Grid>
        <Grid item xs="12">
          <Substep3 />
        </Grid>
      </Grid>
    </div>
  );
};
