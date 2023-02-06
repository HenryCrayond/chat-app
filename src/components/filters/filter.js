import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { ListNested } from "../listNested/listNested";
import { filterStyle } from "./style";

export const Filter = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs p={2}>
          <Typography style={filterStyle.filterText}>Filters</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", justifyContent: "space-between" }}
          mr={2}
        >
          <Button variant="contained" disabled>
            My Issues
          </Button>
          <Button variant="contained">All</Button>
        </Grid>
      </Grid>
      <Box sx={filterStyle.headHorder}></Box>
      <Box>
        <Box>
          <ListNested titlePrimary={"Type"} />
        </Box>
        <Box>
          <ListNested titlePrimary={"Severity"} />
        </Box>
      </Box>
    </>
  );
};
