import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "tnsjesper.xyz",
    template: "Welcome to tnsjesper.xyz",
  },
  description: "Hey I'm Jesper, a Full Stack Developer from German.",
  twitter: {
    title: "tnsjesper",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/tnsjesper-prof.jpg",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black text-white font-sans antialiased text-base leading-7 tracking-wide`}
      >
        {children}
      </body>
    </html>
  );
}
