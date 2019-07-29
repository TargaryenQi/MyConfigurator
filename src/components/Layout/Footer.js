import React, { useState, useContext } from "react";
import { ConfiguratorContext } from "../../contexts/configurator.context";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default props => {
  const configurations = useContext(ConfiguratorContext);
  const steps = configurations.steps;
  const currentStep = configurations.currentStep;
  const classes = useStyles();
  const [value, setValue] = useState(currentStep);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {steps.map(step => (
          <Tab label={step.title} />
        ))}
        <Tab label="ALL" />
      </Tabs>
    </Paper>
  );
};
