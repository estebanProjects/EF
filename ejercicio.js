// Considere una coleccion que contiene documentos
// que representa una venta, a continuacion,
// un ejemplo de documento de dicha coleccion:

/*
{
    "_id": {"$oid": "5db761dcae323e45a93ccfe8"},
    "couponUsed": true,
    "customer": {
        "gender": "M",
        "age": 42,
        "email": "caucho@witwuta.sv",
        "satisfaction": 4
    },
    "purchaseMethod": "Online",
    "saleDate": {"$date": "2015-03-23T21:06:49.506Z"},
    "storeLocation": "Denver"
}
*/

// escribir una consulta que permita mostrar
// la cantidad de ventas realizadas en cada ciudad.
// Considerar solo aquellas ventas en la cuales se 
// haya utilizado un cupon de descuento
db.ventas.aggregate([
    { 
        $match: { couponUsed: true } // Filtrar ventas con cupón utilizado
    },
    {
        $group: {
            _id: "$storeLocation", // Agrupar por ciudad
            totalSales: { $sum: 1 } // Contar ventas por cada ciudad
        }
    }
]);

/* --- */
// escribir una consulta que permita mostrar la cantidad
// de ventas realizadas por cada metodo de CompressionStreamconsiderar solo 
// aquellas ventas en las cuales la satisfaccion del cliente haya
// sido mayor o igual a 4

db.ventas.aggregate([
    {
        $match: { "customer.satisfaction": { $gte: 4 } } // Filtrar por satisfacción del cliente mayor o igual a 4
    },
    {
        $group: {
            _id: "$purchaseMethod", // Agrupar por método de compra
            totalSales: { $sum: 1 } // Contar ventas por cada método de compra
        }
    }
]);
