import { Typography } from "@mui/material";

const SectionTitle = (props) => {
  return (
    <Typography 
    variant='h2'
    component='h2'
    sx= {{
      mx: 'auto',
      my: 5,
      textAlign: 'center',
    }}
    >
      {props.sectiontitle}
    </Typography>
  )
}

export default SectionTitle