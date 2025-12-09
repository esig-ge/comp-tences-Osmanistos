
// Generé par IA, modifier extensivement pour repondre a mes besoins
document.getElementById("searchInput").addEventListener("input",  async function () {

    const q = this.value;

    const response = await fetch('ajax_search') + encodeURIComponent(q);
    console.log(response.json());
    const data = await response.json();

    const list = document.getElementById("results");
    list.innerHTML = "";

    data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.name;
        list.appendChild(li);
    });
});
