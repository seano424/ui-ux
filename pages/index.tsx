import Layout from '@/components/Layout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-sm md:text-xl lg:text-3xl">Hello World</h1>
    </Layout>
  )
}

export default Home
