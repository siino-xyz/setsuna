import Typography ,{ TypographyProps }from "@mui/material/Typography"
import Box, { BoxProps } from "@mui/material/Box"
import Image from 'next/image'

const Item = (props: BoxProps) => {
  const { sx, ...other } = props
  return (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      backgroundColor: '#6186D4',
      p: 0,
      m: 1,
      ...sx
    }}
    {...other}
  />
  )
}


function TypoItem(props: TypographyProps) {
  const { sx , ...other } = props;
  return (
    <Typography 
      sx = {{
        my: 1,
        mx: 'auto',
        width: '90%'
      }}
      {...other}
    />
  )
}


const MelitBoxes = () => {
  return (
    <Box>
      <Item>
        <Image 
          src='/images/melit-1.svg'
          width={920}
          height={167}
          alt='melit-1'
        />
        <TypoItem>
        速さは正義です。ユーザーがアクセスした時、ページが表示されるまでの読み込み速度は重要なSEOの指標でもあります。
        </TypoItem>
        <TypoItem>
        jamstackでは、高速なコンテンツ表示やリロードなしでのページ遷移など、あらゆる部分でそのスピードを体感することができます。
        </TypoItem>
      </Item>

      <Item>
        <Image 
          src='/images/melit-2.svg'
          width={920}
          height={167}
          alt='melit-2'
        />
        <TypoItem>
        ウェブサイトに対するサイバー攻撃の多くはサーバーやデータベースを標的にしたものです。
        </TypoItem>
        <TypoItem>
        jamstackで構築されたウェブサイトは、動的なサイト（wordpress等）とは異なりサーバやデータベースと切り離された状態でホスティングされるため、サイバー攻撃に対するリスクを大きく抑える事が可能です。
        </TypoItem>
        <TypoItem>
        100%安全なウェブサイトは存在しませんが、jamstackが動的なウェブサイトに比べ遥かに低コストでセキュアな運用が可能であることは間違い有りません。
        </TypoItem>
      </Item>
    </Box>
  )
}

export default MelitBoxes