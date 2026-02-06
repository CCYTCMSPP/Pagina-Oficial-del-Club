// ===== PARTICLE ANIMATION =====
class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        this.particleCount = 50;
        
        this.init();
        this.animate();
        this.setupEventListeners();
    }

    init() {
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                radius: Math.random() * 3 + 1,
                color: this.getRandomColor(),
                life: 1,
                decay: Math.random() * 0.01 + 0.005
            });
        }
    }

    getRandomColor() {
        const colors = [
            'rgba(251, 191, 36, 0.5)',      // Amarillo
            'rgba(239, 68, 68, 0.5)',       // Rojo
            'rgba(34, 197, 94, 0.5)',       // Verde
            'rgba(30, 58, 138, 0.5)',       // Azul
            'rgba(249, 168, 212, 0.5)'      // Rosa
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    setupEventListeners() {
        window.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
        });

        window.addEventListener('click', (e) => {
            this.createBurst(e.clientX - this.canvas.getBoundingClientRect().left, 
                            e.clientY - this.canvas.getBoundingClientRect().top);
        });
    }

    createBurst(x, y) {
        for (let i = 0; i < 10; i++) {
            const angle = (Math.PI * 2 * i) / 10;
            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * 3,
                vy: Math.sin(angle) * 3,
                radius: Math.random() * 2 + 1,
                color: this.getRandomColor(),
                life: 1,
                decay: Math.random() * 0.03 + 0.02
            });
        }
    }

    update() {
        this.particles.forEach((particle, index) => {
            // Movimiento
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Gravedad suave
            particle.vy += 0.1;

            // Decaimiento de vida
            particle.life -= particle.decay;

            // Atracción hacia el mouse
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                const force = (100 - distance) / 100;
                particle.vx += (dx / distance) * force * 0.5;
                particle.vy += (dy / distance) * force * 0.5;
            }

            // Eliminar partículas muertas
            if (particle.life <= 0) {
                this.particles.splice(index, 1);
            }

            // Mantener cantidad de partículas
            if (this.particles.length < this.particleCount) {
                if (Math.random() < 0.3) {
                    this.particles.push({
                        x: Math.random() * this.width,
                        y: Math.random() * this.height,
                        vx: (Math.random() - 0.5) * 2,
                        vy: (Math.random() - 0.5) * 2,
                        radius: Math.random() * 3 + 1,
                        color: this.getRandomColor(),
                        life: 1,
                        decay: Math.random() * 0.01 + 0.005
                    });
                }
            }
        });
    }

    draw() {
        // Limpiar canvas
        this.ctx.clearRect(0, 0, this.width, this.height);

        // Dibujar partículas
        this.particles.forEach(particle => {
            this.ctx.save();
            this.ctx.globalAlpha = particle.life;
            this.ctx.fillStyle = particle.color;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        });

        // Dibujar conexiones
        this.drawConnections();
    }

    drawConnections() {
        const maxDistance = 150;

        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    this.ctx.save();
                    this.ctx.globalAlpha = (1 - distance / maxDistance) * 0.3;
                    this.ctx.strokeStyle = 'rgba(251, 191, 36, 0.5)';
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                    this.ctx.restore();
                }
            }
        }
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }

    resize() {
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }
}

// ===== INICIALIZAR CUANDO CARGA LA PÁGINA =====
window.addEventListener('load', () => {
    const canvas = document.getElementById('particleCanvas');
    
    if (canvas) {
        // Configurar tamaño del canvas
        const hero = document.querySelector('.hero');
        canvas.width = hero.clientWidth;
        canvas.height = hero.clientHeight;

        // Crear animación de partículas
        const particleAnimation = new Particle(canvas);

        // Ajustar tamaño al redimensionar ventana
        window.addEventListener('resize', () => {
            canvas.width = hero.clientWidth;
            canvas.height = hero.clientHeight;
        });
    }
});

// ===== ANIMATED BACKGROUND SHAPES =====
function createBackgroundShapes() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        if (section.id === 'inicio') return; // Saltar hero
        
        const shapeContainer = document.createElement('div');
        shapeContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 0;
            pointer-events: none;
        `;

        // Crear formas animadas
        for (let i = 0; i < 3; i++) {
            const shape = document.createElement('div');
            const size = Math.random() * 300 + 100;
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const duration = Math.random() * 20 + 10;
            const colors = [
                'rgba(251, 191, 36, 0.05)',
                'rgba(239, 68, 68, 0.05)',
                'rgba(30, 58, 138, 0.05)'
            ];

            shape.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${left}%;
                top: ${top}%;
                background: ${colors[i % colors.length]};
                border-radius: 50%;
                filter: blur(40px);
                animation: float ${duration}s ease-in-out infinite;
            `;

            shapeContainer.appendChild(shape);
        }

        section.style.position = 'relative';
        section.insertBefore(shapeContainer, section.firstChild);
    });
}

// Ejecutar cuando carga el DOM
document.addEventListener('DOMContentLoaded', createBackgroundShapes);

// ===== ANIMATED COUNTER =====
function animateOnScroll(element) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    const target = parseInt(counter.dataset.target);
                    animateCounter(counter, target);
                });
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(element);
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 30);
}
