use ae
ae.createCollection('questions')
db.questions.insert(
    [
        {
            "question": "Por la calzada a cuya entrada está situada esta señal, ¿qué vehículos están obligados a circular?",
            "answers": {
                "a": "Solamente los camiones.",
                "b": "Toda clase de camiones y furgones, independientemente de su masa.",
                "c": "Solamente los furgones y camiones pesados."
            },
            "correctAnswer": "b"
        },
        {
            "question": "En un turismo , la carga puede sobresalir por su parte posterior ...",
            "answers": {
                "a": "no está permitido que sobresalga la carga del vehículo.",
                "b": "hasta un 5 por 100 de su longitud.",
                "c": "hasta un 10 por 100 de su longitud y, si la carga fuera indivisible hasta un 15 por 100."
            },
            "correctAnswer": "c"
        },
        {
            "question": "El adelantamiento se efectuará por la derecha y adoptando las máximas precauciones...",
            "answers": {
                "a": "en vías con más de un carril en el mismo sentido.",
                "b": "cuando el conductor del vehículo al que se pretende adelantar está indicando claramente su propósito de girar a la izquierda.",
                "c": "siempre que se adelante a un vehículo articulado."
            },
            "correctAnswer": "b"
        },
        {
            "question": "Nada más producirse un accidente, antes de atender a las víctimas hay que...",
            "answers": {
                "a": "proteger y señalizar la zona del accidente.",
                "b": "organizar a los servicios de urgencia.",
                "c": "avisar a la policía."
            },
            "correctAnswer": "a"
        },
        {
            "question": "¿Está permitido estacionar en doble fila?",
            "answers": {
                "a": "Sí, cuando no hay espacio libre cerca.",
                "b": "No, en ningún caso.",
                "c": "Sí, cuando el conductor no abandone el vehículo."
            },
            "correctAnswer": "b"
        },
        {
            "question": "Encuentra estas dos señales, ¿a cuál debe obedecer?",
            "answers": {
                "a": "A la que sólo prohíbe estacionar.",
                "b": "A la que prohíbe parar y estacionar.",
                "c": "A ninguna por estar en contradicción."
            },
            "correctAnswer": "b"
        },
        {
            "question": "Un mantenimiento adecuado del vehículo...",
            "answers": {
                "a": "elimina la probabilidad de sufrir un accidente.",
                "b": "puede reducir la probabilidad de sufrir un accidente.",
                "c": "no reduce nunca la probabilidad de sufrir un accidente."
            },
            "correctAnswer": "b"
        },
        {
            "question": "Cuando circula adaptando la velocidad a las circunstancias del tráfico, lo hace a velocidad...",
            "answers": {
                "a": "excesiva.",
                "b": "reducida.",
                "c": "adecuada."
            },
            "correctAnswer": "c"
        },
        {
            "question": "Si en un vehículo se realiza una reforma técnica de importancia, ¿es obligatorio pasar una inspección?",
            "answers": {
                "a": "Sí, en una estación ITV.",
                "b": "No es necesario.",
                "c": "Sí, en un taller autorizado."
            },
            "correctAnswer": "a"
        },
        {
            "question": "El arcén de esta carretera mide menos de 1,5 m. ¿A qué velocidad como máximo puede adelantar este turismo?",
            "answers": {
                "a": "A 120 km/h.",
                "b": "A 110 km/h.",
                "c": "A 100 km/h."
            },
            "correctAnswer": "b"
        },
        {
            "question": "Con el permiso B para conducir turismos, ¿qué otros vehículos se pueden conducir?",
            "answers": {
                "a": "Motocicletas de más de 125 cc.",
                "b": "Ciclomotores de dos, tres y cuatro ruedas.",
                "c": "Todos los vehículos que se pueden conducir con el permiso A."
            },
            "correctAnswer": "b"
        },
        {
            "question": "¿A qué vehículos prohíbe el adelantamiento esta señal?",
            "answers": {
                "a": "A todos los camiones de menos de 3.500 Kg. de M.M.A.",
                "b": "A los camiones de más de 3.500 kg de M.M.A.",
                "c": "A todos los vehículos de motor, incluidos camiones."
            },
            "correctAnswer": "b"
        },
        {
            "question": "Si conduce una motocicleta, ¿es aconsejable utilizar guantes?",
            "answers": {
                "a": "Sí, incluso en verano, para proteger las manos en caso de caída.",
                "b": "No, porque pueden dificultar la conducción.",
                "c": "Sí, su uso es obligatorio en todo tipo de vías."
            },
            "correctAnswer": "a"
        },
        {
            "question": "¿Qué es el ABS?",
            "answers": {
                "a": "Sistema de control de seguridad.",
                "b": "Sistema de frenado antibloqueo.",
                "c": "Sistema de cierre centralizado."
            },
            "correctAnswer": "b"
        },
        {
            "question": "La tasa de alcoholemia realmente segura para conducir es...",
            "answers": {
                "a": "0,0 gramos de alcohol por litro de sangre.",
                "b": "0,10 gramos de alcohol por litro de sangre.",
                "c": "0,15 gramos de alcohol por litro de sangre."
            },
            "correctAnswer": "a"
        },
        {
            "question": "¿Puede el conductor reducir la probabilidad de accidente debida al \"factor vía\"?",
            "answers": {
                "a": "Sí, adaptando su conducción a las condiciones del medio.",
                "b": "Sí, si su vehículo cuenta con los últimos avances de seguridad.",
                "c": "No, porque no puede actuar sobre la vía ni sobre el entorno."
            },
            "correctAnswer": "a"
        },
        {
            "question": "Las personas mayores suelen tener más accidentes...",
            "answers": {
                "a": "cuando van acompañando a niños.",
                "b": "cuando van solas.",
                "c": "cuando van acompañadas por otros adultos."
            },
            "correctAnswer": "b"
        },
        {
            "question": "¿Se puede atravesar la línea de conos para cambiar de carril?",
            "answers": {
                "a": "Sí, para realizar una parada.",
                "b": "Sí, para adelantar.",
                "c": "No, porque está prohibido."
            },
            "correctAnswer": "c"
        },
        {
            "question": "El consumo de alcohol, ¿altera la posibilidad de deslumbramiento de un conductor?",
            "answers": {
                "a": "Sí, la disminuye.",
                "b": "No, en ningún caso.",
                "c": "Sí, la aumenta."
            },
            "correctAnswer": "c"
        },
        {
            "question": "No está permitido utilizar la luz de largo alcance cuando...",
            "answers": {
                "a": "está encendida la luz de corto alcance .",
                "b": "pueda deslumbrar a otros usuarios.",
                "c": "está encendida la luz de posición."
            },
            "correctAnswer": "b"
        },
        {
            "question": "Cuando llueve es importante...",
            "answers": {
                "a": "no pisar el pedal del embrague.",
                "b": "aumentar la presión de los neumáticos.",
                "c": "comprobar de vez en cuando los frenos."
            },
            "correctAnswer": "c"
        },
        {
            "question": "¿Es recomendable mantener la velocidad indicada por la señal aunque las condiciones de la vía y la circulación sean favorables?",
            "answers": {
                "a": "Sí.",
                "b": "No, si las condiciones son favorables la recomendación no es aplicable."
            },
            "correctAnswer": "a"
        },
        {
            "question": "¿Qué significa esta señal?",
            "answers": {
                "a": "Peligro por pérdida de visibilidad.",
                "b": "Peligro por niebla.",
                "c": "Peligro por lluvia."
            },
            "correctAnswer": "a"
        },
        {
            "question": "En esta situación, ¿qué vehículo pasará primero?",
            "answers": {
                "a": "El vehículo que viene por la derecha.",
                "b": "El vehículo que va de frente.",
                "c": "El vehículo que viene por la izquierda."
            },
            "correctAnswer": "a"
        },
        {
            "question": "¿Qué significa esta señal?",
            "answers": {
                "a": "Peligro por la proximidad de un paso a nivel sin barreras.",
                "b": "Peligro por la proximidad de un paso a nivel con barreras.",
                "c": "Peligro por la presencia inmediata de un paso a nivel sin barreras."
            },
            "correctAnswer": "c"
        },
        {
            "question": "¿Es correcto el cambio de sentido que realiza el vehículo rojo?",
            "answers": {
                "a": "Sí, porque lo realiza con una sola maniobra.",
                "b": "No, porque obstaculiza a los vehículos que le siguen.",
                "c": "Sí, por tener la línea discontinua."
            },
            "correctAnswer": "b"
        },
        {
            "question": "¿Qué distancia lateral mantendremos al adelantar un turismo fuera de poblado?",
            "answers": {
                "a": "1,5 metros como mínimo.",
                "b": "La proporcional a la velocidad y al ancho de la vía y características de la misma.",
                "c": "1,5 metros como máximo."
            },
            "correctAnswer": "b"
        },
        {
            "question": "¿Qué hará en caso de que su vehículo quede inmovilizado en la autopista por una avería durante el día?",
            "answers": {
                "a": "Poner 2 triángulos de preseñalización de peligro a 50 metros y visibles a 100 metros.",
                "b": "Poner 1 triángulo de preseñalización de peligro a 50 metros como mínimo y visible a 100 metros y encender el alumbrado de emergencia.",
                "c": "Avisar lo antes posible mediante un poste de SOS."
            },
            "correctAnswer": "b"
        },
        {
            "question": "Colocar a los heridos en posición lateral de seguridad o defensa sirve para...",
            "answers": {
                "a": "Estar más cómodo.",
                "b": "Que el aire entre en las vías respiratorias.",
                "c": "Poder hacerles la respiración artificial."
            },
            "correctAnswer": "b"
        },
        {
            "question": "En un viaje largo y circulando con el vehículo a plena carga, ¿es recomendable hinchar los neumáticos a la máxima presión recomendada por el fabricante de los neumáticos?",
            "answers": {
                "a": "Sí.",
                "b": "No."
            },
            "correctAnswer": "a"
        }
    ]
)