const urls = ["14.csv", "15.csv"]; // replace with your CSV file URLs
const promises = urls.map((url) =>
  fetch(url)
    .then((response) => response.text())
    .then((text) => {
      const data = text.split("\n").map((row) => {
        const [uniqueID, url, email, group, userDetailsDumpBlock] =
          row.split(",");
        return { uniqueID, url, email, group, userDetailsDumpBlock };
      });
      return data;
    })
);

Promise.all(promises).then((dataArray) => {
  // Merge all data arrays into one
  const data = dataArray.reduce((acc, curr) => acc.concat(curr), []);

  // Add event listener to search button
  document.getElementById("search-btn").addEventListener("click", () => {
    // Retrieve email value
    const email = document.getElementById("email").value;

    // Search for matching row
    const result = data.find((row) => row.email === email);

    // Display result
    const resultEl = document.getElementById("resultDiv");
    resultEl.innerHTML = result
      ? `<a class="anchor" target="blank" href=${result.url}> Click here to start assessment</a>`
      : "<p>No results found. Please recheck your email</p>";
    resultEl.classList.add("show");
    console.log(result.url);
  });
});
