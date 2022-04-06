import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import NewsCard from './'

export default {
  title: 'NewsCard',
  component: NewsCard,
} as ComponentMeta<typeof NewsCard>;

export const DefaultArticle: ComponentStory<typeof NewsCard> = () => <NewsCard title="First news article" text="Hello world, i`m beginner frontend developer" />;
