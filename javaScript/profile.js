function submitProfile() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const favoriteTeam = document.getElementById('favoriteTeam').value;
    const photo = document.getElementById('photo').files[0];

    // Display profile information
    const displayProfile = document.getElementById('displayProfile');
    displayProfile.innerHTML = `
        <h2>Profile Information</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Favorite Team:</strong> ${favoriteTeam}</p>
        <p><strong>Photo:</strong> ${photo ? 'Uploaded' : 'Not uploaded'}</p>
    `;
}
