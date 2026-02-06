import { useEffect, useRef } from 'react'

function LiquidMouseReveal({
  imageBase = {
    src: '/images/stone-normal.png',
    alt: 'Stone texture',
  },
  imageReveal = {
    src: '/images/stone-hover.png',
    alt: 'Stone texture on hover',
  },
  radius = 70,
  trailDuration = 9,
  enableLiquidEffect = true,
  cursorLag = 8,
  className,
}) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const currentPosRef = useRef({ x: 0, y: 0 })
  const hasMovedRef = useRef(false)
  const imageRevealRef = useRef(null)
  const animationFrameRef = useRef()
  const frameCountRef = useRef(0)
  const hoveringRef = useRef(false)
  const sizeRef = useRef({ width: 0, height: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const imgReveal = new Image()
    imgReveal.crossOrigin = 'anonymous'
    imgReveal.src = imageReveal.src
    imageRevealRef.current = imgReveal

    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      sizeRef.current = { width: rect.width, height: rect.height }
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    updateCanvasSize()

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top

      if (!hasMovedRef.current) {
        hasMovedRef.current = true
        currentPosRef.current.x = mouseRef.current.x
        currentPosRef.current.y = mouseRef.current.y
      }
    }

    const handlePointerEnter = (e) => {
      hoveringRef.current = true
      handlePointerMove(e)
    }

    const handlePointerLeave = () => {
      hoveringRef.current = false
      hasMovedRef.current = false
    }

    container.addEventListener('pointerenter', handlePointerEnter)
    container.addEventListener('pointermove', handlePointerMove)
    container.addEventListener('pointerleave', handlePointerLeave)

    window.addEventListener('resize', updateCanvasSize)

    const draw = () => {
      if (!ctx || !canvas) return

      const { width, height } = sizeRef.current
      if (!width || !height) {
        animationFrameRef.current = requestAnimationFrame(draw)
        return
      }

      const lerpFactor = cursorLag === 0 ? 1 : 0.02 + (1 - cursorLag / 10) * 0.18
      currentPosRef.current.x += (mouseRef.current.x - currentPosRef.current.x) * lerpFactor
      currentPosRef.current.y += (mouseRef.current.y - currentPosRef.current.y) * lerpFactor

      frameCountRef.current += 1
      const spawnInterval = Math.max(1, Math.floor(11 - trailDuration))

      if (hoveringRef.current && hasMovedRef.current && frameCountRef.current % spawnInterval === 0) {
        particlesRef.current.push({
          x: currentPosRef.current.x,
          y: currentPosRef.current.y,
          alpha: 1,
          vx: 0,
          vy: 0,
          targetX: currentPosRef.current.x,
          targetY: currentPosRef.current.y,
        })
      }

      ctx.clearRect(0, 0, width, height)

      particlesRef.current = particlesRef.current
        .map((p) => ({
          ...p,
          alpha: p.alpha * (0.8 + (trailDuration / 10) * 0.19),
        }))
        .filter((p) => p.alpha > 0.01)

      if (particlesRef.current.length) {
        ctx.globalCompositeOperation = 'source-over'
        particlesRef.current.forEach((particle) => {
          const gradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            radius,
          )
          gradient.addColorStop(0, `rgba(255, 255, 255, ${particle.alpha})`)
          gradient.addColorStop(0.7, `rgba(255, 255, 255, ${particle.alpha * 0.5})`)
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2)
          ctx.fill()
        })

        if (
          imageRevealRef.current &&
          imageRevealRef.current.complete &&
          imageRevealRef.current.naturalWidth > 0
        ) {
          const imgAspect =
            imageRevealRef.current.naturalWidth / imageRevealRef.current.naturalHeight
          const canvasAspect = width / height

          let drawWidth = width
          let drawHeight = height
          let offsetX = 0
          let offsetY = 0

          if (imgAspect > canvasAspect) {
            drawWidth = height * imgAspect
            offsetX = (width - drawWidth) / 2
          } else {
            drawHeight = width / imgAspect
            offsetY = (height - drawHeight) / 2
          }

          ctx.globalCompositeOperation = 'source-in'
          ctx.drawImage(imageRevealRef.current, offsetX, offsetY, drawWidth, drawHeight)
        }
      }

      animationFrameRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      container.removeEventListener('pointerenter', handlePointerEnter)
      container.removeEventListener('pointermove', handlePointerMove)
      container.removeEventListener('pointerleave', handlePointerLeave)
      window.removeEventListener('resize', updateCanvasSize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [imageReveal.src, radius, trailDuration, cursorLag])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: 'transparent',
        backgroundImage: `url(${imageBase.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          filter: enableLiquidEffect ? 'url(#liquid-filter)' : 'none',
          mixBlendMode: 'normal',
        }}
      />

      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="liquid-filter">
            <feColorMatrix
              in="SourceGraphic"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"
              result="liquid"
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default LiquidMouseReveal
