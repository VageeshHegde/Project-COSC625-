function saveColorPreference(color) {
  localStorage.setItem("userColorPreference", color);
}

function changeColor(color, elementID) {
  const backgroundElement = document.getElementById(elementID);

  // Change background color based on the button clicked
  switch (color) {
    case "HawksRed":
      backgroundElement.style.backgroundColor = "#E03A3E";
      saveColorPreference(color);
      break;
    case "CelticsGreen":
      backgroundElement.style.backgroundColor = "#007A33";
      saveColorPreference(color);
      break;
    case "HornetsPurple":
      backgroundElement.style.backgroundColor = "#1D1160";
      saveColorPreference(color);
      break;
    case "BullsRed":
      backgroundElement.style.backgroundColor = "#CE1141";
      saveColorPreference(color);
      break;
    case "CavaliersWine":
      backgroundElement.style.backgroundColor = "#860038";
      saveColorPreference(color);
      break;
    case "MavsRoyalBlue":
      backgroundElement.style.backgroundColor = "#00538C";
      saveColorPreference(color);
      break;
    case "NuggetsBlue":
      backgroundElement.style.backgroundColor = "#0E2240";
      saveColorPreference(color);
      break;
    case "Red":
      backgroundElement.style.backgroundColor = "#C8102E";
      saveColorPreference(color);
      break;
    case "PacerBlue":
      backgroundElement.style.backgroundColor = "#002D62";
      saveColorPreference(color);
      break;
    case "LakerPurple":
      backgroundElement.style.backgroundColor = "#552583";
      saveColorPreference(color);
      break;
    case "Blue":
      backgroundElement.style.backgroundColor = "#5D76A9";
      saveColorPreference(color);
      break;
    case "BucksGreen":
      backgroundElement.style.backgroundColor = "#00471B";
      saveColorPreference(color);
      break;
    case "WolvesBlue":
      backgroundElement.style.backgroundColor = "#0C2340";
      saveColorPreference(color);
      break;
    case "PelicanNavy":
      backgroundElement.style.backgroundColor = "#0C2340";
      saveColorPreference(color);
      break;
    case "KnicksBlue":
      backgroundElement.style.backgroundColor = "#006BB6";
      saveColorPreference(color);
      break;
    case "ThunderBlue":
      backgroundElement.style.backgroundColor = "#007AC1";
      saveColorPreference(color);
      break;
    case "MagicBlue":
      backgroundElement.style.backgroundColor = "#0077C0";
      saveColorPreference(color);
      break;
    case "Silver":
      backgroundElement.style.backgroundColor = "#C4CED4";
      saveColorPreference(color);
      break;

    default:
      backgroundElement.style.backgroundColor = "";
  }
}
//USER TRACKING SECTION FOR SAVED DATA--------
function saveColorPreference(color) {
  localStorage.setItem("userColorPreference", color);
}
function getUserColorPreference() {
  return localStorage.getItem("userColorPreference");
}
document.addEventListener("DOMContentLoaded", function () {
  const userColorPreference = getUserColorPreference();

  if (userColorPreference) {
    const backgroundElement = document.getElementById("backgroundElement");
    backgroundElement.style.backgroundColor = userColorPreference;
  }
});
//-------------------

function hoverEffect(hoverID, addedInfo) {
  const hoverElement = document.getElementById(hoverID);
  const additionalInfo = document.getElementById(addedInfo);

  hoverElement.addEventListener("click", function (event) {
    event.stopPropagation();

    if (additionalInfo.style.display === "block") {
      additionalInfo.style.display = "none";
    } else {
      additionalInfo.style.display = "block";
    }
  });

  document.addEventListener("click", function () {
    additionalInfo.style.display = "none";
  });

  additionalInfo.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}

hoverEffect("hoverElement1", "additionalInfo1");
hoverEffect("hoverElement2", "additionalInfo2");
hoverEffect("hoverElement3", "additionalInfo3");
