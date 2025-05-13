import type { Metadata } from "next";
import "./style/globals.scss";
import Providers from "@/components/Providers";
import HeaderBar from "@/components/HeaderBar";



export const metadata: Metadata = {
  title: "Taskendo",
  description: "Skill Swap, Quick Hire, Snap Job",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Taskendo",
    description: "Skill Swap, Quick Hire, Snap Job",
    url: "https://taskendo.com ",
    siteName: "Taskendo",
    images: [
      {
        url: "https://taskendo.vercel.app/logo.jpg",
        width: 512,
        height: 512,
        alt: "Taskendo Logo",
      },
    ],
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="page">

          <Providers>
            <HeaderBar />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
