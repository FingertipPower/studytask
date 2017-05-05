var arr = [{"num":1,"name":"GitHub","team":"Logical Awesome","inter":"GitHub是一个通过Git进行版本控制的软件源代码托管服务","tear":"www.gihub.com"},
			{"num":2,"name":"Javascript","team":"ECMAScript","inter":"JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言","tear":"www.javascript.com"},
			{"num":3,"name":"Java","team":"ECMAScript","inter":"JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言","tear":"www.javascript.com"},
			{"num":4,"name":"Node.js","team":"Ryan Dahl","inter":"Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境","tear":"www.ndojs.cn"},
			{"num":5,"name":"Git","team":"Linus Torvalds","inter":"Git是一款免费、开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目","tear":"git-scm.com"},
			{"num":6,"name":"React.js","team":"Facebook","inter":"用来架设Instagram 的网站","tear":"facebook.github.io/react/"},
			{"num":7,"name":"Python","team":"Guido van Rossum","inter":"是一种面向对象的解释型计算机程序设计语言","tear":"www.python.org"},
			{"num":8,"name":"Vue.js","team":"尤雨溪","inter":"是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计","tear":"cn.vuejs.org"},
			{"num":9,"name":"ECMAScript 6","team":"Ecma","inter":"这种语言在万维网上应用广泛，它往往被称为JavaScript或JScript，但实际上后两者是ECMA-262标准的实现和扩展","tear":"cn.vuejs.org"},
			{"num":10,"name":"jQuery","team":"John Resig","inter":"简化HTML与JavaScript之间的操作","tear":"cn.vuejs.org"}
];

var table=document.getElementById('table');
for(let i=0; i<10; i++){
	var tr = table.insertRow(table.rows.length);
	var td0=tr.insertCell(0);
	var td1=tr.insertCell(1);
	var td2=tr.insertCell(2);
	var td3=tr.insertCell(3);
	var td4=tr.insertCell(4);
	td0.innerHTML=arr[i].num;
	td1.innerHTML=arr[i].name;
	td2.innerHTML=arr[i].team;
	td3.innerHTML=arr[i].inter;
	td4.innerHTML=arr[i].tear;
}


let add = document.getElementById('add');
let remove = document.getElementById('remove');
let modification = document.getElementById('modification');
let demand = document.getElementById('demand');



add.onclick = function(){
	let num = document.getElementById('num').innerHTML;
	let name = document.getElementById('name').innerHTML;
	let team = document.getElementById('team').innerHTML;
	let inter = document.getElementById('inter').innerHTML;
	let tear = document.getElementById('tear').innerHTML;
	console.log(num);
	/*let new_tr = table.insertRow(table.rows.length);
	let new_td0=new_tr.insertCell(0);
	let new_td1=new_tr.insertCell(1);
	let new_td2=new_tr.insertCell(2);
	let new_td3=new_tr.insertCell(3);
	let new_td4=new_tr.insertCell(4);
	new_td0.innerHTML=arr[i].num;
	new_td1.innerHTML=arr[i].name;
	new_td2.innerHTML=arr[i].team;
	new_td3.innerHTML=arr[i].inter;
	new_td4.innerHTML=arr[i].tear;*/
}





