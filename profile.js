function submitProfile() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const favoriteTeam = document.getElementById('favoriteTeam').value;
    const photo = document.getElementById('photo').files[0];

    // Display profile information
    const displayProfile = document.getElementById('displayProfile');
    displayProfile.innerHTML = `
        <h2>Profile Information</h2>
        <div style="display: flex; align-items: center;">
            <div style="flex: 1;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Age:</strong> ${age}</p>
                <p><strong>Favorite Team:</strong> ${favoriteTeam}</p>
            </div>
            <div style="margin-left: 20px;">
                <img src="${photo ? URL.createObjectURL(photo) : ''}" alt="Uploaded Photo" style="width: 120px; height: 120px;">
            </div>
        </div>
    `;
}

let body = document.querySelector("body");
let modeBtn = document.querySelector("#mode");
let currMode = "light";
let cont = document.querySelector(".container");

modeBtn.addEventListener("click", ()=>{
    if(currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        cont.classList.add("dark");
        body.classList.remove("light");
        cont.classList.remove("light");
    } else if(currMode === "dark"){
        currMode = "light";
        body.classList.add("light");
        cont.classList.add("light");
        body.classList.remove("dark");
        cont.classList.remove("dark");
        console.log("light mode");
    }
});
