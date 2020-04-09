function toggleFunction(clickElementClass, toggleElementClass) {
    const clickElement = document.querySelector(`.${clickElementClass}`);
    const toggleElement = document.querySelector(`.${toggleElementClass}`);

    clickElement.addEventListener("click", () => {
        toggleElement.classList.toggle("hidden");
    });
}

toggleFunction("currentLocation", "currentLocationDiv");
toggleFunction("structureIdentification", "structureIdentificationDiv");
toggleFunction("member", "memberDiv");