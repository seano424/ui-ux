import Layout from '@/components/Layout'
import type { NextPage } from 'next'
import Button from '@/components/Button/Button'

const Home: NextPage = () => {
  return (
    <Layout>
      <Button label="My Button" />
    </Layout>
  )
}

export default Home
