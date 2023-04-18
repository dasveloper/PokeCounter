(function () {
  function init() {
    // Grab the button and input elements
    const addOneButton = document.getElementById("addOne");
    const addThreeButton = document.getElementById("addThree");
    const addFiveButton = document.getElementById("addFive");
    const counter = document.getElementById("counter");
    const close = document.getElementById("close");

    // Helper function to set input and storage to new count
    const setCounter = (count) => {
      counter.value = +count;
      window.electron.store.set("count", +count);
    };

    // Initialize counter from storage
    const count = window.electron.store.get("count") ?? 0;
    setCounter(count);

    // Add event handlers to increment buttons
    addOneButton.addEventListener("click", () =>
      setCounter((window.electron.store.get("count") ?? 0) + 1)
    );
    addThreeButton.addEventListener("click", () =>
      setCounter((window.electron.store.get("count") ?? 0) + 3)
    );
    addFiveButton.addEventListener("click", () =>
      setCounter((window.electron.store.get("count") ?? 0) + 5)
    );

    // Add event handlers to close button
    close.addEventListener("click", () => window.electron.closeWindow());

    // Add event handler for manually changing count
    counter.addEventListener("input", (e) => setCounter(e.target.value));
  }

  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      init();
    }
  };
})();
