import * as THREE from 'three';

export class SkillsSphere {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private skills: THREE.Group;
  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;

  constructor(container: HTMLElement) {
    // Scene setup
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(this.renderer.domElement);

    // Initialize skills group
    this.skills = new THREE.Group();
    this.scene.add(this.skills);

    // Camera position
    this.camera.position.z = 15;

    // Raycaster for interactions
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    // Create skills spheres
    this.createSkills();

    // Start animation
    this.animate();

    // Event listeners
    window.addEventListener('resize', () => this.onWindowResize(container));
    container.addEventListener('mousemove', (event) => this.onMouseMove(event));
  }

  private createSkills() {
    const skills = [
      { name: 'UI/UX', color: 0xFF6B6B },
      { name: 'React', color: 0x45B7D1 },
      { name: 'TypeScript', color: 0x96CEB4 },
      { name: 'Design', color: 0x4ECDC4 },
      { name: 'Node.js', color: 0x77DD77 },
      { name: 'Astro', color: 0xD4A5A5 },
      { name: 'Tailwind', color: 0x9B89B3 },
      { name: 'Figma', color: 0xFFB347 }
    ];

    skills.forEach((skill, index) => {
      const phi = Math.acos(-1 + (2 * index) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;

      // Create text sprite
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 256;
      canvas.height = 256;

      if (context) {
        context.font = 'Bold 60px Inter';
        context.fillStyle = '#ffffff';
        context.textAlign = 'center';
        context.fillText(skill.name, 128, 128);
      }

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({
        map: texture,
        transparent: true
      });

      const sprite = new THREE.Sprite(spriteMaterial);

      // Position on sphere
      const radius = 10;
      sprite.position.setFromSphericalCoords(
        radius,
        phi,
        theta
      );

      // Add glow effect
      const glowGeometry = new THREE.SphereGeometry(0.5, 32, 32);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: skill.color,
        transparent: true,
        opacity: 0.5
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      glow.position.copy(sprite.position);

      this.skills.add(sprite);
      this.skills.add(glow);
    });
  }

  private animate = () => {
    requestAnimationFrame(this.animate);

    // Rotate skills group
    this.skills.rotation.x += 0.001;
    this.skills.rotation.y += 0.002;

    // Handle raycasting
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.skills.children);

    this.skills.children.forEach((child) => {
      if (child instanceof THREE.Sprite) {
        const material = child.material as THREE.SpriteMaterial;
        material.opacity = 0.7;
      }
    });

    if (intersects.length > 0) {
      const sprite = intersects[0].object;
      if (sprite instanceof THREE.Sprite) {
        const material = sprite.material as THREE.SpriteMaterial;
        material.opacity = 1;
      }
    }

    this.renderer.render(this.scene, this.camera);
  };

  private onWindowResize(container: HTMLElement) {
    this.camera.aspect = container.clientWidth / container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
  }

  private onMouseMove(event: MouseEvent) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  }
}