const url = "https://api-nba-v1.p.rapidapi.com/teams";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d99ba602e1msha1a92019d05c93ep175718jsn6cd0888135dc",
    "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
  },
};
let selectedSeason = "";
async function teamsData() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const teamsResponse = data.response;

    const selectDropdown = document.createElement("select");
    selectDropdown.id = "team";

    const seasonsArray = [
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
    ];
    const selectSeasonDropdown = document.createElement("select");
    selectSeasonDropdown.id = "seasons";

    const defaultOption0 = document.createElement("option");
    defaultOption0.value = "";
    defaultOption0.text = "Select a Season";
    defaultOption0.disabled = true;
    defaultOption0.selected = true;
    selectSeasonDropdown.appendChild(defaultOption0);

    seasonsArray.forEach((season) => {
      const seasonOption = document.createElement("option");
      seasonOption.value = season;
      seasonOption.text = season;
      selectSeasonDropdown.appendChild(seasonOption);
    });

    seasonsArray.forEach((season) => {
      const seasonOption = document.createElement("option");
      seasonOption.value = season;
      seasonOption.text = season;
      selectSeasonDropdown.appendChild(seasonOption);
    });

    const sContainer = document.querySelector(".seasons");
    sContainer.appendChild(selectSeasonDropdown);
    selectSeasonDropdown.addEventListener("change", function () {
      selectedSeason = this.value;
    });

    const defaultOption = document.createElement("option");
    defaultOption.value = ""; // Set an empty value or any appropriate value
    defaultOption.text = "Select a Team"; // Placeholder text
    defaultOption.disabled = true; // Make it disabled to prevent selection
    defaultOption.selected = true; // Set it as the default selected option
    selectDropdown.appendChild(defaultOption);

    for (let i = 0; i < teamsResponse.length; i++) {
      const teamID = teamsResponse[i].id;
      const teamName = teamsResponse[i].name;
      const teamsCode = teamsResponse[i].code;
      const option = document.createElement("option");
      option.value = teamsCode;
      option.text = teamName;
      option.dataset.teamName = teamName;
      option.dataset.teamID = teamID;
      selectDropdown.appendChild(option);
    }

    const container = document.querySelector(".team");

    container.appendChild(selectDropdown);
    let firstLoad = true;
    selectDropdown.addEventListener("change", function () {
      let selectedTeamCode = this.value;
      let selectedTeamID = this.options[this.selectedIndex].dataset.teamID;
      if (firstLoad) {
        try {
          // Fetch and display initial data
          fetchDataForSelectedTeam(selectedTeamCode, selectedTeamID);
          firstLoad = false;
        } catch (error) {
          console.error("Error loading data:", error);
        }
      } else {
        // On subsequent clicks, refresh the page to get new data
        location.reload();
      }
    });
    window.onbeforeunload = function () {
      return "New Data has been attempted to be accessed. Page will now refesh";
    };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function fetchDataForSelectedTeam(teamCode, teamID) {
  try {
    const response = await fetch(
      `https://api-nba-v1.p.rapidapi.com/teams?code=${teamCode}`,
      options
    );
    const data = await response.json();

    const statsResponse = await fetch(
      `https://api-nba-v1.p.rapidapi.com/teams/statistics?id=${teamID}&season=${selectedSeason}`,
      options
    );
    const statsInfo = await statsResponse.json();
    const statsData = statsInfo.response;

    const teamInfo = data.response;

    const container = document.querySelector(".teamData");
    const container2 = document.querySelector(".statsData[i]");

    container.innerHTML = "";

    for (let i = 0; i < teamInfo.length; i++) {
      const teamName = teamInfo[i].name;
      const teamLogo = teamInfo[i].logo;
      const nickName = teamInfo[i].nickname;

      const listItem = document.createElement("li");
      const image = document.createElement("img");
      const heading = document.createElement("h2");
      const subheading = document.createElement("h3");

      image.src = teamLogo;
      heading.textContent = `Team Name: ${teamName}`;
      subheading.textContent = `Team Nickname: ${nickName}`;

      listItem.appendChild(image);
      listItem.appendChild(heading);
      listItem.appendChild(subheading);

      container.appendChild(listItem);
    }
    const tableContainer = document.querySelector(".table");
    const table = document.createElement("table");
    const statsVariables = [
      "games",
      "fastBreakPoints",
      "pointInPaint",
      "biggestLead",
      "secondChancePoints",
      "pointsOffTurnover",
      "longestRun",
      "points",
      "fgm",
      "fga",
      "fgp",
      "ftm",
      "fta",
      "ftp",
      "tpm",
      "tpa",
      "tpp",
      "offReb",
      "defReb",
      "totReb",
      "assists",
      "pFouls",
      "steals",
      "turnovers",
      "blocks",
      "plusMinus",
    ];

    // Create table header (table row with header cells)
    const headerRow = document.createElement("tr");
    statsVariables.forEach((variable) => {
      const headerCell = document.createElement("th");
      headerCell.textContent = variable;
      headerRow.appendChild(headerCell);
    });
    table.appendChild(headerRow); // Append the header row to the table

    for (let i = 0; i < statsData.length; i++) {
      const row = document.createElement("tr");

      statsVariables.forEach((variable) => {
        const cell = document.createElement("td");
        cell.textContent = statsData[i][variable]; // Populate cell with data from statsData
        row.appendChild(cell);
      });

      table.appendChild(row); // Append each row to the table
    }

    // Append the table to the table container in the HTML
    tableContainer.appendChild(table);
  } catch (error) {
    console.error("Error fetching or processing data:", error);
    // Handle errors gracefully
    // Display an error message or handle the error as needed
  }
}

teamsData();
