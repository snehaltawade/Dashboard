import { InputBase, styled } from "@mui/material";

const StyledAccountCheck = styled('div')(({ theme }) => ({
    '.month-control':{
        marginTop: 0,
        '.MuiNativeSelect-select':{
            padding: '6px 19px 6px 7px',
        }
    },
    
    
  }));

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
  
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
      }
    }
  }));

export default StyledAccountCheck;