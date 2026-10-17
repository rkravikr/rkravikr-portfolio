'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './Scene.module.scss';

// Generate circular glowing dot texture for WebGL points
function createCircularDotTexture(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(241, 240, 235, 0.95)');
    gradient.addColorStop(0.65, 'rgba(181, 166, 255, 0.6)');
    gradient.addColorStop(1, 'rgba(181, 166, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(32, 32, 30, 0, Math.PI * 2);
    ctx.fill();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export default function Scene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let animationFrameId: number;
    let isCleanedUp = false;

    // Track mouse coordinates
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX / innerWidth - 0.5) * 2;
      mouseY = (e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // ─────────────────────────────────────────────────────────────
    // ATTEMPT 1: THREE.JS WEBGL RENDERER
    // ─────────────────────────────────────────────────────────────
    let threeRenderer: THREE.WebGLRenderer | null = null;
    let webglSuccess = false;

    try {
      threeRenderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'default',
        failIfMajorPerformanceCaveat: false,
      });

      if (threeRenderer.getContext()) {
        webglSuccess = true;
      }
    } catch {
      webglSuccess = false;
    }

    if (webglSuccess && threeRenderer) {
      const renderer = threeRenderer;
      const getWidth = () => Math.max(container.clientWidth || window.innerWidth, 320);
      const getHeight = () => Math.max(container.clientHeight || window.innerHeight, 320);

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(getWidth(), getHeight());

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, getWidth() / getHeight(), 0.1, 100);
      camera.position.z = 5.5;

      const group = new THREE.Group();
      scene.add(group);

      // ─── 1. Interactive Dotted Sphere (Fibonacci distribution) ───
      const sphereDotTexture = createCircularDotTexture();
      const sphereDotCount = 1800;
      const sphereRadius = 1.75;
      const spherePositions = new Float32Array(sphereDotCount * 3);
      const sphereColors = new Float32Array(sphereDotCount * 3);

      const colorLavender = new THREE.Color(0xb5a6ff);
      const colorBone = new THREE.Color(0xf1f0eb);
      const colorDim = new THREE.Color(0x6b5cb8);
      const goldenAngle = Math.PI * (3 - Math.sqrt(5));

      for (let i = 0; i < sphereDotCount; i++) {
        const y = 1 - (i / (sphereDotCount - 1)) * 2;
        const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
        const theta = goldenAngle * i;

        const x = Math.cos(theta) * radiusAtY;
        const z = Math.sin(theta) * radiusAtY;

        spherePositions[i * 3] = x * sphereRadius;
        spherePositions[i * 3 + 1] = y * sphereRadius;
        spherePositions[i * 3 + 2] = z * sphereRadius;

        const vertexColor = colorLavender.clone().lerp(colorDim, Math.abs(y) * 0.35);
        if (Math.random() < 0.15) {
          vertexColor.lerp(colorBone, 0.7);
        }

        sphereColors[i * 3] = vertexColor.r;
        sphereColors[i * 3 + 1] = vertexColor.g;
        sphereColors[i * 3 + 2] = vertexColor.b;
      }

      const sphereGeometry = new THREE.BufferGeometry();
      sphereGeometry.setAttribute('position', new THREE.BufferAttribute(spherePositions, 3));
      sphereGeometry.setAttribute('color', new THREE.BufferAttribute(sphereColors, 3));

      const sphereMaterial = new THREE.PointsMaterial({
        size: 0.07,
        map: sphereDotTexture,
        vertexColors: true,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const dottedSphere = new THREE.Points(sphereGeometry, sphereMaterial);
      group.add(dottedSphere);

      // ─── 2. Ambient Particle Field ───
      const particleCount = 280;
      const particlePositions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        const radius = 2.4 + Math.random() * 2.5;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);

        particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
        particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
        particlePositions[i + 2] = radius * Math.cos(phi);
      }

      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      const particleMaterial = new THREE.PointsMaterial({
        color: 0xb5a6ff,
        size: 0.035,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const ambientParticles = new THREE.Points(particleGeometry, particleMaterial);
      group.add(ambientParticles);

      // ─── 3. Lighting ───
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambientLight);

      const pointLightLavender = new THREE.PointLight(0xb5a6ff, 3.5, 12);
      pointLightLavender.position.set(3, 3, 3);
      scene.add(pointLightLavender);

      const pointLightRed = new THREE.PointLight(0xff3b46, 1.8, 10);
      pointLightRed.position.set(-3, -2, -2);
      scene.add(pointLightRed);

      // Resize
      const handleResize = () => {
        if (!container || !renderer || isCleanedUp) return;
        const width = getWidth();
        const height = getHeight();
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      window.addEventListener('resize', handleResize);
      const resizeTimer = setTimeout(handleResize, 100);

      // Render Loop
      let baseRotY = 0;
      let baseRotX = 0;

      const animate = () => {
        if (isCleanedUp) return;

        // Confident, smooth continuous rotation
        baseRotY += 0.0055;
        baseRotX += 0.0018;
        ambientParticles.rotation.y -= 0.0008;

        // Reactive mouse tilt
        targetX += (mouseX - targetX) * 0.06;
        targetY += (mouseY - targetY) * 0.06;

        group.rotation.y = baseRotY + targetX * 0.5;
        group.rotation.x = baseRotX + targetY * 0.35;
        group.position.x = targetX * 0.4;
        group.position.y = -targetY * 0.3;

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        isCleanedUp = true;
        clearTimeout(resizeTimer);
        window.removeEventListener('mousemove', handlePointerMove);
        window.removeEventListener('resize', handleResize);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);

        sphereGeometry.dispose();
        sphereMaterial.dispose();
        sphereDotTexture.dispose();
        particleGeometry.dispose();
        particleMaterial.dispose();
        renderer.dispose();
      };
    }

    // ─────────────────────────────────────────────────────────────
    // ATTEMPT 2: FAILSAFE 2D CANVAS 3D DOTTED SPHERE FALLBACK
    // (Runs on 100% of browsers without needing WebGL / GPU support!)
    // ─────────────────────────────────────────────────────────────
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = container.clientWidth || window.innerWidth);
    let height = (canvas.height = container.clientHeight || window.innerHeight);

    const on2DResize = () => {
      if (!container || isCleanedUp) return;
      width = canvas.width = container.clientWidth || window.innerWidth;
      height = canvas.height = container.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', on2DResize);

    // Create 3D points on sphere
    const pointCount = 1200;
    const radius = Math.min(width, height) * 0.28;
    const goldenRatio = Math.PI * (3 - Math.sqrt(5));
    const points: { x: number; y: number; z: number; isBone: boolean }[] = [];

    for (let i = 0; i < pointCount; i++) {
      const y = 1 - (i / (pointCount - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenRatio * i;
      points.push({
        x: Math.cos(theta) * r * radius,
        y: y * radius,
        z: Math.sin(theta) * r * radius,
        isBone: Math.random() < 0.15,
      });
    }

    let angleX = 0;
    let angleY = 0;

    const render2D = () => {
      if (isCleanedUp) return;

      ctx.clearRect(0, 0, width, height);

      angleY += 0.0055;
      angleX += 0.0018;

      targetX += (mouseX - targetX) * 0.06;
      targetY += (mouseY - targetY) * 0.06;

      const currentAngleY = angleY + targetX * 0.5;
      const currentAngleX = angleX + targetY * 0.35;

      const cosY = Math.cos(currentAngleY);
      const sinY = Math.sin(currentAngleY);
      const cosX = Math.cos(currentAngleX);
      const sinX = Math.sin(currentAngleX);

      const centerX = width * 0.62 + targetX * 40;
      const centerY = height * 0.5 - targetY * 30;
      const fov = 450;

      for (let i = 0; i < pointCount; i++) {
        const p = points[i];

        // Rotate Y
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        // Rotate X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        // Perspective projection
        const scale = fov / (fov + z2 + radius * 1.5);
        const projX = centerX + x1 * scale;
        const projY = centerY + y2 * scale;
        const dotRadius = Math.max(0.6, scale * 1.9);

        const alpha = Math.max(0.12, Math.min(0.95, (z2 + radius) / (2 * radius) + 0.15));

        ctx.beginPath();
        ctx.arc(projX, projY, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.isBone
          ? `rgba(241, 240, 235, ${alpha})`
          : `rgba(181, 166, 255, ${alpha * 0.85})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render2D);
    };

    render2D();

    return () => {
      isCleanedUp = true;
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', on2DResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.canvasContainer} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.fallback} />
    </div>
  );
}
