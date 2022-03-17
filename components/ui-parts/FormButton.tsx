import { Button } from '@mui/material'

const FromButton = () => {
  return (
    <Button variant="contained" sx= {{
      width: 150,
      height: 50,
      color: 'common.white',
      backgroundColor: 'primary',
      fontSize: "1.25rem",
      fontFamily: [
          'Zen Kaku Gothic Antique',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
      ].join(','),
      fontWeight: 700,
      letterSpacing: '0.09em'
    }}>
     送信する
    </Button>
  )
}

export default FromButton

