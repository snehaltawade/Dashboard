import { Button, Divider, FormControl, Grid, InputLabel, MenuItem, NativeSelect, Select, Typography } from "@mui/material";
import LineGraph from "../charts/LineGraph";
import { useState } from "react";
import StyledAccountCheck, { BootstrapInput } from "./StyledAccountCheck";

const AccountCheck = () =>{
    const [data,setData]=useState([10,30,85,105,90,50,25,75,90,80,20,47,55,45,10,40])
    const [month,setMonth]=useState('')
    const randomiseInputData=()=>{
        var randoms=[...Array(16)].map(()=>Math.floor(Math.random()*90))
        console.log('random',randoms)
        setData(randoms)
    }
    const handleChange = (event) => {
        setMonth(event.target.value);
        randomiseInputData()
      };
    return(
        <StyledAccountCheck>
            <Grid container flexDirection={"column"} gap={'10px'}>
                <Grid container justifyContent={"space-between"}>
                    <Typography variant='h6' fontWeight={'700'}>Checking Account</Typography>
                    <Grid>
                        <Button variant="outlined" onClick={randomiseInputData}>Manage</Button>
                        <FormControl sx={{ m: 1 }} variant="standard" className="month-control">

                            <NativeSelect
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                value={month}
                                onChange={handleChange}
                                input={<BootstrapInput />}
                                defaultValue={10}
                            >

                                <option value={10}>January</option >
                                <option  value={20}>Feb</option >
                                <option  value={30}>March</option >
                            </NativeSelect>
                        </FormControl>
                    </Grid>
                </Grid>
                <Divider />
                <LineGraph data={data} />
            </Grid>
        </StyledAccountCheck>
    )

}

export default AccountCheck;