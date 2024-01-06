import React, { useState } from "react";
import { Box, Button, Stack, Tabs, Tab } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

const FullWidthTabs = () => {
  const [value, setValue] = useState(0);
  const [selectedButtons, setSelectedButtons] = useState({
    backorder: false,
    paymentReminder: false,
    notification: false,
    sezEou: false,
    emportTax: false,
  });

  const handleButtonClick = (buttonKey) => {
    setSelectedButtons((prevSelectedButtons) => ({
      ...prevSelectedButtons,
      [buttonKey]: !prevSelectedButtons[buttonKey],
    }));
  };

  return (
    <Box sx={{ bgcolor: "white" }}>
      <Tabs
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        sx={{
          borderBottom: "1px dotted #DCDCDC",
          borderTop: "1px dotted #DCDCDC",
          borderLeft: 0,
          borderRight: 0,
          mt: 2,
        }}
      >
        <Tab label="Settings" />
        <Tab label="Address" />
        {/* Add more tabs as needed */}
      </Tabs>

      <Stack direction="row" spacing={1} marginTop={1.5}>
        {value === 0 && (
          <>
           
            {Object.keys(selectedButtons).map((buttonKey) => (
              <Button
                key={buttonKey}
                variant="outlined"
                size="large"
                fullWidth
                sx={{
                  textTransform: "none",
                  height: "55px",
                  border: "0.2px solid #DCDCDC",
                  color: "grey",
                  fontWeight: "500",
                  "&:hover": {
                    border: "0px solid grey",
                    backgroundColor: " #D3D3D3",
                  },
                }}
                onClick={() => handleButtonClick(buttonKey)}
              >
                {selectedButtons[buttonKey] && (
                  <DoneIcon
                    fontSize="small"
                    sx={{
                      color: "green",
                      position: "absolute",
                      top: 0,
                      right: 0,
                    }}
                  />
                )}
                {buttonKey}
              </Button>
            ))}
          </>
        )}

        {value === 1 && (
           <>
           
           {Object.keys(selectedButtons).map((buttonKey) => (
             <Button
               key={buttonKey}
               variant="outlined"
               size="large"
               fullWidth
               sx={{
                 textTransform: "none",
                 height: "55px",
                 border: "0.2px solid #DCDCDC",
                 color: "grey",
                 fontWeight: "500",
                 "&:hover": {
                   border: "0px solid grey",
                   backgroundColor: " #D3D3D3",
                 },
               }}
               onClick={() => handleButtonClick(buttonKey)}
             >
               {selectedButtons[buttonKey] && (
                 <DoneIcon
                   fontSize="small"
                   sx={{
                     color: "green",
                     position: "absolute",
                     top: 0,
                     right: 0,
                   }}
                 />
               )}
               {buttonKey}
             </Button>
           ))}
         </>
        )}
       
      </Stack>
    </Box>
  );
};

export default FullWidthTabs;
