import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  dehydrate,
  // Hydrate,
  useQuery,
  // eslint-disable-next-line import/no-unresolved
} from 'react-query';

// } from '@tanstack/react-query/build/types/packages/react-query/src';
import { getMenuItems, queryClient } from '../api';
import PageSquare from '../components/commons/PageSquare/PageSquare';
import websitePageHOC from '../components/wrappers/WebsitePage/hoc/index';

const pageName = 'Teste';

const TestePage = () => {
  const { data } = useQuery(['menuItems'], () =>
    // eslint-disable-next-line prettier/prettier
    getMenuItems());

  return (
    <PageSquare>
      <Typography>{pageName}</Typography>
      <Box>{JSON.stringify(data)}</Box>
    </PageSquare>
  );
};

export default websitePageHOC(TestePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: pageName,
    },
  },
});

export async function getServerSideProps() {
  await queryClient.prefetchQuery(['menuItems'], () => getMenuItems());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
