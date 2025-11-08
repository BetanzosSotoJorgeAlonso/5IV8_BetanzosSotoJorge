// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    const fetchBtn = document.getElementById('btnSearch');
    fetchBtn.addEventListener('click', fetchStandings);
    
    // También permitir buscar con Enter
    const seasonInput = document.getElementById('season');
    seasonInput.addEventListener('keyup', function(event) {
        if (event.key === "Enter") {
            fetchStandings();
        }
    });
});

// Proxy CORS para evitar bloqueos
const corsProxy = 'https://api.allorigins.win/raw?url=';

async function fetchStandings() {
    const league = document.getElementById('league').value;
    const season = document.getElementById('season').value;
    const resultsDiv = document.getElementById('results');
    const btn = document.getElementById('btnSearch');

    btn.disabled = true;
    resultsDiv.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Cargando clasificaciones...</p>
        </div>
    `;

    try {
        const apiUrl = `https://site.api.espn.com/apis/v2/sports/soccer/${league}/standings?season=${season}`;
        const response = await fetch(`${corsProxy}${encodeURIComponent(apiUrl)}`);
        
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }

        const data = await response.json();
        displayStandings(data);
    } catch (error) {
        resultsDiv.innerHTML = `
            <div class="error">
                <h3>❌ Error</h3>
                <p>${error.message}</p>
                <p>Por favor, verifica la liga y temporada seleccionadas.</p>
            </div>
        `;
    } finally {
        btn.disabled = false;
    }
}

function displayStandings(data) {
    const resultsDiv = document.getElementById('results');
    
    if (!data.children || data.children.length === 0) {
        resultsDiv.innerHTML = '<div class="error"><p>No se encontraron datos de clasificación.</p></div>';
        return;
    }

    const standings = data.children[0].standings.entries;
    const leagueName = data.name || 'Liga';
    const season = data.season?.year || '';

    let html = `
        <div class="standings-container">
            <div class="league-header">
                <h2>${leagueName}</h2>
                <p>Temporada ${season}</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th class="center">Pos</th>
                        <th>Equipo</th>
                        <th class="center">PJ</th>
                        <th class="center">PG</th>
                        <th class="center">PE</th>
                        <th class="center">PP</th>
                        <th class="center">GF</th>
                        <th class="center">GC</th>
                        <th class="center">DG</th>
                        <th class="center">Pts</th>
                    </tr>
                </thead>
                <tbody>
    `;

    standings.forEach(team => {
        const stats = team.stats;
        html += `
            <tr>
                <td class="center position">${stats.find(s => s.name === 'rank')?.displayValue || '-'}</td>
                <td class="team-name">${team.team.displayName}</td>
                <td class="center">${stats.find(s => s.name === 'gamesPlayed')?.displayValue || '0'}</td>
                <td class="center">${stats.find(s => s.name === 'wins')?.displayValue || '0'}</td>
                <td class="center">${stats.find(s => s.name === 'ties')?.displayValue || '0'}</td>
                <td class="center">${stats.find(s => s.name === 'losses')?.displayValue || '0'}</td>
                <td class="center">${stats.find(s => s.name === 'pointsFor')?.displayValue || '0'}</td>
                <td class="center">${stats.find(s => s.name === 'pointsAgainst')?.displayValue || '0'}</td>
                <td class="center">${stats.find(s => s.name === 'pointDifferential')?.displayValue || '0'}</td>
                <td class="center"><strong>${stats.find(s => s.name === 'points')?.displayValue || '0'}</strong></td>
            </tr>
        `;
    });

    html += `
                </tbody>
            </table>
        </div>
    `;

    resultsDiv.innerHTML = html;
}