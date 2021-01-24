console.log("Welcome to AJAX");

let fetchBtn = document.getElementById('fetchbtn');
fetchBtn.addEventListener("click",buttonhandle);

function buttonhandle(){
    
    //xhr object
    const emi = new XMLHttpRequest();
    // emi.open("GET" , "https://api.mocki.io/v1/ce5f60e2" , true);
    // emi.open("GET" , "emi.txt" , true);
    // emi.open("GET" , "emi.txt" , false); non async;
    emi.open("POST" , "http://dummy.restapiexample.com/api/v1/create" , true);
    emi.getResponseHeader("Content-type , " + "application/json");


    emi.onload = function(){
        if(this.status===200){
            console.log(this.responseText);
            }
            else{
                console.log("Some Error Occured");
             }
    }
    


    emi.onprogress = function(){
        console.log("On Progress");
    }

    params = `	{"name":"test3","salary":"123","age":"23"}`;
    emi.send(params);

    // emi.onreadystatechange = function(){
    //    console.log("Ready State" , emi.readyState);
    // }


    
}

let getBtn = document.getElementById('backupbtn');
getBtn.addEventListener("click",populate);

function populate(){
      //xhr object
    const emi = new XMLHttpRequest();
   
    emi.open("GET" , "http://dummy.restapiexample.com/api/v1/employees" , true);
  


    emi.onload = function(){
        if(this.status===200){
            let obj = JSON.parse(this.response);
            console.log(obj);
            let list = document.getElementById("list");
            str = "" ; 
            for(key in obj){
                str+= `<li> ${obj[key].id}</li>`
            }
            list.innerHTML = str;
            }
            else{
                console.log("Some Error Occured");
             }
    }
    

    emi.send();
    console.log("We ae here")

   
    
}