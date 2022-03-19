import { client } from '../libs/client'
import type { Setsunaposts } from '../types/setsunaposts'
import Link from 'next/link'
import Moment from 'react-moment'

import Header from '../components/Header'
import Layout from '../components/Layout'
import SectionTitle from '../components/SectionTitle'
import ServiceContent from '../components/ServiceContent'
import FullWidthText from '../components/FullWidthText'
import MelitBoxes from '../components/MelitBoxes'
import About from '../components/About'
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

const GetArticles = ({ setsunaposts }: Props ) => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      mx: 'auto',
      my: 0
    }}>
      {setsunaposts.map(setsunaposts => (
      <Box key={setsunaposts.id} sx={{
        width: '95%',
        maxWidth: 310,
        mx: 1
      }}>
         
        <Card sx={{ 
          width: '100%',
          backgroundColor: '#333333',
          borderRadius: 0.7,
        }}>
          <CardActionArea sx={{
            
            cursor: 'inherit',
          }}>
            <Link href={`/setsunaposts/${setsunaposts.id}`} passHref>  
              <CardMedia
                component="img"
                height="155"
                image={setsunaposts.eye_catch.url} 
                alt="Yo."

                sx={{
                  cursor: 'pointer',
                }}
              />
            </Link>

            <CardContent sx={{
              px: 1,
              py: 0.8,
              backgroundColor: 'common.white'
            }}>
              

              <Typography variant="subtitle2" component="span" sx={{
                backgroundColor: 'common.black',
                color: 'common.white',
                px: 1,
                pt: 0,
                pb: 0.2,
                borderRadius: 0.7,
               }}>
                {setsunaposts.categories.categories}   
              </Typography>

              <Link href={`/setsunaposts/${setsunaposts.id}`} passHref>  
                <Typography variant="subtitle1" component="h1" sx={{
                  color: 'common.black',
                  lineHeight: '2.2rem',
                  cursor: 'pointer',
                }}>
                  {setsunaposts.title}
                </Typography>
              </Link>
              
              <Typography variant="subtitle2" component="div" sx={{
                color: 'common.black',
                textAlign: 'right',
              }}>
                <Moment format="YYYY/MM/DD">
                  {setsunaposts.publishedAt}
                </Moment>
              </Typography>

              
            </CardContent>
          </CardActionArea>
        </Card>
      
      </Box>
      ))}
    </Box>
  )
}


const Index = ( ) => {
  return (
  <>
  <Header />
  <Layout index>

    {/* <GetArticles /> */}

    <SectionTitle
      sectiontitle={'高速でセキュアなウェブサイトをつくります'}
    />
    <ServiceContent />
    <SectionTitle
      sectiontitle={'jamstackとは？'}
    />
    <FullWidthText />
    <SectionTitle
      sectiontitle={'jamstackのメリット'}
    />

    <MelitBoxes />

    <SectionTitle
      sectiontitle={'自己紹介'}
    />
    <About />
  </Layout>
  <Footer />
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



