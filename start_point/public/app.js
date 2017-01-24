var app = function () {


var createCat = function(name, favouriteFood){


var catUl = document.createElement('ul');
//creating unordered list
catUl.classList.add('cat');
//adding an html class to UL
var catNameLi = document.createElement('li');
//creating list element
catNameLi.innerText = 'Name: ' + name; 
// creating label for list item, titles Name
var catFoodLi = document.createElement('li');
catFoodLi.innerText = 'Favourite food: ' + favouriteFood;
// creating lable for list item, titled Favourite Food


catUl.appendChild(catNameLi);
// appending the cat list name item to the cat Ul
catUl.appendChild(catFoodLi);
//appending the cat list food item to the cat Ul
// catUl.appendChild(catPic);
return catUl;
}


var showCat = function(catUl){
  var section = document.getElementById('cats');
//getting the elements in the section by cats
section.appendChild(catUl);
// appending the cat Ul to the section

}

// var createPic = function(catPic){
//   var catPic = document.createElement('img');
//   catPic.innerHTML = (width="500" src="http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"); 
// }

var addCat = function(name, favouriteFood, catPic){
  var catUl = createCat(name, favouriteFood, catPic);
    showCat(catUl);
}

// var addCatPic = function(catPic){
//   var catUl = create(catPic);
//   showCat(catUl);
// }


// var cats = [{name: 'Boba', favouriteFood: 'Sock Fluff', catPic: http:// }, {name: 'Barnaby ', favouriteFood: 'Tuna', catPic: }, {name: 'Max ', favouriteFood: 'Whiskas Temptations ', catPic: }, {name: 'Bagpuss ', favouriteFood: 'Ham slices', catPic: }];

addCat('Bagpuss', 'Sliced Ham');

// addCat('Bagpuss', 'Sliced Ham', 'http://images.boomsbeat.com/data/images/full/37630/cat_3-jpg.jpg');

}










window.onload = app;

