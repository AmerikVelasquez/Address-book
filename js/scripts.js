$(document).ready(function(){
  $("#form-contact").submit(function(event){
    event.preventDefault();
    const name = $("input#name").val();
    const number = $("input#number").val();
    const address = $("input#address").val();
    const email = $("input#email").val();
    
    $(".name").text(name);
    $(".number").text(number);
    $(".address").text(address);
    $(".email").text(email);
   
  $(".btn").each(function() {
    let counter = 0;
    
    $(this).click(function() {
      counter++;
      alert(counter)
    });
  });
  $(".name").click(function(){
    $("#hidden").toggle();
    


    
  
});
    
  });
});