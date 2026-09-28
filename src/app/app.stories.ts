import type { Meta, StoryObj } from '@storybook/angular';
import { App } from './app';

const meta: Meta<App> = {
  title: 'Pages/Módulo de Pedido',
  component: App,
  parameters: { layout: 'fullscreen' },
};
export default meta;

export const Pedido: StoryObj<App> = {};
