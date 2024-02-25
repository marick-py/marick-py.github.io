fetch('assets/json/puffetta.json')
.then(response => response.json())
.then(jsonData => {
  const cascadeListContainer = document.getElementById('cascade-list-container');

  jsonData["benny_types"].forEach((text) => {
    const listItem = document.createElement('p');
    listItem.classList.add("benny-type")
    listItem.textContent = text;
    cascadeListContainer.appendChild(listItem);
  });

  const pluribennyTitle = document.getElementById("pluribenny-title");
  pluribennyTitle.textContent = jsonData["benny_types"].length + " SFUMATURE DI BENNY"
})
.catch(error => console.error('Error loading JSON:', error));

function expandDescription() {
    const description = document.getElementById("description");
    const banner_img = document.getElementById("banner-img");

    if (description.classList.contains("expand")) {
      description.style.maxHeight = "0px";
    } else {
      description.style.maxHeight = description.scrollHeight + "px";
    }
    description.classList.toggle("expand");
    banner_img.classList.toggle("expand");
}