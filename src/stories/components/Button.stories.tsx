import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/base/Button';
import { Close } from '@/assets';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  // argTypes: {
  //   className: {
  //     control: { label: 'text' },
  //   },
  // },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const DefaultButton: Story = {
  args: {
    className: '',
  },
  render: (args) => <Button {...args}>Button</Button>,
};

export const LoginButton: Story = {
  args: {
    className: 'login-button',
    value: 'login',
  },
  render: (args) => <Button {...args}>로그인</Button>,
};

export const RadioButton: Story = {
  args: {
    type: 'submit',
    children: 'Submit',
  },
};

export const ModalCloseButton: Story = {
  args: {
    className: 'modalCloseBtn',
  },
  render: (args) => (
    <Button {...args}>
      <Close />
    </Button>
  ),
};
