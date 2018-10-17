$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var prices=[500,1500,2000,400,200]
    var descriptions=['Earring-2018 fashion 14k gold','Necklace-Twist Chain Small Pearls Necklace','Bracelet-Gold plated womens bracelet imitation jewelry','Gold Ring-New Arrival High Class Real 18K Gold','Nosering-New description gold nosering designs women with diamond']
    var name = $('#person').val();
    var jewelry = $('#jewelry').val();
    console.log(jewelry);
    var address = $('#address').val();
    var tax = prices[jewelry]* 0.1;
    var total = prices[jewelry] + tax;
    $(".name").text(name);
    $(".jewelry").text(descriptions[jewelry]);
    $(".price").text(prices[jewelry]);
    $(".tax").text(tax);
    $(".total").text(total);
    $(".address").text(address);
    $(".story").show();
    $("button#send").click(function(){
      $(".sending").show();
    })
  });
});
