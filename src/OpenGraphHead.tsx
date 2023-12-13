//@ts-ignore
import React, { FC, useContext } from 'react';
import { OpenGraphContext } from './OpenGraphProvider';
import Head from 'next/head';
import { render } from './render';

export interface OpenGraphHeadProps {
  baseUrl?: string;
  url?: string;
  type?: string;
  title?: string;
  siteName?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageWidth?: number | string;
  imageHeight?: number | string;
  twitterSite?: string;
  twitterTitle?: string;
  twitterCard?: 'summary_large_image' | 'summary' | 'player' | 'app' | string;
  twitterCreator?: string;
  locale?: string;
  localeAlternates?: string[];
  videoUrl?: string;
  videoType?: string;
  audioUrl?: string;
  audioType?: string;
  determiner?: string;
}

export const OpenGraphHead: FC<OpenGraphHeadProps> = function (props) {
  const context = useContext(OpenGraphContext);

  return <Head>{render(props, context)}</Head>;
};
