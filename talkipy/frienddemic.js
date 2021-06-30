{
    // Get the modal
var modal0 = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img0= document.getElementById("myImg");

img0.onclick = function(){
  modal0.style.display = "block";
  modalImg0.src = this.src;
}


window.onclick = function(event0) {
    if (event0.target == modal0) {
      modal0.style.display = "none";
    }
  }
}

{
  var modal = document.getElementById("myModal1");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImg1");
  
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
  
  
  window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
}

{
  var modal2 = document.getElementById("myModal2");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img2 = document.getElementById("myImg2");
  
  img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
  }
  
  
  window.addEventListener('click', function(event2) {
      if (event2.target == modal2) {
        modal2.style.display = "none";
      }
    });
}


