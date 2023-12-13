'use strict';

const React = require('react');
const Head = require('next/head');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const React__default = /*#__PURE__*/_interopDefaultCompat(React);
const Head__default = /*#__PURE__*/_interopDefaultCompat(Head);

const OpenGraphContext = React.createContext({});
const OpenGraphProvider = function(props) {
  const { children, head, ...rest } = props;
  return /* @__PURE__ */ React__default.createElement(OpenGraphContext.Provider, { value: rest }, children);
};

const getAbsoluteUrl = function(url, baseUrl) {
  if (baseUrl && url && url.indexOf("http") === -1) {
    return `${baseUrl}${url}`;
  }
  return url;
};
const render = (props, context) => {
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
    videoType
  } = Object.assign({}, context, props);
  const tags = [];
  const absoluteUrl = getAbsoluteUrl(url, baseUrl), absoluteImageUrl = getAbsoluteUrl(imageUrl, baseUrl), absoluteVideoUrl = getAbsoluteUrl(videoUrl, baseUrl), absoluteAudioUrl = getAbsoluteUrl(audioUrl, baseUrl);
  if (absoluteUrl) {
    tags.push(
      /* @__PURE__ */ React__default.createElement("meta", { key: "meta-og-url", property: "og:url", content: absoluteUrl })
    );
  }
  if (type) {
    tags.push(/* @__PURE__ */ React__default.createElement("meta", { key: "meta-og-type", property: "og:type", content: type }));
  }
  if (title) {
    tags.push(
      /* @__PURE__ */ React__default.createElement("meta", { key: "meta-og-title", property: "og:title", content: title }),
      /* @__PURE__ */ React__default.createElement("meta", { key: "meta-twitter-title", name: "twitter:title", content: title })
    );
  }
  if (siteName) {
    tags.push(
      /* @__PURE__ */ React__default.createElement(
        "meta",
        {
          key: "meta-og-site-name",
          property: "og:site_name",
          content: siteName
        }
      )
    );
  }
  if (description) {
    tags.push(
      /* @__PURE__ */ React__default.createElement("meta", { key: "meta-description", name: "description", content: description }),
      /* @__PURE__ */ React__default.createElement(
        "meta",
        {
          key: "meta-og-description",
          property: "og:description",
          content: description
        }
      ),
      /* @__PURE__ */ React__default.createElement(
        "meta",
        {
          key: "meta-twitter-description",
          name: "twitter:description",
          content: description
        }
      )
    );
  }
  if (absoluteImageUrl) {
    tags.push(
      /* @__PURE__ */ React__default.createElement(
        "meta",
        {
          key: "meta-og-image",
          property: "og:image",
          content: absoluteImageUrl
        }
      ),
      /* @__PURE__ */ React__default.createElement(
        "meta",
        {
          key: "meta-twitter-image",
          name: "twitter:image",
          content: absoluteImageUrl
        }
      )
    );
    if (imageAlt) {
      tags.push(
        /* @__PURE__ */ React__default.createElement(
          "meta",
          {
            key: "meta-og-image-alt",
            property: "og:image:alt",
            content: imageAlt
          }
        ),
        /* @__PURE__ */ React__default.createElement(
          "meta",
          {
            key: "meta-twitter-image-alt",
            name: "twitter:image:alt",
            content: imageAlt
          }
        )
      );
    }
    if (imageWidth) {
      tags.push(
        /* @__PURE__ */ React__default.createElement(
          "meta",
          {
            key: "meta-og-image-width",
            property: "og:image:width",
            content: `${imageWidth}`
          }
        )
      );
    }
    if (imageHeight) {
      tags.push(
        /* @__PURE__ */ React__default.createElement(
          "meta",
          {
            key: "meta-og-image-height",
            property: "og:image:height",
            content: `${imageHeight}`
          }
        )
      );
    }
  }
  if (twitterCard) {
    tags.push(
      /* @__PURE__ */ React__default.createElement(
        "meta",
        {
          key: "meta-twitter-card",
          name: "twitter:card",
          content: twitterCard
        }
      )
    );
  }
  if (twitterCreator) {
    tags.push(
      /* @__PURE__ */ React__default.createElement(
        "meta",
        {
          key: "meta-twitter-creator",
          name: "twitter:creator",
          content: twitterCreator
        }
      )
    );
  }
  if (twitterSite) {
    tags.push(
      /* @__PURE__ */ React__default.createElement(
        "meta",
        {
          key: "meta-twitter-site",
          name: "twitter:site",
          content: twitterSite
        }
      )
    );
  }
  if (locale) {
    tags.push(
      /* @__PURE__ */ React__default.createElement("meta", { key: "meta-og-locale", property: "og:locale", content: locale })
    );
  }
  if (Array.isArray(localeAlternates)) {
    tags.push(
      ...localeAlternates.map((localeAlternate) => /* @__PURE__ */ React__default.createElement(
        "meta",
        {
          key: `meta-og-locale-alternate-${localeAlternate}`,
          property: "og:locale:alternate",
          content: localeAlternate
        }
      ))
    );
  }
  if (absoluteAudioUrl) {
    tags.push(
      /* @__PURE__ */ React__default.createElement(
        "meta",
        {
          key: "meta-og-audio",
          property: "og:audio",
          content: absoluteAudioUrl
        }
      )
    );
    if (audioType) {
      tags.push(
        /* @__PURE__ */ React__default.createElement(
          "meta",
          {
            key: "meta-og-audio-type",
            property: "og:audio:type",
            content: audioType
          }
        )
      );
    }
  }
  if (absoluteVideoUrl) {
    tags.push(
      /* @__PURE__ */ React__default.createElement(
        "meta",
        {
          key: "meta-og-video",
          property: "og:video",
          content: absoluteVideoUrl
        }
      )
    );
    if (videoType) {
      tags.push(
        /* @__PURE__ */ React__default.createElement(
          "meta",
          {
            key: "meta-og-video-type",
            property: "og:video:type",
            content: videoType
          }
        )
      );
    }
  }
  if (determiner) {
    tags.push(
      /* @__PURE__ */ React__default.createElement(
        "meta",
        {
          key: "meta-og-determiner",
          property: "og:determiner",
          content: determiner
        }
      )
    );
  }
  return tags;
};

const OpenGraphHead = function(props) {
  const context = React.useContext(OpenGraphContext);
  return /* @__PURE__ */ React__default.createElement(Head__default, null, render(props, context));
};

exports.OpenGraphContext = OpenGraphContext;
exports.OpenGraphHead = OpenGraphHead;
exports.OpenGraphProvider = OpenGraphProvider;
