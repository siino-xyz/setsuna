import Typography ,{TypographyProps}from "@mui/material/Typography";



function Item(props: TypographyProps) {
  const { sx , ...other } = props;
  return (
    <Typography 
      sx = {{
        my: 4,
        mx: 'auto',
      }}
      {...other}
    />
  )
}


const FullWidthText = () => {
  return (
    <>
      <Item>
      jamstack （ジャムスタック）とは、J・A・M（JavaScript・API・Markup）の技術を使用した、ウェブサイトを構築するアーキテクチャの一つです。もちろんこのサイトもjamstackでつくられています。
      </Item>

      <Item>
      jamstackアーキテクチャでは、データベースと通信を行う部分（動的コンテンツ）とそうでない部分（静的コンテンツ）を切り分けてウェブサイトを構築します。
      ウェブサイトの読み込みが遅くなる要因である動的コンテンツ（ex.ブログ記事、ログイン機能...）を直接サーバーに置かずにウェブAPI経由で実装することで、高速でセキュアなウェブサイトを実現することが可能となります。
      </Item>

      <Item>
      jamstackアーキテクチャでウェブサイトを構築すると、ユーザーにとってどのようなメリットがあるのかを簡単にご紹介します。
      </Item>
    </>
  )
}

export default FullWidthText