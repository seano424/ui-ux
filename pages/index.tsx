import Layout from '@/components/Layout'
import type { NextPage } from 'next'
import Button from '@/components/Button/Button'
import Skeleton from '@/components/Skeleton/Skeleton'

const Home: NextPage = () => {
  return (
    <Layout>
      <article className="container space-y-10 py-10">
        <Button label="My Button" />
        <Skeleton />
      </article>
    </Layout>
  )
}

export default Home
