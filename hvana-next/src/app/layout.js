import "./globals.css";

export const metadata = {
  title: "HvanA",
  description: "Nieuws en opinie over de HvA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}