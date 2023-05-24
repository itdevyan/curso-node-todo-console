require("colors");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  mostrarListadoCheckList,
  confirmar,
} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

const main = async () => {
  console.clear();

  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if (tareasDB) {
    // Establecer las tareas
    tareas.crearTareasFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();
    // console.log({ opt });

    switch (opt) {
      case "1":
        // Crear tarea
        const desc = await leerInput("Descripción: ");
        tareas.crearTarea(desc);
        break;
      case "2":
        // Listar tareas
        tareas.listadoCompleto();
        break;
      case "3":
        tareas.listarPendientesCompletados(true);
        break;
      case "4":
        tareas.listarPendientesCompletados(false);
        break;
      case "5": // Tareas
        const ids = await mostrarListadoCheckList(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;
      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== "0") {
          const confirmacion = await confirmar("Está seguro?");
          if (confirmacion) {
            tareas.borrarTarea(id);
            console.log("Tarea borrada");
          }
        }
        break;
      default:
        break;
    }

    guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");
};

main();
