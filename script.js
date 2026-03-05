document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contactBtn');
    const profileCard = document.getElementById('profileCard');

    // Add a simple entrance animation
    profileCard.style.opacity = '0';
    profileCard.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        profileCard.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        profileCard.style.opacity = '1';
        profileCard.style.transform = 'translateY(0)';
    }, 100);

    // Button click effect
    contactBtn.addEventListener('click', () => {
        const originalText = contactBtn.textContent;
        contactBtn.textContent = 'Message Sent!';
        contactBtn.style.backgroundColor = '#4CAF50';
        contactBtn.style.color = '#fff';
        
        setTimeout(() => {
            contactBtn.textContent = originalText;
            contactBtn.style.backgroundColor = '';
            contactBtn.style.color = '';
        }, 2000);
    });
});