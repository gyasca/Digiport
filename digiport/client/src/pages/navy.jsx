import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const NavyGame = () => {
  const mountRef = useRef(null);
  const [energy, setEnergy] = useState(500);
  const [message, setMessage] = useState("Mission: Defend Marina Bay Sands");
  const [activeButton, setActiveButton] = useState(null);
  const [selectedCrew, setSelectedCrew] = useState(null);
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });
  const [targetSpotted, setTargetSpotted] = useState(false);
  const [cannonReady, setCannonReady] = useState(false);
  const [shipHealth, setShipHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [enemyShips, setEnemyShips] = useState([
    { id: 'main', position: { x: 0, y: -1, z: -100 }, health: 100 },
    { id: 'minion1', position: { x: -30, y: -1, z: -120 }, health: 50 },
    { id: 'minion2', position: { x: 30, y: -1, z: -120 }, health: 50 }
  ]);
  
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb);
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1.6, 0);
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);
    
    // Handle resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    
    // Navigation controls
    const keyboard = {};
    const moveSpeed = 0.05;
    const rotateSpeed = 0.02;
    
    window.addEventListener('keydown', (e) => {
      keyboard[e.key.toLowerCase()] = true;
    });
    
    window.addEventListener('keyup', (e) => {
      keyboard[e.key.toLowerCase()] = false;
    });
    
    // Create ship interior
    const createShipInterior = () => {
      // Floor
      const floorGeometry = new THREE.PlaneGeometry(5, 5);
      const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
      const floor = new THREE.Mesh(floorGeometry, floorMaterial);
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = -0.5;
      floor.receiveShadow = true;
      scene.add(floor);
      
      // Walls
      const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x555555 });
      
      // Front wall with window
      const frontWallGeometry = new THREE.BoxGeometry(5, 2, 0.1);
      const frontWall = new THREE.Mesh(frontWallGeometry, wallMaterial);
      frontWall.position.set(0, 0.5, -2.5);
      scene.add(frontWall);
      
      // Create window in front wall
      const windowGeometry = new THREE.BoxGeometry(4, 1, 0.2);
      const windowMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x6495ed,
        transparent: true,
        opacity: 0.7
      });
      const windowPane = new THREE.Mesh(windowGeometry, windowMaterial);
      windowPane.position.set(0, 0.7, -2.4);
      scene.add(windowPane);
      
      // Control desk
      const deskGeometry = new THREE.BoxGeometry(3, 0.1, 1);
      const deskMaterial = new THREE.MeshStandardMaterial({ color: 0x336699 });
      const desk = new THREE.Mesh(deskGeometry, deskMaterial);
      desk.position.set(0, 0, -1.5);
      scene.add(desk);
      
      // Create control panels
      const panelGeometry = new THREE.BoxGeometry(0.8, 0.4, 0.6);
      const panelMaterial = new THREE.MeshStandardMaterial({ color: 0x222222 });
      
      // Left monitor
      const leftPanel = new THREE.Mesh(panelGeometry, panelMaterial);
      leftPanel.position.set(-0.9, 0.2, -1.5);
      leftPanel.rotation.x = Math.PI / 6;
      scene.add(leftPanel);
      
      // Right monitor
      const rightPanel = new THREE.Mesh(panelGeometry, panelMaterial);
      rightPanel.position.set(0.9, 0.2, -1.5);
      rightPanel.rotation.x = Math.PI / 6;
      scene.add(rightPanel);
      
      // Center monitor
      const centerPanel = new THREE.Mesh(panelGeometry, panelMaterial);
      centerPanel.position.set(0, 0.2, -1.5);
      centerPanel.rotation.x = Math.PI / 6;
      scene.add(centerPanel);
      
      // Screen textures
      const loader = new THREE.TextureLoader();
      
      // Radar screen
      const radarGeometry = new THREE.PlaneGeometry(0.7, 0.3);
      const radarMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x00ff00,
        emissive: 0x00ff00,
        emissiveIntensity: 0.5
      });
      const radarScreen = new THREE.Mesh(radarGeometry, radarMaterial);
      radarScreen.position.set(-0.9, 0.21, -1.5);
      radarScreen.rotation.x = Math.PI / 6;
      radarScreen.rotation.y = 0;
      scene.add(radarScreen);
      
      // Target screen
      const targetGeometry = new THREE.PlaneGeometry(0.7, 0.3);
      const targetMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x0000ff,
        emissive: 0x0000ff,
        emissiveIntensity: 0.5
      });
      const targetScreen = new THREE.Mesh(targetGeometry, targetMaterial);
      targetScreen.position.set(0.9, 0.21, -1.5);
      targetScreen.rotation.x = Math.PI / 6;
      targetScreen.rotation.y = 0;
      scene.add(targetScreen);
      
      // Energy display
      const energyGeometry = new THREE.PlaneGeometry(0.7, 0.3);
      const energyMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xff0000,
        emissive: 0xff0000,
        emissiveIntensity: 0.5
      });
      const energyScreen = new THREE.Mesh(energyGeometry, energyMaterial);
      energyScreen.position.set(0, 0.21, -1.5);
      energyScreen.rotation.x = Math.PI / 6;
      energyScreen.rotation.y = 0;
      scene.add(energyScreen);
      
      // Add chair
      const chairSeatGeometry = new THREE.BoxGeometry(0.6, 0.1, 0.6);
      const chairMaterial = new THREE.MeshStandardMaterial({ color: 0x0a1a2a });
      const chairSeat = new THREE.Mesh(chairSeatGeometry, chairMaterial);
      chairSeat.position.set(0, -0.2, -0.5);
      scene.add(chairSeat);
      
      const chairBackGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.1);
      const chairBack = new THREE.Mesh(chairBackGeometry, chairMaterial);
      chairBack.position.set(0, 0.2, -0.8);
      scene.add(chairBack);
    };
    
    // Add sea and environment
    const createEnvironment = () => {
      // Sea
      const seaGeometry = new THREE.PlaneGeometry(1000, 1000);
      const seaMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x0077be,
        transparent: true,
        opacity: 0.8
      });
      const sea = new THREE.Mesh(seaGeometry, seaMaterial);
      sea.rotation.x = -Math.PI / 2;
      sea.position.y = -2;
      scene.add(sea);
      
      // Sky
      const skyGeometry = new THREE.BoxGeometry(1000, 1000, 1000);
      const skyMaterials = [];
      for (let i = 0; i < 6; i++) {
        skyMaterials.push(new THREE.MeshBasicMaterial({
          color: 0x87ceeb,
          side: THREE.BackSide
        }));
      }
      const sky = new THREE.Mesh(skyGeometry, skyMaterials);
      scene.add(sky);
      
      // Add enemy ships
      const shipGeometry = new THREE.BoxGeometry(4, 2, 10);
      const shipMaterial = new THREE.MeshStandardMaterial({ color: 0x555555 });
      
      // Enemy ship 1 (main)
      const enemyShip1 = new THREE.Mesh(shipGeometry, shipMaterial);
      enemyShip1.position.set(-50, -1, -100);
      enemyShip1.name = 'enemyShip1';
      scene.add(enemyShip1);
      
      // Enemy ship 2 (minion)
      const enemyShip2 = new THREE.Mesh(shipGeometry, shipMaterial);
      enemyShip2.position.set(30, -1, -150);
      enemyShip2.name = 'enemyShip2';
      scene.add(enemyShip2);
      
      // Enemy ship 3 (minion)
      const enemyShip3 = new THREE.Mesh(shipGeometry, shipMaterial);
      enemyShip3.position.set(-30, -1, -120);
      enemyShip3.name = 'enemyShip3';
      scene.add(enemyShip3);
      
      // Marina Bay Sands in the distance
      const mbsGeometry = new THREE.BoxGeometry(80, 30, 10);
      const mbsMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const mbs = new THREE.Mesh(mbsGeometry, mbsMaterial);
      mbs.position.set(0, 15, -300);
      scene.add(mbs);
      
      // MBS iconic top
      const mbs2Geometry = new THREE.BoxGeometry(100, 5, 20);
      const mbs2 = new THREE.Mesh(mbs2Geometry, mbsMaterial);
      mbs2.position.set(0, 32, -300);
      scene.add(mbs2);
    };
    
    // Add lighting
    const addLighting = () => {
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 10, 5);
      directionalLight.castShadow = true;
      scene.add(directionalLight);
      
      const pointLight = new THREE.PointLight(0x00ff00, 0.5, 5);
      pointLight.position.set(0, 1, -1.5);
      scene.add(pointLight);
    };
    
    // Call setup functions
    createShipInterior();
    createEnvironment();
    addLighting();
    
    // Create crosshair
    const crosshairGeometry = new THREE.RingGeometry(0.01, 0.02, 32);
    const crosshairMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const crosshair = new THREE.Mesh(crosshairGeometry, crosshairMaterial);
    crosshair.position.set(0, 0, -0.5);
    camera.add(crosshair);
    scene.add(camera);
    
    // Create enemy ship objects
    const enemyShips = [
      { object: scene.getObjectByName('enemyShip1'), health: 100, isMain: true },
      { object: scene.getObjectByName('enemyShip2'), health: 50, isMain: false },
      { object: scene.getObjectByName('enemyShip3'), health: 50, isMain: false }
    ];
    
    // Move enemy ships towards Marina Bay Sands
    const moveEnemyShips = () => {
      if (gameOver) return;
      
      enemyShips.forEach(ship => {
        if (ship.health > 0) {
          ship.object.position.z += 0.05;
          
          // Check if enemy ship has reached Marina Bay Sands
          if (ship.object.position.z > -50) {
            setGameOver(true);
            setMessage("Enemy has reached Marina Bay Sands! Mission failed.");
          }
        }
      });
    };
    
    // Create explosion effect
    const createExplosion = (position) => {
      const explosionGeometry = new THREE.SphereGeometry(2, 32, 32);
      const explosionMaterial = new THREE.MeshBasicMaterial({
        color: 0xff5500,
        transparent: true,
        opacity: 1
      });
      const explosion = new THREE.Mesh(explosionGeometry, explosionMaterial);
      explosion.position.set(position.x, position.y, position.z);
      scene.add(explosion);
      
      // Animation for explosion
      let scale = 1;
      const expandExplosion = () => {
        scale += 0.1;
        explosion.scale.set(scale, scale, scale);
        explosion.material.opacity -= 0.05;
        
        if (explosion.material.opacity > 0) {
          requestAnimationFrame(expandExplosion);
        } else {
          scene.remove(explosion);
        }
      };
      
      expandExplosion();
    };
    
// Fire weapon function
const fireWeapon = (targetType) => {
    if (!cannonReady || !targetSpotted) return;
    
    // Create missile
    const missileGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 8);
    const missileMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const missile = new THREE.Mesh(missileGeometry, missileMaterial);
    missile.rotation.x = Math.PI / 2;
    missile.position.set(0, 0, -2.5);
    scene.add(missile);
    
    // Determine target
    let targetShip;
    if (targetType === 'main') {
      targetShip = enemyShips.find(ship => ship.isMain);
    } else {
      targetShip = enemyShips.find(ship => !ship.isMain && ship.health > 0);
    }
    
    if (!targetShip) return;
    
    // Animation for missile
    const animateMissile = () => {
      const speed = 2;
      
      // Move missile towards target
      const direction = new THREE.Vector3(
        targetShip.object.position.x - missile.position.x,
        targetShip.object.position.y - missile.position.y,
        targetShip.object.position.z - missile.position.z
      ).normalize();
      
      missile.position.x += direction.x * speed;
      missile.position.y += direction.y * speed;
      missile.position.z += direction.z * speed;
      
      // Check if missile hit target
      const distance = new THREE.Vector3(
        targetShip.object.position.x - missile.position.x,
        targetShip.object.position.y - missile.position.y,
        targetShip.object.position.z - missile.position.z
      ).length();
      
      if (distance < 5) {
        // Hit target
        scene.remove(missile);
        createExplosion(targetShip.object.position);
        
        // Damage enemy ship
        targetShip.health -= 25;
        
        if (targetShip.health <= 0) {
          // Destroy enemy ship
          targetShip.object.visible = false;
          
          // Check if all enemy ships are destroyed
          const allDestroyed = enemyShips.every(ship => ship.health <= 0);
          if (allDestroyed) {
            setGameWon(true);
            setMessage("All enemy ships destroyed! Mission accomplished.");
          } else {
            setMessage("Enemy ship destroyed! Energy +50");
            setEnergy(prevEnergy => Math.min(prevEnergy + 50, 500));
          }
        }
        
        // Reset cannon
        setCannonReady(false);
        return;
      }
      
      // Continue animation if missile hasn't hit
      if (missile.position.z > -300) {
        requestAnimationFrame(animateMissile);
      } else {
        // Missile missed
        scene.remove(missile);
        setMessage("Missile missed. Try again!");
      }
    };
    
    // Start missile animation
    animateMissile();
  };
  
  // Add enemy attack function
  const enemyAttack = () => {
    if (gameOver || gameWon) return;
    
    // Find a random active enemy ship
    const activeEnemies = enemyShips.filter(ship => ship.health > 0);
    if (activeEnemies.length === 0) return;
    
    const attacker = activeEnemies[Math.floor(Math.random() * activeEnemies.length)];
    
    // Create enemy missile
    const enemyMissileGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 8);
    const enemyMissileMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const enemyMissile = new THREE.Mesh(enemyMissileGeometry, enemyMissileMaterial);
    enemyMissile.rotation.x = Math.PI / 2;
    enemyMissile.position.copy(attacker.object.position);
    scene.add(enemyMissile);
    
    // Animation for enemy missile
    const animateEnemyMissile = () => {
      const speed = 1;
      
      // Move missile towards player
      enemyMissile.position.z += speed;
      
      // Check if missile hit player
      if (enemyMissile.position.z > -5) {
        // Hit player
        scene.remove(enemyMissile);
        createExplosion(new THREE.Vector3(0, 0, -2));
        
        // Damage player
        setShipHealth(prevHealth => {
          const newHealth = prevHealth - 10;
          if (newHealth <= 0) {
            setGameOver(true);
            setMessage("Ship destroyed! Mission failed.");
          } else {
            setMessage("Ship hit! -10 health");
          }
          return newHealth;
        });
        
        return;
      }
      
      // Continue animation if missile hasn't hit
      if (!gameOver) {
        requestAnimationFrame(animateEnemyMissile);
      } else {
        scene.remove(enemyMissile);
      }
    };
    
    // Start enemy missile animation
    animateEnemyMissile();
  };
  
  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    
    // Handle keyboard controls
    if (keyboard['w']) {
      camera.position.z -= moveSpeed;
    }
    if (keyboard['s']) {
      camera.position.z += moveSpeed;
    }
    if (keyboard['a']) {
      camera.position.x -= moveSpeed;
    }
    if (keyboard['d']) {
      camera.position.x += moveSpeed;
    }
    if (keyboard['arrowleft']) {
      camera.rotation.y += rotateSpeed;
    }
    if (keyboard['arrowright']) {
      camera.rotation.y -= rotateSpeed;
    }
    
    // Keep the player within the ship
    if (camera.position.z < -2) camera.position.z = -2;
    if (camera.position.z > 2) camera.position.z = 2;
    if (camera.position.x < -2) camera.position.x = -2;
    if (camera.position.x > 2) camera.position.x = 2;
    
    // Move enemy ships
    moveEnemyShips();
    
    renderer.render(scene, camera);
  };
  
  // Start animation loop
  animate();
  
  // Energy regeneration
  const energyTimer = setInterval(() => {
    if (!gameOver && !gameWon) {
      setEnergy(prev => Math.min(prev + 5, 500));
    }
  }, 10000);
  
  // Enemy attack timer
  const enemyAttackTimer = setInterval(() => {
    if (!gameOver && !gameWon) {
      enemyAttack();
    }
  }, 5000);
  
  // Cleanup
  return () => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('keydown', (e) => {
      keyboard[e.key.toLowerCase()] = true;
    });
    window.removeEventListener('keyup', (e) => {
      keyboard[e.key.toLowerCase()] = false;
    });
    clearInterval(energyTimer);
    clearInterval(enemyAttackTimer);
    mountRef.current.removeChild(renderer.domElement);
  };
  }, [gameOver, gameWon, cannonReady, targetSpotted]);
  
  // Crew deployment functions
  const deployCrew = (crewType) => {
    let cost = 0;
    let action = "";
    
    switch(crewType) {
      case "comms":
        cost = 40;
        action = "Comms Specialist deployed. Detection range increased.";
        break;
      case "weapon":
        cost = 100;
        action = "Weapon Control Specialist deployed. Cannons ready!";
        setCannonReady(true);
        break;
      case "engineer":
        cost = 60;
        action = "Marine Engineer deployed. Ship integrity repairs in progress.";
        setShipHealth(prev => Math.min(prev + 25, 100));
        break;
      case "uav":
        cost = 80;
        action = "UAV Specialist deployed. Enemy spotted!";
        setTargetSpotted(true);
        break;
      case "chef":
        cost = 10;
        action = "Naval Chef deployed. Morale boosted, energy regenerating.";
        setTimeout(() => setEnergy(prev => Math.min(prev + 50, 500)), 10000);
        break;
      default:
        return;
    }
    
    if (energy >= cost) {
      setEnergy(prev => prev - cost);
      setMessage(action);
      setSelectedCrew(crewType);
    } else {
      setMessage("Not enough energy!");
    }
  };
  
  // Sonar scan function
  const activateSonar = () => {
    if (energy >= 50) {
      setEnergy(prev => prev - 50);
      setMessage("Sonar activated. Scanning for enemy vessels...");
      setTimeout(() => {
        setMessage("Enemy vessels detected at coordinates N03°45, E104°12");
        setTargetSpotted(true);
      }, 2000);
    } else {
      setMessage("Not enough energy for sonar!");
    }
  };
  
  // Fire weapons function
  const fireWeapons = (targetType) => {
    if (energy >= 50 && cannonReady && targetSpotted) {
      setEnergy(prev => prev - 50);
      setMessage(`Firing at ${targetType === 'main' ? 'main enemy ship' : 'enemy minions'}...`);
      
      // This would trigger the fireWeapon function in the useEffect
      // In a real implementation, you'd use a ref or another state mechanism
      // For now, we'll just simulate the effect
      setTimeout(() => {
        if (targetType === 'main') {
          setEnemyHealth(prev => {
            const newHealth = prev - 25;
            if (newHealth <= 0) {
              setGameWon(true);
              setMessage("Main enemy ship destroyed! Mission accomplished.");
            } else {
              setMessage("Hit on main enemy ship!");
            }
            return newHealth;
          });
        } else {
          setMessage("Hit on enemy minion!");
          setEnergy(prev => Math.min(prev + 20, 500));
        }
      }, 1000);
    } else if (!cannonReady) {
      setMessage("Cannons not ready! Deploy Weapon Specialist first.");
    } else if (!targetSpotted) {
      setMessage("No target detected! Use sonar or deploy UAV Specialist.");
    } else {
      setMessage("Not enough energy!");
    }
  };
  
  // Render UI
  return (
    <div>
      <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />
      
      {/* HUD Overlay */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        pointerEvents: 'none'
      }}>
        {/* Status Message */}
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '10px 20px',
          borderRadius: '5px',
          marginBottom: '10px'
        }}>
          {message}
        </div>
        
        {/* Energy and Health */}
        <div style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          marginBottom: '10px'
        }}>
          <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '10px',
            borderRadius: '5px'
          }}>
            Energy: {energy}/500
          </div>
          <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '10px',
            borderRadius: '5px'
          }}>
            Ship Health: {shipHealth}%
          </div>
        </div>
        
        {/* Control Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          width: '100%',
          pointerEvents: 'auto'
        }}>
          <button
            onClick={() => deployCrew('comms')}
            style={{
              padding: '10px',
              backgroundColor: selectedCrew === 'comms' ? '#4CAF50' : '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Deploy Comms (40⚡)
          </button>
          <button
            onClick={() => deployCrew('weapon')}
            style={{
              padding: '10px',
              backgroundColor: selectedCrew === 'weapon' ? '#4CAF50' : '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Deploy Weapon Specialist (100⚡)
          </button>
          <button
            onClick={() => deployCrew('engineer')}
            style={{
              padding: '10px',
              backgroundColor: selectedCrew === 'engineer' ? '#4CAF50' : '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Deploy Engineer (60⚡)
          </button>
          <button
            onClick={() => deployCrew('uav')}
            style={{
              padding: '10px',
              backgroundColor: selectedCrew === 'uav' ? '#4CAF50' : '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Deploy UAV Specialist (80⚡)
          </button>
          <button
            onClick={() => deployCrew('chef')}
            style={{
              padding: '10px',
              backgroundColor: selectedCrew === 'chef' ? '#4CAF50' : '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Deploy Chef (10⚡)
          </button>
          <button
            onClick={activateSonar}
            style={{
              padding: '10px',
              backgroundColor: '#FF9800',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Activate Sonar (50⚡)
          </button>
          <button
            onClick={() => fireWeapons('main')}
            style={{
              padding: '10px',
              backgroundColor: '#F44336',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              opacity: cannonReady && targetSpotted ? 1 : 0.5
            }}
            disabled={!cannonReady || !targetSpotted}
          >
            Fire at Main Ship (50⚡)
          </button>
          <button
  onClick={() => fireWeapons('minion')}
  style={{
    padding: '10px',
    backgroundColor: '#F44336',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    opacity: cannonReady && targetSpotted ? 1 : 0.5
  }}
  disabled={!cannonReady || !targetSpotted}
>
Fire at Minions (50⚡)
</button>

{/* Game Over or Victory Screen */}
{(gameOver || gameWon) && (
  <div style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    pointerEvents: 'auto'
  }}>
    <h2>{gameWon ? 'Mission Accomplished!' : 'Mission Failed'}</h2>
    <p>{gameWon ? 'You have successfully defended Marina Bay Sands!' : 'Enemy ships have reached their target.'}</p>
    <button
      onClick={() => window.location.reload()}
      style={{
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px'
      }}
    >
      Play Again
    </button>
  </div>
)}
        </div>
      </div>
    </div>
  );
};

export default NavyGame;