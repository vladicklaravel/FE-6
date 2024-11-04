const container = document.getElementById("user-container");
const loading = document.getElementById("loading");
const fetchButton = document.getElementById("fetch-button");

fetchButton.addEventListener("click", () => {
    fetchUser();
});

function fetchUser() {
    loading.style.display = "block";
    fetch(`https://randomuser.me/api/?results=1`)
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            displayUser(user);
            loading.style.display = "none";
        })
        .catch(error => {
            console.error("Помилка отримання даних:", error);
            loading.style.display = "none";
        });
}

function displayUser(user) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>Gender: ${user.gender}</p>
        <p>City: ${user.location.city}</p>
        <p>Postcode: ${user.location.postcode}</p>
        <p>Phone: ${user.cell}</p>
    `;
    container.appendChild(card);
}
