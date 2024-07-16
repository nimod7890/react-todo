import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { within, userEvent, expect} from '@storybook/test'

const meta: Meta<typeof Button> = {
    title : 'components/common/Button',
    component : Button,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Register: Story = {
    args: {
        variant : 'register',
        onClick: () => console.log('register-clicked'),
    },
    play : async({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button');
        await userEvent.click(button);
        expect(button).toHaveTextContent('클릭하기');
    } 
}

export const Delete: Story = {
    args: {
        variant : 'delete',
    },
}