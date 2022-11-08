var search_button = document.querySelector("#search_button");
var data = [
  [
      "C Programming",
      "Greg Perry",
      "Tecincal",
      "02-09-2013",
  ],
 
  [
      "Python",
      "Paul Barry",
      "Tecincal",
      "2016-07-05",
  ],
  [
      "Java",
      "Barry Burd",
      "Tecincal",
      "2011-04-03",
  ],
  [
      "HTML",
      "Thomas A.",
      "Tecincal",
      "2010-09-08",
  ],
  [
      "CSS",
      "Eric A.",
      "Tecincal",
      "08-09-2011",
  ],
  [
      "Java Script(JS)",
      "Doulas Crockford",
      "Tecincal",
      "2010-07-09",
  ],
  [
      "Angular JS",
      "Pawel Kozlowski",
      "Tecincal",
      "2011-05-07",
  ],
  [
      "C++",
      "Thuan Thai",
      "Tecincal",
      "2008-02-08",
  ],
  [
    ".NET",
    "Thuan Thai",
    "Tecincal",
    "2013-08-04",
],
  [
      "C#",
      "Andrew Stellman",
      "Tecincal",
      "2000-02-03",
  ],
  [
      "Machine Learning",
      "Drew Conway",
      "Tecincal",
      "2012-01-02",
  ],
  [
    "Artificial Intelligence",
      "Patrick D.",
      "Tecincal",
      "28-07-2018",
  ],
  [
      "Node JS",
      "Manuel Kiessling",
      "Tecincal",
      "28-05-2012",
  ],
  [
      "Boot Strap",
       "Jacob Lett",
       "Tecincal",
       "11-08-2018",
  ]
];

search_button.addEventListener("click", ()=>{
    
  var table_body = document.querySelector(".table_body ul");
  var search_name = document.getElementById("search_name").value.toLowerCase();
  var search_author = document.getElementById("search_author").value.toLowerCase();
  var search_subject = document.getElementById("search_subject").value.toLowerCase();
  var search_date = document.getElementById("search_date").value;
  console.log(search_name==='', search_author, search_subject, search_date);
  var inner=''
//  console.log(names)
 data.forEach((item)=>{
  console.log(search_name==='' || item[0].toLowerCase().indexOf(search_name)!=-1);
  if((search_name==='' || item[0].toLowerCase().indexOf(search_name)!=-1) && (search_author==='' || item[1].toLowerCase().indexOf(search_author)!=-1) && (search_subject==='' || item[2].toLowerCase().indexOf(search_subject)!=-1) && (search_date==='' || item[3]===search_date)){
    inner+=`<li>
  <div class="item">
    <div class="name">
      <span>${item[0]}</span>
    </div>
    <div class="author">
      <span>${item[1]}</span>
    </div>
    <div class="subject">
      <span>${item[2]}</span>
    </div>
    <div class="date">
      <span class="open">${item[3]}</span>
    </div>
  </div>
</li>`
  }
 })
 table_body.innerHTML=inner;

});