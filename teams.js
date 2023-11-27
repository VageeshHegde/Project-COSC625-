const url = "https://api-nba-v1.p.rapidapi.com/teams";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d99ba602e1msha1a92019d05c93ep175718jsn6cd0888135dc",
    "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
  },
};

async function teamsData() {
  try {
    const response = await fetch(url, options);

    const data = await response.json();
    const teamsResponse = data.response;
    const teamCode = data.code;
    const teamNames = teamsResponse.name;

    const selectDropdown = document.createElement("select");
    selectDropdown.id = "team";

    teamNames.forEach((name) => {
      teamCode.forEach((code) => {
        const option = document.createElement("option");
        option.value = code;
        option.text = name;
        selectDropdown.appendChild(option);
      });
    });

    const container = document.querySelector(".teamSelect");
    container.innerHTML = "";
    container.appendChild(selectDropdown);
    selectDropdown.addEventListener("change", function () {
      const selectedTeam = this.value;
      fetchDataForSelectedTeam(selectedTeam);
    });
  } catch (error) {
    console.error("Error fetching seasons:", error);
  }
}

async function fetchDataForSelectedTeam(team) {
  try {
    // Perform fetch based on the selected season value
    const response = await fetch(
      `https://api-nba-v1.p.rapidapi.com/teams?code=${team}`,
      options
    );

    const data = await response.json();
    const teamName = data.name;
    const teamNickname = data.nickname;
    const teamLogo = data.logo;

    // Do something with the fetched data based on the selected season
    // For example, update UI or display information
    console.log("Data for selected season:", data);
  } catch (error) {
    console.error("Error fetching data for the selected season:", error);
  }
}

seasonsData();
