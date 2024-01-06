import React, { useRef, useEffect } from "react";
import Customcard from "./Customcard";
import { Box, useTheme, useMediaQuery,Stack,IconButton,Typography, Grid, Paper } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import AddCircleIcon from "@mui/icons-material/AddCircle";
const Cardcontainer = ({ onHeightChange }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isIpadAir = useMediaQuery("(min-width: 768px) and (max-width: 834px) and (min-height: 1180px)");
  const isIpadMini = useMediaQuery("(min-width: 768px) and (max-width: 834px) and (max-height: 1180px)");
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.clientHeight;
      onHeightChange(height);
    }
  }, [onHeightChange]);
 

  return (
    <Box ref={containerRef}
      sx={{
        display: "flex",
        flexDirection: "column",
      gap:'20px',
   marginTop:"60px",
 height:'100%',
      }}
    >
      <Paper
      elevation={0}
    sx={{
      position: "sticky",
      top: 0,
      zIndex: 1,
      padding: 1,
      backgroundColor: "#f8f8f8",
      display:isSmallScreen?'none':'visible'
    }}
  >
    <Stack direction="row" alignItems="center" >
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        Customer
      </Typography>
      <IconButton size="medium"  position='static' sx={{ ml: isIpadAir || isIpadMini ? 12 : isMediumScreen ? 20 : 32, }}>
        <AddCircleIcon fontSize="small" />
      </IconButton>
    </Stack>
  </Paper>
  <Box sx={{overflowY: 'auto', 
        '&::-webkit-scrollbar': {
          width: '5px',
        },
        '&::-webkit-scrollbar-track': {
          background: '#d1d1d1',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#555',
          height: '25px', 
         
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '#555',
        },}}>  
  <Customcard  width={96}/>
  </Box>
 
     
    </Box>
  );
};

export default Cardcontainer;
