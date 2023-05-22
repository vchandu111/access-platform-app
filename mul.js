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
      const email = document.getElementById("email").value.toLowerCase();

      // Filter the array for matching rows
      const results = data.filter((row) => row.email.toLowerCase() === email);

      // Display results
      const resultEl = document.getElementById("resultDiv");
      if (results.length > 0) {
        const resultHTML = `
          <h3>Active assessments:</h3>
          ${results
            .map(
              (result, index) =>
                `<p>Click here to start assessment <a class="anchor" target="blank" href=${result.url}> Link-${
                  index + 1
                }</a></p>`
            )
            .join("")}
        `;
        resultEl.innerHTML = resultHTML;

        // Log URLs to console
        const urls = results.map((result) => result.url);
        console.log("Matching URLs:", urls);
      } else {
        resultEl.innerHTML =
          "<p>No results found. Please recheck your email</p>";
      }
      resultEl.classList.add("show");
    });
  });
