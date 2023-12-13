```tsx
import { usePathname } from 'next/navigation';

const BASE_URL = 'https://deskbtm.com';
const SITE_NAME = 'Deskbtm';
const DEFAULT_TITLE = "I'm an indie hacker";
const DEFAULT_DESCRIPTION = 'No inspiration is spared.';
const DEFAULT_KEYWORDS =
  'deskbtm,nawb,aqua,indiebase,win32ffi,indie studio,javascript,app,application,developer,software,vs droid';

function App({ pageProps }) {
  const metaUrl = usePathname();
  return (
    <OpenGraphProvider
      baseUrl={BASE_URL}
      description={DEFAULT_DESCRIPTION}
      imageUrl="/og.webp"
      siteName={SITE_NAME}
      title={DEFAULT_TITLE}
      twitterCard="summary_large_image"
      twitterSite="@deskbtm"
      twitterCreator="@deskbtm"
      url={metaUrl!}
    >
      <OpenGraphHead />
      <Component {...pageProps} />
    </OpenGraphProvider>
  );
}
```
