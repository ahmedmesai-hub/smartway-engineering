import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Services(){
  const { t } = useTranslation('common')
  return (
    <div>
      <h1 className="text-2xl font-bold">{t('services_title')}</h1>
      <p className="mt-2">{t('service_geo')}</p>
      <p>{t('service_monitor')}</p>
      <p>{t('service_app')}</p>
    </div>
  )
}

export async function getStaticProps({ locale }){
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } }
}
