import { useState } from "react";
import { Button } from "@mui/material";
import { Typography } from '@mui/material';
import Add from "@mui/icons-material/Add";
import Settings from "@mui/icons-material/Settings";
import { styled } from '@mui/material';
import { theme } from "./theme";

  // reusable styling for same button

const RedButton = styled(Button)(({theme}) => ({
  backgroundColor: theme.palette.other.main,
  color: "white",
  margin: 5,
  "&:hover":{
    backgroundColor: "green"
  },
  "&:disabled":{
    backgroundColor: "lightgray",
    color: "black"
  }
}));

function App() {
  const [count, setCount] = useState(0);  

  return (
    <div>
      <Button variant="text">Posts</Button>
      <Button
        startIcon={<Add />}
        sx={{ backgroundColor: "primary" }}
        variant="contained"
      >
        Add posts
      </Button>
      {/* secondary has been imported from theme */}
      <Button startIcon={<Settings />} variant="outlined" color="secondary">
        Settings
      </Button>
      <div>
        <Typography variant="h1" component="p">
          Posts are here
        </Typography>
      </div>

      {/*  here the button is initially disabled, remove disabled keyword to see the hover effect */}
      <RedButton> Enabled </RedButton>
      <RedButton disabled> Disabled </RedButton>

    </div>
    
  );
}

export default App;
