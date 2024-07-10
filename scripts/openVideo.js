    const video = document.getElementById('openVideo');
    const openVideoBtn = document.getElementById('openVideoBtn');
    
    function openModal() {
        video.style.display = 'block';
    }
    
    function closeModal() {
        video.style.display = 'none';
    }
    
    openVideoBtn.addEventListener('click', openModal);
    