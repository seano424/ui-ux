'use client'
import Button from '@/components/Button/Button'
import Skeleton from '@/components/Skeleton/Skeleton'
import Link from 'next/link'

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.

export default function HomePage() {
  return (
    <div className="container space-y-10 py-10">
      <Link href="/news">
        <Button label="News Page" />
      </Link>
      <Skeleton />
    </div>
  )
}
