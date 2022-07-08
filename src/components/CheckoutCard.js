import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import accounting from "accounting"
import { useStateValue } from './StateProvider';
import { actionTypes } from '../reducer';




export default function CheckoutCard({product : {id,productType,description,name, price,rating}}) {
  const [expanded, setExpanded] = React.useState(false);
  const [{basket},dispatch]=useStateValue();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    const removeItem = () =>dispatch({
      type: actionTypes.REMOVE_ITEM,
      id: id
    });
  return (
    <Card sx={{ maxWidth: 345 , marginTop: "1rem"}}>
    <CardHeader
      action={
        <Typography variant='h5'
        color='textSecondary'>
        {accounting.formatMoney(price, "€")}
        </Typography>
      }
        title={name}
        subheader="in Stock"
        
      />
      <CardMedia
        component="img"
        height="194"
        image="zapasBlue.webp"
        alt="Taladrador"
      />

      <CardActions disableSpacing>
        <IconButton aria-label="rating">
        {Array(rating).fill().map((_,i)=>(
            <p>&#11088;</p>
        ))}
        </IconButton>
        <div style={{flexGrow: 1}}/> 
        <IconButton  aria-label="delete">
            <DeleteIcon fontSize="large" onClick={removeItem}/>
        </IconButton>
   </CardActions>
    </Card>
  );
}
