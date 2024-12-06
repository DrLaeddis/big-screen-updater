import {
  Component,
  OnInit,
  ElementRef,
  HostListener,
  SimpleChanges,
  Input,
  OnChanges,
} from "@angular/core";
import * as THREE from "three";

@Component({
  selector: "app-door-opening",
  standalone: true,
  imports: [],
  templateUrl: "./door-opening.component.html",
  styleUrl: "./door-opening.component.css",
})
export class DoorOpeningComponent implements OnInit, OnChanges {
  @Input() open: boolean = false;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private clock!: THREE.Clock;
  private mesh!: THREE.Mesh;
  private cubeSineDriver = 0;
  private smokeParticles: THREE.Mesh[] = [];
  private doorMeshRight: THREE.Mesh | undefined;
  private doorMeshLeft: THREE.Mesh | undefined;
  image_door: string = "door.png";

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.init();
    this.update();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["open"] && changes["open"].currentValue === true) {
      console.log("closing door");
      this.closeDoor();
    } else if (changes["open"] && changes["open"].currentValue === false) {
      console.log("opening door");
      this.openDoor();
    }
  }

  init() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.clock = new THREE.Clock();

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);

    this.scene = new THREE.Scene();

    const meshGeometry = new THREE.BoxGeometry(200, 200, 200);
    const meshMaterial = new THREE.MeshLambertMaterial({
      color: 0xaa6666,
      wireframe: false,
    });
    this.mesh = new THREE.Mesh(meshGeometry, meshMaterial);

    this.addCamera();
    this.addLights();
    // this.addParticles();
    this.addBackground();

    const container =
      this.elRef.nativeElement.querySelector("#three-container");
    container.appendChild(this.renderer.domElement);
  }

  addCamera() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(75, width / height, 1, 10000);
    this.camera.position.z = 1000;
    this.scene.add(this.camera);
  }

  addLights() {
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(-1, 0, 1);
    this.scene.add(light);
  }

  addParticles() {
    const textureLoaderRight = new THREE.TextureLoader();
    const smokeGeometryRight = new THREE.PlaneGeometry(300, 300);
    textureLoaderRight.load("clouds.png", (texture) => {
      const smokeMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        map: texture,
        transparent: true,
        opacity: 0.8,
      });

      if (smokeMaterial?.map && smokeMaterial.map.minFilter) {
        smokeMaterial.map.minFilter = THREE.LinearFilter;
      }

      for (let i = 0; i < 100; i++) {
        const particle = new THREE.Mesh(smokeGeometryRight, smokeMaterial);
        particle.position.set(
          Math.random() * 700,
          Math.random() * 500 - 250,
          Math.random() * 1000
        );
        particle.rotation.z = Math.random() * 360;
        this.smokeParticles.push(particle);
        this.scene.add(particle);
      }
    });

    const textureLoaderLeft = new THREE.TextureLoader();
    const smokeGeometryLeft = new THREE.PlaneGeometry(300, 300);
    textureLoaderLeft.load("clouds.png", (texture) => {
      const smokeMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        map: texture,
        transparent: true,
        opacity: 0.8,
      });

      if (smokeMaterial?.map && smokeMaterial.map.minFilter) {
        smokeMaterial.map.minFilter = THREE.LinearFilter;
      }

      for (let i = 0; i < 100; i++) {
        const particle = new THREE.Mesh(smokeGeometryLeft, smokeMaterial);
        particle.position.set(
          Math.random() * -700,
          Math.random() * 500 - 250,
          Math.random() * 1000
        );
        particle.rotation.z = Math.random() * 360;
        this.smokeParticles.push(particle);
        this.scene.add(particle);
      }
    });
  }

  addBackground() {
    const textureLoaderLeft = new THREE.TextureLoader();
    const textureLoaderRight = new THREE.TextureLoader();

    textureLoaderLeft.load("door-left.png", (texture) => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const width = viewportWidth * 1.25;
      const height = viewportHeight * 2.5;

      console.log(width, height);

      const textGeometry = new THREE.PlaneGeometry(width, height);
      const textMaterial = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true,
      });

      const backgroundMesh = new THREE.Mesh(textGeometry, textMaterial);
      backgroundMesh.position.z = -500;
      backgroundMesh.position.x = -750;
      this.scene.add(backgroundMesh);
      this.doorMeshLeft = backgroundMesh;
    });

    textureLoaderRight.load("door-right.png", (texture) => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const width = viewportWidth * 1.25;
      const height = viewportHeight * 2.5;

      console.log(width, height);

      const textGeometry = new THREE.PlaneGeometry(width, height);
      const textMaterial = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true,
      });

      const backgroundMesh = new THREE.Mesh(textGeometry, textMaterial);
      backgroundMesh.position.z = -500;
      backgroundMesh.position.x = 750;
      this.scene.add(backgroundMesh);
      this.doorMeshRight = backgroundMesh;
    });
  }

  update() {
    const delta = this.clock.getDelta();
    this.evolveSmoke(delta);
    this.renderScene();

    requestAnimationFrame(() => this.update());
  }

  evolveSmoke(delta: number) {
    this.smokeParticles.forEach((particle) => {
      particle.rotation.z += delta * 0.2;
    });
  }

  renderScene() {
    this.cubeSineDriver += 0.01;
    this.mesh.rotation.x += 0.005;
    this.mesh.rotation.y += 0.01;
    this.mesh.position.z = 100 + Math.sin(this.cubeSineDriver) * 500;
    this.renderer.render(this.scene, this.camera);
  }

  @HostListener("window:resize", ["$event"])
  onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }

  closeDoor() {
    const leftTarget = -250;
    const rightTarget = 250;
    const doorSpeed = 1.2;

    const animateDoor = () => {
      let completed = true;

      if (this.doorMeshLeft && this.doorMeshLeft.position.x < leftTarget) {
        this.doorMeshLeft.position.x += doorSpeed;
        completed = false;
      }

      if (this.doorMeshRight && this.doorMeshRight.position.x > rightTarget) {
        this.doorMeshRight.position.x -= doorSpeed;
        completed = false;
      }

      if (!completed) {
        requestAnimationFrame(animateDoor);
      }
    };

    animateDoor();
  }

  openDoor() {
    const leftTarget = -750;
    const rightTarget = 750;
    const doorSpeed = 1.2;

    if (!this.doorMeshLeft || !this.doorMeshRight) {
      return;
    }

    const animateDoor = () => {
      let completed = true;
      if (this.doorMeshLeft && this.doorMeshRight) {
        if (this.doorMeshLeft.position.x > leftTarget) {
          this.doorMeshLeft.position.x -= doorSpeed;
          completed = false;
        }

        if (this.doorMeshRight.position.x < rightTarget) {
          this.doorMeshRight.position.x += doorSpeed;
          completed = false;
        }

        if (!completed) {
          requestAnimationFrame(animateDoor);
        }
      }
    };

    animateDoor();
  }
}
