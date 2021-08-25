var submitname=false,submitemail=false,submitphone=false,submitmessage=false;
var mailRegx=/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
$(document).ready(function(){
$("#name").on('input',function(){
    this.value=this.value.replace(/[^ a-zA-Z]/, '');
    var name=$(this).val()
    if(name.length<3 || name.includes('  ')||name.charAt(0)==' '){
        $("#error-name").html("Invalid Name");
           submitname=false;
    }else{
         submitname=true;
        $("#error-name").html(" ");
       
    }
})

$('#email').blur( function(){
    var email=$(this).val()
    if(!email.match(mailRegx)){
        $("#error-email").html("Invalid mail");
         submitemail=false;
    }else{
         submitemail=true;
        $("#error-email").html(" ");
       
    }
})


$('#phone').on('input' ,function(){
    this.value=this.value.replace(/[^0-9]/, '').replace(/(\..*)\./, '$1');
    var phone=$(this).val()
    if(phone.length <10){
         submitphone=false;
    $("#error-phone").html("Invalid Number");
   
    }else{
         submitphone=true;
        $("#error-phone").html(" ");
       
    }
})

$('#message').blur(function(){
    var message=$(this).val()
    if (message.length<5){
        $("#error-mes").html("Please enter more than 5 characters");
         submitmessage=false;
    }else{
        $("#error-mes").html(" ");
         submitmessage=true;
       
    }
})

})

    
function mail() {

    if(submitname==true && submitphone==true && submitemail==true && submitmessage==true)
    {$.ajax({
         url:"https://script.google.com/macros/s/AKfycbw79b_crwItgWTVdvNaUylzUKAdVMOJcla-pHZm/exec",
         data:$("#submit-form").serialize(),
         method:"post",
         success:function (response){
             alert("Form submitted successfully")
             window.location.reload()
             //window.location.href="https://google.com"
         },
         error:function (err){
             alert("Something Error")

         }
     })} else{

    
        $("#submit-message").html("Fill the Fields");
        

     }
}




























