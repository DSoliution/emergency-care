import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import theme from "@/theme/theme";
import "@mantine/core/styles.css";
import "./globals.css";

const poppins = Poppins({
  subsets:['latin'],
  weight:['200','300','400','500'], // light,regular,medium
  variable:'--font-poppins',
});

export const metadata: Metadata = {
  title: "HMS | Home",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={poppins.variable}>
        <ColorSchemeScript/>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
