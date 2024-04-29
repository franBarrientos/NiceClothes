import Navbar from "../UI/navbar";

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body>
      <Navbar />
      <div className="flex justify-center items-center w-full mx-auto">
        {children}
      </div>
    </body>
  );
}
