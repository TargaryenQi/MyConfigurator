import React, { useContext } from "react";
import {
  ConfiguratorContext,
  DispatchContext
} from "../../contexts/configurator.context";
import { makeStyles } from "@material-ui/core/styles";
import {
  Stepper,
  Step,
  StepButton,
  Button,
  Typography,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSubstepDescription(steps, index) {
  return `Substep ${index + 1} : ${steps[index].description}`;
}

export default props => {
  const configurations = useContext(ConfiguratorContext);
  const substeps = configurations.substeps;
  const currentSubstep = configurations.currentSubstep;
  const currentStep = configurations.currentStep;
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const dispatch = useContext(DispatchContext);

  function totalSteps() {
    return substeps.length;
  }

  function completedSteps() {
    return Object.keys(completed).length;
  }

  function isLastStep() {
    return activeStep === totalSteps() - 1;
  }

  function allStepsCompleted() {
    return completedSteps() === totalSteps();
  }

  function handleNext() {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          substeps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    dispatch({ type: "NEXTSUBSTEP" });
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    dispatch({ type: "LASTSUBSTEP" });
  }

  const handleStep = step => () => {
    setActiveStep(step);
  };

  function handleComplete() {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  }

  function handleReset() {
    setActiveStep(0);
    setCompleted({});
    dispatch({ type: "RESET" });
  }

  function handleNextStep() {
    if (currentStep !== 2) {
      dispatch({ type: "NEXTSTEP" });
      handleReset();
    } else {
      window.alert("This is already the final step!");
    }
  }
  console.log(`active${activeStep}`);
  console.log(`current${currentSubstep}`);
  console.log(`currentStep${currentStep}`);

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {substeps.map((substep, index) => (
          <Step key={substep.id}>
            <StepButton
              // onClick={handleStep(index)}
              completed={completed[index]}
            >
              {substep.title}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <Grid container xs="12">
            <Grid item xs="8">
              <Typography className={classes.instructions}>
                All substeps completed!
              </Typography>
            </Grid>
            <Grid item xs="4">
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleNextStep}
              >
                Go To Next Step
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Grid container xs="12">
            <Grid item xs="8">
              <Typography className={classes.instructions}>
                {getSubstepDescription(substeps, activeStep)}
              </Typography>
            </Grid>
            <Grid item xs="4">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
              {activeStep !== substeps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleComplete}
                  >
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))}
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
};
