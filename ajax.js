console.log("Welcome to AJAX");

let fetchBtn = document.getElementById('fetchbtn');
fetchBtn.addEventListener("click",buttonhandle);

function buttonhandle(){
    
    //xhr object
    const emi = new XMLHttpRequest();
    emi.open("GET" , "emi.txt" , true);

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
    emi.send();

    emi.onreadystate = function(){
       console.log("Ready State" , emi.readyState);
    }


    
}