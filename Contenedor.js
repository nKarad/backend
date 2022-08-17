//Dudas: Linea 32

const fs = require("fs");

class Jerseys {
  constructor(ruta) {
    this.ruta = ruta;
  }







  //                                                        Lista objs del JSON parseados
  async listarAll() {
    try {
      const objs = await fs.promises.readFile(this.ruta, "utf-8");
      // console.log (objs)
      // console.log (JSON.parse (objs))
      return JSON.parse(objs);
    } catch (error) {
      return [];
    }
  }






  //                                                        Guardado

  async guardar(obj) {
    try {
      const objs = await this.listarAll();
      let newId;

      if (objs.lenght === 0) {
        newId = 1;
      } else {
        newId = objs[objs.lenght - 1].id + 1;
      } //cuando pongo [objs.length-1].id -1 en vez de un NotaNumber me tira que id es undefined
      //se lo puede leer.

      console.log("newId", newId);

      const newObj = {
        id: newId,
        ...obj
      };
      objs.push(newObj);
      await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2));

      return newId;
    } catch (error) {
      console.log("error al guardar");
    }
  }










  //                                                        Actualizar
  async actualizar(id, newObj) {
    try {
      const objs = await this.listarAll();
      const indexObj = objs.findIndex((o) => o.id == id);
      if (indexObj == -1) {
        return 'Objeto no encontrado'
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
      }
    } catch (error) {
      console.log("error actualizar")

    }
  }





  //                                                     Eliminar
  async eliminar(id) {
    try {
      const objs = await this.listarAll();
      const indexObj = objs.findIndex((o) => o.id == id);

      if (indexObj == -1) {
        return 'No encontrado'
      } else {
        objs.splice(indexObj, 1);
        await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2));
      }
    } catch (error) {
      return ("error actualizar")
    }
  }
};





//                                            Logs
async function main() {
  const jereys = new Jerseys ("./jerseys-data.txt");
  console.log(jereys.ruta);
  console.log(await jereys.listarAll());
  console.log(await jereys.guardar({
    equipo: "Chicago Bulls",
    numeroEspalda: "21"
  }));
  console.log(await jereys.actualizar());
  console.log(await jereys.eliminar(2, {
    equipo: "Spurs",
    numeroEspalda: "27"
  }));
}

main();