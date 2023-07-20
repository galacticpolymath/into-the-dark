import {format} from 'd3';

export function setupScores () {
    const scoreDiv = document.createElement('div');
    scoreDiv.setAttribute('id', 'scoreTable');
    document.getElementById('controls').appendChild(scoreDiv);

    let table = document.createElement('table');
    let headers = ['Trial Number', 'Avg Speed Setting', 'Avg Alignment Setting', 'Avg Attraction Setting', 'Avg % Fish In The Dark'];
    
    let headerRow = document.createElement('tr');
    headers.forEach(header => {
        let th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    
    table.appendChild(headerRow);

    for(let i = 0; i < 5; i++) {
        let row = document.createElement('tr');
        for(let j = 0; j < headers.length; j++) {
            let cell = document.createElement('td');
            cell.textContent = ' ';
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    scoreDiv.appendChild(table);
}

export function updateTable (res) {
    const table = document.getElementById('scoreTable');
    res.sort((a, b) => b[4] - a[4]);
    const perc = format(".0%");

    let rows = table.getElementsByTagName('tr');
    for(let i = 0; i < Math.min(5, res.length); i++) {
        let cells = rows[i + 1].getElementsByTagName('td');
        for(let j = 0; j < res[i].length; j++) {
            if (j == 4) {
                cells[j].textContent = perc(res[i][j]);
            }
            else {cells[j].textContent = res[i][j];}
        }
    }
}