import type { Meta, StoryObj } from '@storybook/angular';
import { ProductCard } from './product-card';

const meta: Meta<ProductCard> = {
  title: 'Molecules/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  args: {
    title: 'Bandeja Paisa',
    description: 'Frijoles, arroz, carne molida, chicharrón, huevo y plátano maduro.',
    price: 32000,
  },
};
export default meta;
type Story = StoryObj<ProductCard>;

export const Default: Story = {};
export const DescripcionCorta: Story = {
  args: { title: 'Limonada de coco', description: 'Fría y cremosa.', price: 9000 },
};
