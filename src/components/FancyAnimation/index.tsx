import {usePrefersReducedMotion} from '../../hooks/usePrefersReducedMotion'
import {lazy, Suspense} from 'react'
import easterBunnyAnimation from './easter_bunny_anim.json'

const LottiePlayer = lazy(() => import('lottie-react'))

export const FancyAnimation = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <Suspense fallback={<div className="h-[450px]">...</div>}>
      <LottiePlayer
        animationData={easterBunnyAnimation}
        loop={false}
        autoplay={!prefersReducedMotion}
      />
    </Suspense>
  )
}
