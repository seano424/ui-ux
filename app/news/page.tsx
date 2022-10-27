'use client'
import Button from '@/components/Button/Button'
import Skeleton from '@/components/Skeleton/Skeleton'
import Header from '@/components/Header/Header'

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="container space-y-10 py-10">
        <Button label="My Button" />
        <Skeleton />
      </div>
    </>
  )
}