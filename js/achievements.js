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
    
      const tableRows = document.querySelectorAll('#data-table tbody tr');
  
      tableRows.forEach(row => {
        const inGameId = row.cells[4].textContent.trim();
        const unlocked = dataMap.get(parseFloat(inGameId));
  
        if (unlocked !== undefined) {
          row.cells[5].textContent = unlocked; 
        } else {
          row.cells[5].textContent = 'N/A';
        }
      });
    } catch (error) {
      console.error('Error fetching or updating table:', error);
    }
}
  
document.addEventListener('DOMContentLoaded', updateColumnById);