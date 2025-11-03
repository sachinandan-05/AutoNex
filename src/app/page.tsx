
import Header from '@/components/header'
import FeatureSection from '@/modules/featuresection'
import HeroSection from '@/modules/hero'
import HowItWorks from '@/modules/howitworks'
import Templates from '@/modules/templates'

const page = () => {
  return (
    <div className='min-h-screen bg-background text-foreground flex-1 items-center justify-center'>
      <Header />
      <HeroSection />
      <HowItWorks />
      <FeatureSection />
      <Templates /> 

    </div>
  )
}

export default page
