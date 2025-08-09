import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

export default function Header(){
  const router = useRouter()
  const { t } = useTranslation('common')
  const { locales, locale, pathname, asPath, query } = router

  function changeLocale(l){
    router.push({ pathname, query }, asPath, { locale: l })
  }

  return (
    <header className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/"><a className="font-bold text-lg">Smartway Engineering</a></Link>
        <nav className="flex items-center gap-4">
          <Link href="/"><a>{t('nav_home')}</a></Link>
          <Link href="/services"><a>{t('nav_services')}</a></Link>
          <Link href="/contact"><a>{t('nav_contact')}</a></Link>
          <div className="ml-4 flex items-center gap-2">
            {locales.map((l)=> (
              <button key={l} onClick={()=>changeLocale(l)} className={`px-2 py-1 rounded ${l===locale? 'bg-slate-700': 'bg-transparent'}`}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
