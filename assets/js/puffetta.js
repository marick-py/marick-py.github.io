function expandDescription() {
    const description = document.getElementById("description");
    const banner_img = document.getElementById("banner-img");

    if (description.classList.contains("expand")) {
      description.style.maxHeight = "0px;";
    } else {
      description.style.maxHeight = description.scrollHeight + "px";
    }
    description.classList.toggle("expand");
    banner_img.classList.toggle("expand");
}

const benny_type_input = document.getElementById('benny-type-input');
const benny_types_container = document.getElementById("cascade-list-container");

const inputHandler = function(e) {
    benny_types_container.childNodes.forEach((node)=>{
        if (node.textContent.toLowerCase().includes(e.target.value.toLowerCase()) || (e.target.value.length < 1)) {
            node.classList.remove("hidden");
        } else {
            node.classList.add("hidden");
        }
    })
}
benny_type_input.addEventListener('input', inputHandler);
benny_type_input.addEventListener('propertychange', inputHandler);
