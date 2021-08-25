var submitname=false,submitemail=false,submitphone=false,submitmessage=false;

$(document).ready(function(){
$("#name").on('input',function(){
    this.value=this.value.replace(/[^ a-zA-Z]/, '');
    var name=$(this).val()
    if(name.length<3 || name.includes('  ')||name.charAt(0)==' '){
        $("#error-name").html("Invalid Name");
          var submitname=false;
    }else{
        $("#error-name").html(" ");
        var submitname=true;
    }
})

$('#phone').on('input' ,function(){
    this.value=this.value.replace(/[^0-9]/, '').replace(/(\..*)\./, '$1');
    var phone=$(this).val()
    if(phone.length <10){
    $("#error-phone").html("Invalid Number");
    var submitphone=false;
    }else{
        $("#error-phone").html(" ");
        var submitphone=true;
    }
})



})