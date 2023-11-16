import { Button, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import LineGraph from "../charts/LineGraph";
import { useState } from "react";

const AccountCheck = () =>{
    const [data,setData]=useState([10,30,85,105,90,50,25,75,90,80,20,47,55,45,10,40])

    const randomiseInputData=()=>{
        var randoms=[...Array(16)].map(()=>Math.floor(Math.random()*90))
        console.log('random',randoms)
        setData(randoms)
    }
    return(
        <>
       <Grid container flexDirection={"column"} gap={'10px'}>
        <Grid container justifyContent={"space-between"}>
            <Typography  variant='h6' fontWeight={'700'}>Checking Account</Typography>
            <Grid>
                <Button  variant="outlined" onClick={randomiseInputData}>Manage</Button>
                <FormControl>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Month"
                        defaultValue={1}
                        onChange={randomiseInputData}
                    >
                        <MenuItem value={1}>January</MenuItem>
                        <MenuItem value={2}>Februaru</MenuItem>
                        <MenuItem value={3}>March</MenuItem>
                        <MenuItem value={4}>April</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
        <Divider/>
        <LineGraph data={data}/>
       </Grid>
        </>
    )

}

export default AccountCheck;