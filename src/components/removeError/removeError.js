import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { removeStyle } from "./style";
import BasicTabs from "./tabs";

const data = {
  title: "Remove this commented out code",
  subTitle: 'Sections of code should not be commented out typescript:S125'
};
export const RemoveError = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper sx={{ height: "100vh" }} elevation={4}></Paper>
        </Grid>
        <Grid item xs={9} sx={removeStyle.rootBlock}>
          <Box>
            <Typography sx={removeStyle.titleText}>{data.title}</Typography>
            <Typography sx={removeStyle.subText}>{data.subTitle} </Typography>
          </Box>

          <Paper elevation={4} sx={removeStyle.paperBlock}>
            <Box>
              <BasicTabs />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
