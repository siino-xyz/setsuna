import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const ActionAreaCard = () => {
  return (
    <Card sx={{ 
      maxWidth: 345,
      backgroundColor: 'primary'
    }}>
      <CardActionArea sx={{
        backgroundColor: 'primary'
      }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActionAreaCard



// <>
// <div>
// {setsunaposts.map(setsunaposts => (
// <Link href={`/setsunaposts/${setsunaposts.id}`}>     
//   <div key={setsunaposts.id}>
//     <img 
//       src={setsunaposts.eye_catch.url} 
//       alt="Yo." 
//     />
//     <div>{setsunaposts.title}</div>

//     <Moment format="YYYY/MM/DD">
//       {setsunaposts.publishedAt}
//     </Moment>

//     <div>
//       {setsunaposts.categories.categories}
//     </div>
//   </div>
// </Link> 
// ))}
// </div>
// </>