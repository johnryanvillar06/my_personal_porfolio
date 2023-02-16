// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}

// searchbar 
function myFunction() {
  var x = document.getElementById("searchbar");
  if(x.style.display === "none"){
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}


function hrefFunction(){
  windows.location.href = "C:\Users\John Ryan\Desktop\my_personal_porfolio\my_portfolio\Clothes Website\searchbar.html";
}