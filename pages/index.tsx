import { client } from '../libs/client'
import type { Setsunaposts } from '../types/setsunaposts'
import Link from 'next/link'
import Moment from 'react-moment'

// 記事カード
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// 記事カード GridLayout
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

type Props = {
  setsunaposts: Array<Setsunaposts>
}

const Index = ({ setsunaposts }: Props ) => {
  return (
  <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {setsunaposts.map(setsunaposts => (
        <Link href={`/setsunaposts/${setsunaposts.id}`} key={setsunaposts.id}>     
        <Grid item xs={3}>
          <Card sx={{ 
            maxWidth: 310,
            backgroundColor: '#333333'
          }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={setsunaposts.eye_catch.url} 
                alt="Yo." 
              />
              <CardContent>
                <Typography variant="h4" component="div">
                  {setsunaposts.title}
                </Typography>

                <Moment format="YYYY/MM/DD">
                  {setsunaposts.publishedAt}
                </Moment>

                <div>
                  {setsunaposts.categories.categories}
                </div>
                
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        </Link>
        ))}
      </Grid>
    </Box>
  </>
  )
}

export default Index

export const getStaticProps  = async () => {
  const data = await client.get({ endpoint: 'setsunaposts'})

  return {
    props: {
      setsunaposts: data.contents,
    }
  }
}



