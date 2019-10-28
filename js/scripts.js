$(document).ready(function(){
  $("#groceryList").submit(function(event){
    event.preventDefault();
    // var userInput = [];
    // userInput.push("#products");
    // console.log(userInput);



    var groceryList = ["Banana", "Mango", "Apple"];
    function myFunction(){
      var newArray = ("groceryList").val();
      groceryList.push(newArray);
      console.log(groceryList);

    //  document.getElementById("age").value = "";
    //  document.getElementById("demo").innerHTML = fruits;
  });

});

});
