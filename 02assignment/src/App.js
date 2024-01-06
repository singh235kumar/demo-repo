import React, { useState } from "react";
import Header from "./Components/header";
import InputForm from "./Components/InputForm";
import Cardcontainer from "./Components/Cardcontainer";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HeaderHelper from "./Components/headerhelper";

function App() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const getCardContainerHeight = () => {
    if (isSmallScreen) {
      return 660; 
    } else if (isMediumScreen) {
      return 660; 
    } else {
      return 690; 
    }
  };
  const [cardContainerHeight, setCardContainerHeight] = useState(
    getCardContainerHeight()
  );

  const handleCardContainerHeightChange = (height) => {
    setCardContainerHeight(height);
  };
  return (
    <>
      <Header />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#f8f8f8",
        }}
      >
        <div
          style={{
            width: isSmallScreen ? "0%" : "25%",
            height: `${cardContainerHeight}px`,
            marginLeft: isSmallScreen ? 0 : 20,
          }}
        >
          <Cardcontainer onHeightChange={handleCardContainerHeightChange} />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            // width: isMediumScreen ? "70%" : "auto",
          }}
        >
          <InputForm />
        </div>
      </Box>
    </>
  );
}

export default App;
