import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
      />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      <link
        rel='mask-icon'
        href='/safari-pinned-tab.svg'
        color='#ff8a01'
      />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Central Coast Restaurant Group',
  keywords: `central coast restaurant group, ccrg, central coast, california, bar restaurant, bars and restaurants, local restaurants, places to eat, gift cards, bar, restaurant, me n ed's on tap, me n ed's, me'n'ed's, blast 825, figueroa mountain brewing, figueroa mountain, taproom, pizzaria, craft house, craft beer, blast and brew, me n ed's pizzaria and craft house, blast & brew, blast 825 taproom, me n ed's pizzaria & crafthouse`,
  description: `Serving you the highest quality food and beer from our fantastic concepts. Locations up and down the central coast to bring you the heritage of over 60 years experience wherever you are. Come visit us today!`,
};

export default Meta;
