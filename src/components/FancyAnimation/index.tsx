import Lottie from 'lottie-react'
import easterBunnyAnimation from './easter_bunny_anim.json'
import {usePrefersReducedMotion} from '../../hooks/usePrefersReducedMotion'

export const FancyAnimation = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  console.debug(prefersReducedMotion)

  return (
    <Lottie
      animationData={easterBunnyAnimation}
      loop={false}
      autoplay={!prefersReducedMotion}
    />
  )
}
