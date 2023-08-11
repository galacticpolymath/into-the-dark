import {format} from 'd3';

const perc = format(".0%");

export function setupScores (sim) {
    const scoreDiv = document.createElement('div');
    scoreDiv.setAttribute('id', 'scoreTable');
    document.getElementById('controls').appendChild(scoreDiv);

    const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)res\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const res = cookie ? JSON.parse(decodeURIComponent(cookie)) : []; // this should hold prev results

    let table = document.createElement('table');
    let headers = ['Trial Number', 'Avg Speed', 'Avg Alignment', 'Avg Attraction', 'Avg % In The Dark'];
    
    // header row
    let headerRow = document.createElement('tr');
    headers.forEach(header => {
        let th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    
    table.appendChild(headerRow);
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    // data rows
    if (res.length != 0) {
        for (let i = 0; i < res.length; i++) {
            let data = res[i];
            let row = document.createElement('tr');
            for(let j = 0; j < headers.length; j++) {
                let cell = document.createElement('td');
                if (j == headers.length - 1) {
                    cell.textContent = perc(+data[j]);}
                else {
                    cell.textContent = +data[j];
                }
                row.appendChild(cell);
            }
            tbody.appendChild(row);
        }
    }
    else {
        let row = document.createElement('tr');
        for(let j = 0; j < headers.length; j++) {
            let cell = document.createElement('td');
            cell.textContent = ' ';
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }

    scoreDiv.appendChild(table);

    // clear chart button
    const clearChart = document.createElement('div');
    clearChart.textContent = 'Clear results';
    clearChart.className = 'ph3 pv1 ba mv3';
    clearChart.style.cursor = 'pointer';
    clearChart.onclick = function() {
        document.cookie = "res=; Max-Age=-99999999;";
        document.cookie = "res=; Max-Age=1704085200; path=/;";
        sim.results = [];
        const tbody = document.getElementsByTagName('tbody')[0];
        tbody.innerHTML = '';
        let row = document.createElement('tr');
        for(let j = 0; j < headers.length; j++) {
            let cell = document.createElement('td');
            cell.textContent = ' ';
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    };
    scoreDiv.append(clearChart);
}

export function updateTable (res) {
    /*
     * res is an array of trial results [[1,2,3,4], [5,6,7,8]]
     */
    let tbody = document.getElementsByTagName('tbody')[0];
    const data = res[res.length - 1];

    if (res.length > 1) {
        let row = document.createElement('tr');
        for(let j = 0; j < 5; j++) {
            let cell = document.createElement('td');
            if (j == 4) {
                cell.textContent = perc(data[j]);}
            else {
                cell.textContent = data[j];
            }
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    else {
        const cells = document.getElementsByTagName('td');
        for(let j = 0; j < 5; j++) {
            if (j == 4) {
                cells[j].textContent = perc(data[j]);
            }
            else cells[j].textContent = data[j];
        }
    }
}