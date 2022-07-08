import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import accounting from "accounting"
import { actionTypes } from '../reducer';
import { useStateValue } from './StateProvider';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product({ product: { id, productType, description, name, price,rating, image } }) {
  const [expanded, setExpanded] = React.useState(false);
  const [{basket}, dispatch]=useStateValue();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        name,
        productType,
        image,
        price,
        rating,
        description,
      }
    })
  }
  return (
    <Card sx={{ maxWidth: 345, marginTop: "1rem" }}>
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
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart" onClick={addToBasket}>
          <AddShoppingCart fontSize='large' />
        </IconButton>
        {Array(rating).fill().map((_, i) => (
          <p>&#11088;</p>
        ))}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {description}
        </CardContent>
      </Collapse>
    </Card>
  );
}
