async function updateColumnById() {
    const apiUrl = 'api/api.steampowered.com-achievements.json'; // local data becouse of CORS error we can only do that on backend with node.js or something else
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
  
      const apiData = await response.json();
  
      console.log(apiData);
      
      const dataMap = new Map(); 
      apiData.achievementpercentages.achievements.forEach(item => {
        dataMap.set(item.name, item.percent);
      });

      console.log(dataMap) 
        /*
      // Select all rows in the table body
      const tableRows = document.querySelectorAll('#data-table tbody tr');
  
      // Iterate over rows to update the "Quality" column
      tableRows.forEach(row => {
        const inGameId = row.cells[0].textContent.trim(); // Get ID from the first column
        const quality = dataMap.get(parseInt(inGameId, 10)); // Lookup quality using the ID
  
        if (quality !== undefined) {
          row.cells[2].textContent = quality; // Update the "Quality" column (third column)
        } else {
          row.cells[2].textContent = 'N/A'; // Fallback if no data found
        }
      });
      */
    } catch (error) {
      console.error('Error fetching or updating table:', error);
    }
}
  
document.addEventListener('DOMContentLoaded', updateColumnById);