import { Inconsolata } from "next/font/google";
import "./ui/globals.css";

const inconsolata = Inconsolata({
  variable: "--font-Inconsolata",
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
