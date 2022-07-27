var accountInfo = [];
;

var bankApp = (function(){
	var name = "";
	var balance = 0;
	var y;
	
	function showData(){
		var dataText = "";
		for(let i = 0; i < accountInfo.length; i++){
			dataText +="Account name: "+accountInfo[i].name +" Balance: "+ accountInfo[i].balance+"\n";
		}
		document.getElementById("ouput").value = dataText;
		
	}
	
	return{
		createAccount:function(){
			

			name = document.getElementById("name").value;
			balance = document.getElementById("deposit").value;
			
			accountInfo.push({"name":name, "balance": balance});
			showData();
			document.getElementById("name").value="";
			document.getElementById("deposit").value="";
		}
		
	}
	
})();



document.getElementById("submitbtn").onclick = bankApp.createAccount;
myFunction2();
myFunction3();
document.getElementById("Deposit").onclick = deposit;
document.getElementById("debit").onclick = debit;
document.getElementById("depositAmount").onclick = depositAmount;
document.getElementById("debitAmount").onclick = debitAmount;
document.getElementById("submitDeposit").onclick = main;
document.getElementById("submitDebit").onclick = main2;

function main(){
	myFunction()
	helll()
	myFunction2();
	showData2();
    
}
function main2(){
	myFunction()
	helll()
	myFunction3();
	showData2();
    
}


function deposit(){
	
	myFunction();
	myFunction2();
	
	helll();
	
}

function debit(){
	
	myFunction();
	myFunction3();
	
	helll();
	
}




function helll(){
	
	var select = document.getElementById("DropDownlist");

for(var i = 0; i < accountInfo.length; i++) {
var opt = accountInfo[i].name;
var el = document.createElement("option");
el.textContent = opt;
el.value = opt;
select.appendChild(el);
}
}

function myFunction() {
	var x = document.getElementById("firstsdiv");
	
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

function myFunction2() {
	
	var x = document.getElementById("second");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

  function myFunction3() {
	var x = document.getElementById("third");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

  function depositAmount(){

  for(var i = 0; i < accountInfo.length; i++) {
	if(accountInfo[i].name===document.getElementById("DropDownlist").value){
		accountInfo[i].balance= parseInt(accountInfo[i].balance)+parseInt(document.getElementById("amount").value);
		var x=parseInt(document.getElementById("amount").value);
				
	}
	}
	document.getElementById("amount").value="";
	alert(x + " is Deposited");
}
function debitAmount(){

  for(var i = 0; i < accountInfo.length; i++) {
	if(accountInfo[i].name===document.getElementById("DropDownlist").value){
		accountInfo[i].balance= parseInt(accountInfo[i].balance)-parseInt(document.getElementById("amount1").value);
		var x=parseInt(document.getElementById("amount1").value);
	}
	}
	document.getElementById("amount1").value="";
	alert(x + " is Debited");
}

function showData2(){
	
	var dataText = "";
	for(let i = 0; i < accountInfo.length; i++){
		dataText +="Account name: "+accountInfo[i].name +" Balance: "+ accountInfo[i].balance +"\n";
	}
	document.getElementById("ouput").value = dataText;
	
}



