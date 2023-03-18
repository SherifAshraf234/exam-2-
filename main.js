let categories = document.getElementById("Categories");
let ingres = document.getElementById("ingredients");
let areass = document.getElementById("areass")
let search = document.getElementById('search')
let contactUs = document.getElementById('contact')



var items = [];
async function Getdata() {
  myresponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=Egyptian`
  );
  dataResponse = await myresponse.json();
  items = dataResponse.meals;
  console.log(items);
  displaymeals();
  
}
Getdata();
displaydetails()

function displaymeals() {
  var cartoona = ``;
  for (var i = 0; i < items.length; i++) {
    cartoona += `  <div onclick="getdetails()" class="col-md-3">
    <div class="items position-relative ">
      <figure>
        <img src="${items[i].strMealThumb}"class="w-100" >
      </figure>
      <figcaption>
       <div class="layer w-100 h-100 bg-white d-flex justify-content-center align-items-center top-0 position-absolute bg-opacity-75 ">
        <h3>${items[i].strMeal}</h3>
       </div>
      </figcaption>
    </div>
</div>`;
  }
  document.getElementById("meals").innerHTML = cartoona;
}

var catgs = [];
categories.addEventListener("click", async function getcategories() {
  myresponsee = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  dataaResponse = await myresponsee.json();
  catgs = dataaResponse.categories;
  console.log(catgs);
  displaycategory();
  
});
getcategories();

function displaycategory() {
  var box = ``;
  for (var i = 0; i < catgs.length; i++) {
    box += ` <div class="col-md-3">
  <div class="items position-relative ">
    <figure>
      <img src="${catgs[i].strCategoryThumb}" alt="" class="w-100">
    </figure>
    <figcaption>
     <div class="layer w-100 h-100 bg-white d-flex justify-content-center align-items-center top-0 position-absolute bg-opacity-75">
      <h5>${catgs[i].strCategoryDescription
        .split("")
        .slice(0, 120)
        .join("")}${""}${`  Read more...`}</h5>
     </div>
    </figcaption>
  </div>
</div>`;
  }
  document.getElementById("meals").innerHTML = box;
}

var baloona = [];
async function getIngers() {
  myRes = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  DRes = await myRes.json();
  baloona = DRes.meals;
  console.log(baloona);
  displayIngredients();
}
getIngers();

function displayIngredients() {
  var cartoonaa = ``;
  for (var i = 0; i < baloona.length; i++) {
    cartoonaa += ` <div class=" ingers col-md-3">
    <div>
    <h3>${baloona[i].strIngredient}</h3>
    <p>${baloona[i].strDescription}</p>
    </div>
   </div>`;
  }
  document.getElementById("meals").innerHTML = cartoonaa;
}


var iteems = [];
async function getdetails(){
  mycall= await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
  callResponse =await  mycall.json()
  iteems = callResponse.meals
  console.log(iteems)
  displaydetails()
}
getdetails()

function displaydetails(){
  var boxes = ``
  for(var i =0 ; i<iteems.length ; i++){
    boxes+=`
    <div class="col-md-4">
          <img src="${iteems[i].strMealThumb}" alt="" class="w-100">
          <h3>${iteems[i].strMeal
          }</h3>
        </div>
        <div class="col-md-6">
          <p>
            ${iteems[i].strInstructions}
          </p>
          <h4>Area:${iteems[i].strArea}</h4>
          <h4>Ctegory:${iteems[i].strCategory}</h4>
          <h4>Recipes:</h4>
         <ul class="d-flex g-4 flex-wrap">
          <li class="alert alert-info">${iteems[i].strIngredient1}</li>
          <li class="alert alert-info">${iteems[i].strIngredient2}</li>
          <li class="alert alert-info">${iteems[i].strIngredient3}</li>
          <li class="alert alert-info">${iteems[i].strIngredient4}</li>
          <li class="alert alert-info">${iteems[i].strIngredient5}</li>
          <li class="alert alert-info">${iteems[i].strIngredient6}</li>
          <li class="alert alert-info">${iteems[i].strIngredient7}</li>
          <li class="alert alert-info">${iteems[i].strIngredient8}</li>
          <li class="alert alert-info">${iteems[i].strIngredient9}</li>
          <li class="alert alert-info">${iteems[i].strIngredient10}</li>
          <li class="alert alert-info">${iteems[i].strIngredient11}</li>
          <li class="alert alert-info">${iteems[i].strIngredient12}</li>
          <li class="alert alert-info">${iteems[i].strIngredient13}</li>
         </ul>
         <h4>Tags:${iteems[i].strTags}</h4>
        <div class="btn btn-info">Source</div>
        <div class="btn btn-danger">YouTube</div>
        </div>
    `
  }
  document.getElementById('meals').innerHTML = boxes;
}


var count = []
async function area(){
  ress = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
  dataa =await ress.json()
  count = dataa.meals
  console.log(count)
  displayarea()
}
area()
function displayarea(){
  var areas = ``
  for(var i = 0; i<count.length ; i++){
    areas+=`
    <div class=" areas col-md-3">
    <img src="imgs/download.png" alt="" class="w-100">
          <h3>${count[i].strArea}</h3>
        </div>
    `
  }
  document.getElementById('meals').innerHTML = areas;
}

function getSearch(){
  var container = ``
  container=`
  <div class="col-md-5">
  <form>
    <input type="text" placeholder="Search by name..." class="form-control">
  </form>
 </div>

 <div class="col-md-5">
  <form>
    <input type="text" placeholder="Search by latter..." class="form-control">
  </form>
 </div>

  `
  document.getElementById('meals').innerHTML = container;
}

function contactus(){
  var containerr = ``
  containerr = `
  <div class="col-md-5">
        <form>
          <input type="text" placeholder="Enter your Name" class="form-control" id="name">
          <div class="col-md-8">
          <div class="alert alert-danger d-none" id="requiedd">All input is required</div>
        </div>
        </form>
       </div>
   
       <div class="col-md-5">
        <form>
          <input type="text" placeholder="Enter your phone" class="form-control" id="phone">
        </form>
       </div>
       <div class="col-md-5">
        <form>
          <input type="text" placeholder="Enter your age" class="form-control">
        </form>
       </div>
       <div class="col-md-5">
        <form>
          <input type="text" placeholder="Enter your Email" class="form-control">
        </form>
       </div>
       <div class="col-md-5">
        <form>
          <input type="text" placeholder="Enter your Password" class="form-control">
        </form>
       </div>
       <div class="col-md-5">
        <form>
          <input type="text" placeholder="Enter your Repassword" class="form-control">
        </form>
       </div>
       <div>
       <button class="btn btn-dark">Submit</button>
       </div>
  `
  document.getElementById('meals').innerHTML = containerr
}

function getsearch(value) {
  let cartoona = ``;
  if (searchMode == "latter") {
    for (let i = 0; i < items.length; i++) {
      if (
        items[i].strMeal.includes(value)
      ) {
        cartoona += `  <div onclick="getdetails()" class="col-md-3">
      <div class="items position-relative ">
        <figure>
          <img src="${items[i].strMealThumb}"class="w-100" >
        </figure>
        <figcaption>
         <div class="layer w-100 h-100 bg-white d-flex justify-content-center align-items-center top-0 position-absolute bg-opacity-75 ">
          <h3>${items[i].strMeal}</h3>
         </div>
        </figcaption>
      </div>
  </div>`;
      }
      
    }
    document.getElementById("meals").innerHTML = cartoona;

    
  }
}
getsearch();