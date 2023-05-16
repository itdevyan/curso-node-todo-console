require("colors");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

const main = async () => {
  console.clear();

  let opt = "";
  const tareas = new Tareas();

  do {
    opt = await inquirerMenu();
    console.log({ opt });

    switch (opt) {
      case "1":
        // Crear tarea
        const desc = await leerInput("Descripción: ");
        tareas.crearTarea(desc);
        break;
      case "2":
        // Listar tareas
        console.log(tareas._listado);
        break;

      default:
        break;
    }

    await pausa();
  } while (opt !== "0");
};

main();
