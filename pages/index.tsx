import Link from "next/link";
import tw, { styled } from "twin.macro";
import Layout from "../components/Layout";

// const StyledP = tw.p`text-yellow-500`;
// const PurpleP = tw(StyledP)`text-purple-500`;

// not work
// const BlueP = styled.p.attrs({
//   className: "text-black",
// })``;

const IndexPage: React.FC = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>{`Hello Next.js 👋`}</h1>
    <p tw="text-black">test red</p>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
