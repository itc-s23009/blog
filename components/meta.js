import Head from 'next/head'

// components/meta.js

import { siteMeta } from 'lib/constants'

const {
  siteTitle,
  siteDesc,
  siteUrl,
  siteLocale,
  siteType,
  siteIcon
} = siteMeta

// ここで取得した siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon を使って何かを行う

const Meta = ({ pageTitle }) => {
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle

  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />
    </Head>
  )
}
export default Meta
