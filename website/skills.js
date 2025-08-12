// Skills Page Interactive Elements

document.addEventListener('DOMContentLoaded', function() {
    // Skill card interactions
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add a pulse animation
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 200);
            
            // Show skill details (you can expand this)
            const skillName = this.getAttribute('data-skill');
            console.log(`Clicked on ${skillName} skill card`);
        });
        
        // Add hover sound effect (optional)
        card.addEventListener('mouseenter', function() {
            // You could add a subtle sound effect here
            this.style.boxShadow = '0 15px 35px rgba(135, 206, 235, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
    });
    
    // Technology items interactions
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add a bounce effect
            this.style.transform = 'scale(1.1) rotate(5deg)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px)';
            }, 150);
        });
    });
    
    // Terminal typing effect
    const terminalBody = document.querySelector('.terminal-body');
    if (terminalBody) {
        // Add blinking cursor effect
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        cursor.textContent = '|';
        cursor.style.color = '#87CEEB';
        cursor.style.animation = 'blink 1s infinite';
        
        // Add CSS for blinking animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        // Find the last command line and add cursor
        const lastCommand = terminalBody.querySelector('.terminal-line:last-child .command');
        if (lastCommand) {
            lastCommand.appendChild(cursor);
        }
    }
    
    // Specialization card interactions
    const specCards = document.querySelectorAll('.specialization-card');
    
    specCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add a glow effect
            this.style.boxShadow = '0 15px 35px rgba(135, 206, 235, 0.4)';
            setTimeout(() => {
                this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
            }, 500);
        });
    });
    
    // Progress bar animation on scroll
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            }
        });
    };
    
    // Trigger animation when elements come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => {
        observer.observe(bar);
    });
    
    // Add keyboard shortcuts for navigation
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + 1-7 for navigation
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case '1':
                    e.preventDefault();
                    window.location.href = 'home.html';
                    break;
                case '2':
                    e.preventDefault();
                    window.location.href = 'projects.html';
                    break;
                case '3':
                    e.preventDefault();
                    window.location.href = 'publications.html';
                    break;
                case '4':
                    e.preventDefault();
                    window.location.href = 'skills.html';
                    break;
                case '5':
                    e.preventDefault();
                    window.location.href = 'research.html';
                    break;
            }
        }
    });
    
    // Add a floating action button for quick navigation
    const fab = document.createElement('div');
    fab.className = 'floating-action-btn';
    fab.innerHTML = '<i class="fas fa-code"></i>';
    fab.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        background: linear-gradient(45deg, #87CEEB, purple);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    fab.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(10deg)';
    });
    
    fab.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
    
    fab.addEventListener('click', function() {
        // Toggle a quick menu or scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.body.appendChild(fab);
    
    // Add particle effect background (optional)
    const createParticle = () => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: #87CEEB;
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.6;
        `;
        
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = window.innerHeight + 'px';
        
        document.body.appendChild(particle);
        
        const animation = particle.animate([
            { transform: 'translateY(0px)', opacity: 0.6 },
            { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 }
        ], {
            duration: 3000 + Math.random() * 2000,
            easing: 'linear'
        });
        
        animation.onfinish = () => {
            particle.remove();
        };
    };
    
    // Create particles periodically
    setInterval(createParticle, 2000);
    

}); 