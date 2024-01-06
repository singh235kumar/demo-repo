import React ,{useState} from "react";
import Header from "./Components/header";
import InputForm from "./Components/InputForm";
import Cardcontainer from "./Components/Cardcontainer";
import { Box, Container,useMediaQuery,useTheme } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function App() {
  const theme = useTheme();
  const isIpad = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMidScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [cardContainerHeight, setCardContainerHeight] = useState(659 );

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
          backgroundColor:'#f8f8f8'
          }}
      >
        <div style={{ width:isSmallScreen?"0%":"28%", height: `${cardContainerHeight}px`,marginLeft:isSmallScreen ?0:20 }}>
          <Cardcontainer   onHeightChange={handleCardContainerHeightChange}/>
        </div>
        <div style={{ flex:1,foverflowY: "auto",display:'flex',width: isIpad ? "70%" : "auto",}}>
          <InputForm  onHeightChange={() => {}}/>
        </div>
      </Box>
      </>
  );
}

export default App;
