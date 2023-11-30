/* MongoDB No Realcional */

/* use demo-si35 */
/*
  Crear una coleccion de documentos que representen estudiantes.
  Debe considerar los siguientes campos:
       - first_name: string
       - last_name: string
       - dni: string
       - address: object
       - age: int
*/
/* Json Schema */
/*  programa Json Schema Generator */
db.createCollection('students', {
   validator: {
      $jsonSchema: {
           bsonType: 'object',
           required: ['first_name','last_name','dni'],
           properties: {
              first_name: {
                 bsonType: 'string'
              },
              last_name: {
                bsonType: 'string'
              },
              address: {
                bsonType: 'object',
                required: ['city','country'],
                properties: {
                    city: {
                        bsonType: 'string'
                    }
                }
              },
              courses: {
                bsonType: {
                    bsonType: 'array',
                    minItems: 1,
                    items: {
                        bsonType: 'object',
                        required: ['name'],
                        properties: {
                            name: {
                                bsonType: 'string'
                            }
                        }
                    }
                }              
              }
           }
      }
   }
})
