import { Button, Divider, Grid, Typography } from "@mui/material";
import LineGraph from "../charts/LineGraph";
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import StackedBarChart from "../charts/StackedBarChart";
const  TotalCashFlow = () =>{
    return(
        <>
            <Grid container flexDirection={"column"} justifyContent={"space-between"} height={'250px'} >
                <Grid container item gap={'10px'} flexDirection={"column"}>
                    <Grid container justifyContent={"space-between"}>
                        <Typography  variant='h6' fontWeight={'700'}>TotalCashFlow</Typography>
                        <Grid container width={'auto'}>
                            <SquareRoundedIcon style={{ color: '#15a374' }} />
                            <Typography>In</Typography>
                            <SquareRoundedIcon style={{ color: '#339c45' }} />
                            <Typography>Out</Typography>
                        </Grid>
                    </Grid>
                    <Divider />
                </Grid>
                <Grid>
                <StackedBarChart />
                </Grid>
            </Grid>
        </>
    )

}

export default TotalCashFlow;