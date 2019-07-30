import React from "react";
import ToolChooser from "./ToolChooser";
import TwoD from "./img/2D.png";
import ThreeD from "./img/3D.png";
import useToggleState from "../../../hooks/useToggleState";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia
} from "@material-ui/core";

export default props => {
  const [isTwoD, toggle] = useToggleState(true);
  return (
    <Grid container xs="12">
      <Grid item xs="4">
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Click the Viwer to Switch.
            </Typography>
            {isTwoD ? (
              <CardMedia
                component="img"
                alt="layout1"
                image={TwoD}
                title="layout1"
                onClick={toggle}
              />
            ) : (
              <CardMedia
                component="img"
                alt="layout1"
                image={ThreeD}
                title="layout1"
                onClick={toggle}
              />
            )}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs="7">
        <ToolChooser />
      </Grid>
    </Grid>
  );
};
