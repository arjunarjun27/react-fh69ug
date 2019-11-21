import React from 'react';


export default class Github extends React.Component{
callapi(){
  var p = document.getElementsByClassName('para');
   fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data1  => {
console.log(data1);
var jsonData = JSON.parse(JSON.stringify(data1));
for (var i = 0; i < jsonData.length; i++) {
    console.log(jsonData[i].login);
var para = document.createElement("p");
  para.setAttribute('className', 'para');

var node = document.createTextNode(jsonData[i].login);
para.appendChild(node);
var element = document.getElementById("demo");
element.appendChild(para);
}
}
); 

}


render(){
  return(
    <div id="demo">
    <p> List of Github  user</p>
    <button onClick={()=>this.callapi()}>Show</button>
    </div>

  );
}

}