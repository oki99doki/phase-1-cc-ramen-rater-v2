// index.js


// EXECUTIVE SUMMARY
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 1. Render all ramen items incl. images on page upon loading
// 2. Make ramen item images clickable and show all detailed info upon clicking


// CORE DELIVERABLES
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
//const imageURL = 'http://localhost:3000'


//const insertImage = document.querySelector('.detail-image')
//console.log(insertImage)


// Callbacks
const handleClick = (ramen) => {
  // Add code
};

const addSubmitListener = () => {
  // Add code
}

const displayRamens = () => {
  // Add code
  // 1(a) requests the data from the server to get all the ramen objects. 
  fetch(`${url}/ramens`)
  .then(res => res.json())
  // save for later: .then(ramenData => ramenData.forEach(ramen => renderOneRamen(ramen)))
  .then(ramen => {
    console.log(ramen[0])
    //console.log(ramen[1])

    const ramenID_0 = ramen[0].id
    const ramenName_0 = ramen[0].name
    const ramenRestau_0 = ramen[0].restaurant
    const ramenImgURL_0 = ramen[0].image
    const ramenRating_0 = ramen[0].rating
    const ramenComment_0 = ramen[0].comment

    console.log(ramenImgURL_0)


    let oImg = document.createElement("img");
    //ramenMenuDiv = document.getElementById('ramen-menu')
    oImg.setAttribute('src', './assets/ramen/shoyu.jpg')
    console.log(ramenMenuDiv)
    document.createElement("img")

    document.body.appendChild(oImg)

    document.getElementById('ramen-menu').appendChild(oImg);

    ramenMenuDiv.append(ramen[0].image)

    /*let ramenImgDiv = document.getElementById('ramen-detail')
    ramenImgDiv.innerHTML = `
        <img src="./assets/ramen/shoyu.jpg">
        `
    let ramenRating = document.getElementById('rating-display')
    ramenRating.childNodes.textContent = 'x / 10'
    */


    //console.log(ramen[0].id)
    
    //console.log(ramenID_0)
    //console.log(ramenName_0)
    //console.log(ramenRestau_0)
    //console.log(ramenImgURL_0)
    //console.log(ramenRating_0)
    //console.log(ramenComment_0)

    const imgGet = document.getElementsByClassName('detail-image')
    //console.log(imgGet)
    imgGet.image = ramenImgURL_0

    imgGet.src = ramenImgURL_0

    //console.log(imgGet)


    //let container = document.querySelector('#dog-image-container');
    //let newImageEl = document.createElement('img');
    //newImageEl.src = dogPicUrl;
    //container.appendChild(newImageEl);
    //console.log(document.getElementsByTagName('img'))
    //const imgContainer = document.getElementsByTagName('img')
    //console.log(imgContainer)

    //insertImage = document.querySelector('.detail-image')
    //const insertImage = document.getElementsByClassName("detail-image")
    //console.log('before'+insertImage)
    //insertImage. appendEle (ramenImgURL_0)
    //console.log('after'+insertImage)

    //ramen[0].image.a

    //document.getElementById("boldStuff").innerHTML = "View small image"; 
    //curtext="View small image"; 
    //document.getElementById("myImage")= "cottage_large.jpg"; 
    //curimage = "cottage_large.jpg";
    
})
  
/*fetch(`${url}/ramens/:id`)
.then(res2 => res2.json())
.then(ids => console.log(ids))*/

  //console.log(ramenData)
  //let info = document.getElementById('ramen-detail')
  //console.log(info)
  
  /*let ramenDiv = document.getElementById('ramen-detail')
  console.log(ramenDiv)
  id = ramen.Data.id
  ramenDiv.append(id)

  ramenDetail_img = getElementById("src")
  ramenDetail_h2 = getElementsByTagName('h2')
  console.log(ramenDetail_img)
  console.log(ramenDetail_h2)*/

};


// NEW Define Helper Function to render one Ramen dish at a time

// 1(b) then display the image for each of the ramen using an img tag 
// inside the #ramen-menu div.
function renderOneRamen(ramen){
  //Build a card (blue-print) for one Ramen dish (to be displayed)
  //get element/ tag where to locate image
  //const ramenDiv = document.getElementById('ramen-detail')
  //console.log(ramenDiv)
  //const h2 = document.createElement('h2)')
  //h2.textContent = ramen.id
 
  
  
  
  /*image = `${ramen}
  /*id = 
  name = 
  restaurant = 
  image = `${ramen}
  rating = 
  comment = */

}


const main = () => {
  // Invoke displayRamens here
  displayRamens()
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
