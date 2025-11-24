import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({
    title,
    description,
    keywords,
    canonical,
    ogType = 'website',
    ogImage = '/og-image.jpg',
    twitterCard = 'summary_large_image'
}) => {
    const siteUrl = 'https://amzcoz.com'
    const fullTitle = title ? `${title} | AMZCOZ` : 'AMZCOZ - Amazon Growth Experts'
    const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:image" content={`${siteUrl}${ogImage}`} />
            <meta property="og:site_name" content="AMZCOZ" />

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={fullTitle} />
            {description && <meta name="twitter:description" content={description} />}
            <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
        </Helmet>
    )
}

export default SEO
