const productosModelo = require('../modelo/productos');
const productosControl = {}

productosControl.getProductos = async (req, res) => {

   const prod = await productosModelo.find();
   res.json(prod);
   
}

productosControl.getProductosId = async (req, res) => {

    const prodId = await productosModelo.findById(req.params.id);
   res.json(prodId);
}


module.exports = productosControl;