function getfile(file,callback){
  var xhr= new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  // console.log(xhr);
xhr.open('GET',file,true);
xhr.onreadystatechange=function(){
  if(xhr.readyState===4 && xhr.status=="200"){
callback(xhr.responseText);
// console.log(xhr);

}
}
xhr.send(null);
// console.log(xhr);
}

getfile("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
 career(data.career);
 education(data.education);
 skills(data.skills);
});

var main=document.querySelector(".main");
var sub=document.querySelector(".sub1");
var sub2=document.querySelector(".sub2");
function profile(pro){
  var image=document.createElement("img");
  image.src=pro.img;
  // console.log(image);
  sub.appendChild(image);
  main.appendChild(sub);
  var name=document.createElement("h2");
  name.textContent=pro.name;
  // console.log(image);
  sub.appendChild(name);
  main.appendChild(sub);
  var email=document.createElement("h2");
  email.textContent=pro.emailid;
  // console.log(image);
  sub.appendChild(email);
  main.appendChild(sub);
}
function career(c){
  var h1=document.createElement("h1");
  h1.textContent="course objectives:";
  sub2.appendChild(h1);
  var course=document.createElement("h2");
  course.textContent=c.goal;
  // console.log(image);
  sub2.appendChild(course);
  main.appendChild(sub2);

}
function education(edu){
  var h2=document.createElement("h2");
  h2.textContent="educational details";
  sub2.appendChild(h2);
  var hr=document.createElement("hr");
  sub2.append(hr);
  var table=document.createElement("table");
let row="";
row+="<tr>"+
"<th>"+"s-no"+"</th>"+
"<th>"+"degree"+"</th>"+
"<th>"+"year of passing"+"</th>"+
"<th>"+"percentage"+"</th>"+
"</tr>";
for(i in edu)
{
  row +="<tr>"+"<td>"+edu[i].sn+"</td>"+"<td>"+edu[i].degree+"</td>"+"<td>"+edu[i].yop+"</td>"+
  "<td>"+edu[i].percentage+"</td>"+"</tr>";
}
table.innerHTML=row;
sub2.appendChild(table);
main.appendChild(sub2);
}
function skills(l){
  var hh= document.createElement("h2");
  hh.textContent="skills set";
  sub2.append(hh);
  var ul=document.createElement(ul);
  sub2.append(ul);
  for (i in l){
    var li=document.createElement("li");
    li.textContent=l[i].info;
    ul.append(li);
  }
}
