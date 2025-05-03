document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });
    
    navLinkItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Theme switcher
    const themeSwitcher = document.querySelector('.theme-switcher');
    const sunIcon = document.querySelector('.fa-sun');
    const moonIcon = document.querySelector('.fa-moon');
    let currentTheme = localStorage.getItem('theme') || 'light';
    
    // Set initial theme
    setTheme(currentTheme);
    
    themeSwitcher.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(currentTheme);
        localStorage.setItem('theme', currentTheme);
    });
    
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        if (theme === 'light') {
            sunIcon.classList.add('active');
            moonIcon.classList.remove('active');
        } else {
            sunIcon.classList.remove('active');
            moonIcon.classList.add('active');
        }
    }
    
    // Scroll animations
    const animateElements = document.querySelectorAll('.animate-fade, .animate-pop, .animate-slide-left, .animate-slide-right');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translate(0, 0)';
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Form submission
    const emailForm = document.getElementById('emailForm');
    
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        const mailtoLink = `mailto:jordensleyp@gmail.com?subject=Message from ${name}&body=${message}%0D%0A%0D%0AReply to: ${email}`;
        
        window.location.href = mailtoLink;
    });
    
    // Add animation delay to elements
    document.querySelectorAll('.animate-pop').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});
