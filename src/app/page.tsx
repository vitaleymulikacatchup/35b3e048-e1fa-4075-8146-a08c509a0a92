"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'highlight' }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="/images/logo.svg"
          buttonText="Get Demo"
          onButtonClick={() => {}}
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to AuroraSaaS"
          subtitle="Your go-to platform for seamless web applications"
          contractAddress="0x123456789"
          copyButtonText="Copy Address"
          copiedText="Address copied!"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="What is AuroraSaaS?"
          descriptions={["A pioneering platform providing SaaS solutions for businesses.", "Empowering your projects with cutting-edge technology."]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={
            [
              { title: "Step 1", description: "Create an account on our platform.", image: "/images/placeholder1.avif", position: "left", isCenter: false },
              { title: "Step 2", description: "Navigate to the purchases section.", image: "/images/placeholder2.avif", position: "right", isCenter: false },
              { title: "Step 3", description: "Complete your purchase securely.", image: "/images/placeholder3.avif", position: "center", isCenter: true }
            ]
          }
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Our Tokenomics"
          description="Transparent and user-friendly token distribution."
          cardItems={[
            { id: 1, title: "Total Supply", description: "1,000,000 Tokens" },
            { id: 2, title: "Initial Distribution", description: "500,000 Tokens" },
            { id: 3, title: "Market Cap", description: "$1,000,000" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="AuroraSaaS Logo"
          logoText="AuroraSaaS"
          className="footer-class"
          svgClassName="footer-svg-class"
        />
      </div>
    </SiteThemeProvider>
  );
}
