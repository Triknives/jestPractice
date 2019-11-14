import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Pizza } from './scripts';

$(document).ready(function(){
  $("#toppingsForm").submit(function(event){
    event.preventDefault();
    let toppingInput = $("input:checkbox[name=topping]:checked");
    let toppingArray = [];
    let size = $("#size").val();
    $("input:checkbox[name=topping]:checked").each(function(){
      let userToppings = $(this).val();
      $("#userOrder").append(userToppings + "<br>");
    });
    toppingInput.each(function(){
      toppingArray.push($(this).val());
    });

    let myPizza = new Pizza (toppingArray, size);
    let price = myPizza.getPrice();


    $("#pizzaSize").append(size);
    $("#orderTotal").text(price);
    $("#toppingsForm").hide();
    $("#specials").hide();
    $("#intro").hide();
    $("#orderReveal").show();
    $("#thankYou").show();
  });
});
