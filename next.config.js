/** @type {import('next').NextConfig} */

// A robust Content Security Policy (CSP) is crucial for security.
// This policy allows loading resources from your own domain ('self'),
// enables Google Analytics, and allows for Giscus comments (a popular blog commenting system).
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com;
  child-src 'self' giscus.app;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self';
`;

const securityHeaders = [
  // Apply the Content Security Policy
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  },
  // Controls how much referrer information is sent with requests
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  // Prevents the site from being rendered in a frame or iframe (clickjacking protection)
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  // Prevents the browser from MIME-sniffing a response away from the declared content-type
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  // Controls DNS prefetching
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  // Enforces secure (HTTPS) connections to the server
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  // Controls permissions for browser features
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
];

module.exports = {
  reactStrictMode: true,
  // This function applies the security headers to all routes in your application
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  webpack: (config) => {
    // This rule allows us to import SVG files as React components,
    // which is a modern and efficient way to handle icons.
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
