'use client'
import Link from 'next/link'
import Button from '@/components/Button/Button'
import Skeleton from '@/components/Skeleton/Skeleton'
import Header from '@/components/Header/Header'
import Tooltip from '@/components/Tooltip/Tooltip'

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.

export default function AboutPage() {
  return (
    <>
      <Tooltip message="Hello world!" position="bottom" />
      <Header />
      <div className="container space-y-10 py-10">
        <Link href="/news/test">
          <Button label="Test Page" />
        </Link>
        <Skeleton />
        <div className='h-[500px] border'></div>
      </div>
    </>
  )
}
