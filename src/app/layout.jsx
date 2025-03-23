import "./globals.css";
import { Merriweather } from "next/font/google";

// Load Merriweather from Google Fonts
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});

export const metadata = {
  title: "Next-Chart",
  description: "Stylish dynamic charts with modern fonts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={merriweather.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
