// Add event listener to search button
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
  // Disable the search button
  searchBtn.disabled = true;
  searchBtn.innerHTML = "Loading...";

  // Fetch data from the URL
  fetch("https://assess-admin-backend.cyclic.app/assess/links")
    .then((response) => response.json())
    .then((data) => {
      // Map the data according to the sample structure
      const mappedData = data.map((item) => {
        const {
          userDetailsDump: { group1: group, block },
          uniqueID,
          url,
          email,
          failed: success,
          "Total No of questions": totalQ,
          "Total Time": time
        } = item;

        return { uniqueID, url, email, success, group, block, totalQ, time };
      });

      // Retrieve email and group values
      const email = document.getElementById("email").value.toLowerCase();

      // Filter the array for matching rows
      const results = mappedData.filter((row) => row.email.toLowerCase() === email);
      console.log(results);

      // Display results
      const resultEl = document.getElementById("resultDiv");
      if (results.length > 0) {
        const resultHTML = `
          <h3>Active assessments:</h3>
          <table>
            <tr>
              <th>Batch</th>
              <th>Assessment</th>
              <th>Total Questions</th>
              <th>Time Limit</th>
              <th>Assessment URL</th>
            </tr>
            ${results
              .map(
                (result) => `
                  <tr>
                    <td>${result.group}</td>
                    <td>${result.block}</td>
                    <td>${result.totalQ}</td>
                    <td>${result.time}</td>
                    <td><a class="anchor" target="_blank" href="${result.url}">Click here to start</a></td>
                  </tr>
                `
              )
              .join("")}
          </table>
        `;
        resultEl.innerHTML = resultHTML;

        // Log URLs to console
        const urls = results.map((result) => result.url);
        console.log("Matching URLs:", urls);
      } else {
        resultEl.innerHTML = "<p>No results found. Please recheck your email</p>";
      }
      resultEl.classList.add("show");

      // Enable the search button after processing
      searchBtn.disabled = false;
      searchBtn.innerHTML = "Search";
    })
    .catch((error) => {
      console.log("An error occurred:", error);
      // Enable the search button in case of an error
      searchBtn.disabled = false;
      searchBtn.innerHTML = "Search";
    });
});
