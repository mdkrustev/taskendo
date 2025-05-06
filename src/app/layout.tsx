import type { Metadata } from "next";
import "./style/globals.scss";



export const metadata: Metadata = {
  title: "Taskendo",
  description: "Skill Swap, Quick Hire, Snap Job",
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
          <div className="header">
            <div className="logo">
              <img className="logo-img" src={'/img/logo.png'} />
              <div className="logo-title">Tasken<span className="blue">Do</span></div>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
