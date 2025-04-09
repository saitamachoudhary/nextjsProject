import { Html, Head, Main, NextScript } from "next/document";
import { Navbar,Footer} from "@/Components";


export const metadata={
  title:'Car Hub',
  description:'Discover the best car in the world'
}

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar/>
        <Main />
        <Footer/>
        <NextScript />
      </body>
    </Html>
  );
}
