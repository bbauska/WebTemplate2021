function scrollNextSection() {
    console.log("texst")
    var section = document.getElementById("about");
    section.scrollIntoView({behavior: "smooth", block: "start"})
}