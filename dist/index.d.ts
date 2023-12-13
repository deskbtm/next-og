import React, { FC, PropsWithChildren } from 'react';

interface OpenGraphHeadProps {
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
declare const OpenGraphHead: FC<OpenGraphHeadProps>;

declare const OpenGraphContext: React.Context<OpenGraphHeadProps>;
interface OpenGraphProviderProps extends OpenGraphHeadProps, PropsWithChildren {
    head?: any;
}
declare const OpenGraphProvider: FC<OpenGraphProviderProps>;

export { OpenGraphContext, OpenGraphHead, type OpenGraphHeadProps, OpenGraphProvider, type OpenGraphProviderProps };
