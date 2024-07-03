// index.js


// EXECUTIVE SUMMARY
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 1. Render all ramen items incl. images on page upon loading - DONE
// 2. Make ramen item images clickable and show all detailed info upon clicking


// CORE DELIVERABLES
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 1. See all ramen images in the div with the id of ramen-menu. 
// by invoking a function called displayRamens which
//   (a) requests the data from the server to get all the ramen objects. 
//   (b) then display the image for each of the ramen using an img tag 
//       inside the #ramen-menu div.
//
// 2. Upon clicking on an image from the #ramen-menu div invoke a callback called 
// handleClick to see all the info about that ramen displayed inside the 
// #ramen-detail div (where it says insert comment here and insert rating here).



// NEW Global Scope
const url = 'http://localhost:3000'

// Add Event Listener for Callback when handleClick on Ramen is activated
//console.log(document.querySelector('#ramen-menu'))
//const imgIndiv = document.getElementsByName('ramen-menu').addEventListener('click', handleClick)
//addEventListener('click', handleClick)
//console.log(document.querySelector('.div-image'))


// Callbacks
//const handleClick = (ramen) => {
const handleClick = (ramen) => {
  // Add code
  //alert("Hello World!")
  //console.log("Hello world!")




  const rating = document.getElementById("rating-display")

  rating.textContent = "Newest Rating"
  //const bigImg = document.getElementsByClassName("detail-image")


  //const imageNode = document.ima
  //console.log(rating)
  //const ramenRating = ramen.rating
  //rating.append("Test");

  document.querySelector('h2').textContent = ramenName 
  document.querySelector('h3').textContent = ramenRest


//  document.querySelector('h2').textContent = 'Test';
// document.querySelector('h3').textContent = 'Test';
  
  //bigImg.src = e.image

  //bigImg.append(bigImg)
  //bigImg.setAttribute("src", "./assets/ramen/shoyu.jpg");
  //ramenNav.append(navImg);
  //console.log(bigImg)
  //const h2 = e.*/
};




/*function ramenDetails(ramen){
  //ramen.forEach(ramen).rating
  console.log(ramen.rating)
  const bigImg = document.getElementById("detail-image")
  
  
  const ramenImg = ramen.image 
  const ramenNav = document.getElementById("ramen-menu")
  //console.log(ramenNav)
  const navImg = document.createElement("img")
  
  bigImg.src = ramenImg
  console.log(bigImg)
  //ramen.image


}*/





const addSubmitListener = () => {
  // Add code
};


// Function displayRamens() is defined here, which displays Ramen dishes in #ramen-menu div
// Note: this function calls renderOneRamen(ramen) to loop over each item (ID) within JSON-file
const displayRamens = () => {
  // 1(a) requests the data from the server to get all the ramen objects. 
  fetch(`${url}/ramens`)
  .then(res => res.json())
  .then(ramenData => ramenData.forEach(ramen => renderOneRamen(ramen)))


  //document.getElementById(ramen).addEventListener('click', function (e) {
};


// NEW Define Helper Function to render one Ramen dish at a time
// Specific Use Case here is to grab preview images and add to #ramen-menu div
function renderOneRamen(ramen){
  // 1(b) then display the image for each of the ramen using an img tag 
  // inside the #ramen-menu div.
  
  // Extract information for each ramen dish from JSON-file and store those in variables (for later use)
  const ramenID = ramen.id // ID of Ramen dish/ rating (1 through 5)
  const ramenName = ramen.name // name of Ramen dish
  const ramenRest = ramen.restaurant // name of Ramen restaurant
  const ramenImg = ramen.image // note: this is url using relative path
  const ramenRating = ramen.rating // rating value between 0 and 10
  const ramenComment = ramen.comment // brief comment in text form
  //console.log(ramen)
  //console.log(ramenID, ramenName, ramenRest, ramenImg, ramenRating, ramenComment)

  // Create small preview images of Ramen dishes under "ramen-menu"-div
  const ramenNav = document.getElementById("ramen-menu")
  //console.log(ramenNav)
  const navImg = document.createElement("img")
  navImg.className = "div-image";
  navImg.src = ramenImg
  navImg.textContent = 'blabla'
  ramenNav.append(navImg);

  document.querySelector('h2').textContent = 'RamenName';
  document.querySelector('h3').textContent = 'ramenRest';
    
  
  //const h2 = document.getElementsByName("h2")
  //h2.textContent = ramen.name



  // Add event listener that is triggered by clicking any of the images in "ramen-menu"-div
  navImg.addEventListener('click',(e) => handleClick(ramen))
  //navImg.addEventListener('click',(e) => ramenDetails(ramen))
  

  //bigImg = document.getElementsByClassName("detail-image")
  //console.log(bigImg)
  //const ramenDetails = {(ramen) => bigImg.src = bigImg}

  //ramenNav.append(ramenImg);


  //image.addEventListener('click', (e) => ramenDetails(ramen))

  /*function ramenDetails(ramen){
    //ramen.forEach(ramen).rating
    console.log(ramen.rating)
    const bigImg = document.getElementById("detail-image")
    
    
    const ramenImg = ramen.image 
    const ramenNav = document.getElementById("ramen-menu")
    //console.log(ramenNav)
    const navImg = document.createElement("img")
    
    bigImg.src = ramenImg
    console.log(bigImg)
    //ramen.image*/


};


// Main function main() is defined here - it calls displayRamen()
const main = () => {
  // Invoke displayRamens here
  displayRamens()

 // image.addEventListener('click',(e) => ramenDetails(ramen))

 // Invoke addSubmitListener here
}

// Main function main() is invoked here
main()


// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  //handleClick,
  //RamenDetails
  main,
};