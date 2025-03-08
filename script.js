function setRandomImageSrc() {
    const randomNumber = Math.floor(Math.random() * 216) + 1;
    const paddedNumber = String(randomNumber).padStart(3, '0');
    const imgElement = document.getElementById('randomLetter');
    imgElement.src = `jpg/image-${paddedNumber}.jpg`;
  }
  
  window.onload = setRandomImageSrc;
  