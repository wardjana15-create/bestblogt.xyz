// pages/toolkit.tsx

import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import Image from 'next/image'

// Define the structure for a tool item
interface Tool {
  name: string
  description: string
  imageUrl: string
  affiliateUrl: string
  category: string
}

// Your curated list of recommended tools
const toolList: Tool[] = [
  {
    name: 'Notion',
    description:
      'The core of my business operations. I use it for project management, content planning, and as my central knowledge base. The new AI features are a game-changer.',
    imageUrl: '/static/images/toolkit/notion-logo.png', // We'll add this image later
    affiliateUrl: 'https://notion.so/?r=your-affiliate-id', // REPLACE with your actual affiliate link
    category: 'Productivity Hub',
  },
  // --- ADD MORE TOOLS HERE IN THE FUTURE ---
]

export default function Toolkit() {
  return (
    <>
      <PageSEO
        title={`Toolkit - My Recommended Tools | ${siteMetadata.headerTitle}`}
        description={`The curated list of AI-powered tools and software I use to run my business and stay productive. These are the best-in-class apps I personally recommend.`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            My Toolkit
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            This is a curated list of the tools and software I use every single day. I stand by
            these recommendations 100% as they are essential to my workflow as a solopreneur.
          </p>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            <em>
              Note: Some links may be affiliate links, which means I may earn a small commission at
              no extra cost to you.
            </em>
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {toolList.map((tool) => (
              <div key={tool.name} className="p-4 md:w-1/2 md:even:pl-8 lg:w-1/3">
                <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 dark:border-gray-700">
                  {/* We will add images later. This is a placeholder div. */}
                  <div className="h-48 w-full bg-gray-100 dark:bg-gray-800" />
                  <div className="p-6">
                    <h2 className="mb-1 text-lg font-medium text-gray-900 dark:text-gray-100">
                      {tool.name}
                    </h2>
                    <p className="mb-3 leading-relaxed text-gray-500 dark:text-gray-400">
                      {tool.description}
                    </p>
                    <div className="flex items-center ">
                      <Link
                        href={tool.affiliateUrl}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Link to ${tool.name}`}
                      >
                        Learn More &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
      }
