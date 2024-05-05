import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js 14 초보자 실무입문",
  description: "Next.js로 블로그 만들기 실무예제입니다.",
  openGraph: {
    title: "Next.js 14 초보자 실무입문",
    description: "Next.js로 블로그 만들기 실무예제입니다.",
    url: "http://nextjs-blog-demo-pzd3wa7jf-beyond-zero.vercel.app",
    siteName: "SSG 블로그",
    images: [
      {
        width: "1200",
        height: "675",
        url: "http://nextjs-blog-demo-pzd3wa7jf-beyond-zero.vercel.app/ogp-home.png",
      },
    ],
    locale: "kr",
    type: "website",
  },
};

const Home = () => {
  return <div className="text-[50px]">Next.js 개발 입문하기 </div>;
};

export default Home;
