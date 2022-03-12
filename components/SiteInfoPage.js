import React from 'react'
import useTranslation from 'next-translate/useTranslation';

const SiteInfoPage = () => {
  let {t} = useTranslation();
  return (
      <div className='dark:bg-slate-800 min-h-subnav'>
    <section className='text-zinc-700 dark:text-gray-50 flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16'>
     <h1 className='font-bold text-xl md:text-3xl lg:text-4xl text-left mb-5'>
     {t("siteinfo:about")}
     </h1>
     <p className='mb-3'>
     {t("siteinfo:p1")}
     </p>
     <p className='mb-3'>
     {t("siteinfo:p2")}
     </p>
     
    </section>
    </div>
  )
}

export default SiteInfoPage