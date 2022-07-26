
document.getElementById("debit2").onclick=function(){
	var select = document.getElementById("debit3");

for(var i = 0; i < accountInfo.length; i++) {
var opt = accountInfo[i];
var el = document.createElement("option");
el.textContent = opt;
el.value = opt;
select.appendChild(el);
}
}