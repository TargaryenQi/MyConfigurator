import React from "react";
import {
  Card,
  CardMedia,
  Grid,
  CardContent,
  CardActions,
  Button,
  Typography
} from "@material-ui/core";
import layout1 from "./img/layout1.png";
import layout2 from "./img/layout2.png";
import layout3 from "./img/layout3.png";

export default props => {
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
            <CardActions>
              <Button size="small">Choose</Button>
            </CardActions>
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
            <CardActions>
              <Button size="small">Choose</Button>
            </CardActions>
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
            <CardActions>
              <Button size="small">Choose</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
