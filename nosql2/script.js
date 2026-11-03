fetch("hotel1.json")
  .then((response)=> response.json())
  .then((data)=>{
    document.getElementById("reservation").innerHTML = 
    "reservation id:"  +
    data.reservationid +
     "<br>guest name:" +
    data.guestname +
    "<br>room type:" +
    data.roomtype +
    "<br>check in date:" +
    data.checkindate +
    "<br>check out date" +
    data.checkoutdate;

    document.getElementById("hotel").innerHTML =
    "hotelid" +
    data.hotelid +
    "<br> hotel name" +
    data.hotelname +
    "<br> city" +
    data.city;

    document.getElementById("amentities").innerHTML = data.amentities.join(", ");
    
  });
  //scalibe