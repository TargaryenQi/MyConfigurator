import React, { useState } from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default ({ steps }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

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
