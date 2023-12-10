import { Metadata, ResolvingMetadata, Viewport } from "next";

import RootLayout from "@/components/Layouts/RootLayout";
import { PropsWithChildren } from "react";

import "@solana/wallet-adapter-react-ui/styles.css";
import "@/styles/global.css";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const applicationName = "HoD";
  const title = "HoD | Christmas Frame";
  const description = "Frame your NFTs with Christmas theme";

  return {
    applicationName,
    title,
    description,
    metadataBase: process?.env?.VERCEL_URL
      ? new URL(`https://${process.env.VERCEL_URL}`)
      : new URL("http://localhost:3000"),
    icons: {
      icon: "/assets/svg/logo_black.svg",
    },
    openGraph: {
      description: description,
      title,
      images: "/assets/images/logo_black.png",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: "/assets/images/logo_black.png",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html>
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
};

export default Layout;
