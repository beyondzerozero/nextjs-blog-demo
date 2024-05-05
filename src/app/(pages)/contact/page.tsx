import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의내용 | Next.js 14 초보자 실무입문",
  description: "문의내용 페이지입니다.",
  openGraph: {
    title: "문의내용 | Next.js 14 초보자 실무입문",
    description: "문의내용 페이지입니다..",
    url: "http://nextjs-blog-demo-pzd3wa7jf-beyond-zero.vercel.app/contact",
    siteName: "SSG 블로그",
    images: [
      {
        width: "1200",
        height: "675",
        url: "http://nextjs-blog-demo-pzd3wa7jf-beyond-zero.vercel.app/ogp-home.png",
      },
    ],
    locale: "kr",
    type: "article",
  },
};

const ContactPage = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default ContactPage;
