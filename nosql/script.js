fetch("hotel.json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("reservation").innerHTML =
      "Reservation ID: " +
      data.reservationId +
      "<br>Guest Name: " +
      data.guestName +
      "<br>Room Type: " +
      data.roomType +
      "<br>Check-in Date: " +
      data.checkInDate +
      "<br>Check-out Date: " +
      data.checkOutDate +
      "<br>Total Amount: ₹" +
      data.totalAmount;

    document.getElementById("hotel").innerHTML =
      "Hotel Name: " +
      data.hotelName +
      "<br>City: " +
      data.city +
      "<br>Address: " +
      data.hotelAddress.street +
      ", " +
      data.hotelAddress.area +
      "<br>Contact: " +
      data.hotelAddress.contactNumber;

    document.getElementById("amenities").innerHTML = data.amenities.join(", ");
  });