import Box from '@mui/material/Box';

const Layout = ({children, index}) => {
  return (
    <>  
    <Box sx={{
      maxWidth: 1000,
      mx: 'auto',
      my: 0,
    }}>
      <main>{children}</main>
    </Box>
    </>
  )
}

export default Layout