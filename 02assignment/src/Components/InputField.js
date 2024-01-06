
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
const InputField = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isMidScreen = useMediaQuery(theme.breakpoints.down("md"));
   
  return (
        <Grid container>
        
          <Grid item xs={12} sx={{ borderBottom: 'dotted #D3D3D3', mt: 3 }}>
            <form>
              <Grid container>
                <Grid item xs={11} sx={{ mb: 1 }} >
                  <InputLabel htmlFor="field1" sx={{color: '#A9A9A9',fontWeight:'bold',}}>Wallet Discount %</InputLabel>
                </Grid>
                <Grid item xs={1} sx={{ mb: 1 }}>
                  <Input
                    id="field1"
                    type="text"
                    fullWidth
                    disableUnderline
                    sx={{ textAlign: 'right' }}
                  />
                </Grid>
              </Grid>
            </form>
          </Grid>
    
          <Grid item xs={12} sx={{ borderBottom: 'dotted #D3D3D3', mt: 3 }}>
            <form>
              <Grid container>
                <Grid item xs={11} sx={{ mb: 1 }}>
                  <InputLabel htmlFor="field2" sx={{color: '#A9A9A9', 
                  fontWeight:'bold',}}>Tax Discount %</InputLabel>
                </Grid>
                <Grid item xs={1} sx={{ mb: 1 }}>
                  <Input
                    id="field2"
                    type="text"
                    fullWidth
                    disableUnderline
                    sx={{ textAlign: 'right' }}
                  />
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} sx={{ borderBottom: 'dotted #D3D3D3', mt: 3 }}>
        <form>
          <Grid container>
            <Grid item xs={11} sx={{ mb: 1 }}>
              <InputLabel htmlFor="field3" sx={{color: '#A9A9A9', 
                  fontWeight:'bold',}}>TCS %</InputLabel>
            </Grid>
            <Grid item xs={1} sx={{ mb: 1 }}>
              <Input
                id="field3"
                type="text"
                fullWidth
                disableUnderline
                sx={{ textAlign: 'right' }}
              />
            </Grid>
          </Grid>
        </form>
      </Grid>

          


          <Grid   sm={6} sx={{  mt: 3 }}>
            <form>
            <Grid container   sx={{borderBottom: 'dotted #D3D3D3',width: isSmallScreen ? "100%" : "97%",}}>
          <Grid item xs={10} sx={{ mb: 1 }}>
            <InputLabel htmlFor="Price" sx={{color: '#A9A9A9', 
                  fontWeight:'bold',}}>Price List</InputLabel>
          </Grid>
          <Grid item xs={1} sx={{ textAlignLast: 'right',mb:1 }}>
            <Input
              id="Price"
              type="text"
              fullWidth
              disableUnderline
              sx={{
                textAlign: 'right',
               
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

          
          <Grid   sm={6} sx={{  mt: 3 }}>
            <form>
            <Grid container   sx={{borderBottom: 'dotted #D3D3D3',}}>
          <Grid item xs={10} sx={{ mb: 1 }}>
            <InputLabel htmlFor="Catalog" sx={{color: '#A9A9A9', 
                  fontWeight:'bold',}}>Catalog</InputLabel>
          </Grid>
          <Grid item xs={1} sx={{ textAlignLast: 'right',mb:1 }}>
            <Input
              id="Catalog"
              type="text"
              fullWidth
              disableUnderline
              sx={{
                textAlign: 'right',
               
               
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
         
     
          

          <Grid  xs={12} sm={6} sx={{  mt: 3 }}>
            <form>
            <Grid container  alignItems="center" sx={{borderBottom: 'dotted #D3D3D3',width: isSmallScreen ? "100%" : "97%",}}>
          <Grid item xs={10} sx={{ mb: 1 }}>
            <InputLabel htmlFor="Groups" sx={{color: '#A9A9A9', 
                  fontWeight:'bold',}}>Groups</InputLabel>
          </Grid>
          <Grid item xs={1} sx={{ textAlignLast: 'right' ,mb:1}}>
            <Input
              id="Groups"
              type="text"
              fullWidth
              disableUnderline
              sx={{
                textAlign: 'right',
               
               
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

          <Grid  xs={12} sm={6} sx={{  mt: 3 }}>
            <form>
            <Grid container  alignItems="center" sx={{borderBottom: 'dotted #D3D3D3',}}>
          <Grid item xs={10} sx={{ mb: 1 }}>
            <InputLabel htmlFor="Company" sx={{color: '#A9A9A9', 
                  fontWeight:'bold',}}>Company Type</InputLabel>
          </Grid>
          <Grid item xs={1} sx={{ textAlignLast: 'right',mb:1 }}>
            <Input
              id="Company"
              type="text"
              fullWidth
              disableUnderline
              sx={{
                textAlign: 'right',
             
               
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
        </Grid>
      );
    };
    
export default InputField