import { ComponentStory, ComponentMeta } from '@storybook/react'
import Tooltip from './Tooltip'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'green',
  position: 'bottom',
  message: 'I am a tooltip',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'teal',
  position: 'top',
  message: 'I am a tooltip',
}

export const Large = Template.bind({})
Large.args = {
  color: 'red',
  position: 'bottom',
  message: 'I am a tooltip',
}

export const Small = Template.bind({})
Small.args = {
  position: 'top',
  message: 'I am a tooltip',
}
