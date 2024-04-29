import Navbar from "../UI/navbar";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="bg-gray-800 text-white">
      <Navbar />
      {children}
    </body>
  );
}
