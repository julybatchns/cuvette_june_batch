async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error Fetching data:", error.message);
    throw error;
  }
}

fetchData("https://jsonplaceholder.typicode.com/pos")
  .then((data) => {
    console.log("Fetched Data", data);
  })
  .catch((error) => {
    console.error("Error in fetchData:", error.message);
  });
