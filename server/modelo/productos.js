
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productosSchema = new Schema({ 
    CODIGO: { type: String, required: true },
    NOMBRE: { type: String, required: true },
    UNITID: { type: String, required: true },
    PRECIOVENTA: { type: Number, required: true },
    COSTOFINANCIERO : { type: Number, required: false },
    IDLINEA: { type: String, required: false },
    IDCATEGORIA: { type: Number, required: false },
    CodIDProveedor: { type: String, required: false },
    ESTADO: { type: String, required: false },
    TIPOFABRICANTE: { type: String, required: false },
    NUMEROPARTE: { type: String, required: false },
    LINEA: { type: String, required: false },
    CATEGORIA: { type: String, required: false },
    UEN: { type: String, required: false },
    MARCA: { type: String, required: false },
    PRECIOMINIMO: { type: Number, required: true },
    DESCRIPCION: { type: String, required: false },
    IMAGEN150: { type: String, required: false },
    IMAGEN450: { type: String, required: false }
})

module.exports = mongoose.model('productos',productosSchema);