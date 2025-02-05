document.addEventListener('DOMContentLoaded', function() {
    let spins = 0;
  
    document.querySelector('.spin-button').addEventListener('click', function() {
      spins++;
      var randDegree = Math.floor(Math.random() * 1800) + 1;
      var totalDegree = spins * 1800 + randDegree;
      document.getElementById('wheel').style.transform = 'rotate(' + totalDegree + 'deg)';
    });
  
    document.querySelector('.fa-heart').addEventListener('click', function() {
      document.querySelector('.overlay').style.display = 'block';
    });
  
    document.querySelector('.overlay').addEventListener('click', function() {
      this.style.display = 'none';
    });
  });
  