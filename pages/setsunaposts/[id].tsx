import Moment from 'react-moment'
import { Setsunaposts } from '../../types/setsunaposts'
import { client } from '../../libs/client'
import Layout from '../../components/Layout'
import BlogHeader from '../../components/BlogHeader'

type Props = {
  setsunaposts: Setsunaposts
}

const Setsunaposts =({ setsunaposts }: Props) => {
  return (
    <>
    <BlogHeader />
    <Layout index>
        <div>
          <div>
            {/* <Image 
              image={setsunaposts.eye_catch.url}
              width={900}
              height={300}
              alt="eye_catch"
            /> */}
            <div>
              {setsunaposts.title}
            </div>
            <Moment format="YYYY/MM/DD">
                {setsunaposts.publishedAt}
            </Moment>
            <div 
              dangerouslySetInnerHTML={{
              __html: `${setsunaposts.body}`,
              }}
              />
            <div>
                {setsunaposts.categories.categories}
              </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Setsunaposts

//静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "setsunaposts" });

  const paths = data.contents.map( content => `/setsunaposts/${content.id}`);
  return { paths, fallback: false };
};



export const getStaticProps = async( context) => {
  const id = context.params.id;
  const data = await client.get({endpoint: "setsunaposts", contentId: id});

  return {
    props: {
      setsunaposts: data,
    }
  }
}


