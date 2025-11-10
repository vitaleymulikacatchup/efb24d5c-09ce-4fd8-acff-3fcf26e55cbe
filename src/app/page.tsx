"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TagAbout from '@/components/sections/about/TagAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Mail, MessageSquare, Star, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="gradient-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="HoopZone"
          button={{
            text: "Shop Now",
            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Premium Basketball Gear"
          description="Elevate your game with professional-grade basketball equipment and apparel"
          tag="HoopZone"
          tagIcon={Zap}
          buttons={[
            {
              text: "Shop Collection",
              href: "products"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/g2087dbd065440f7f5f4ea7ff986cd4dec8f677de749e01b893eaf7ed28b4ee0695dfe92350b04e2d74ddeea4be042a80ae46bf7af34d4afc1190c3b897df8e34_1280.jpg",
              imageAlt: "Basketball shoes"
            },
            {
              imageSrc: "https://pixabay.com/get/g76eefbb382df6a36a186f2788bae03d03887f962036df0e5e97a6be43f79fd808d30b4e4b7d1f7fd39c5a9b8f209d57b7b1120fc4a813ca9070284883ea0b628_1280.jpg",
              imageAlt: "Basketball jersey"
            },
            {
              imageSrc: "https://pixabay.com/get/gdc6acf9ff3dcf0aefcbaa0c6b92b7434f7e8ca016b8fbf7ee15fd1049c71a8f2ae980a954cf256583480e7a8425095b90fff2b5b0ab6852915ab8089ffc22843_1280.jpg",
              imageAlt: "Basketball ball"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At HoopZone, we live and breathe basketball. Founded by former players and coaches, we understand what it takes to perform at the highest level. Our carefully curated selection features only the best gear from top brands, ensuring every player has access to professional-quality equipment."
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Products"
          description="Discover our top basketball gear selected by professionals"
          tag="Best Sellers"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "1",
              name: "Pro Basketball Shoes",
              price: "$149",
              imageSrc: "https://pixabay.com/get/g2087dbd065440f7f5f4ea7ff986cd4dec8f677de749e01b893eaf7ed28b4ee0695dfe92350b04e2d74ddeea4be042a80ae46bf7af34d4afc1190c3b897df8e34_1280.jpg",
              imageAlt: "Professional basketball shoes"
            },
            {
              id: "2",
              name: "Team Jersey",
              price: "$79",
              imageSrc: "https://pixabay.com/get/g76eefbb382df6a36a186f2788bae03d03887f962036df0e5e97a6be43f79fd808d30b4e4b7d1f7fd39c5a9b8f209d57b7b1120fc4a813ca9070284883ea0b628_1280.jpg",
              imageAlt: "Basketball team jersey"
            },
            {
              id: "3",
              name: "Official Basketball",
              price: "$89",
              imageSrc: "https://pixabay.com/get/gdc6acf9ff3dcf0aefcbaa0c6b92b7434f7e8ca016b8fbf7ee15fd1049c71a8f2ae980a954cf256583480e7a8425095b90fff2b5b0ab6852915ab8089ffc22843_1280.jpg",
              imageAlt: "Official basketball"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Our Team"
          description="Former players and basketball experts who know the game"
          tag="Meet The Team"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          members={[
            {
              id: "1",
              name: "Marcus Johnson",
              role: "Former Pro Player",
              imageSrc: "https://pixabay.com/get/g9187bd70fee28854473797b5549980c58bc3ef38353aaad805b5d2c2fc81be918776bede9ece54c17af9ff2eda13ca8ff956f38fb19536745407acb1ff4e18e0_1280.jpg",
              imageAlt: "Marcus Johnson"
            },
            {
              id: "2",
              name: "Coach Williams",
              role: "Head Coach",
              imageSrc: "https://pixabay.com/get/gf712514665cc9b2bc2bcb160ee928c41f9dd81779441c6bd5b213a8fd8c1664ac0bf01226cceead6569e3f9749b0e0ed581b59a10025ed3c9962fbd726509aea_1280.jpg",
              imageAlt: "Coach Williams"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Players Say"
          description="Real feedback from basketball players who trust our gear"
          tag="Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Alex Rodriguez",
              role: "College Player",
              testimonial: "The quality of gear from HoopZone is unmatched. Their shoes gave me the confidence to perform at my best during the championship game.",
              imageSrc: "https://pixabay.com/get/ga32354d135814838c485c916efdf60b37c3797f4e42ca50cf33b458e04b182fd7bad1b131b22591de580e2525ce97282fd7af2237546333c2e87c49e3f551c3f_1280.jpg",
              imageAlt: "Alex Rodriguez"
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "High School Athlete",
              testimonial: "Amazing selection and fast delivery. The jersey fits perfectly and the material is top quality. Will definitely order again!",
              imageSrc: "https://pixabay.com/get/g30558577947f43033704c31764268653a512c928434ad5e7a258696db139da7d929ebb4164243c30f91948cfc003c938c60e454c562e99c50dc911ff9c16a842_1280.jpg",
              imageAlt: "Sarah Chen"
            },
            {
              id: "3",
              name: "Coach Thompson",
              role: "Team Coach",
              testimonial: "I've been ordering team equipment from HoopZone for years. They understand what serious players need and always deliver.",
              imageSrc: "https://pixabay.com/get/g7a10382802ec802190785877aaffbe2d387b355a30027dd839c29531e2b621f1f9298d7169769d995b20b317167c8a108a6b5f2a29f546c55f206879ebcb38ed_1280.jpg",
              imageAlt: "Coach Thompson"
            },
            {
              id: "4",
              name: "Mike Davis",
              role: "Basketball Fan",
              testimonial: "Great customer service and authentic products. HoopZone is my go-to shop for all basketball gear.",
              imageSrc: "https://pixabay.com/get/g506d9b6e20c87525e393f4c6d13521a95e7c32d97b7ef0155dc027f718ebcab0531a4760516dcbba4a6ba6cc01764f11725d3fd0aaa0a28b1c74d01755ec3cda_1280.jpg",
              imageAlt: "Mike Davis"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Stay Updated With Latest Gear"
          description="Subscribe to get notified about new arrivals, exclusive deals, and basketball gear recommendations."
          tagIcon={Mail}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing you agree to receive updates about our latest basketball products and offers."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="HoopZone"
          columns={[
            {
              items: [
                {
                  label: "Basketball Shoes",
                  href: "products"
                },
                {
                  label: "Jerseys",
                  href: "products"
                },
                {
                  label: "Equipment",
                  href: "products"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "team"
                },
                {
                  label: "Reviews",
                  href: "testimonials"
                }
              ]
            },
            {
              items: [
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Support",
                  href: "contact"
                },
                {
                  label: "Returns",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}