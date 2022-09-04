function main(){
    backgroundShifter();
}

function backgroundShifter() {
    const pauseMS = 7500;
    const filePath = "../data/img";
    const shiftingElement = document.querySelector("#background");

    setInterval(() => {
        shiftingElement.classList.add("fadeOut");
        document.querySelector(".fadeOut").onanimationend = () => {
            shiftingElement.classList.remove("fadeOut");
            shiftingElement.style.backgroundImage = `url("${filePath}/mountain${getShiftID()}.jpg")`
            shiftingElement.classList.add("fadeIn");
            document.querySelector(".fadeIn").onanimationend = () => {
                shiftingElement.classList.remove("fadeIn");
            };
        }
    }, pauseMS);
};

function getShiftID() {
    if (getShiftID.backgroundID === undefined) {
        getShiftID.maxImages = 3;
        getShiftID.backgroundID = 1;
    }

    else
        getShiftID.backgroundID = ((getShiftID.backgroundID + 1) % getShiftID.maxImages) + 1

    return getShiftID.backgroundID;
}


document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "complete") main();
})