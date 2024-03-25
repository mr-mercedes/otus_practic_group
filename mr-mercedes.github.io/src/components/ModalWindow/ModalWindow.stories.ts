import type { Meta } from '@storybook/react';
import { ModalWindow } from './ModalWindow';

const meta: Meta<typeof ModalWindow> = {
  title: 'Modal',
  component: ModalWindow,
  tags: ['autodocs'],
};

export default meta;

export const Show = {
  args: {
    visible: true,
    children: 'Text',
  },
};

export const Hidden = {
  args: {
    visible: false,
    children: 'Text',
  },
};
