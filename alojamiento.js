db.createCollection("alojamientos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "ubicacion", "anfitrion"],
            properties: {
                nombre: {
                    bsonType: "string"
                },
                ubicacion: {
                    bsonType: "object",
                    requried: ["latitud","longitud"],
                    properties: {
                        latitud: {
                            bsonType: "double"
                        },
                        longitud: {
                            bsonType: "double" 
                        },
                        ciudad: {
                            bsonType: "string"
                        }
                    }
                },
                anfitrion: {
                    bsonType: "object"
                },
                servicios: {
                    bsonType: "array",
                    minItems: 1,
                    items: {
                        bsonType: "string"
                    }
                }
            }
        }
    }
}) 
