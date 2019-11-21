
    fetch('https://api.github.com/users')
    .then(res => res.json())//response type
    .then(data1  => {
console.log(data1);
var jsonData = JSON.parse(JSON.stringify(data1));
for (var i = 0; i < jsonData.length; i++) {
    console.log(jsonData[i].login);
var para = document.createElement("p");
var node = document.createTextNode(jsonData[i].login);
para.appendChild(node);
var element = document.getElementById("demo");
element.appendChild(para);
}
}
); //log the data;