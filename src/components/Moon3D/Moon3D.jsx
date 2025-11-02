import React, { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useScroll, useTransform, motion } from 'framer-motion'
import * as THREE from 'three'
import './Moon3D.css'

// Moon component with enhanced textures
function Moon() {
  const meshRef = useRef()

  const { colorTexture, bumpTexture, roughnessTexture } = useMemo(() => {
    if (typeof document === 'undefined') {
      return { colorTexture: null, bumpTexture: null, roughnessTexture: null }
    }

    const size = 1024
    const createCanvas = () => {
      const canvas = document.createElement('canvas')
      canvas.width = size
      canvas.height = size
      return canvas
    }

    const baseCanvas = createCanvas()
    const baseCtx = baseCanvas.getContext('2d')

    const gradient = baseCtx.createRadialGradient(size / 2, size / 2, size * 0.08, size / 2, size / 2, size / 2)
    gradient.addColorStop(0, '#f2f2f2')
    gradient.addColorStop(0.25, '#dcdcdc')
    gradient.addColorStop(0.6, '#b8b8b8')
    gradient.addColorStop(1, '#8c8c8c')
    baseCtx.fillStyle = gradient
    baseCtx.fillRect(0, 0, size, size)

    const detailCanvas = createCanvas()
    const detailCtx = detailCanvas.getContext('2d')
    const noiseData = detailCtx.createImageData(size, size)

    for (let i = 0; i < noiseData.data.length; i += 4) {
      const value = 180 + Math.random() * 40
      const alpha = Math.random() * 90
      noiseData.data[i] = value
      noiseData.data[i + 1] = value
      noiseData.data[i + 2] = value
      noiseData.data[i + 3] = alpha
    }

    detailCtx.putImageData(noiseData, 0, 0)
    baseCtx.globalAlpha = 0.35
    baseCtx.drawImage(detailCanvas, 0, 0)
    baseCtx.globalAlpha = 1

    for (let i = 0; i < 45; i++) {
      const x = Math.random() * size
      const y = Math.random() * size
      const radius = Math.random() * 45 + 18

      const crater = baseCtx.createRadialGradient(x, y, radius * 0.15, x, y, radius)
      crater.addColorStop(0, '#6e6e6e')
      crater.addColorStop(0.5, '#7e7e7e')
      crater.addColorStop(1, 'rgba(50, 50, 50, 0)')

      baseCtx.fillStyle = crater
      baseCtx.beginPath()
      baseCtx.arc(x, y, radius, 0, Math.PI * 2)
      baseCtx.fill()

      const highlight = baseCtx.createRadialGradient(x - radius * 0.35, y - radius * 0.35, 0, x - radius * 0.35, y - radius * 0.35, radius * 0.6)
      highlight.addColorStop(0, 'rgba(255,255,255,0.35)')
      highlight.addColorStop(1, 'rgba(255,255,255,0)')
      baseCtx.fillStyle = highlight
      baseCtx.beginPath()
      baseCtx.arc(x, y, radius * 0.8, 0, Math.PI * 2)
      baseCtx.fill()
    }

    const bumpCanvas = createCanvas()
    const bumpCtx = bumpCanvas.getContext('2d')
    bumpCtx.drawImage(baseCanvas, 0, 0)
    bumpCtx.globalCompositeOperation = 'overlay'
    bumpCtx.drawImage(detailCanvas, 0, 0)
    bumpCtx.globalCompositeOperation = 'source-over'

    const roughnessCanvas = createCanvas()
    const roughnessCtx = roughnessCanvas.getContext('2d')
    roughnessCtx.fillStyle = '#b5b5b5'
    roughnessCtx.fillRect(0, 0, size, size)
    roughnessCtx.globalAlpha = 0.6
    roughnessCtx.drawImage(detailCanvas, 0, 0)
    roughnessCtx.globalAlpha = 1

    const texture = new THREE.CanvasTexture(baseCanvas)
    texture.anisotropy = 16
    texture.wrapS = THREE.MirroredRepeatWrapping
    texture.wrapT = THREE.MirroredRepeatWrapping

    const bumpTexture = new THREE.CanvasTexture(bumpCanvas)
    bumpTexture.anisotropy = 16

    const roughnessTexture = new THREE.CanvasTexture(roughnessCanvas)
    roughnessTexture.anisotropy = 16

    return { colorTexture: texture, bumpTexture, roughnessTexture }
  }, [])

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.25
      meshRef.current.rotation.x += delta * 0.1
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2, 96, 96]} />
      <meshStandardMaterial
        map={colorTexture ?? undefined}
        bumpMap={bumpTexture ?? undefined}
        bumpScale={0.22}
        roughnessMap={roughnessTexture ?? undefined}
        roughness={0.85}
        metalness={0.04}
        emissive="#1a2238"
        emissiveIntensity={0.12}
      />
    </mesh>
  )
}

const Atmosphere = () => {
  const ref = useRef()

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05
    }
  })

  return (
    <mesh ref={ref} scale={[1.12, 1.12, 1.12]}>
      <sphereGeometry args={[2.3, 64, 64]} />
      <meshPhongMaterial
        color="#6d8dff"
        transparent
        opacity={0.25}
        emissive="#6d8dff"
        emissiveIntensity={0.4}
        side={THREE.BackSide}
      />
    </mesh>
  )
}

const AuraRing = () => {
  const ref = useRef()

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.15) * 0.08
      ref.current.rotation.z += delta * 0.3
    }
  })

  return (
    <mesh ref={ref}>
      <torusGeometry args={[3.2, 0.08, 32, 140]} />
      <meshStandardMaterial
        color="#5c7bff"
        emissive="#5c7bff"
        emissiveIntensity={0.45}
        transparent
        opacity={0.35}
      />
    </mesh>
  )
}

const OrbitingFragments = () => {
  const groupRef = useRef()
  const fragments = useMemo(
    () =>
      Array.from({ length: 28 }, () => ({
        radius: 3 + Math.random() * 1.4,
        speed: 0.2 + Math.random() * 0.25,
        angle: Math.random() * Math.PI * 2,
        verticalOffset: (Math.random() - 0.5) * 0.6,
        size: 0.05 + Math.random() * 0.08,
      })),
    []
  )

  useFrame((_, delta) => {
    if (!groupRef.current) return
    fragments.forEach((fragment, index) => {
      fragment.angle += fragment.speed * delta
      const mesh = groupRef.current.children[index]
      if (mesh) {
        mesh.position.set(
          Math.cos(fragment.angle) * fragment.radius,
          fragment.verticalOffset,
          Math.sin(fragment.angle) * fragment.radius
        )
        mesh.rotation.x += delta * 0.6
        mesh.rotation.y += delta * 0.8
      }
    })
  })

  return (
    <group ref={groupRef}>
      {fragments.map((fragment, idx) => (
        <mesh key={idx} scale={fragment.size}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#9fb3ff"
            emissive="#4d6dff"
            emissiveIntensity={0.5}
            metalness={0.1}
            roughness={0.3}
          />
        </mesh>
      ))}
    </group>
  )
}

// Main Moon3D component
const Moon3D = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  // Transform scroll progress to various animation values
  const moonScale = useTransform(scrollYProgress, [0, 1], [1, 0.5])
  const moonOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])
  const moonRotate = useTransform(scrollYProgress, [0, 1], [0, 180])
  
  return (
    <motion.div 
      ref={containerRef}
      className="moon-3d-container"
      style={{
        scale: moonScale,
        opacity: moonOpacity,
        rotateZ: moonRotate
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <hemisphereLight skyColor="#a0c4ff" groundColor="#1f1f3b" intensity={0.35} />
          <directionalLight position={[6, 8, 5]} intensity={1.6} color="#f7f8ff" />
          <pointLight position={[-4, -1, 6]} intensity={0.6} color="#6674ff" distance={18} decay={2} />

          <group>
            <Atmosphere />
            <AuraRing />
            <OrbitingFragments />
            <Moon />
          </group>
        </Suspense>
      </Canvas>
      
      {/* Glow effect overlay */}
      <div className="moon-glow"></div>
      
      {/* Stars background effect using CSS */}
      <div className="stars-background"></div>
    </motion.div>
  )
}

export default Moon3D
