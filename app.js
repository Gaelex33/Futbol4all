// Datos simulados para demostración
const data = {
    ligas: [
        {
            nombre: "La Liga",
            clasificacion: [
                { equipo: "Real Madrid", puntos: 80 },
                { equipo: "Barcelona", puntos: 78 },
                // Más equipos...
            ]
        },
        // Más ligas...
    ],
    equipos: [
        {
            nombre: "Real Madrid",
            plantilla: ["Jugador 1", "Jugador 2", "Jugador 3"],
            proximosPartidos: ["Partido 1", "Partido 2"]
        },
        // Más equipos...
    ],
    jugadores: [
        {
            nombre: "Jugador 1",
            equipo: "Real Madrid",
            estadisticas: {
                goles: 10,
                asistencias: 5,
                partidos: 20
            }
        },
        // Más jugadores...
    ]
};

document.getElementById('search-bar').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    const resultados = document.getElementById('resultados-busqueda');
    resultados.innerHTML = '';
    
    if (query) {
        // Buscar ligas
        const ligas = data.ligas.filter(liga => liga.nombre.toLowerCase().includes(query));
        ligas.forEach(liga => {
            const elemento = document.createElement('div');
            elemento.textContent = liga.nombre;
            elemento.onclick = () => mostrarDetalleLiga(liga);
            resultados.appendChild(elemento);
        });

        // Buscar equipos
        const equipos = data.equipos.filter(equipo => equipo.nombre.toLowerCase().includes(query));
        equipos.forEach(equipo => {
            const elemento = document.createElement('div');
            elemento.textContent = equipo.nombre;
            elemento.onclick = () => mostrarDetalleEquipo(equipo);
            resultados.appendChild(elemento);
        });

        // Buscar jugadores
        const jugadores = data.jugadores.filter(jugador => jugador.nombre.toLowerCase().includes(query));
        jugadores.forEach(jugador => {
            const elemento = document.createElement('div');
            elemento.textContent = jugador.nombre;
            elemento.onclick = () => mostrarDetalleJugador(jugador);
            resultados.appendChild(elemento);
        });
    }
});

function mostrarDetalleLiga(liga) {
    const detalle = document.getElementById('detalle');
    detalle.innerHTML = `<h2>${liga.nombre}</h2>`;
    const clasificacion = document.createElement('ul');
    liga.clasificacion.forEach(equipo => {
        const item = document.createElement('li');
        item.textContent = `${equipo.equipo} - ${equipo.puntos} puntos`;
        clasificacion.appendChild(item);
    });
    detalle.appendChild(clasificacion);
}

function mostrarDetalleEquipo(equipo) {
    const detalle = document.getElementById('detalle');
    detalle.innerHTML = `<h2>${equipo.nombre}</h2>`;
    const plantilla = document.createElement('ul');
    equipo.plantilla.forEach(jugador => {
        const item = document.createElement('li');
        item.textContent = jugador;
        plantilla.appendChild(item);
    });
    detalle.appendChild(plantilla);
    
    const proximosPartidos = document.createElement('ul');
    equipo.proximosPartidos.forEach(partido => {
        const item = document.createElement('li');
        item.textContent = partido;
        proximosPartidos.appendChild(item);
    });
    detalle.appendChild(proximosPartidos);
}

function mostrarDetalleJugador(jugador) {
    const detalle = document.getElementById('detalle');
    detalle.innerHTML = `<h2>${jugador.nombre}</h2>`;
    const estadisticas = document.createElement('ul');
    for (const [clave, valor] of Object.entries(jugador.estadisticas)) {
        const item = document.createElement('li');
        item.textContent = `${clave}: ${valor}`;
        estadisticas.appendChild(item);
    }
    detalle.appendChild(estadisticas);
}
