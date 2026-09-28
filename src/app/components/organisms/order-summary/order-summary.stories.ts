import type { Meta, StoryObj } from '@storybook/angular';
import { OrderSummary } from './order-summary';

const meta: Meta<OrderSummary> = {
  title: 'Organisms/OrderSummary',
  component: OrderSummary,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<OrderSummary>;

export const Vacio: Story = { args: { items: [] } };
export const ConProductos: Story = {
  args: {
    items: [
      { id: 1, name: 'Bandeja Paisa', price: 32000, qty: 1 },
      { id: 2, name: 'Limonada de coco', price: 9000, qty: 2 },
    ],
  },
};
