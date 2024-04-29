import Navbar from "../UI/navbar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="h-screen bg-gradient-to-br from-blue-600 to-indigo-600   w-full">
      <Navbar />
      <div className="mt-20 flex justify-center ">{children}</div>
    </body>
  );
}
