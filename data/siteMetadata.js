// data/siteMetadata.js

/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'AI Flow Kit | Supercharge Your Productivity', // REPLACE WITH YOUR TITLE
  author: 'Alex Reed', // REPLACE WITH YOUR NAME
  headerTitle: 'AI Flow Kit', // This can be your site name
  description:
    'In-depth reviews, workflows, and guides for the best AI-powered personal productivity tools. Master your efficiency as a solopreneur.', // REPLACE WITH YOUR DESCRIPTION
  language: 'en-us',
  theme: 'system', // Options: 'system' (default), 'dark', 'light'
  siteUrl: 'https://www.aiflowkit.xyz', // YOUR DOMAIN NAME
  siteRepo: 'https://github.com/wardjana15/your-repo-name', // REPLACE with your GitHub repo URL
  siteLogo: '/static/images/logo.png', // You can change this later
  socialBanner: '/static/images/twitter-card.png', // You can change this later
  mastodon: 'https://mastodon.social/@mastodonuser', // Optional
  email: 'evereth911@gmail.com', // REPLACE with your email
  github: 'https://github.com/wardjana15', // REPLACE with your GitHub profile
  twitter: 'https://twitter.com/YourTwitterHandle', // Optional
  facebook: 'https://facebook.com', // Optional
  youtube: 'https://youtube.com', // Optional
  linkedin: 'https://www.linkedin.com/in/YourLinkedIn/', // Optional
  locale: 'en-US',
  
  // Analytics and Comments can be configured later
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // e.g. '*.google-analytics.com'
    // See plausible.io, simpleanalytics.com, or umami.is for alternatives.
    // umamiAnalytics: {
    //   umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    // },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  comments: {
    // Comment system configuration
    provider: 'giscus', // Select provider, e.g., 'giscus', 'utterances', 'disqus'
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
}

module.exports = siteMetadata
