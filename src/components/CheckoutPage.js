import React from "react";

import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
// import {useStateValue} from '../StateProvider';
// import CheckoutCard from './CheckoutCard';
// import Total from './Total';
import products from '../product-data'
import CheckoutCard from "./CheckoutCard";
import Total from "./Total";
import { useStateValue } from './StateProvider';



const CheckoutPage=()=>{
   
    const [{basket},dispatch]=useStateValue();
    function FormRow(){
        return (
            <React.Fragment>
                {basket?.map((item)=>(
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <CheckoutCard key={item.id} product={item}/>
                    </Grid>
               ))}
               </React.Fragment>
        );
    }

return(
    <div sx={ {flexGrow: 1,
        padding: "2rem"}}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography align='center' gutterBottom variant='h4'>
                    ShoppingCart
                </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={9} container spacing={2}>
                <FormRow />
            </Grid>
            <Grid item sx={12} sm={4} md={3}>
                <Typography align='center' gutterBottom variant='h4'>
                    <Total/>
                </Typography>
            </Grid>
        </Grid>
    </div>
)
}
export default CheckoutPage;