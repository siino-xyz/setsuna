import { client } from '../libs/client'
import type { Setsunaposts } from '../types/setsunaposts'
import Link from 'next/link'
import Moment from 'react-moment'

import BlogHeader from '../components/BlogHeader'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

//mui-components
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


type Props = {
  setsunaposts: Array<Setsunaposts>
}


const Articles = ({ setsunaposts }: Props ) => {
  return (
  <>
  <BlogHeader />
  <Layout index>
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      mx: 'auto',
      my: 0
    }}>
      {setsunaposts.map(setsunaposts => (
      <Box key={setsunaposts.id} >
      <Link href={`/setsunaposts/${setsunaposts.id}`} passHref>     
        <Card sx={{ 
          maxWidth: 310,
          backgroundColor: '#333333'
        }}>
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
      </Link>
      </Box>
      ))}
    </Box>

  </Layout>
  <Footer />
  </>
  )
}

export default Articles

export const getStaticProps  = async () => {
  const data = await client.get({ endpoint: 'setsunaposts'})

  return {
    props: {
      setsunaposts: data.contents,
    }
  }
}