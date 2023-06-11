import { AuthProvider } from "@/contexts/AuthContext";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata = {
  title: "KeyCrafters",
  description:
    "A site for the ones who want to get started or love Keyboard DIY",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={roboto.className + `antialiased`}>{children}</body>
      </AuthProvider>
    </html>
  );
}
