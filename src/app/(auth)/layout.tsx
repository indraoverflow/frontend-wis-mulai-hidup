import Image from "next/image";
import localFont from 'next/font/local'

// set elza font
const elzaFont = localFont({
  src: [
    {
      path: '../../../public/font/Elza/Elza_Text/ElzaTextTrial-Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../../public/font/Elza/Elza_Text/ElzaTextTrial-BoldOblique.otf',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../../../public/font/Elza/Elza_Text/ElzaTextTrial-Light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../../public/font/Elza/Elza_Text/ElzaTextTrial-LightOblique.otf',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../../../public/font/Elza/Elza_Text/ElzaTextTrial-Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../../public/font/Elza/Elza_Text/ElzaTextTrial-MediumOblique.otf',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../../public/font/Elza/Elza_Text/ElzaTextTrial-Oblique.otf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../../public/font/Elza/Elza_Text/ElzaTextTrial-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../../public/font/Elza/Elza_Text/ElzaTextTrial-Semibold.otf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../../public/font/Elza/Elza_Text/ElzaTextTrial-SemiboldOblique.otf',
      weight: '600',
      style: 'italic'
    },
  ]
})

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={`flex min-h-screen bg-surface  items-center justify-center  p-5 lg:px-24 gap-8 ${elzaFont.className}`}>
      <div className="flex gap-20 items-center justify-center max-w-screen-desktop w-10/12 lg:w-full">
        <Image
          src="/images/auth-hero.png"
          width={455}
          height={488}
          alt="islamic couple"
          className="hidden lg:block"
        />

        <div className="border border-secondary h-[488px] hidden lg:block"></div>
        {children}
      </div>
    </section>
  );
}
