import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Image from 'next/image'

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0.5),
  textAlign: 'left',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.secondary.main,
  boxShadow: 'none',
}));

const ServiceContent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Item>
            <Typography variant="h3" component="h3">
              Whats setsuna?
            </Typography>
            <Typography variant="body1" component="p">
              setsunaは、大阪を拠点に活動するフリーランスのWEB制作所です。jamstackを用いた、パフォーマンスの高いウェブサイト構築を強みとしています。
            </Typography>
            <Typography variant="body1" component="p">
              sデザインにおいては、伝えたい情報に「いかに速くユーザーを導けるか」を意識した導線設計を心がけています。コーポレートサイトからオウンドメディアまで様々な形態に対応しており、最適な構築プランをご提案いたします。
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item>
            <Image 
              src='/gif/wireframe.gif' 
              width={550} 
              height={327} 
              alt='wireframe-gif' 
            />
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item>
            <Image 
              src='/gif/codeview.gif' 
              width={550} 
              height={290} 
              alt='codeview-gif' 
            />
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
              <Typography variant="h3" component="h3">
                Whats setsuna?
              </Typography>
              <Typography variant="body1" component="p">
                setsunaは、大阪を拠点に活動するフリーランスのWEB制作所です。jamstackを用いた、パフォーマンスの高いウェブサイト構築を強みとしています。
              </Typography>
              <Typography variant="body1" component="p">
                sデザインにおいては、伝えたい情報に「いかに速くユーザーを導けるか」を意識した導線設計を心がけています。コーポレートサイトからオウンドメディアまで様々な形態に対応しており、最適な構築プランをご提案いたします。
              </Typography>
            </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ServiceContent