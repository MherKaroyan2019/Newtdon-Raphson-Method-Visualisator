const parser = math.parser();
let button = document.getElementsByClassName("initial_data")[0];
let inputs = document.getElementsByClassName("inputs")[0].getElementsByTagName("input");

button.addEventListener("click", function() {
    func = inputs[0].value;
    start = inputs[1].value;
    end = inputs[2].value;
    step = inputs[3].value;

    localStorage.setItem("function", func);
    localStorage.setItem("start", start);
    localStorage.setItem("end", end);
    localStorage.setItem("step", step);

    window.location.href = "/"
})