import Link from 'next/link';
import Layout from '../components/Layout';
import { Box } from '@chakra-ui/react';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js</h1>
    <Box color="red">This is Box</Box>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
