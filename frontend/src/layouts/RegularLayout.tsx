import * as React from "react";
import Box from "@mui/material/Box";


export interface RegularLayoutPropTypes {
    children: React.ReactNode
}

export const RegularLayout: React.FC<RegularLayoutPropTypes> = ({children}) => {
  return (
    <Box>
        {children}
    </Box>
  );
};