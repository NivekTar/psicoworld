let usuarios_conectados = 0;
let UsuariosJuego = [];
let Esperando = [];
let Correctos = [];
let Pregunta = [];
let Salientes = [];
let Orden = [];
let TurnoActual = 0;
let Contrincante = 0;
let Parte_Discutida = "";
let Permitir = false;
let MostrarEmpieza = false;
let OrdenEscogido = false;
let EnviarDatosBattle = false;
let intento = 1;
let Modificar = false;
let Cerebro = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
    "10": 0,
    "11": 0,
    "12": 0,
    "13": 0,
    "14": 0,
    "15": 0,
    "16": 0,
    "17": 0
};

let Preguntas = [["El acto que una persona tiene y puede ser estudiado, abordado objetivamente y registrado por la psicología científica.", "La conducta", "La mente", "El lenguaje", "Los gustos"],
["¿Quién fue el fundador de la psicología como ciencia?", "Wilhelm Wundt", "Sigmund Freud", "Carl Rogers", "Carl Jung"],
["Mencione tres campos de acción de la psicología", "Psicología del desarrollo, psicología clínica, psicología experimental", "Psicología industrial, psiquiatría, psicología terapéutica", "Psicoterapia, psicología de la ciencia, psicología de la consejería", "Psicología mental, psicología conductual, psicología superficial"],
["Estudia la forma en la que la gente se influye en el individuo: ¿Que campo de acción es?", "Psicología social", "Psicología clínica", "Psicología organizacional", "Psicología experimental"],
["¿En qué año fue fundado el primer laboratorio de psicología?", "1879", "1890", "1867", "1900"],
["¿Cuál es la metodología de investigación que permite recolectar información de experiencias y percepciones de los participantes?", "Cualitativa", "Correlacional", "Investigación básica", "Cuantitativa"],
["¿Cuántas metodologías de investigación hay?", "3. Cualitativa, cuantitativa y mixta", "3. Aplicada, básica y mixta", "3. Cuantitativa, aplicada y básica", "2. Cualitativa y cuantitativa"],
["¿Cuál es la diferencia entre método de investigación cualitativo y cuantitativo?", "Cuantitativa se encarga de las estadísticas y número, mientras que la cualitativa se emplean significados y palabras.", "Cualitativo se ocupa de los números y estadísticas de la investigación, cuantitativo de describir.", "Significan lo mismo", " Cualitativa explica cómo debemos usar la investigación por parte de descripción, cuantitativa igual"],
["¿Cuál es el nombre del método de investigación que mientras un fenómeno aumenta el otro disminuye? ", "Correlacional", "Investigación Acción Participativa", "Etnográfico", "Observación"],
["Existe una cédula en nuestro cuerpo la cual es capaz de recibir y controlar toda la información sensorial del mundo exterior. Sin ellas, seríamos incapaces de realizar las actividades más cotidianas. Estas son", "Células nerviosas", "Células adiposas", "Células epiteliales", "Células óseas"],
["Todos los seres humanos estamos controlados por sustancias químicas llamadas neurotransmisores. De estas existen decenas y cada una controla distintas funciones del cuerpo humano. ¿Cuál es el nombre de la señal química que controla las funciones del sueño, aprendizaje y memoria?", "Serotonina", "Dopamina", "Glutamato", "Glicina"],
["¿El movimiento aparente es?", "Ilusión que ocurre cuando se perciben objetos en movimiento cuando en realidad están estáticos.", "Ilusión producida por una rápida serie de imágenes.", "Desplazamiento físico de un objeto de una posición a otra.", "Todas son falsas"],
["¿En dónde se encuentran los fotorreceptores?", "Fóvea", "Retina", "Córnea", "Iris"],
["¿Cuáles son los receptores de los ojos?", "Conos bastones", "Córnea iris", "Cristalino retina", "Fóvea punto ciego"],
["¿Cuál es la neurona que recogen mensajes de los órganos sensoriales?", "Neurona aferente", "Neurona eferente", "Neurona de asociación", "Neurona eferente y de asociación"],
["¿La teoría  de la visión cromática sostiene que la retina contiene 3 tipos de receptores del color cuáles son?", "Rojo, azul, verde", "Morado rosado amarillo", "Negro blanco naranja", "Café gris fucsia"],
["Teniendo en cuenta los elementos del condicionamiento clásico, ¿Qué se necesita para que una respuesta incondicionada se convierta en una respuesta condicionada?", "Se necesita un emparejamiento repetido entre un estímulo incondicionado con una señal", "Un emparejamiento entre una respuesta incondicionada con una condicionada", "Una RI no se pueda convertir en R. Condicionada", "Se necesita un reforzador positivo"],
["¿Cuál es la parte del cerebro que se encarga de la alimentación?.¿Qué sucede al estimular o eliminar sus regiones?", "El hipotálamo, al estimular se empieza a comer y al eliminar dejan de alimentarse", "El tálamo, al eliminar su región se deja de comer y al estimular se come", "El tallo cerebral, al eliminar su región se deja de comer y al estimularla come", "La amígdala, al estimular se empieza a comer y al eliminar dejan de alimentarse"],
["¿De qué parte del cerebro proviene la motivación?", "Aún no se ha descubierto", "Lóbulo occipital", "Lóbulo frontal", "Lóbulo parietal"],
["En qué etapa se encuentra un niño entre los 2 y 7 años que presenta dicha características: es capaz de usar las representaciones mentales, tiene pensamiento egocéntrico, son engañados fácilmente por las apariencias", "Etapa preoperacional", "Etapa de las operaciones concretas", "Etapa de las operaciones formales", "Etapa de la niñez"],
["¿Cuál es el que hace que los adolescentes sientan que constantemente los juzgan y los observan?", "Audiencia imaginaria", "Fabula personal", "Desarrollo de personalidad", "Crisis de la madurez"],
["De acuerdo a la teoría de los rasgos de la personalidad, ¿Cuántos rasgos de la personalidad existen?", "5: extroversión, afabilidad,escrupulosidad, estabilidad emocional y cultura", "3: Cultura, estabilidad emocional y afabilidad", "3: Ello yo y super yo", "Inconsciente personal, inconsciente colectivo"],
["¿Cómo se le llaman los dos términos empleados por Freud, cuando el niño o niña se vuelve celoso de sus padres?", "Complejo de edipo en los hombres, Complejo de Electra en mujeres", "Complejo de edipo en las mujeres, complejo de Electra en los hombres", "Latencia en hombres, Genital en mujeres", "Inconsciente en hombres, precosconsciente en mujeres"],
["Las personas que pueden tener problemas para prestar atención, controlar conductas impulsivas  o pueden ser demasiado activos.", "TDAH", "Ansiedad", "Depresión", "Trastorno obsesivo-compulsivo"],
["Según la psicología social se dice qué hay una teoría que sostiene que las personas tratan de entenderse haciendo juicios acerca de las causas de la conducta. Que nombre lleva esa teoría:", "Teoría de la atribución", "Teoría del entendimiento", "Teoría de la gran persona", "Teoría de la frustración-agresión"],
["En Colombia cuando aún no habían psicológicos ¿Quiénes aplicaban los tests que utilizaban para medir la inteligencia?", "Médicos", "Matemáticos", "Profesores de medicina y matemáticas", "Mercedes Rodrigo"]
];


let PreguntaEscogida = false;
let PreguntaIndex = -1;


//socket.id, color, puntuacion, [partes]
let Jugadores = {
    "Player1": [],
    "Player2": [],
    "Player3": [],
    "Player4": []
};

let Adyacencias = {
    "1": ["2", "6", "7", "10", "11"],
    "2": ["1", "6", "3"],
    "3": ["2", "4", "6"],
    "4": ["3", "5", "6", "15"],
    "5": ["4", "15", "16"],
    "6": ["1", "2", "3", "4", "7", "15"],
    "7": ["1", "6", "8", "9", "10"],
    "8": ["7", "9", "10", "14"],
    "9": ["7", "8", "9", "14"],
    "10": ["7", "8", "11", "13"],
    "11": ["1", "10", "13", "12"],
    "12": ["11", "13", "17"],
    "13": ["8", "10", "11", "12", "14", "17"],
    "14": ["9", "13", "15", "17"],
    "15": ["4", "5", "6", "7", "14", "16", "17"],
    "16": ["5", "15", "17"],
    "17": ["13", "14", "15", "16"]
}

let Partes_Disponibles = 17;
let Jugando = 4;
let Incorrectos = 0;

module.exports = function (io, app) {
    io.on("connection", (socket) => {
        console.log("Nuevo usuario conectado " + socket.id);
        usuarios_conectados++;
        io.emit("actualizar", usuarios_conectados);
        if (UsuariosJuego.length < 4) {
            UsuariosJuego.push(socket.id);
        }
        else {
            Esperando.push(socket.id);
        }
        console.log("Arreglo: " + UsuariosJuego)

        /* ------------------------------------------------------ */

        socket.on("Empezar", function () {
            /* Configuración Inicial */
            ConfiguracionInicial();
            /* Llenado de jugadores */
            Llenado();
            for (let i = 0; i < UsuariosJuego.length; i++) {
                io.to(UsuariosJuego[i]).emit('CambiarAJuego', UsuariosJuego);
            }
            console.log("Configuracion Inicial: " + Jugadores);
            io.emit("ActPuntaje", Jugadores);
            for (let key in Jugadores) {
                io.to(Jugadores[key][0]).emit('Marco', Jugadores[key][1]);
            }
            for (let key in Jugadores) {
                io.to(Jugadores[key][0]).emit('ActualizarMapa', Cerebro);
            }
        })

        socket.on("AJugar", function () {
            /* Enviar las partes disponibles al html */
            if(!MostrarEmpieza){
                console.log("Empieza el Juego");
                MostrarEmpieza = true;
            }
            io.to(socket.id).emit('SetPartes', Partes_Disponibles);
        })

        Object.size = function (obj) {
            var size = 0,
                key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        };

        socket.on("PasoSiguiente", function () {
            if((Preguntas.length-Salientes.length) == 0){
                console.log("Se acabaron las preguntas");
                //Buscar el jugador de mas puntaje
                let Mayor = 0;
                let Name = "";
                for(let key in Jugadores){
                    if(Jugadores[key][2] > Mayor){
                        Mayor = Jugadores[key][2];
                        Name = key;
                    }
                }
                io.to(socket.id).emit('GameOver', Name); 
            }
            if (Partes_Disponibles > 0 && Preguntas.length > 0) {
                Correctos = [];
                
                /*Escoger una pregunta aleatoria*/

                if (!PreguntaEscogida) {
                    console.log("Quedan " + Partes_Disponibles + " partes");
                    io.to(socket.id).emit('SetPartes', Partes_Disponibles);
                    let Pasar = false;
                    while(!Pasar){
                        PreguntaIndex = getRandomArbitrary(0, Preguntas.length - 1);
                        Pasar = true;
                        for (let i = 0; i < Salientes.length; i++) {
                            if(PreguntaIndex == Salientes[i]){
                                Pasar = false;
                            }
                        }
                    }
                    Pregunta = Preguntas[PreguntaIndex];
                    Salientes.push(PreguntaIndex);
                    PreguntaEscogida = true;
                }

                Incorrectos = 0;
                Permitir = true;
                io.to(socket.id).emit('Pregunta', Pregunta);
            }
            else if (Partes_Disponibles === 0 && (Preguntas.length-Salientes.length) > 0){
                if(!OrdenEscogido){
                    escogerOrden();
                    OrdenEscogido = true;
                    console.log("Inicia la Batalla");
                    console.log("Orden escogido: "+Orden);
                    Jugando = 2;
                }
                if(!EnviarDatosBattle){
                    console.log("Quedan " + Partes_Disponibles + " partes");
                    io.to(socket.id).emit('SetPartes', Partes_Disponibles);
                    //Lista de las partes que se van a activar
                    
                    //Turno: "Player1",
                    //Partes: [],
                    
                    Correctos = [];

                    //console.clear();
                    console.log("\nEtapa Battle");

                    let Diccionario = {
                        "Turno": Orden[TurnoActual],
                        "Partes": [],
                        "Dueños": []
                    }

                    for (let part in Cerebro) {
                        
                        if (Cerebro[part] === Diccionario["Turno"]) {
                            
                            for (let i = 0; i < Adyacencias[part].length; i++) {
        
                                if ((!(Adyacencias[part][i] in Diccionario["Partes"])) && (Cerebro[Adyacencias[part][i]] != 0 && Cerebro[Adyacencias[part][i]] != Diccionario["Turno"])) {
                                    let poner = true;
                                    
                                    for (let j = 0; j < Diccionario["Partes"].length && poner; j++) {
                                        if (Diccionario["Partes"][j] == Adyacencias[part][i]) {
                                            poner = false;
                                        }
                                    }
                                    if (poner) {
                                        Diccionario["Partes"].push(Adyacencias[part][i]);
                                        Diccionario["Dueños"].push(Cerebro[Adyacencias[part][i]]);   
                                    }
                                }
                            }
                        }
                    }
                    console.log("\nPosibles ataques: " + Diccionario["Partes"]);
                    console.log("\nDueños de partes: " + Diccionario["Dueños"]);

                    io.to(Jugadores[Diccionario["Turno"]][0]).emit('EscogerBattle', Diccionario);
                    EnviarDatosBattle = true;
                }   
            }
        })

        socket.on("BattleContra", function (parte_discutir) {
            console.log("\nPelea de "+Orden[TurnoActual]+" contra "+Cerebro[parte_discutir]+" por la parte "+parte_discutir);
            Parte_Discutida = parte_discutir;
            if (!PreguntaEscogida) {
                console.log("Cantidad Preguntas Restantes: "+(Preguntas.length-Salientes.length));
                let Pasar = false;
                while(!Pasar){
                    PreguntaIndex = getRandomArbitrary(0, Preguntas.length - 1);
                    Pasar = true;
                    for (let i = 0; i < Salientes.length; i++) {
                        if(PreguntaIndex == Salientes[i]){
                            Pasar = false;
                        }
                    }
                }
                Pregunta = Preguntas[PreguntaIndex];
                Salientes.push(PreguntaIndex);
                PreguntaEscogida = true;
            }
            if(Cerebro[parte_discutir] == "Player1"){
                Contrincante = 0;
            }
            else if(Cerebro[parte_discutir]== "Player2"){
                Contrincante = 1;
            }
            else if(Cerebro[parte_discutir]== "Player3"){
                Contrincante = 2;
            }
            else if(Cerebro[parte_discutir]== "Player4"){
                Contrincante = 3;
            }
            Incorrectos = 0;
            Permitir = true;
            io.to(Jugadores[Orden[TurnoActual]][0]).emit('Pregunta', Pregunta);
            io.to(Jugadores[Cerebro[parte_discutir]][0]).emit('Pregunta', Pregunta);
            Modificar = true;
        })

        socket.on("Round2", function () {
            if(intento == 1 && Modificar){
                Modificar = false;
                //console.log("Intento 1");
                let Esta = false;
                for (let i = 0; i < Correctos.length; i++) {
                    if(Correctos[i] == Orden[TurnoActual]){
                        Esta = true;
                    }
                }
                //console.log("Invocador es "+Esta);
                let Esta2 = false;
                for (let i = 0; i < Correctos.length; i++) {
                    //console.log("- "+Correctos[i]+" - "+Orden[Contrincante])
                    if(Correctos[i] == Orden[Contrincante]){
                        Esta2 = true;
                    }
                }
                //console.log("Destinatario es "+Esta2);
                if(Esta && Esta2){
                    console.log("Empate");
                    Jugadores[Orden[TurnoActual]][2] += 100;
                    Jugadores[Orden[Contrincante]][2] += 100;
                    for (let key in Jugadores) {
                        io.to(Jugadores[key][0]).emit('ActualizarMapa', Cerebro);
                    }
                    io.emit("ActPuntaje", Jugadores);
                    EnviarDatosBattle = false;
                    console.log("DONDE ANDAS JUANCARLOS")
                    io.to(Jugadores[Orden[TurnoActual]][0]).emit('FinalizarPregunta2', 0);
                    io.to(Jugadores[Cerebro[Parte_Discutida]][0]).emit('FinalizarPregunta2', 0);
                    TurnoActual += 1;
                }
                else if((!Esta) && Esta2){
                    console.log("Se equivocó");
                    Jugadores[Orden[TurnoActual]][2] -= 100;
                    Jugadores[Orden[Contrincante]][2] += 100;
                    
                    for (let key in Jugadores) {
                        io.to(Jugadores[key][0]).emit('ActualizarMapa', Cerebro);
                    }
                    io.emit("ActPuntaje", Jugadores);
                    console.log("Se ejecuta en en NO y SI")
                    EnviarDatosBattle = false;
                    io.to(Jugadores[Orden[TurnoActual]][0]).emit('FinalizarPregunta2', 0);
                    io.to(Jugadores[Cerebro[Parte_Discutida]][0]).emit('FinalizarPregunta2', 0);
                    TurnoActual += 1;
                }
                else if(Esta && (!Esta2)){
                    console.log("Pasa al round 2");
                    if (!PreguntaEscogida) {
                        console.log("Cantidad Preguntas Restantes: "+(Preguntas.length-Salientes.length));
                        
                        let Pasar = false;
                        while(!Pasar){
                            PreguntaIndex = getRandomArbitrary(0, Preguntas.length - 1);
                            Pasar = true;
                            for (let i = 0; i < Salientes.length; i++) {
                                if(PreguntaIndex == Salientes[i]){
                                    Pasar = false;
                                }
                            }
                        }
                        
                        Pregunta = Preguntas[PreguntaIndex];
                        Salientes.push(PreguntaIndex);
                        PreguntaEscogida = true;
                    }
                    console.log("Retador: "+Orden[TurnoActual])
                    console.log("Victima: "+Cerebro[Parte_Discutida])
                    console.log("Pregunta: "+Pregunta);
                    io.to(Jugadores[Orden[TurnoActual]][0]).emit('Pregunta', Pregunta);
                    io.to(Jugadores[Cerebro[Parte_Discutida]][0]).emit('Pregunta', Pregunta);
                    Correctos = [];
                    Incorrectos = 0;
                    intento+=1;
                    Modificar = true;
                }
                else{
                    console.log("Elsito")
                    EnviarDatosBattle = false;
                    io.to(Jugadores[Orden[TurnoActual]][0]).emit('FinalizarPregunta2', 0);
                    io.to(Jugadores[Cerebro[Parte_Discutida]][0]).emit('FinalizarPregunta2', 0);
                    TurnoActual += 1;
                }
            }
            else if(intento == 2){
                let Esta = false;
                console.log(Correctos);
                for (let i = 0; i < Correctos.length; i++) {
                    if(Correctos[i] == Orden[TurnoActual]){
                        Esta = true;
                    }
                }
                let Esta2 = false;
                for (let i = 0; i < Correctos.length; i++) {
                    if(Correctos[i] == Orden[Contrincante]){
                        Esta2 = true;
                    }
                }
                console.log("-"+Esta+"-"+Esta2);
                if(Esta && Esta2){
                    console.log("Empate en segunda ronda");
                    Jugadores[Orden[TurnoActual]][2] += 100;
                    Jugadores[Orden[Contrincante]][2] += 100;
                    intento=1;
                    for (let key in Jugadores) {
                        io.to(Jugadores[key][0]).emit('ActualizarMapa', Cerebro);
                    }
                    io.emit("ActPuntaje", Jugadores);
                    EnviarDatosBattle = false;
                    console.log("EH AVE MARIA")
                    io.to(Jugadores[Orden[TurnoActual]][0]).emit('FinalizarPregunta2', 0);
                    io.to(Jugadores[Cerebro[Parte_Discutida]][0]).emit('FinalizarPregunta2', 0);
                    TurnoActual += 1;
                }
                else if((!Esta) && Esta2){
                    console.log("Se equivocó en segunda ronda")
                    Jugadores[Orden[TurnoActual]][2] -= 100;
                    Jugadores[Orden[Contrincante]][2] += 100;
                    intento=1;
                    for (let key in Jugadores) {
                        io.to(Jugadores[key][0]).emit('ActualizarMapa', Cerebro);
                    }
                    io.emit("ActPuntaje", Jugadores);
                    EnviarDatosBattle = false;
                    console.log("ALELUYA AL CRISTO")
                    io.to(Jugadores[Orden[TurnoActual]][0]).emit('FinalizarPregunta2', 0);
                    io.to(Jugadores[Cerebro[Parte_Discutida]][0]).emit('FinalizarPregunta2', 0);
                    TurnoActual += 1;
                }
                else if(Esta && (!Esta2)){
                    console.log("Toma la parte: "+Parte_Discutida);
                    if(Parte_Discutida == "2" || Parte_Discutida == "5" || Parte_Discutida == "8" || Parte_Discutida == "12"){
                        console.log("Destruyendo al otro jugador")
                        for(let key in Cerebro){
                            if(Cerebro[key] == Jugadores[Orden[Contrincante]]){
                                Cerebro[key] = Jugadores[Orden[TurnoActual]];
                            }
                        }
                        Jugadores[Orden[TurnoActual]][2] += Jugadores[Orden[Contrincante]][2];
                        Jugadores[Orden[Contrincante]][2] = 0;
                    }
                    else{
                        Cerebro[Parte_Discutida] = Orden[TurnoActual];
                        for (let i = 0; i < Jugadores[Orden[Contrincante]][3].length; i++) {
                            if (Jugadores[Orden[Contrincante]][3][i] == Parte_Discutida){
                                Jugadores[Orden[Contrincante]][3].splice(i,i);
                            }
                        }
                        Jugadores[Orden[TurnoActual]][3].push(Parte_Discutida);
                        Jugadores[Orden[TurnoActual]][2] += 200;
                        Jugadores[Orden[Contrincante]][2] -= 200;
                    }
                    Correctos = [];
                    Incorrectos = 0;
                    intento=1;
                    for (let key in Jugadores) {
                        io.to(Jugadores[key][0]).emit('ActualizarMapa', Cerebro);
                    }
                    io.emit("ActPuntaje", Jugadores);
                    EnviarDatosBattle = false;
                    io.to(Jugadores[Orden[TurnoActual]][0]).emit('FinalizarPregunta', 0);
                    io.to(Jugadores[Cerebro[Parte_Discutida]][0]).emit('FinalizarPregunta', 0);
                    TurnoActual += 1;
                }
                /*
                else{
                    EnviarDatosBattle = false;
                    intento=1;
                    console.log("LA SANGRE DE CRISTO TIENE PODER")
                    io.to(Jugadores[Orden[TurnoActual]][0]).emit('FinalizarPregunta2', 0);
                    io.to(Jugadores[Cerebro[Parte_Discutida]][0]).emit('FinalizarPregunta2', 0);
                    TurnoActual += 1;
                }*/

            }
            //Actualizar mapa y puntuaciones
            if(TurnoActual==4){
                TurnoActual=1;
            }
        })

        socket.on("Correcta", function () {
            if (Jugadores.Player1[0] === socket.id) {
                Correctos.push("Player1");
            }
            else if (Jugadores.Player2[0] === socket.id) {
                Correctos.push("Player2");
            }
            else if (Jugadores.Player3[0] === socket.id) {
                Correctos.push("Player3");
            }
            else if (Jugadores.Player4[0] === socket.id) {
                Correctos.push("Player4");
            }
            console.log("Correctos: " + Correctos);
            console.log("Respuestas: " + (Correctos.length + Incorrectos))
            if (Correctos.length + Incorrectos === Jugando) {
                console.log("Han contestado todos");
                Pregunta = [];
                PreguntaEscogida = false;
                for (let i = 0; i < Object.size(Jugadores); i++) {
                    io.to(UsuariosJuego[i]).emit('FinalizarPregunta', 0);
                }
            }
        })

        socket.on("Incorrecta", function () {
            Incorrectos += 1;
            console.log("Incorrectos: " + Incorrectos)
            console.log("Respuestas: " + (Correctos.length + Incorrectos))
            if ((Correctos.length + Incorrectos) === Jugando) {
                console.log("Han contestado todos");
                Pregunta = [];
                PreguntaEscogida = false;
                for (let i = 0; i < Object.size(Jugadores); i++) {
                    io.to(UsuariosJuego[i]).emit('FinalizarPregunta', 0);
                }
            }
        })

        socket.on("DarParte", function () {
            if (!Permitir) {
                console.log();
            }
            else {
                let Cant = 0;
                console.log();
                console.log("---- DAR PARTE ---\nCorrectos: " + Correctos.length + "\nCantidad procesada:" + Cant);
                while (Correctos.length > 0 && Cant < 2 && Partes_Disponibles > 0) {
                    /*Parte escogida aleatoriamente*/
                    let Escogido = false;
                    while (!Escogido) {
                        let Permitidos = [];
                        let player = 0;
                        /*Buscar el player ganador*/
                        for (let key in Jugadores) {
                            console.log(key + " - " + Correctos[0]);
                            if (key === Correctos[0]) {
                                player = key;
                                console.log("Player Ganador: " + player);
                                /* Buscar las partes que ya tiene */
                                Permitidos = [];
                                for (let part in Cerebro) {
                                    if (Cerebro[part] === player) {
                                        for (let i = 0; i < Adyacencias[part].length; i++) {
                                            if ((!(Adyacencias[part][i] in Permitidos)) && (Cerebro[Adyacencias[part][i]] == 0)) {
                                                let poner = true;
                                                for (let j = 0; j < Permitidos.length && poner; j++) {
                                                    if (Permitidos[j] == Adyacencias[part][i]) {
                                                        poner = false;
                                                    }
                                                }
                                                if (poner) {
                                                    console.log("Poner " + Adyacencias[part][i] + " en " + Permitidos);
                                                    Permitidos.push(Adyacencias[part][i]);
                                                    console.log("Permitidos Actualizado: " + Permitidos);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (Permitidos.length > 0) {
                            console.log("Jugador: " + player);
                            console.log("Permitidos: " + Permitidos);
                            let Aleatorio = getRandomArbitrary(0, Permitidos.length - 1);
                            Cerebro[Permitidos[Aleatorio]] = player;
                            Jugadores[player][3].push(Permitidos[Aleatorio]);
                            Jugadores[player][2] += 200;
                            Partes_Disponibles -= 1;
                            console.log(player + " ha ganado la parte " + Permitidos[Aleatorio] + " : "+Cerebro[Permitidos[Aleatorio]]);
                            Correctos.shift(); /*Eliminar al primero*/
                            Escogido = true;
                            Cant += 1;
                        }
                        else {
                            //Buscar uno disponible
                            for (let part2 in Cerebro) {
                                if (Cerebro[part2] === 0) {
                                    Permitidos = [part2];
                                }
                            }
                            console.log("Jugador: " + player);
                            console.log("Permitidos: " + Permitidos);
                            let Aleatorio = getRandomArbitrary(0, Permitidos.length - 1);
                            Cerebro[Permitidos[Aleatorio]] = player;
                            Jugadores[player][3].push(Permitidos[Aleatorio]);
                            Jugadores[player][2] += 200;
                            Partes_Disponibles -= 1;
                            console.log(player + " ha ganado la parte " + Permitidos[Aleatorio] + " : "+Cerebro[Permitidos[Aleatorio]]);
                            Correctos.shift(); /*Eliminar al primero*/
                            Escogido = true;
                            Cant += 1;
                        }
                    }
                }
                while (Correctos.length > 0) {
                    Jugadores[Correctos[0]][2] += 100;
                    Correctos.shift();
                }
                console.log("Acaba");
                console.log();
                Permitir = false;
                for (let key in Jugadores) {
                    io.to(Jugadores[key][0]).emit('ActualizarMapa', Cerebro);
                }
                io.emit("ActPuntaje", Jugadores);
            }
        })

        /* ------------------------------------------------------ */

        socket.on("disconnect", function () {
            console.log("Usuario desconectado " + socket.id);
            let SeVa = socket.id;
            for (let i = 0; i < UsuariosJuego.length; i++) {
                if (UsuariosJuego[i] === SeVa) {
                    if (i === 0) {
                        UsuariosJuego.shift();
                    }
                    else {
                        UsuariosJuego.splice(i, i);
                    }
                }
            }
            for (let i = 0; i < Esperando.length; i++) {
                if (Esperando[i] === SeVa) {
                    if (i === 0) {
                        Esperando.shift();
                    }
                    else {
                        Esperando.splice(i, i);
                    }
                }
            }
            while (UsuariosJuego.length < 4 && Esperando.length > 0) {
                UsuariosJuego.push(Esperando[0]);
                Esperando.shift();
            }
            usuarios_conectados--;
            io.emit("actualizar", usuarios_conectados);
            console.log("Arreglo: " + UsuariosJuego)
        })
    })
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function ConfiguracionInicial() {
    Partes_Disponibles = 17;
    Cerebro["1"] = 0;
    Cerebro["2"] = 0;
    Cerebro["3"] = 0;
    Cerebro["4"] = 0;
    Cerebro["5"] = 0;
    Cerebro["6"] = 0;
    Cerebro["7"] = 0;
    Cerebro["8"] = 0;
    Cerebro["9"] = 0;
    Cerebro["10"] = 0;
    Cerebro["11"] = 0;
    Cerebro["12"] = 0;
    Cerebro["13"] = 0;
    Cerebro["14"] = 0;
    Cerebro["15"] = 0;
    Cerebro["16"] = 0;
    Cerebro["17"] = 0;
    Jugadores["Player1"] = [];
    Jugadores["Player2"] = [];
    Jugadores["Player3"] = [];
    Jugadores["Player4"] = [];
    Correctos = [];
    Incorrectos = 0;
    PreguntaEscogida = false;
    PreguntaIndex = -1;
    MostrarEmpieza = false;
    OrdenEscogido = false;
    Orden = [];
    TurnoActual = 0;
    Contrincante = 0;
    EnviarDatosBattle = false;
    intento = 1;
    Parte_Discutida = "";
    Preguntas = [["El acto que una persona tiene y puede ser estudiado, abordado objetivamente y registrado por la psicología científica.", "La conducta", "La mente", "El lenguaje", "Los gustos"],
    ["¿Quién fue el fundador de la psicología como ciencia?", "Wilhelm Wundt", "Sigmund Freud", "Carl Rogers", "Carl Jung"],
    ["Mencione tres campos de acción de la psicología", "Psicología del desarrollo, psicología clínica, psicología experimental", "Psicología industrial, psiquiatría, psicología terapéutica", "Psicoterapia, psicología de la ciencia, psicología de la consejería", "Psicología mental, psicología conductual, psicología superficial"],
    ["Estudia la forma en la que la gente se influye en el individuo: ¿Que campo de acción es?", "Psicología social", "Psicología clínica", "Psicología organizacional", "Psicología experimental"],
    ["¿En qué año fue fundado el primer laboratorio de psicología?", "1879", "1890", "1867", "1900"],
    ["¿Cuál es la metodología de investigación que permite recolectar información de experiencias y percepciones de los participantes?", "Cualitativa", "Correlacional", "Investigación básica", "Cuantitativa"],
    ["¿Cuántas metodologías de investigación hay?", "3. Cualitativa, cuantitativa y mixta", "3. Aplicada, básica y mixta", "3. Cuantitativa, aplicada y básica", "2. Cualitativa y cuantitativa"],
    ["¿Cuál es la diferencia entre método de investigación cualitativo y cuantitativo?", "Cuantitativa se encarga de las estadísticas y número, mientras que la cualitativa se emplean significados y palabras.", "Cualitativo se ocupa de los números y estadísticas de la investigación, cuantitativo de describir.", "Significan lo mismo", " Cualitativa explica cómo debemos usar la investigación por parte de descripción, cuantitativa igual"],
    ["¿Cuál es el nombre del método de investigación que mientras un fenómeno aumenta el otro disminuye? ", "Correlacional", "Investigación Acción Participativa", "Etnográfico", "Observación"],
    ["Existe una cédula en nuestro cuerpo la cual es capaz de recibir y controlar toda la información sensorial del mundo exterior. Sin ellas, seríamos incapaces de realizar las actividades más cotidianas. Estas son", "Células nerviosas", "Células adiposas", "Células epiteliales", "Células óseas"],
    ["Todos los seres humanos estamos controlados por sustancias químicas llamadas neurotransmisores. De estas existen decenas y cada una controla distintas funciones del cuerpo humano. ¿Cuál es el nombre de la señal química que controla las funciones del sueño, aprendizaje y memoria?", "Serotonina", "Dopamina", "Glutamato", "Glicina"],
    ["¿El movimiento aparente es?", "Ilusión que ocurre cuando se perciben objetos en movimiento cuando en realidad están estáticos.", "Ilusión producida por una rápida serie de imágenes.", "Desplazamiento físico de un objeto de una posición a otra.", "Todas son falsas"],
    ["¿En dónde se encuentran los fotorreceptores?", "Fóvea", "Retina", "Córnea", "Iris"],
    ["¿Cuáles son los receptores de los ojos?", "Conos bastones", "Córnea iris", "Cristalino retina", "Fóvea punto ciego"],
    ["¿Cuál es la neurona que recogen mensajes de los órganos sensoriales?", "Neurona aferente", "Neurona eferente", "Neurona de asociación", "Neurona eferente y de asociación"],
    ["¿La teoría  de la visión cromática sostiene que la retina contiene 3 tipos de receptores del color cuáles son?", "Rojo, azul, verde", "Morado rosado amarillo", "Negro blanco naranja", "Café gris fucsia"],
    ["Teniendo en cuenta los elementos del condicionamiento clásico, ¿Qué se necesita para que una respuesta incondicionada se convierta en una respuesta condicionada?", "Se necesita un emparejamiento repetido entre un estímulo incondicionado con una señal", "Un emparejamiento entre una respuesta incondicionada con una condicionada", "Una RI no se pueda convertir en R. Condicionada", "Se necesita un reforzador positivo"],
    ["¿Cuál es la parte del cerebro que se encarga de la alimentación?.¿Qué sucede al estimular o eliminar sus regiones?", "El hipotálamo, al estimular se empieza a comer y al eliminar dejan de alimentarse", "El tálamo, al eliminar su región se deja de comer y al estimular se come", "El tallo cerebral, al eliminar su región se deja de comer y al estimularla come", "La amígdala, al estimular se empieza a comer y al eliminar dejan de alimentarse"],
    ["¿De qué parte del cerebro proviene la motivación?", "Aún no se ha descubierto", "Lóbulo occipital", "Lóbulo frontal", "Lóbulo parietal"],
    ["En qué etapa se encuentra un niño entre los 2 y 7 años que presenta dicha características: es capaz de usar las representaciones mentales, tiene pensamiento egocéntrico, son engañados fácilmente por las apariencias", "Etapa preoperacional", "Etapa de las operaciones concretas", "Etapa de las operaciones formales", "Etapa de la niñez"],
    ["¿Cuál es el que hace que los adolescentes sientan que constantemente los juzgan y los observan?", "Audiencia imaginaria", "Fabula personal", "Desarrollo de personalidad", "Crisis de la madurez"],
    ["De acuerdo a la teoría de los rasgos de la personalidad, ¿Cuántos rasgos de la personalidad existen?", "5: extroversión, afabilidad,escrupulosidad, estabilidad emocional y cultura", "3: Cultura, estabilidad emocional y afabilidad", "3: Ello yo y super yo", "Inconsciente personal, inconsciente colectivo"],
    ["¿Cómo se le llaman los dos términos empleados por Freud, cuando el niño o niña se vuelve celoso de sus padres?", "Complejo de edipo en los hombres, Complejo de Electra en mujeres", "Complejo de edipo en las mujeres, complejo de Electra en los hombres", "Latencia en hombres, Genital en mujeres", "Inconsciente en hombres, precosconsciente en mujeres"],
    ["Las personas que pueden tener problemas para prestar atención, controlar conductas impulsivas  o pueden ser demasiado activos.", "TDAH", "Ansiedad", "Depresión", "Trastorno obsesivo-compulsivo"],
    ["Según la psicología social se dice qué hay una teoría que sostiene que las personas tratan de entenderse haciendo juicios acerca de las causas de la conducta. Que nombre lleva esa teoría:", "Teoría de la atribución", "Teoría del entendimiento", "Teoría de la gran persona", "Teoría de la frustración-agresión"],
    ["En Colombia cuando aún no habían psicológicos ¿Quiénes aplicaban los tests que utilizaban para medir la inteligencia?", "Médicos", "Matemáticos", "Profesores de medicina y matemáticas", "Mercedes Rodrigo"]
    ];

}

function Llenado() {
    Jugadores["Player1"].push(UsuariosJuego[0]);
    Jugadores["Player2"].push(UsuariosJuego[1]);
    Jugadores["Player3"].push(UsuariosJuego[2]);
    Jugadores["Player4"].push(UsuariosJuego[3]);

    Jugadores["Player1"].push("Fucsia");
    Jugadores["Player2"].push("Amarillo");
    Jugadores["Player3"].push("Rojo");
    Jugadores["Player4"].push("Azul");

    Jugadores["Player2"].push(0);
    Jugadores["Player1"].push(0);
    Jugadores["Player3"].push(0);
    Jugadores["Player4"].push(0);

    Jugadores["Player1"].push([2])
    Jugadores["Player2"].push([5])
    Jugadores["Player3"].push([8])
    Jugadores["Player4"].push([12])
    Cerebro["2"] = "Player1";
    Cerebro["5"] = "Player2";
    Cerebro["8"] = "Player3";
    Cerebro["12"] = "Player4";

    Partes_Disponibles -= 4;
    /*Asignar los puntos*/
    Jugadores["Player1"][2] += 1000;
    Jugadores["Player2"][2] += 1000;
    Jugadores["Player3"][2] += 1000;
    Jugadores["Player4"][2] += 1000;

    /**
     * Datos iniciales - BORRAR LUEGO
     */
    /*
     Cerebro["1"]= "Player1";
     Cerebro["3"]= "Player1";
     Cerebro["4"]= "Player1";
     Cerebro["6"]= "Player1";
     Cerebro["7"]= "Player1";
     Cerebro["9"]= "Player2";
     Cerebro["10"]= "Player2";
     Cerebro["11"]= "Player2";
     Cerebro["13"]= "Player3";
     Cerebro["14"]= "Player3";
     Cerebro["15"]= "Player3";
     Cerebro["16"]= "Player4";
     Cerebro["17"]= "Player4";
     Jugadores["Player1"].push(1)
     Jugadores["Player1"].push(3)
     Jugadores["Player1"].push(4)
     Jugadores["Player1"].push(6)
     Jugadores["Player1"].push(7)

    Jugadores["Player2"].push(9)
    Jugadores["Player2"].push(10)
    Jugadores["Player2"].push(11)
    
    Jugadores["Player3"].push(13)
    Jugadores["Player3"].push(14)
    Jugadores["Player3"].push(15)

    Jugadores["Player4"].push(16)
    Jugadores["Player4"].push(17)
     Partes_Disponibles -= 13;
     */
}

function shuffleArray(inputArray){
    inputArray.sort(()=> Math.random() - 0.5);
}

function escogerOrden(){
    //let Lista = ["Player1","Player2","Player3","Player4"];
    Orden = ["Player1","Player2","Player3","Player4"];
    //Orden = shuffleArray(Lista);
}

