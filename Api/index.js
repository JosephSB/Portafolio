const app = require("./src/app");

app.listen(app.get("port"), () => {
  console.log(`Iniciando servidor en el puerto: ${app.get("port")}`);
});
