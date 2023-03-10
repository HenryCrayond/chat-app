import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { removeStyle } from "./styles";
import { ListNested } from "../listNested/listNested";

const data={
  title:"Remove this commented out code",
  line:"L29"
}
export const RemoveComment = () => {
  return (
    <Paper sx={removeStyle.paperBlock}>
      <Box sx={removeStyle.flexBlock}>
        <Box>
          <Typography color={"#18283E"} letterSpacing={0.5}>
            {data.title}
          </Typography>
        </Box>
        <Box sx={removeStyle.centerBlock} pr={2}>
          <Box sx={removeStyle.dotIcon}></Box>
          <Typography style={removeStyle.lineText} pl={1}>
            {data.line}
          </Typography>
        </Box>
      </Box>

      <Box sx={removeStyle.centerBlock}>
        <Box sx={removeStyle.removeBottomBlock}>
          <SvgComponent />
          <ListNested
            sxButton={removeStyle.dropList}
            titlePrimary={" Code Smell"}
            sxTitle={removeStyle.codeSmellText}
          />

          <Box sx={removeStyle.dotIcon}></Box>
        </Box>

        <Box sx={removeStyle.removeBottomBlock}>
          <ListNested
            sxButton={removeStyle.dropList}
            titlePrimary={" Major"}
            sxTitle={removeStyle.codeSmellText}
          />
          <Box sx={removeStyle.dotIcon}></Box>
        </Box>
      </Box>
    </Paper>
  );
};

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} {...props}>
    <path
      d="M7 0a7 7 0 1 0 7 7 7.011 7.011 0 0 0-7-7Zm-.7 1.448v2.123a3.468 3.468 0 0 0-1.221.518L3.566 2.576A5.579 5.579 0 0 1 6.3 1.448Zm1.4 0a5.58 5.58 0 0 1 2.734 1.128L8.921 4.089A3.468 3.468 0 0 0 7.7 3.571ZM2.577 3.567 4.091 5.08a3.467 3.467 0 0 0-.514 1.22H1.448a5.555 5.555 0 0 1 1.129-2.733Zm8.846 0A5.556 5.556 0 0 1 12.552 6.3h-2.129a3.467 3.467 0 0 0-.514-1.22ZM7 4.9A2.1 2.1 0 1 1 4.9 7 2.089 2.089 0 0 1 7 4.9ZM1.448 7.7h2.123a3.483 3.483 0 0 0 .514 1.225l-1.508 1.508A5.563 5.563 0 0 1 1.448 7.7Zm8.981 0h2.123a5.563 5.563 0 0 1-1.129 2.733L9.915 8.925a3.484 3.484 0 0 0 .514-1.225ZM5.075 9.915a3.484 3.484 0 0 0 1.225.514v2.123a5.563 5.563 0 0 1-2.733-1.129Zm3.85 0 1.508 1.508A5.563 5.563 0 0 1 7.7 12.552v-2.123a3.484 3.484 0 0 0 1.225-.514Z"
      fill="#18283e"
    />
  </svg>
);
