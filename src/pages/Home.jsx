import ShoppingHero from '../components/home/NavbarHero'
import Categories from '../components/home/FeaturedCategories'
import SaleBanner from '../components/home/FlashSaleBanner'
import WhyChooseUs from '../components/home/WhyChooseUs'
import CustomerReviews from '../components/home/Review'
import Contact from './Contact'
import FAQ from './FAQ'
import Slider from '../components/home/Slider'

export default function Home() {
  return (
    <>
      <ShoppingHero />
      <Categories />
      <SaleBanner />
      <Slider />
      <WhyChooseUs />
      <CustomerReviews />
      <Contact />
      <FAQ />
    </>
  )
}
