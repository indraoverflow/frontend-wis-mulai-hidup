import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Loading from "@/components/shared/Loading";
import { Suspense } from "react";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />

        {children}
        <Footer />
      </Suspense>
    </>
  );
}
