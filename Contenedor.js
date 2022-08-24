
const fs = require('fs/promises'); 

class Jerseys {
  constructor(ruta) {
    this.ruta = ruta;
  }

  async listarAll() {
    try {
     
      const objs = await fs.readFile(this.ruta, 'utf-8'); 
      return JSON.parse(objs);
    } catch (error) {
      return [];
    }
  }

  async guardar(obj) {
    try {
      const objs = await this.listarAll();
      let newId;

      if (objs.length === 0) {
        newId = 1;
      } else {
        newId = objs[objs.length - 1].id + 1;
      }

      console.log('newId', newId);

      const newObj = {
        id: newId,
        ...obj
      };
      objs.push(newObj);
      await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2));

      return newId;
    } catch (error) {
      console.log('error al guardar', error); // saco el error por consola para poder saber a que se debe el fallo
    }
  }

  async actualizar(id, newObj) {
    try {
      const objs = await this.listarAll();
      const indexObj = objs.findIndex((o) => o.id == id);
      if (indexObj == -1) {
        return 'Objeto no encontrado';
      } else {
        objs[indexObj] = {
          id,
          newObj
        };
        await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2));
      }

      return {
        id,
        ...newObj
      };
    } catch (error) {
      console.log('error actualizar', error); // saco el error por consola
    }
  }

  async eliminar(id) {
    try {
      const objs = await this.listarAll();
      const indexObj = objs.findIndex((o) => o.id == id);

      if (indexObj == -1) {
        return 'No encontrado';
      } else {
        objs.splice(indexObj, 1);
        await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2));
      }
    } catch (error) {
      console.log('error eliminar', error); // saco el error por consola
    }
  }


  async eliminarTodo(){
    try{
        await fs.writeFile(this.ruta,"[]","utf-8");
    }
    catch(error){

       console.log ( `error eliminar todo: ${error}`);
    }
}


}

async function main() {
  const jereys = new Jerseys('./jerseys-data.txt');
  console.log(jereys.ruta);
  console.log(await jereys.listarAll());
  console.log(
    await jereys.guardar({
      equipo: 'Chicago Bullssss',
      numeroEspalda: '21'
    })
  );
  console.log(
    await jereys.actualizar(2, {
      equipo: 'Spurs',
      numeroEspalda: '27'
    })
  );


  //  console.log(await jereys.eliminar(1));
}

main();
