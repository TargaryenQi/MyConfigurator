import React, { useState, useContext } from "react";
import {
  ConfiguratorContext,
  DispatchContext
} from "../../../contexts/configurator.context";
import {
  Card,
  CardMedia,
  Grid,
  CardContent,
  CardActions,
  Button,
  Typography,
  Checkbox
} from "@material-ui/core";
import layout1 from "./img/layout1.png";
import layout2 from "./img/layout2.png";
import layout3 from "./img/layout3.png";

export default props => {
  const configurations = useContext(ConfiguratorContext);
  const dispatch = useContext(DispatchContext);
  const currentSubstep = configurations.currentSubstep;
  const layout = configurations.substeps[currentSubstep].layout;

  return (
    <div>
      <Grid container xs="12">
        <Grid item xs="4">
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Layout 1
              </Typography>
              <CardMedia
                component="img"
                alt="layout1"
                src={layout1}
                title="layout1"
              />
            </CardContent>
            <Checkbox
              tabIndex={-1}
              checked={layout === 0 ? true : false}
              onClick={() =>
                dispatch({
                  type: "TOGGLELAYOUT",
                  substepIndex: currentSubstep,
                  layout: 0
                })
              }
            />
          </Card>
        </Grid>
        <Grid item xs="4">
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Layout 2
              </Typography>
              <CardMedia
                component="img"
                alt="layout2"
                src={layout2}
                title="layout2"
              />
            </CardContent>
            <Checkbox
              tabIndex={-1}
              checked={layout === 1 ? true : false}
              onClick={() =>
                dispatch({
                  type: "TOGGLELAYOUT",
                  substepIndex: currentSubstep,
                  layout: 1
                })
              }
            />
          </Card>
        </Grid>
        <Grid item xs="4">
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Layout 3
              </Typography>
              <CardMedia
                component="img"
                alt="layout3"
                src={layout3}
                title="layout3"
              />
            </CardContent>

            <Checkbox
              tabIndex={-1}
              checked={layout === 2 ? true : false}
              onClick={() =>
                dispatch({
                  type: "TOGGLELAYOUT",
                  substepIndex: currentSubstep,
                  layout: 2
                })
              }
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
