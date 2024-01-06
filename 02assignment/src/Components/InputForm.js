import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CreateIcon from "@mui/icons-material/Create";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import InputField from "./InputField";
import DoneIcon from "@mui/icons-material/Done";
import { useState,useRef,useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  IconButton,
  Typography,
  Stack,
  Button,
  TextField,
  Divider,
  useTheme,
  useMediaQuery,
  isMuiElement,Paper,
  Input,
  form,InputLabel, Switch, 
} from "@mui/material";
import TabButtons from "./TabButtons";
import TabButtonsHelper from "./Tabbuttonhelper";
import Icon from './Icon'


const InputForm = () => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMidScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isIphoneSE = useMediaQuery("(width: 320px) and (height: 568px)");

  

  return (
    <>
    <Paper elevation={0} square={false} >
    <Box sx={{ fontSize: { xs: 12, sm: 16, md: 18 },mt:6,}} >
      <Container >
        
        <Grid container spacing={0}>
          <Grid item xs={11}></Grid>
          <Grid item xs={1}>
            <IconButton
              edge="end"
              size="medium"
              color="inherit"
              aria-label="open drawer"
              sx={{ ml: 7 }}
            >
              <ClearIcon sx={{fontSize:30}} />
            </IconButton>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body1">
              abhi
              <IconButton size="small">
                <CreateIcon fontSize="small" />
              </IconButton>
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton size="small" edge="end" sx={{ ml: isSmallScreen ? 7 :isMidScreen ? 7:11 }}>
              <DeleteForeverIcon   sx={{ color: "red" }} />
            </IconButton>
          
          </Grid>
          <Grid item xs={1}>
          <IconButton  size="small"edge="end" sx={{ml: isSmallScreen ? 6 : 6,}}>
            <Icon/>
              {/* <ToggleOnIcon  fontSize="medium" sx={{ color: "green" }} /> */}
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              sx={{ fontWeight: "light", color: "grey" }}
            >
              India
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              sx={{ fontWeight: "light", color: "grey" }}
            >
              GSTIN/UIN - PAN
              <IconButton size="small">
                <CreateIcon fontSize="small" />
              </IconButton>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              sx={{ fontWeight: "light", color: "grey" }}
            >
              Mobile Number - Landline Number
              <IconButton size="small">
                <CreateIcon fontSize="small" />
              </IconButton>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              abhishek@poora.com
              <IconButton size="small">
                <CreateIcon fontSize="small" />
              </IconButton>
            </Typography>
          </Grid>
          <Grid item xs={12}><TabButtonsHelper/></Grid>
         
         

          <Grid item xs={12}> <InputField/></Grid>
        
         
          
        </Grid>
      </Container>
    </Box>
  </Paper>
  </>
  );
};

export default InputForm;