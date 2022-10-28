import { ComponentMeta } from '@storybook/react'
import Header from './Header'

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Header>

export const HeaderComponent = () => <Header />
