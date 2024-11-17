async function updateColumnById() {
    const apiUrl = 'api/api.steampowered.com-achievements.json'; // local data becouse of CORS error we can only do that on backend with node.js or something else 
    // https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=250900&format=json
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
  
      const apiData = await response.json();
      
      const dataMap = new Map(); 
      apiData.achievementpercentages.achievements.forEach(item => {
        dataMap.set(item.name, item.percent);
      });
    
      for (let i = 1; i <= 4; i++) {
        const table = document.getElementById(`table-${i}`);
        updateTable(table, dataMap);
      }
      
    } catch (error) {
      console.error('Error fetching or updating table:', error);
    }
}
  
function updateTable(table, dataMap){

    const rows = table.querySelectorAll('tbody tr');
  
    rows.forEach(row => {
        const inGameId = row.cells[4].textContent.trim();
        const unlocked = parseFloat(dataMap.get(inGameId)).toFixed(2);
  
        if (unlocked !== undefined) {
          row.cells[5].textContent = unlocked+"%"; 
        } else {
          row.cells[5].textContent = 'N/A';
        }
    });
}
document.addEventListener('DOMContentLoaded', updateColumnById);