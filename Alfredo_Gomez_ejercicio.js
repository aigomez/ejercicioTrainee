// Clase general Vehículo
class Vehiculos {
  constructor (marca, modelo, precio) {
    this.marca = marca
    this.modelo = modelo
    this.precio = precio
  }

// Formatea el precio para que quede según lo pedido
  parsePrecio () {
    return parseFloat(this.precio.replace(".","").replace(",","."))
  }
}

// Clase Autos hereda de Vehiculos
class Autos extends Vehiculos {
  constructor (marca, modelo, precio, puertas) {
    super(marca, modelo, precio)
    this.puertas = puertas
  }
}

// Clase Motos hereda de Vehiculos
class Motos extends Vehiculos {
  constructor (marca, modelo, precio, cilindrada) {
    super(marca, modelo, precio)
    this.cilindrada = cilindrada
  }
}

// Creación de instancia de objetos
const autoPeugeot206 = new Autos ('Peugeot', '206', '200.000,00', '4')
const motoHonda = new Motos ('Honda', 'Titan', '60.000,00', '125cc')
const autoPeugeot208 = new Autos ('Peugeot', '208', '250.000,00', '5')
const motoYamaha = new Motos ('Yamaha', 'YBR', '80.500,50', '160cc')

// Los inserto en un Array
const vehiculos = [autoPeugeot206, motoHonda, autoPeugeot208, motoYamaha]

// Recorro el Array vehiculos y muestro autos o motos dependiendo de si tienen o no puertas
for (var i = 0; i < vehiculos.length; i++) {
  if (vehiculos[i].puertas !== undefined) {
    console.log('Marca: ' + vehiculos[i].marca + ' // Modelo: ' + vehiculos[i].modelo + ' // Puertas: ' + vehiculos[i].puertas + ' // Precio: ' + vehiculos[i].precio)
  }

  else {
    console.log('Marca: ' + vehiculos[i].marca + ' // Modelo: ' + vehiculos[i].modelo + ' // Cilindrada: ' + vehiculos[i].cilindrada + ' // Precio: ' + vehiculos[i].precio)
  }
}

console.log('=============================')

// Ordena el Array vehiculos de mayor a menor usando el método parsePrecio de la clase Vehiculos
const numerosOrdenados = vehiculos.sort(function(a, b){return b.parsePrecio() - a.parsePrecio() })

// Mientras que vehiculoMasCaro toma la primera posicion de los numeros ordenados, vehiculoMasBarato toma la última posicion
const vehiculoMasCaro = numerosOrdenados[0]
const vehiculoMasBarato = numerosOrdenados[numerosOrdenados.length - 1]

// find busca en el array y encuentra el primer elemento que satisfazca la condición (que el modelo incluya la letra Y)
const vehiculoContieneY = vehiculos.find(vehiculo => vehiculo.modelo.includes("Y"));

console.log('Vehículo más caro: ' + vehiculoMasCaro.marca + ' ' + vehiculoMasCaro.modelo)
console.log('Vehículo más barato: ' + vehiculoMasBarato.marca  + ' ' + vehiculoMasBarato.modelo)
console.log('Vehículo que contiene en el modelo la letra ‘Y’: ' + vehiculoContieneY.marca + ' ' + vehiculoContieneY.modelo + ' ' + vehiculoContieneY.precio)

console.log('=============================')

console.log('Vehículos ordenados por precio de mayor a menor:')

for (var i = 0; i < numerosOrdenados.length; i++) {
  console.log(numerosOrdenados[i].marca + ' ' + numerosOrdenados[i].modelo)
}
