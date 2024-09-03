import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen bg-surface  items-center justify-center  md:px-24 gap-8">
      <div className="flex gap-20 items-center justify-center max-w-screen-desktop w-10/12 md:w-full">
        <Image
          src="/images/auth-hero.png"
          width={455}
          height={488}
          alt="islamic couple"
          className="hidden md:block"
        />

        <div className="border border-secondary h-[488px] hidden md:block"></div>
        {children}
      </div>
    </section>
  );
}
