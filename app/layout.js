import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amoo Daniels | Portfolio",
  description: "Hey, Im Amoo Daniels, Im looking forward to connect with you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${onest.className}  antialiased`}>{children}</body>
    </html>
  );
}
