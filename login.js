var send=document.querySelector(".send");

send.addEventListener("click" ,login, false);

function login(){
	var email=document.querySelector(".account").value;
	var password=document.querySelector(".password").value;
	var account={};
	account.email=email;
	account.password=password;

    var xhr=new XMLHttpRequest();
    xhr.open("post","https://hexschool-tutorial.herokuapp.com/api/signin",true);
    xhr.setRequestHeader("Content-type", "application/json");
    var data=JSON.stringify(account);
    xhr.send(data);
    xhr.onload=function(){
    	var callBackData=JSON.parse(xhr.response);
    	console.log(callBackData);
    	var veriStr=callBackData.message;
     	if(veriStr=="登入成功"){
     		alert("登入成功");
     	}else{
     		alert("此帳號不存在或帳號密碼錯誤");
     	}
    }
}