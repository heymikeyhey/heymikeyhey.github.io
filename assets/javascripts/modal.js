// Get the modal
var modal = document.getElementById("myModal");
var captionText = document.getElementById("caption");
var modalImg = document.getElementById("modalContent");
var photos = document.getElementsByClassName("modal-photo");

for (let img of photos) {
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
