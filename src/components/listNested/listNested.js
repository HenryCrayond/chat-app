import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Grid, Typography } from "@mui/material";
import PestControlSharpIcon from "@mui/icons-material/PestControlSharp";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import { Box } from "@mui/system";
import { listStyle } from "./style";

const Type = [
  {
    titlePrimary: "Bug",
    icon: <PestControlSharpIcon />,
    count: "05",
  },
  {
    titlePrimary: "Vulnerabilitiy",
    icon: <LockOpenRoundedIcon />,
    count: "00",
  },
  {
    titlePrimary: "Code Smells",
    icon: <SportsSoccerOutlinedIcon />,
    count: "00",
  },
];

const Severity = [
  {
    title: "Blocker",
    count: "00",
    color: "#BD1919",
  },
  {
    title: "Minor",
    count: "343",
    color: "#19BD50",
  },
  {
    title: "Critical",
    count: "18",
    color: "#BD1919",
  },
  {
    title: "Info",
    count: "05",
    color: "#0063E7",
  },
  {
    title: "Major",
    count: "257",
    color: "#BD1919",
  },
];

const Types = () => {
  return (
    <List component="div" disablePadding>
      {Type.map((item, key) => (
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.titlePrimary} />
          <Typography justifySelf={"self-end"} color={"#848484"}>
            {item.count}
          </Typography>
        </ListItemButton>
      ))}
    </List>
  );
};

const Severitys = () => {
  return (
    <Grid container justifyContent={"space-between"}>
      {Severity.map((item) => (
        <Grid item xs={6}>
          <Box sx={listStyle.childCard}>
            <Typography color={"#3D4755"} style={listStyle.cardTitle}>
              {item.title}
            </Typography>
            <Typography color={item.color} style={listStyle.cardCount}>
              {item.count}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export const ListNested = ({titlePrimary }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <List
        sx={listStyle.listBlock}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>
          <ListItemText primary={titlePrimary} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            {open? <Types/>:""}
        </Collapse>
      </List>
    </>
  );
};
