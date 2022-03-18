import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Box from '@mui/material/Box'


const About = () => {
  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        my: 0,
        mx: 'auto',
        width: 280
      }}>
        <Box sx={{
          maxWidth: 175,
          mx: 'auto',
          textAlign: 'center'
        }}>
          <Image 
            src='/images/about-1.png'
            width={175}
            height={175}
            alt='about-1'
            />
        </Box>
        <Typography variant="subtitle1" component="span">
          篠田&nbsp; 亜理伊（しのだ・あり）
        </Typography>
        <Typography variant="body1" component="span">
          鳥取県出身の1995/04/27生まれ。
          大坂在住のフリーランスエンジニア/デザイナー。
          昔はテレビ局の報道部門で働いていたりした。
        </Typography>
        <Typography variant="body1" component="span">
          何かを作ったり、ものを考えたりすることが得意です。
          趣味はギターと自作キーボードとWikipedia巡り。
        </Typography>
      </Box>
    </>
  )
}

export default About