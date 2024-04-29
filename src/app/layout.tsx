import "public/global.css";
import Hydration from "@/stores/hydration";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Hydration />
      {children}
    </html>
  );
}
