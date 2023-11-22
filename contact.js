function validate(){
    // var id=document.getElementById("ruserid").value
    // var password=document.getElementById("rpassword").value
    var name=document.getElementById("rname").value
    var country=document.getElementById("rcountry").value
    var zip=document.getElementById("rzipcode").value
    var email=document.getElementById("remail").value
    // var sex=document.getElementsByName("sex")
    // var language=document.getElementsByName("rlang")
    var filter=/^([a-zA-Z\ ])+$/
    var emailFilter=/^([a-zA-Z0-9\_\.\-])+\@([a-zA-Z0-9\-]+\.)+([a-zA-Z0-9]{2,9})+$/
    var flag=true


    if(name==="" || name===" "){
        flag=false
        document.getElementById("res-name").innerHTML="Required"
    }
    else if(!filter.test(name)){ 
        flag=false
        document.getElementById("res-name").innerHTML="Alphabets only";
    }else{
        document.getElementById("res-name").innerHTML="";
    }


    if(zip==="" || zip===" "){
        flag=false
        document.getElementById("res-zip").innerHTML="Required"
    }
    else if(isNaN(zip)){
        flag=false
        document.getElementById("res-zip").innerHTML="Must be numeric only"
    }else{
        document.getElementById("res-zip").innerHTML="";
    }

    if(email==="" || email===" "){
        flag=false
        document.getElementById("res-email").innerHTML="Required"
    }
    else if(!emailFilter.test(email)){
        flag=false
        document.getElementById("res-email").innerHTML="Must be a valid email"
    }else{
        document.getElementById("res-email").innerHTML="";
    }
    
    if(country===""){
        flag=false
        document.getElementById("res-country").innerHTML="Required"
    }else{
        document.getElementById("res-country").innerHTML="";
    }

   
    if(flag){
        alert("Successfully Submitted")
        // document.getElementById("res-submit").innerHTML="Submitted Sucessfully";

    }
}

$(document).ready(function(){
    $("#toggle").click(function(){
        $("#nform").fadeIn(1000)
        $("#toggle").hide()
    })
    $("#rname").keydown(function(){
        // $("#rname").css("background-color","pink")
        $("#rname").css("color","REd")
    })
    $("#rname").keyup(function(){
        // $("input").css("background-color","white")
        $("#rname").css("color","black")
    })
    $("#raddress").keydown(function(){
        // $("#rname").css("background-color","pink")
        $("#raddress").css("color","REd")
    })
    $("#raddress").keyup(function(){
        // $("input").css("background-color","white")
        $("#raddress").css("color","black")
    })
    $("#rzipcode").keydown(function(){
        // $("#rname").css("background-color","pink")
        $("#rzipcode").css("color","REd")
    })
    $("#rzipcode").keyup(function(){
        // $("input").css("background-color","white")
        $("#rzipcode").css("color","black")
    })
    $("#remail").keydown(function(){
        // $("#rname").css("background-color","pink")
        $("#remail").css("color","REd")
    })
    $("#remail").keyup(function(){
        // $("input").css("background-color","white")
        $("#remail").css("color","black")
    })
    $("#rabout").keydown(function(){
        // $("#rname").css("background-color","pink")
        $("#rabout").css("color","REd")
    })
    $("#rabout").keyup(function(){
        // $("input").css("background-color","white")
        $("#rabout").css("color","black")
    })

})

    