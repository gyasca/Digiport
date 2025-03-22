import { useEffect } from 'react';

const MatrixBackground = () => {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const container = document.getElementById('matrix-background-container'); // Create a container for the canvas
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight; // Cover entire document height
    };
    setCanvasSize();

    // Matrix characters
    // const characters =
    //   'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$+-*/=%"\'#&_(),.;:?!\\|{}<>[]^~';
    const characters = "Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ Ⅹ Ⅺ Ⅻ Ⅼ Ⅽ Ⅾ Ⅿ ⅰ ⅱ ⅲ ⅳ ⅴ ⅵ ⅶ ⅷ ⅸ ⅹ ⅺ ⅻ ⅼ ⅽ ⅾ ⅿ ↀ ↁ ↂ ➀ ➁ ➂ ➃ ➄ ➅ ➆ ➇ ➈ ➉ ➊ ➋ ➌ ➍ ➎ ➏ ➐ ➑ ➒ ➓ ⓵ ⓶ ⓷ ⓸ ⓹ ⓺ ⓻ ⓼ ⓽ ⓾ ⓿ ❶ ❷ ❸ ❹ ❺ ❻ ❼ ❽ ❾ ❿ ⁰ ¹ ² ³"

    // Font settings
    const fontSize = 16;
    ctx.font = `${fontSize}px monospace`;

    // Columns based on canvas width
    const columns = Math.floor(canvas.width / fontSize);

    // Store y-position of characters in each column
    const drops = Array(columns).fill(-1);
    const matrix = Array.from({ length: columns }, () => []);

    function draw() {
      // Completely clear the canvas with a black background
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const columnLength = Math.max(0, drops[i]);

        // Randomly add new characters to the matrix
        if (Math.random() > 0.9) {
          matrix[i].unshift(characters[Math.floor(Math.random() * characters.length)]);
        }

        for (let j = 0; j < matrix[i].length; j++) {
          const distanceFromHead = matrix[i].length - j; // Distance from the head
          let brightness = Math.random() * 0.5 + 0.5; // Random brightness for variety

          // Handle the head of the drop (first character) being random white
          if (j === 0) {
            ctx.fillStyle = 'rgb(150,200,20,0.8)'; // Keep it white for the head
          } else {
            // Apply fading effect: opacity decreases with distance from head
            const opacity = Math.max(0, 1 - distanceFromHead / 20); // Fading logic
            const yellow = Math.floor(255 * brightness) * opacity; // Green channel fading

            ctx.fillStyle = `rgb(150, ${yellow}, 100, ${opacity})`; // Red color with opacity
          }

          // Draw the character
          ctx.fillText(matrix[i][j], i * fontSize, (j + drops[i] - matrix[i].length) * fontSize);
        }

        // Move the drop down by 1 unit (slower)
        drops[i] += 0.2;

        // Reset the drop if it reaches the bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = -1;
          matrix[i] = [];
        }

        if (Math.random() > 0.995) {
          drops[i] = -1;
          matrix[i] = [];
        }
      }
    }

    // Handle window resize
    window.addEventListener('resize', () => {
      setCanvasSize();
      ctx.font = `${fontSize}px monospace`;
    });

    // Animation loop
    function animate() {
      draw();
      requestAnimationFrame(animate);
    }

    animate();

    // Cleanup when the component unmounts
    return () => {
      container.removeChild(canvas);
    };
  }, []);

  return <div id="matrix-background-container" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, width: '100%', height: '100%', pointerEvents: 'none' }} />;
};

export default MatrixBackground;
