let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
// You may move this JS to another file if you wish

//Step 2
errorBtns[0].onclick = function() {
    console.log("You've logged this!");
}
errorBtns[1].onclick = function() {
    console.error("You've made a mistake :(");
}
errorBtns[2].onclick = function() {
    console.count();
}
errorBtns[3].onclick = function() {
    console.warn("You have been warned.");
}
errorBtns[4].onclick = function() {
    console.assert(2+3==4, "2 + 3 doesn't equal 4 :(");
}
errorBtns[5].onclick = function() {
    console.clear();
}
errorBtns[6].onclick = function() {
    console.dir(self);
}
errorBtns[7].onclick = function() {
    console.dirxml(self);
}
errorBtns[8].onclick = function() {
    console.group("newGroup");
}
errorBtns[9].onclick = function() {
    console.groupEnd("newGroup");
}
errorBtns[10].onclick = function() {
    console.table(["This", "is", "a", "table", "in", "the", "console"]);
}
errorBtns[11].onclick = function() {
    console.time("newTimer");
}
errorBtns[12].onclick = function() {
    console.timeEnd("newTimer");
}
errorBtns[13].onclick = function() {
    function here() {
        function there() {
            function everywhere() {
                console.trace();
            }
            everywhere();
        }
        there();
    }
    here();
}
errorBtns[14].onclick = function() {
    const newError = new Error('GLOBAL ERROR');
    reportError(newError);
}

//Step 3
try {
    let sum = firstNum + secondNum;
    if (!sum) {
        throw new ReferenceError("Sum doesn't exist.");
    }
    console.log(sum);
} catch (err) {
    console.log(err.name);
    console.error("values trying to be accessed are local to different function");
} finally {
    console.log("This function is complete!");
}

//Step 4
class StupidError extends Error {
    constructor(message) {
        super(message);
        this.name = "StupidError";
    }
}

if (2 + 3 != 4) {
    throw new StupidError("2 + 3 doesn't equal 4 -_-");
}

//Step 5
window.addEventListener("error", () => {
    TrackJS.track('Testing TrackJS!');
    console.log("Global error here!");
});