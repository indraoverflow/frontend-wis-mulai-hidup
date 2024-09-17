import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
