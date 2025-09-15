"use client";

import { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';

const BinaryParticleSystem = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();

  const createTextTexture = useCallback((text: string, color: string) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return null;
    canvas.width = 24;
    canvas.height = 24;
    context.font = 'bold 20px Arial';
    context.fillStyle = color;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, 12, 12);
    return new THREE.CanvasTexture(canvas);
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;
    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    const particleCount = window.innerWidth < 768 ? 1000 : 2000;
    const vertices: number[] = [];
    const velocities: THREE.Vector3[] = [];

    const materials: THREE.PointsMaterial[] = [];
    const particlesArray: THREE.Points[] = [];

    const textures = [
      createTextTexture('0', '#4CC9F0'), // Neon Cyan
      createTextTexture('1', '#4361EE'), // Electric Blue
    ];

    textures.forEach(texture => {
      if(texture) {
        materials.push(new THREE.PointsMaterial({
          size: 2.5,
          map: texture,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          sizeAttenuation: true,
        }));
      }
    });

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 200;
      const z = (Math.random() - 0.5) * 200;
      vertices.push(x, y, z);
      velocities.push(new THREE.Vector3((Math.random() - 0.5) * 0.1, (Math.random() - 0.5) * 0.1, (Math.random() - 0.5) * 0.1));
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    
    for (let i = 0; i < materials.length; i++) {
        const particles = new THREE.Points(geometry, materials[i]);
        scene.add(particles);
        particlesArray.push(particles);
    }
    
    const mouse = new THREE.Vector3(10000, 10000, 0);
    const onMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
        vector.unproject(camera);
        const dir = vector.sub(camera.position).normalize();
        const distance = -camera.position.z / dir.z;
        mouse.copy(camera.position).add(dir.multiplyScalar(distance));
    };
    const onMouseLeave = () => {
      mouse.x = 10000;
      mouse.y = 10000;
    }
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    const clock = new THREE.Clock();
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      const positions = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        const dx = mouse.x - positions[i3];
        const dy = mouse.y - positions[i3 + 1];
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 30) {
          const force = (30 - dist) * 0.05;
          positions[i3] -= dx/dist * force;
          positions[i3 + 1] -= dy/dist * force;
        }

        positions[i3] += velocities[i].x;
        positions[i3+1] += velocities[i].y;

        if (positions[i3] > 100 || positions[i3] < -100) velocities[i].x *= -1;
        if (positions[i3+1] > 100 || positions[i3+1] < -100) velocities[i].y *= -1;
      }
      geometry.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
    };
    animate();

    const onWindowResize = () => {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', onWindowResize);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      materials.forEach(m => m.dispose());
      textures.forEach(t => t?.dispose());
    };
  }, [createTextTexture]);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default BinaryParticleSystem;
