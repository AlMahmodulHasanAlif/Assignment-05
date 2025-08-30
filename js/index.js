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
      //alert calling
      const serviceName =
        e.target.parentNode.parentNode.children[1].children[1].innerText;
      const serviceNumber =
        e.target.parentNode.parentNode.children[1].children[3].innerText;
      alert("Calling" + " " + serviceName + " " + serviceNumber + "...");
      //call history
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      let ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      const historyContainer = document.getElementById("history-container");
      const callHistory = document.createElement("div");
      callHistory.innerHTML = `
            <div class="flex justify-between items-center bg-[#FAFAFA] p-2 rounded mt-2">
              <div>
                <p class="font-semibold text-[.8rem]">
                  ${serviceName}
                </p>
                <p class="text-[.7rem] text-[#5C5C5C]">999</p>
              </div>
              <div class="text-[.8rem] hind-madurai-regular whitespace-nowrap">
                ${hours}:${minutes}:${seconds}:${ampm}
              </div>
            </div>
    `;
      historyContainer.append(callHistory);
    }
  });
