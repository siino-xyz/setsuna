import { client } from '../libs/client'
import type { Setsunaposts } from '../types/setsunaposts'
import Link from 'next/link'

import Header from '../components/Header'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

//mui-components
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



const ThanksPage = ( ) => {
  return (
  <>
  <Header />
  <Layout index>
    <div>
      うんこ大好き！！！！
    </div>
  </Layout>
  <Footer />
  </>
  )
}

export default ThanksPage




