import {usePrefersReducedMotion} from '../../hooks/usePrefersReducedMotion'
import {lazy, Suspense, use} from 'react'

const LottiePlayer = lazy(() => import('lottie-react'))
const animationPromise = import('./easter_bunny_anim.json').then(
  (data) => data.default
)

const AnimationContent = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const animationData = use(animationPromise)

  return (
    <LottiePlayer
      animationData={animationData}
      loop={false}
      autoplay={!prefersReducedMotion}
    />
  )
}

export const FancyAnimation = () => {
  return (
    <div className="min-h-[450px]">
      <Suspense fallback={null}>
        <AnimationContent />
      </Suspense>
    </div>
  )
}
