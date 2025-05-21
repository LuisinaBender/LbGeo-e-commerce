// Verificar si el navegador no tiene el meteodo INCLUDE 

if (!Array.prototype.includes) {
   //Si no existe el método includes, lo definimos 
    Array.prototype.includes = function(searchElement,) {
        //Recorrer el array
        for (let i = 0; i < this.length; i++) {
            //Si el elemento es igual al que buscamos, devolvemos true 
            if (this[i] === searchElement) {
                // Si lo encontramos, devolvemos true
                return true;
            }
        }
        // Si no lo encontramos, devolvemos false
        return false;
    }
}
