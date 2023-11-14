import { styled } from "@mui/material";

const StyledInvoicesTabWrapper = styled('div')(({ theme }) => ({
    '&.invoice-container':{
        height:'100%',
    },
    '.invoice-grid-container':{
        height:'100%',
    },
    '.invoice-header-container':{
        justifyContent:'space-between'
    },
    '.invoice-upload-button':{
        color:'green',
        backgroundColor:'#b9faca',
        textTransform: 'capitalize',
        fontSize:'xx-small',
        '&: hover':{
            backgroundColor:'#b9faca',
        }
    },
    
  }));

export default StyledInvoicesTabWrapper;