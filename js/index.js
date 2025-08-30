const heartIcon = document.querySelectorAll(".heart-icon");
//heart increase
document
  .getElementById("card-container")
  .addEventListener("click", function (e) {
    if (e.target.className.includes("heart-icon")) {
      const heartPoints = document.getElementById("heart-points").innerText;
      let heartPointsIncrease = Number(heartPoints);
      heartPointsIncrease++;
      document.getElementById("heart-points").innerText = heartPointsIncrease;
    }
  });
//call button
document
  .getElementById("card-container")
  .addEventListener("click", function (e) {
    if (e.target.className.includes("call-btn")) {
      const starPoints = Number(
        document.getElementById("star-points").innerText
      );
      if (starPoints < 20) {
        alert(
          "❌ You do not have enough coins.Minimum 20coins needed to make a call."
        );
        return;
      }
      totalStarPoints = starPoints - 20;
      document.getElementById("star-points").innerText = totalStarPoints;
    }
    const serviceName =
      e.target.parentNode.parentNode.children[1].children[1].innerText;
    console.log(serviceName);
    const serviceNumber =
      e.target.parentNode.parentNode.children[1].children[3].innerText;
    console.log(serviceNumber);
    // let serviceNumber = "d";

    alert("Calling" + " " + serviceName + " " + serviceNumber + "...");
  });
