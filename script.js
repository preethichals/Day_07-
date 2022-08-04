var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
//you have to extract the counties details whose population is less than 1lAKH
  //SO USE FILTER HERE

  //Get all the countries from the Asia continent /region using the Filter function
  var res = result.filter((ele)=>ele.region =="Asia").map((ele)=>ele.name);
  console.log(res);

  //Get all the countries with a population of less than 2 lakhs using Filter function

  var res = result.filter((ele)=>ele.population<200000).map((ele)=>ele.name);
  console.log(res);
    
  //Print the following details name, capital, flag using forEach function
  
  var res = result.forEach((ele) => ele.name, ele.capital, ele.flag);
  console.log(res);
  
  //Print the country which uses US Dollars as currency.

  var res =result.filter((ele)=>ele.currency==='Dollars').map((ele)=>ele.name);
  console.log(res);

  //Print the total population of countries using reduce function

  var res = result.reduce((pop,ele)=>pop+ele.population,0);
  console.log(res);

}