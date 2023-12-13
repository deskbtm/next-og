//@ts-ignore
import React, { type ReactNode } from 'react';
import { OpenGraphHeadProps } from './OpenGraphHead';

const getAbsoluteUrl = function (url?: string, baseUrl?: string) {
  if (baseUrl && url && url.indexOf('http') === -1) {
    return `${baseUrl}${url}`;
  }

  return url;
};

export const render = (
  props: OpenGraphHeadProps,
  context: OpenGraphHeadProps,
) => {
  const {
    audioUrl,
    audioType,
    baseUrl,
    description,
    determiner,
    imageUrl,
    imageAlt,
    imageWidth,
    imageHeight,
    locale,
    localeAlternates,
    siteName,
    title,
    type,
    twitterCard,
    twitterCreator,
    twitterSite,
    url,
    videoUrl,
    videoType,
  } = Object.assign({}, context, props);

  const tags: ReactNode[] = [];
  const absoluteUrl = getAbsoluteUrl(url, baseUrl),
    absoluteImageUrl = getAbsoluteUrl(imageUrl, baseUrl),
    absoluteVideoUrl = getAbsoluteUrl(videoUrl, baseUrl),
    absoluteAudioUrl = getAbsoluteUrl(audioUrl, baseUrl);

  if (absoluteUrl) {
    tags.push(
      <meta key="meta-og-url" property="og:url" content={absoluteUrl} />,
    );
  }

  if (type) {
    tags.push(<meta key="meta-og-type" property="og:type" content={type} />);
  }

  if (title) {
    tags.push(
      <meta key="meta-og-title" property="og:title" content={title} />,
      <meta key="meta-twitter-title" name="twitter:title" content={title} />,
    );
  }

  if (siteName) {
    tags.push(
      <meta
        key="meta-og-site-name"
        property="og:site_name"
        content={siteName}
      />,
    );
  }

  if (description) {
    tags.push(
      <meta key="meta-description" name="description" content={description} />,
      <meta
        key="meta-og-description"
        property="og:description"
        content={description}
      />,
      <meta
        key="meta-twitter-description"
        name="twitter:description"
        content={description}
      />,
    );
  }

  if (absoluteImageUrl) {
    tags.push(
      <meta
        key="meta-og-image"
        property="og:image"
        content={absoluteImageUrl}
      />,
      <meta
        key="meta-twitter-image"
        name="twitter:image"
        content={absoluteImageUrl}
      />,
    );

    if (imageAlt) {
      tags.push(
        <meta
          key="meta-og-image-alt"
          property="og:image:alt"
          content={imageAlt}
        />,
        <meta
          key="meta-twitter-image-alt"
          name="twitter:image:alt"
          content={imageAlt}
        />,
      );
    }

    if (imageWidth) {
      tags.push(
        <meta
          key="meta-og-image-width"
          property="og:image:width"
          content={`${imageWidth}`}
        />,
      );
    }

    if (imageHeight) {
      tags.push(
        <meta
          key="meta-og-image-height"
          property="og:image:height"
          content={`${imageHeight}`}
        />,
      );
    }
  }

  if (twitterCard) {
    tags.push(
      <meta
        key="meta-twitter-card"
        name="twitter:card"
        content={twitterCard}
      />,
    );
  }

  if (twitterCreator) {
    tags.push(
      <meta
        key="meta-twitter-creator"
        name="twitter:creator"
        content={twitterCreator}
      />,
    );
  }

  if (twitterSite) {
    tags.push(
      <meta
        key="meta-twitter-site"
        name="twitter:site"
        content={twitterSite}
      />,
    );
  }

  if (locale) {
    tags.push(
      <meta key="meta-og-locale" property="og:locale" content={locale} />,
    );
  }

  if (Array.isArray(localeAlternates)) {
    tags.push(
      ...localeAlternates.map((localeAlternate) => (
        <meta
          key={`meta-og-locale-alternate-${localeAlternate}`}
          property="og:locale:alternate"
          content={localeAlternate}
        />
      )),
    );
  }

  if (absoluteAudioUrl) {
    tags.push(
      <meta
        key="meta-og-audio"
        property="og:audio"
        content={absoluteAudioUrl}
      />,
    );

    if (audioType) {
      tags.push(
        <meta
          key="meta-og-audio-type"
          property="og:audio:type"
          content={audioType}
        />,
      );
    }
  }

  if (absoluteVideoUrl) {
    tags.push(
      <meta
        key="meta-og-video"
        property="og:video"
        content={absoluteVideoUrl}
      />,
    );

    if (videoType) {
      tags.push(
        <meta
          key="meta-og-video-type"
          property="og:video:type"
          content={videoType}
        />,
      );
    }
  }

  if (determiner) {
    tags.push(
      <meta
        key="meta-og-determiner"
        property="og:determiner"
        content={determiner}
      />,
    );
  }

  return tags;
};
