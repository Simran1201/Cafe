//Cart item if click show:
let shops = document.getElementById("shops");
let ul = document.getElementById("dis");
ul.style.display="none";
shops.addEventListener("click",(e) =>{
  if(ul.style.display=="none"){
    ul.style.display="block";
  }
  else{
    ul.style.display="none";
  }
});
console.log(list);


let item = document.getElementById("item");
let food = item.getElementsByClassName("food");

// Menu Slider For next and previous button:
function next() {
  item.append(food[0]);
}
function prev() {
  item.prepend(food[food.length - 1]);
}

//For adding menu elements in cart:
function add(){
  let cart = document.getElementById("cart");
  let cont = document.getElementsByClassName("cont");
  for(let x of food){
    // var img = x.children[0].src;
  }
  for(let y of cont){
    var txt = y.innerText;
  }
  let li = document.createElement("li");
  // let abcs = document.createTextNode(img);
  let text = document.createTextNode(txt);
  // li.appendChild(abcs);
  li.appendChild(text);
  if(txt != ""){
    document.getElementById("list").appendChild(li);
    console.log("done")
  }
}

//consoleing items to see:
console.log(food)
console.log(food[0].innerText)
console.log(food[0].children)
// console.log(food[0].children[0])
// for(let x of food){
  // console.log(x.children[0])
// }
// let cont = document.getElementsByClassName("cont");
// for(let y of cont){
//   console.log(y.innerText)
// }
// let abc = document.getElementById("abc");
//         alert(abc);

//Review: Clicking star and giving rating
let star = document.querySelectorAll(".stars");
let num = document.querySelector(".num");
console.log(star);
star.forEach((stars,i)=>{
  stars.onclick = function(){
    var current = i+1;
    num.innerHTML = `${current} of 5`;
    // console.log(i+1); //it return index
      star.forEach((star,j)=>{
        if(current >= j+1){
          star.innerHTML = "&#9733";
        }
        else{
          star.innerHTML = "&#9734";
        }
        // console.log(j+1);
      });
    // console.log(stars); //it return value when click
  }
});

//When click on submit button of review section:
function submit(){
  let input = document.getElementById("name").value;
  let area = document.getElementById("area").value;
  // console.log(input + " review is: " + area);
  //For input value
  let div = document.createElement("h3");
  let name = document.createTextNode(input);
  div.appendChild(name);
  //For Star value
  var tara = "";
  star.forEach((value)=>{
      tara += value.innerHTML;
  });
  let ab = document.createElement("span");
  let spans = document.createTextNode(tara);
  ab.appendChild(spans);
  div.appendChild(ab);

  //For rating value
  let rate_value = document.createElement("p");
  let span = document.createTextNode("Your rating is: "+num.innerHTML);
  rate_value.appendChild(span);
  rate_value.className +="rev";
  //For Text area written value
  let review_text = document.createElement("p");
  let revie = document.createTextNode(area);
  review_text.appendChild(revie);
  review_text.className +="rev";
  if(input !="" || area != ""){
    document.getElementById("qot").style.display ="block";
    // document.getElementById("qot").appendChild(document.getElementById("new"));  
    document.getElementById("new").appendChild(div);
    document.getElementById("new").appendChild(div);
    document.getElementById("new").appendChild(review_text);
    document.getElementById("new").appendChild(rate_value);   
    alert("Thank you for your review!");
  }
  else{
    alert("Please Enter some value!");
  }
  document.getElementById("name").value="";
  document.getElementById("area").value="";
  num.innerHTML =`0 of 5`;
  var tara2= "&#9734";
  star.forEach((value)=>{
    value.innerHTML = tara2;
  });
}
// var tara = ""
//   star.forEach((value)=>{
//       tara += value.innerHTML;
//   })
//   console.log(tara)