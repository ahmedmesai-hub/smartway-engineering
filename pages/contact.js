import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Contact(){
  const { t } = useTranslation('common')
  return (
    <div>
      <h1 className="text-2xl font-bold">{t('nav_contact')}</h1>
      <p className="mt-2">Email: contact@smartway.example</p>
    </div>
  )
}

export async function getStaticProps({ locale }){
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } }
}
