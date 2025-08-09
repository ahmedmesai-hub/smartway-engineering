import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Home() {
  const { t } = useTranslation('common')
  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
      </Head>
      <div className="prose lg:prose-xl">
        <h1>{t('welcome')}</h1>
        <p>{t('intro')}</p>

        <section className="mt-6">
          <h2>{t('services_title')}</h2>
          <ul>
            <li>{t('service_geo')}</li>
            <li>{t('service_monitor')}</li>
            <li>{t('service_app')}</li>
          </ul>
        </section>
      </div>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
