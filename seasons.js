const url = "https://api-nba-v1.p.rapidapi.com/seasons";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d99ba602e1msha1a92019d05c93ep175718jsn6cd0888135dc",
    "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
  },
};

async function seasonsData() {
  try {
    const response = await fetch(url, options);

    const data = await response.json();
    const seasonsResponse = data.response;
    const selectDropdown = document.createElement("select");
    selectDropdown.id = "seasons";

    seasonsResponse.forEach((season) => {
      const option = document.createElement("option");
      option.value = season;
      option.text = season;
      selectDropdown.appendChild(option);
    });

    const container = document.querySelector(".seasons");
    container.innerHTML = "";
    container.appendChild(selectDropdown);
    selectDropdown.addEventListener("change", function () {
      const selectedSeason = this.value; // Get the selected season value

      // Perform action based on the selected value (e.g., fetch data)
      fetchDataForSelectedSeason(selectedSeason);
    });
  } catch (error) {
    console.error("Error fetching seasons:", error);
  }
}

async function fetchDataForSelectedSeason(season) {
  try {
    // Perform fetch based on the selected season value
    const response = await fetch(
      `https://api-nba-v1.p.rapidapi.com/games?season=${season}`,
      options
    );
    const data = await response.json();

    // Do something with the fetched data based on the selected season
    // For example, update UI or display information
    console.log("Data for selected season:", data);
  } catch (error) {
    console.error("Error fetching data for the selected season:", error);
  }
}

// Call the async function to fetch seasons and create the dropdown
//fetchSeasons();

seasonsData();
