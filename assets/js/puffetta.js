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