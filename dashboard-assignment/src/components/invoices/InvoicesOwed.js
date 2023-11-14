import { Button, Card, Divider, Grid, Input, Typography, styled } from "@mui/material";
import Barchart from "../charts/Barchart";
import StyledInvoicesTabWrapper from "./StyledInvoicesTabWrapper";

const InvoicesTab=()=>{
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
      
    return(
        <StyledInvoicesTabWrapper className="invoice-container" >
            <Grid container flexDirection={"column"} justifyContent={"space-between"} className="invoice-grid-container" >
            <Grid container flexDirection={"column"} gap={'10px'}>
                <Grid container className="invoice-header-container">
                <Typography>Invoices owed to you</Typography>
                <Button component="label" variant="contained" className="invoice-upload-button" >
                    New Sales Invoice
                    <VisuallyHiddenInput type="file" />
                </Button>
                </Grid>
                <Divider />
            </Grid>
            
            <Grid>
                <Barchart />
            </Grid>
            </Grid>
        </StyledInvoicesTabWrapper>
    )
}

export default InvoicesTab;