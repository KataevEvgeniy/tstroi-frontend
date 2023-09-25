import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Button";
import { Box, CardActions, CardMedia, Grid, Icon } from "@mui/material";

function MainCard({ title, text, buttonText, iconExample: IconExample }) {
  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Grid container justifyContent="space-between">
          <Grid>
            <Grid alignItems="flex-start" container direction="column">
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {text}
              </Typography>
            </Grid>
          </Grid>
          <Grid padding="10px">
            <IconExample fontSize="large"></IconExample>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small">{buttonText}</Button>
      </CardActions>
    </Card>
  );
}

export default MainCard;
