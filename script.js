function initGallery() {
    console.log("Gallery initialized");
    
    document.querySelectorAll('.photo img').forEach(img => {
      img.addEventListener('click', openModal);
      img.addEventListener('focus', () => {
        img.style.outline = "2px solid blue"; // Highlight on focus
      });
      img.addEventListener('blur', () => {
        img.style.outline = ""; // Remove highlight on blur
      });
    });
  }
  
  function openModal() {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('caption');
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.nextElementSibling.innerHTML;
    console.log("Modal opened with image: " + this.src);
  }
  
  const closeButton = document.querySelector('.close');
  closeButton.onclick = function() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      const modal = document.getElementById('myModal');
      if (modal.style.display === 'block') {
        modal.style.display = 'none';
      }
    }
  });
  
  function filterGallery(category) {
    const photos = document.querySelectorAll('.photo');
    photos.forEach(photo => {
      const isVisible = category === 'all' || photo.classList.contains(category);
      photo.style.display = isVisible ? '' : 'none';
    });
  }
  