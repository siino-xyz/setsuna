import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Image from 'next/image'
import Link from 'next/link'
import Box, { BoxProps } from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';


const Item = (props: BoxProps) => {
  const { sx, ...other} = props;
  return (
    <Box 
      sx={{
        pr: 1,
        pl: 1,
        backgroundColor: 'secoundary.main',
        ...sx,
      }}
      {...other}
    />
  )
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const BlogHeader = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
        <Box sx={{ 
          flexGrow: 1,      
        }}>
          <AppBar position="static" sx={{ 
            backgroundColor: 'background.default',
            boxShadow: 'none'
          }}>
            <Box sx= {{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
            <Image src="/logo/setsuna-logo-blog.svg" width={192} height={63} alt='setsuna-logo'/>
            
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Item One" {...a11yProps(0)} />
                  <Tab label="Item Two" {...a11yProps(1)} />
                  <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
            </Box>

            <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  pr: 0.1,
                  pl: 0.1,
                  m: 1,
                  bgcolor: 'secoundary.main',
                  borderRadius: 1,
                }}
              >
                <Item>
                  <Image src="/icons/twitter-logo.svg" width={35} height={35} alt="twitter-logo"/>
                </Item>
                <Item>
                  <Image src="/icons/contact-icon.svg" width={35} height={35} alt="email-icon"/>
                </Item>
              </Box>
            </Box>
          </AppBar>
        </Box>
     
  )
}


export default BlogHeader



