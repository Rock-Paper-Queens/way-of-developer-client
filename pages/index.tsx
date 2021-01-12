import Link from "next/link";
import tw, { styled, css } from "twin.macro";
import Layout from "../components/Layout";

const StyledP = tw.p`text-yellow-500`;
const PurpleP = tw(StyledP)`text-purple-500`;

const stylesWidth = css`
  border: 1px solid hotpink;
`;

// const Input = styled.input(({ hasHover }) => [
//   tw`border rounded`, // Add base styles first
//   hasHover && tw`hover:border-black`, // Then conditional styles
//   !hasHover && stylesWidth, // Then any css/sass in variables
// ]);

// const Component = () => <Input hasHover />;

const IndexPage: React.FC = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>{`Hello Next.js 👋`}</h1>
    <p tw="text-red-500">test red</p>
    <StyledP>test yellow</StyledP>
    <PurpleP>test purple</PurpleP>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
