import { Merriweather, Mulish } from "next/font/google";
import { ReactNode } from "react";

import Footer from "@components/footer";
import Navbar from "@components/navbar";

import "./styles/global.scss";

const merriweather = Merriweather({
  weight: ["700", "900"],
  subsets: ["latin"],
});
const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "TNG Home Builders",
  description: "",
  robots: { index: false },
};

export default ({ children }: { children: ReactNode }) => {
  const fonts = { merriweather, mulish };
  const fontVariables: { [key: string]: string } = {};

  Object.entries(fonts).forEach(([name, font]) => {
    fontVariables[`--font-${name}`] = font.style.fontFamily;
  });

  return (
    <html lang="en">
      <body style={fontVariables}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};
