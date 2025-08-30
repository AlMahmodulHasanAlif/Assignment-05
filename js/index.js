const heartIcon = document.querySelectorAll(".heart-icon");

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
