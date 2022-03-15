 import Link from 'next/link'
 import { client } from '../libs/client'
 import  FormButton from '../components/ui-parts/FormButton'
 import Header from '../components/ui-parts/Header'
import { Typography } from '@mui/material'

const Home = ({ blog }) => {
  return (
    <>
     <Header home/>
      <div>
        <ul>
          {blog.map((blog) =>(
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <Typography variant="h1">
          行方不明Yukuefumei
        </Typography>
        <Typography variant="h2">
          行方不明Yukuefumei
        </Typography>
        <Typography variant="h3">
          行方不明Yukuefumei
        </Typography>
        <Typography variant="h4">
          行方不明Yukuefumei
        </Typography>
        <Typography variant="subtitle1">
          行方不明Yukuefumei
        </Typography>
        <Typography variant="body1">
          行方不明Yukuefumei
        </Typography>
        
      </div>
      <FormButton />
    </>
  )
}

export const getStaticProps = async() => {
  const data = await client.get({endpoint: "blog"})

  return {
    props: {
      blog: data.contents
    }
  }
}

export default Home

