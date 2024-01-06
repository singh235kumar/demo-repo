import * as React from "react";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import DoneIcon from "@mui/icons-material/Done";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Box, Divider, makeStyles, Button, Stack } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

export default function TabButtons() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [selectedTab, setSelectedTab] = useState("Settings");
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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <Box sx={{ bgcolor: "white" }}>
      <Tabs
        value={value}
        onChange={(event, newValue) => {
          handleChange(event, newValue);
          handleTabChange(newValue);
        }}
        sx={{
          borderBottom: "1px dotted #DCDCDC",
          borderTop: "1px dotted #DCDCDC",
          borderLeft: 0,
          borderRight: 0,
          mt: 2,
          "& .MuiTabs-scroller": {
            display: "flex",
          },
          "& .MuiTab-root": {
            minWidth: "auto",
            marginRight: "0",
            "&:hover": {
              backgroundColor: "#D3D3D3",
              borderRadius: "2px 2px 0 0",
            },
            "&:focus": {
              backgroundColor: "#D3D3D3",
            },
            "&:active": {
              backgroundColor: "#D3D3D3", // Set to the same as hover or your desired color
            },
          },
          minHeight: "5px",
        }}
      >
        <Tab
          label="Settings"
          sx={{
            textTransform: "none",
            minHeight: "5px",
            "&:hover": {
              backgroundColor: "#D3D3D3",
              borderRadius: "2px 2px 0 0",
            },
          }}
        />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Tab label="Address" sx={{ textTransform: "none", minHeight: "5px" }} />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Tab label="User" sx={{ textTransform: "none", minHeight: "5px" }} />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Tab label="Credit" sx={{ textTransform: "none", minHeight: "5px" }} />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Tab
          label="Retailer"
          sx={{ textTransform: "none", minHeight: "5px" }}
        />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Tab label="Ledger" sx={{ textTransform: "none", minHeight: "5px" }} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Stack direction="row" spacing={1} marginTop={1.5}>
          <Box sx={{ width: "24%" }}>
            <Button
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
              onClick={() => handleButtonClick("backorder")}
            >
              {selectedButtons.backorder ? (
                <DoneIcon
                  fontSize="small"
                  sx={{
                    color: "green",
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                />
              ) : null}
              Backorder
            </Button>
          </Box>
          <Box sx={{ width: "24%" }}>
            <Button
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
              onClick={() => handleButtonClick("paymentReminder")}
            >
              {selectedButtons.paymentReminder ? (
                <DoneIcon
                  fontSize="small"
                  sx={{
                    color: "green",
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                />
              ) : null}
              Payment
            </Button>
          </Box>
          <Box sx={{ width: "24%" }}>
            <Button
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
              onClick={() => handleButtonClick("notification")}
            >
              {selectedButtons.notification ? (
                <DoneIcon
                  fontSize="small"
                  sx={{
                    color: "green",
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                />
              ) : null}
              Notification
            </Button>
          </Box>
          <Box sx={{ width: "24%" }}>
            <Button
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
              onClick={() => handleButtonClick("sezEou")}
            >
              {selectedButtons.sezEou ? (
                <DoneIcon
                  fontSize="small"
                  sx={{
                    color: "green",
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                />
              ) : null}
              SEZ/EOU
            </Button>
          </Box>
        </Stack>

        <Box sx={{ width: "24%", mt: 1.5 }}>
          <Button
            variant="outlined"
            size="large"
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
            fullWidth
            onClick={() => handleButtonClick("emportTax")}
          >
            {selectedButtons.emportTax ? (
              <DoneIcon
                fontSize="small"
                sx={{
                  color: "green",
                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
              />
            ) : null}
            0.1%Emport Tax
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stack direction="row" spacing={1} marginTop={1.5}>
          <Box sx={{ width: "24%" }}>
            <Button
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
              onClick={() => handleButtonClick("backorder")}
            >
              {selectedButtons.backorder ? (
                <DoneIcon
                  fontSize="small"
                  sx={{
                    color: "green",
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                />
              ) : null}
              Backorder
            </Button>
          </Box>
          <Box sx={{ width: "24%" }}>
            <Button
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
              onClick={() => handleButtonClick("paymentReminder")}
            >
              {selectedButtons.paymentReminder ? (
                <DoneIcon
                  fontSize="small"
                  sx={{
                    color: "green",
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                />
              ) : null}
              Payment
            </Button>
          </Box>
          <Box sx={{ width: "24%" }}>
            <Button
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
              onClick={() => handleButtonClick("notification")}
            >
              {selectedButtons.notification ? (
                <DoneIcon
                  fontSize="small"
                  sx={{
                    color: "green",
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                />
              ) : null}
              Notification
            </Button>
          </Box>
          <Box sx={{ width: "24%" }}>
            <Button
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
              onClick={() => handleButtonClick("sezEou")}
            >
              {selectedButtons.sezEou ? (
                <DoneIcon
                  fontSize="small"
                  sx={{
                    color: "green",
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                />
              ) : null}
              SEZ/EOU
            </Button>
          </Box>
        </Stack>

        <Box sx={{ width: "24%", mt: 1.5 }}>
          <Button
            variant="outlined"
            size="large"
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
            fullWidth
            onClick={() => handleButtonClick("emportTax")}
          >
            {selectedButtons.emportTax ? (
              <DoneIcon
                fontSize="small"
                sx={{
                  color: "green",
                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
              />
            ) : null}
            0.1%Emport Tax
          </Button>
        </Box>
      </TabPanel>
    </Box>
  );
}
