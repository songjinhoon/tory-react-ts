import { Meta, StoryObj } from '@storybook/react';
import CommonHeader from '@components/organism/common/commonHeader';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Example/commonHeader',
  component: CommonHeader,
  tags: ['autodocs'],
  parameters: {
    // layout: 'centered',
    layout: 'fullscreen',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story></Story>
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof CommonHeader>;
export default meta;

type Story = StoryObj<typeof CommonHeader>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
