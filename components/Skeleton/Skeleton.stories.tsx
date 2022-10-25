import { ComponentMeta } from '@storybook/react'
import Skeleton from './Skeleton'

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>

export const SkeletonCard = () => <Skeleton />
