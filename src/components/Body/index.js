import React, { useContext } from "react";
import { ConfiguratorContext } from "../../contexts/configurator.context";
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

export default props => {
  const configurations = useContext(ConfiguratorContext);
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Grid container spacing="1">
        <Grid item xs="12">
          <Steper />
        </Grid>
        <Grid item xs="12">
          {configurations.currentSubstep === 0 && <Substep1 />}
          {configurations.currentSubstep === 1 && <Substep2 />}
          {configurations.currentSubstep === 2 && <Substep3 />}
        </Grid>
      </Grid>
    </div>
  );
};
