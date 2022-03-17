import { client } from '../libs/client'
import type { Setsunaposts } from '../types/setsunaposts'
import Link from 'next/link'
import Moment from 'react-moment'

type Props = {
  setsunaposts: Array<Setsunaposts>
}

export default function Index({ setsunaposts }: Props ) {
  return (
    <>
      <div>
      {setsunaposts.map(setsunaposts => (
      <Link href={`/setsunaposts/${setsunaposts.id}`}>
        <div key={setsunaposts.id}>
          <img 
            src={setsunaposts.eye_catch.url} 
            alt="Yo." 
          />
          <div>{setsunaposts.title}</div>

          <Moment format="YYYY/MM/DD">
            {setsunaposts.publishedAt}
          </Moment>

          <div>
            {setsunaposts.categories.categories}
          </div>
        </div>
      </Link> 
      ))}
    </div> 
  </>
  )
}

export const getStaticProps  = async () => {
  const data = await client.get({ endpoint: 'setsunaposts'})

  return {
    props: {
      setsunaposts: data.contents,
    }
  }
}



