import { client } from '../../libs/client'
import { Setsunaposts } from '../../types/setsunaposts'
import Moment from 'react-moment'

type Props = {
  setsunaposts: Setsunaposts
}

export default function Setsunaposts({setsunaposts}: Props) {
  return (
    <div>
      <div>
        <img 
          src={setsunaposts.eye_catch.url} 
         />
         <div>
           {setsunaposts.title}
         </div>
         <Moment format="YYYY/MM/DD">
            {setsunaposts.publishedAt}
         </Moment>
         <div>
              {setsunaposts.categories.categories}
            </div>
      </div>
    </div>
  )
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "setsunaposts" });

  const paths = data.contents.map( content => `/setsunaposts/${content.id}`);
  return { paths, fallback: false };
};



export const getStaticProps =async(context) => {
  const id = context.params.id;
  const data = await client.get({endpoint: "setsunaposts", contentId: id});

  return {
    props: {
      setsunaposts: data,
    }
  }
}