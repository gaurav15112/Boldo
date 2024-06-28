import Head from "next/head";
import Image from "next/image";
import { Inter, Manrope, Open_Sans } from "next/font/google";
import Navbar from "@/Components/Navbar/Navbar";
import Featarticle from "@/Components/FeaturedArticle/Featarticle";
import NewsArticle from "@/Components/NewsArticle/NewsArticle";
import Footer from "@/Components/Footer/Footer";
import NewsLetter from "@/Components/Newsletter/NewsLetter";
import Slider from "@/Components/Slider/Slider";
import About from "@/Components/About/About";
import Statistics from "@/Components/Statistics/Statistics";
import OurStory from "@/Components/OurStory/OurStory";
import Ourteam from "@/Components/Ourteam/Ourteam";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });
const opensans = Open_Sans({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={` ${manrope.className} ${opensans.className}`}>
        <About />
        <Statistics />
        <OurStory />
        <Ourteam />
        {/* <Navbar /> */}
        {/* <Featarticle />
        <NewsArticle /> */}
        {/* <NewsLetter /> */}
        <Footer />
        {/* <Statistics /> */}
        {/* <Slider /> */}
      </main>
    </>
  );
}
