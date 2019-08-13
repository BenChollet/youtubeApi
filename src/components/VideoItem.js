import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

export default ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper style={{ display: "flex", flexDirection:"row", flexWrap:"wrap", alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)} >
        <img style={{ width:'100%' }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <div style={{ width:'100%', padding:'0.5rem' }}><Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography></div>
      </Paper>
    </Grid>
  );
}
