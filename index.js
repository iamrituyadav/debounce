function appendData() {
  let text = document.getElementById("inputText").value;
  let h1 = document.createElement("h1");
  h1.innerText = text;
  document.getElementById("container").append(h1);
}

function debounce(appendData, delay = 2000) {
  let timer;

  return function () {
    timer = setTimeout(() => {
      appendData();
    }, delay);
  };
}

const debouncedFunc = debounce(appendData, 3000);

document.getElementById("inputText").addEventListener("change", debouncedFunc);
