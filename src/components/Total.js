import React from 'react';
import accounting from 'accounting';
import { Button, makeStyles } from '@mui/material';
import {getBasketTotal} from "../reducer";
import { useStateValue } from './StateProvider';

 const root = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        height: "20vh",
 };
    const button = {
        marginTop: "2rem",
        
     };

const Total = ()=> {
  const [{basket}, dispatch]=useStateValue();

  return (
    <div sx={root}>
        <h5>Total items: {basket?.length}</h5>
    <h5>{accounting.formatMoney(getBasketTotal(basket),'€')}</h5>
    <Button sx={button} variant='contained' color='secondary'>Check out</Button>
    </div>
  )
}
export default Total;
