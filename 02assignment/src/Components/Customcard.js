import React ,{useState} from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box,Typography,Paper } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Customcard = ({width}) => {


  return (
    <Box sx={{ display: 'grid', gap: '16px' , width: `${width}%`}}>
    
      <Card  elevation={5}
        style={{
         
          maxWidth: "auto", }}
      >
        <CardActionArea >
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={<Typography variant="body1" style={{ fontFamily: "Arial, sans-serif" }}>
            abhi
          </Typography>}
           subheader={
            <React.Fragment>
              <Typography variant="body2" style={{ fontFamily: "Arial, sans-serif" }}>
              0678GHITH769 
              </Typography>
              <Typography variant="body2" style={{ fontFamily: "Arial, sans-serif" }}>
              Noida|Uttar Pradesh
              </Typography>
            </React.Fragment>
          }
          />
        </CardActionArea>
      </Card>
      <Card   elevation={0}
        style={{
          width: "100%",
          maxWidth: "auto",
        
        }}
      >
        <CardActionArea >
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={<Typography variant="body1" style={{ fontFamily: "Arial, sans-serif" }}>
           A & D STEEL
          </Typography>}
              subheader={
                <React.Fragment>
                  <Typography variant="body2" style={{ fontFamily: "Arial, sans-serif" }}>
                    0678GHITH769
                  </Typography>
                  <Typography variant="body2" style={{ fontFamily: "Arial, sans-serif" }}>
                    Faridabad | Haryana
                  </Typography>
                </React.Fragment>
              }
          />
        </CardActionArea>
      </Card>
      <Card  elevation={0}
        style={{
          width: "100%",
          maxWidth: "auto",
        
        }}
      >
        <CardActionArea >
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={<Typography variant="body1" style={{ fontFamily: "Arial, sans-serif" }}>
             A & D STEEL
          </Typography>}
              subheader={
                <React.Fragment>
                  <Typography variant="body2" style={{ fontFamily: "Arial, sans-serif" }}>
                  0678GHITH769
                  </Typography>
                  <Typography variant="body2" style={{ fontFamily: "Arial, sans-serif" }}>
                  Faridabad | Haryana
                  </Typography>
                </React.Fragment>
              }
          />
        </CardActionArea>
      </Card>
      <Card  elevation={0}
        style={{
          width: "100%",
          maxWidth: "auto",
        
        }}
      >
        <CardActionArea >
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={<Typography variant="body1" style={{ fontFamily: "Arial, sans-serif" }}>
          A R Traders
          </Typography>}
             subheader={
              <React.Fragment>
                <Typography variant="body2" style={{ fontFamily: "Arial, sans-serif" }}>
                0678GHITH769
                </Typography>
                <Typography variant="body2" style={{ fontFamily: "Arial, sans-serif" }}>
                  Kazikhode | Kerala
                </Typography>
              </React.Fragment>
            }
          />
        </CardActionArea>
      </Card>
      <Card   elevation={0}
        style={{
          width: "100%",
          maxWidth: "auto",
        
        }}
      >
        <CardActionArea >
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={<Typography variant="body1" style={{ fontFamily: "Arial, sans-serif" }}>
           A R krishna 
          </Typography>}
             subheader={
              <React.Fragment>
                <Typography variant="body2" style={{ fontFamily: "Arial, sans-serif" }}>
                0678GHITH769
                </Typography>
                <Typography variant="body2" style={{ fontFamily: "Arial, sans-serif" }}>
                | Karanataka
                </Typography>
              </React.Fragment>
            }
          />
        </CardActionArea>
      </Card>
      <Card  elevation={0}
        style={{
          width: "100%",
          maxWidth: "auto",
        
        }}
      >
        <CardActionArea >
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={<Typography variant="body1" style={{ fontFamily: "Arial, sans-serif" }}>
            A-Bee Associates
          </Typography>}
             subheader={
              <React.Fragment>
                <Typography variant="body2" style={{ fontFamily: "Arial, sans-serif" }}>
                0678GHITH769
                </Typography>
                <Typography variant="body2" style={{ fontFamily: "Arial, sans-serif" }}>
                 | Uttar Pradesh
                </Typography>
              </React.Fragment>
            }
          />
        </CardActionArea>
      </Card>

      <Card    elevation={0}
        style={{
          width: "100%",
          maxWidth: "auto",
        
        }}
      >
        <CardActionArea >
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={<Typography variant="body1" style={{ fontFamily: "Arial, sans-serif" }}>
           A.H Traders
          </Typography>}
             subheader={
              <React.Fragment>
                <Typography variant="body2" style={{ fontFamily: "Arial, sans-serif" }}>
                0678GHITH769
                </Typography>
                <Typography variant="body2" style={{ fontFamily: "Arial, sans-serif" }}>
                  | Assam
                </Typography>
              </React.Fragment>
            }
          />
        </CardActionArea>
      </Card>
    
      <Card    elevation={0}
        style={{
          width: "100%",
          maxWidth: "auto",
        
        }}
      >
        <CardActionArea >
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={<Typography variant="body1" style={{ fontFamily: "Arial, sans-serif" }}>
            A.S Logistics
          </Typography>}
             subheader={
              <React.Fragment>
                <Typography variant="body2" style={{ fontFamily: "Arial, sans-serif" }}>
                0678GHITH769
                </Typography>
                <Typography variant="body2" style={{ fontFamily: "Arial, sans-serif" }}>
                  | Delhi
                </Typography>
              </React.Fragment>
            }
          />
        </CardActionArea>
      </Card>
     
      
     
        
    </Box>
  );
};

export default Customcard;
