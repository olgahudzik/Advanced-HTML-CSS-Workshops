document.addEventListener("DOMContentLoaded", function() {

function menu() {
  var menu_item = document.querySelectorAll('.menu_item');
  var all_submenus = document.querySelectorAll('.submenu');


  for (i=0; i < menu_item.length; i++) {
    menu_item[i].addEventListener ('mouseover', function(){
		for (j=0; j < all_submenus.length; j++) {
			all_submenus[j].style.display = "none";
		}
		var my_submenus = this.querySelectorAll('.submenu');
		if (my_submenus.length > 0) {
		    var submenu = my_submenus[0];
			submenu.style.display = "block";
			var submenu_items = submenu.children;
			for (j=0; j < submenu_items.length; j++) {
				submenu_items[j].addEventListener('mouseover', function(){
					this.style.backgroundColor = "#ffffff";
					this.style.color = "black";
				});
				submenu_items[j].addEventListener('mouseout', function(){
					this.style.backgroundColor = "black";
					this.style.color = "#ffffff";
				});
			}
		}
    });
  }
}
menu ();


// zad.2 Funkcja sluzaca do schowania paska przy najchaniu na blok
function hideTransparentBar() {
	var box = document.querySelectorAll('.second__cell');
	var transparentBars = document.querySelectorAll('.transparent_bar');

	for (i=0; i < transparentBars.length; i++){
		transparentBars[i].addEventListener('mouseover', function(){
				this.style.display = "none";
			});
		transparentBars[i].addEventListener('mouseout', function(){
				this.style.display = "block";
			});
	}
}

hideTransparentBar();



// zad.3 slider

var prev = document.querySelector('.left_character');
var next = document.querySelector('.right_character');
var allListElements = document.querySelectorAll(".chair_image ul li");
var index = 0;

allListElements[index].classList.add("visible");

next.addEventListener('click', function(){
  allListElements[index].style.display = "none";
  index = index + 1;
  if (index > allListElements.length - 1){
    index = 0;
  }
  allListElements[index].style.display = "block";
});

prev.addEventListener('click', function(){
  allListElements[index].classList.remove("visible");
  index = index - 1;
  if (index < 0){
    index = allListElements.length - 1;
  }
  allListElements[index].classList.add("visible");
});



});
