import type { NextPage } from 'next'
import Button from '@/components/Button/Button'
import Skeleton from '@/components/Skeleton/Skeleton'

const Home: NextPage = () => {
  return (
    <div className="container space-y-10 py-10">
      <Button label="My Button" />
      <Skeleton />
    </div>
  )
}

export default Home
