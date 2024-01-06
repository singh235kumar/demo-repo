
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CreateIcon from "@mui/icons-material/Create";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
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
  form,InputLabel,
} from "@mui/material";
import TabButtons from "./TabButtons";

const InputArrow = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isMidScreen = useMediaQuery(theme.breakpoints.down("md"));
   
  return (
        <Grid >
          {/* Field 1 */}
          <Grid sm={6} sx={{ mt: 3 }}>
            <form>
              <Grid container sx={{ borderBottom: 'dotted #D3D3D3', width: isSmallScreen ? "100%" : "97%" }}>
                <Grid item xs={10} sx={{ mb: 1 }}>
                  <InputLabel htmlFor="field1" sx={{ color: '#A9A9A9', fontWeight: 'bold' }}>Price List</InputLabel>
                </Grid>
                <Grid item xs={1} sx={{ textAlignLast: 'right', mb: 1 }}>
                  <Input
                    id="field1"
                    type="text"
                    fullWidth
                    disableUnderline
                    sx={{
                      textAlign: 'right',
                      borderBottom: 'none',
                    }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <IconButton>
                    <ArrowForwardIosIcon fontSize="small" />
                  </IconButton>
                </Grid>
              </Grid>
            </form>
          </Grid>
    
          {/* Field 2 */}
          <Grid sm={6} sx={{ mt: 3 }}>
            <form>
              <Grid container sx={{ borderBottom: 'dotted #D3D3D3', width: isSmallScreen ? "100%" : "97%" }}>
                <Grid item xs={10} sx={{ mb: 1 }}>
                  <InputLabel htmlFor="field2" sx={{ color: '#A9A9A9', fontWeight: 'bold' }}>Another Field</InputLabel>
                </Grid>
                <Grid item xs={1} sx={{ textAlignLast: 'right', mb: 1 }}>
                  <Input
                    id="field2"
                    type="text"
                    fullWidth
                    disableUnderline
                    sx={{
                      textAlign: 'right',
                      borderBottom: 'none',
                    }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <IconButton>
                    <ArrowForwardIosIcon fontSize="small" />
                  </IconButton>
                </Grid>
              </Grid>
            </form>
          </Grid>
    
          {/* Add more fields as needed */}
        </Grid>
      );
    };

export default InputArrow