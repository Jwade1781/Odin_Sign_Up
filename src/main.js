function main(){
    backgroundShifter();
}

function backgroundShifter() {
    const pauseMS = 5000;
    const filePath = "../data/img";
    const shiftingElement = document.querySelector("#leftContainer");

    setInterval(() => {
        shiftingElement.style.backgroundImage = `url("${filePath}/mountain${getShiftID()}.jpg")`
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