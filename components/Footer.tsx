import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from 'next/image'

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

 const Footer = () => {
  return (
    <Box sx={{ 
      flexGrow: 1,
      width: '95%',
      mx: 'auto',
      my: 3,
    }}>
      <Grid 
        spacing={2}
        container 
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item xs>
          <Box>
            <Image
              src='/logo/footer-logo.svg'
              width={255}
              height={70}
              alt='footer-logo'
            />
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box sx={{
            textAlign: 'center'
          }}>
            <Image
              src='/icons/twitter-logo.svg'
              width={35}
              height={35}
              alt='twitter-logo'
            />
          </Box>
        </Grid>

        <Grid item xs>
          <Box>
            <Grid 
              spacing={1}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Image
                src='/icons/nextjs-logo.svg'
                width={60}
                height={36}
                alt='nextjs-logo'
                />
              </Grid>
              <Grid item>
                <Image
                src='/icons/materialui-logo.svg'
                width={26}
                height={26}
                alt='materialui-logo'
                />
              </Grid>
              <Grid item>
              <Image
                src='/icons/microcms-logo.svg'
                width={110}
                height={22}
                alt='microcms-logo'
                />
              </Grid>
              <Grid item>
              <Image
                src='/icons/vercel-logo.svg'
                width={89}
                height={20}
                alt='vercel-logo'
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}


export default Footer