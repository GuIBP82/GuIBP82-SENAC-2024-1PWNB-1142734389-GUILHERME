document.addEventListener('DOMContentLoaded', function() {
    carregarHallDaFama();
});

function showGroupStage() {
    const stageImage = document.getElementById('stage-image');
    stageImage.src = 'images/FaseDeGrupos.png';

    stageImage.onclick = null;
}

function showKnockoutStage() {
    const stages = [
        'images/oitavas.png',
        'images/quartas.png',
        'images/semi.png',
        'images/final.png',
        'images/campeão.png' 
    ];
    let currentStage = 0; 

    const stageImage = document.getElementById('stage-image');
    stageImage.src = stages[currentStage];

    stageImage.onclick = function() {
        currentStage = (currentStage + 1) % stages.length;
        this.src = stages[currentStage];
    };
}

function carregarHallDaFama() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const jogadoresSection = document.getElementById('hall-da-fama-jogadores');
            const timesSection = document.getElementById('hall-da-fama-times');
            const tecnicosSection = document.getElementById('hall-da-fama-tecnicos');
            let contadorJogadores = 1;
            let contadorTimes = 1;
            let contadorTecnicos = 1;

            data.jogadores.forEach(jogador => {
                const jogadorDiv = document.createElement('div');
                jogadorDiv.className = 'hall-item';

                jogadorDiv.innerHTML = `
                    <p>${contadorJogadores}º </p>
                    <img src="${jogador.foto}" alt="${jogador.nome}">
                    <h3>${jogador.nome}</h3>
                    <p>Nacionalidade: ${jogador.nacionalidade}</p>
                    <p>Partidas Jogadas: ${jogador.partidasjogadas}</p>
                    <p>Partidas Ganhas: ${jogador.partidasganhas}</p>
                    <p>Títulos: ${jogador.titulos}</p>
                    <p>Gols: ${jogador.gols}</p>
                    <p>Assistências: ${jogador.assistencias}</p>
                    <p>Gols Por Partida: ${jogador.GolsPorPartida}</p>
                    <a href="${jogador.melhoresMomentos}" target="_blank">Melhores Momentos</a>
                `;
                jogadoresSection.appendChild(jogadorDiv);
                contadorJogadores++;
            });

            data.times.forEach(time => {
                const timeDiv = document.createElement('div');
                timeDiv.className = 'hall-item';

                timeDiv.innerHTML = `
                    <p>${contadorTimes}º </p>
                    <img src="${time.foto}" alt="${time.nome}">
                    <h3>${time.nome}</h3>
                    <p>Nacionalidade: ${time.nacionalidade}</p>
                    <p>Partidas Jogadas: ${time.partidasjogadas}</p>
                    <p>Partidas Ganhas: ${time.partidasganhas}</p>
                    <p>Quantidade de Títulos: ${time.qtdChampions}</p>
                    <p>Anos de Títulos: ${time.championsAnos.join(', ')}</p>
                `;
                timesSection.appendChild(timeDiv);
                contadorTimes++;
            });
            
            data.tecnicos.forEach(tecnico => {
                const tecnicosDiv = document.createElement('div');
                tecnicosDiv.className = 'hall-item';

                tecnicosDiv.innerHTML = `
                    <p>${contadorTecnicos}º </p>
                    <img src="${tecnico.foto}" alt="${tecnico.nome}">
                    <h3>${tecnico.nome}</h3>
                    <p>Nacionalidade: ${tecnico.nacionalidade}</p>
                    <p>Partidas Jogadas: ${tecnico.partidasjogadas}</p>
                    <p>Partidas Ganhas: ${tecnico.partidasganhas}</p>
                    <p>Quantidade de Títulos: ${tecnico.qtdChampions}</p>
                `;
                tecnicosSection.appendChild(tecnicosDiv);
                contadorTecnicos++;
            });
        })
}
