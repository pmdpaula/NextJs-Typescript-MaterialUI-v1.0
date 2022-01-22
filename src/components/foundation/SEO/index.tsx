import Head from 'next/head';

interface SEOProps {
  headTitle?: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const SEO = ({ headTitle }: SEOProps) => {
  const hasheadTitle = Boolean(headTitle);

  const baseTitle = 'AxeBlade Software - SISCOINTI';
  const title = hasheadTitle ? `${headTitle} | ${baseTitle}` : baseTitle;

  // eslint-disable-next-line prettier/prettier
  const description = 'Aplicação do Sistema de Controle de Infraestrutura de TI';
  // const urlBase = 'https://instalura-pmdpaula.vercel.app';
  // const image = '/seo.jpg';

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
    </Head>
  );
};

export default SEO;
