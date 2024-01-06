import React from "react";
import {
  styled,
  alpha,
  InputBase,
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Stack,
  CssBaseline,
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
const Search = styled("div")(({ theme }) => ({
  width: "33ch",
  marginBottom: 20,
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  marginLeft: "auto",
  marginRight: "auto",
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    width: "380px",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.up("md")]: {
    width: "480px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "660px",
  },
  height: "100%",
  color: theme.palette.text.primary,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 3,
  fontSize: "1.5rem",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "auto",
    },
  },
}));

const TuneIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  marginRight:330,
  marginTop:24,
  color:'black',
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.1),
  },
}));

const HeaderHelper = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          height: "5ch",
          background: "linear-gradient(to right, #5a00bc, #ae25cf)",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs={1}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2, mb: isSmallScreen ? 1 : 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs={10}>
              <Stack
                height="36px"
                direction="row"
                alignItems="center"
                sx={{
                  ml: isSmallScreen ? 6 : isMediumScreen ? 6 : 36,
                  mt: isSmallScreen ? 1 : 0,
                }}
              >
                <Search sx={{ marginRight: 2 }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                  fullWidth
                    placeholder="Search Company"
                    inputProps={{ "aria-label": "search" }}
                    
                  />
                </Search>
               <TuneIconWrapper>
                <TuneIcon />
               </TuneIconWrapper>
                 
                
              </Stack>
            </Grid>
            <Grid item xs={1}>
              <Stack
                sx={{
                  mr: isSmallScreen || isMediumScreen ? 1 : 1,
                  width: "auto",
                  mb: isSmallScreen ? 1 : 2,
                  ml: isMediumScreen ? 6 : 2,
                  whiteSpace: isSmallScreen || isMediumScreen ? "nowrap" : "normal",
                  display: "inline-block",
                }}
              >
                <Typography variant="body1" sx={{}}>
                  Busy limited
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default HeaderHelper;
