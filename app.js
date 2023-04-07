// Load CSV data using fetch
fetch("data.csv")
  .then((response) => response.text())
  .then((text) => {
    // Parse CSV data into an array of objects
    const data = text.split("\n").map((row) => {
      const [uniqueID, url, email, group, userDetailsDumpBlock] =
        row.split(",");
      return { uniqueID, url, email, group, userDetailsDumpBlock };
    });

    // Add event listener to search button
    document.getElementById("search-btn").addEventListener("click", () => {
      // Retrieve email and group values
      const email = document.getElementById("email").value;
      // const group = document.getElementById("group").value;

      // Loop through array and search for matching row
      const result = data.find((row) => row.email === email);

      // Display result
      const resultEl = document.getElementById("resultDiv");
      resultEl.innerHTML = result
        ? `<a class="anchor" href=${result.url}> Click here to start assessment</a>`
        : "<p>No results found. Please recheck your email</p>";
      resultEl.classList.add("show");
      console.log(result.url);
    });
  });
