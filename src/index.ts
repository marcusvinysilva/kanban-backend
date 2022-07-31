import "express-async-errors";
import express from "express";
import cardRoute from "./routes/cards.route";
import { AppDataSource } from "./data-source";
import { errorMiddleware } from "./middlewares/error.middleware";

AppDataSource.initialize().then(() => {
  const app = express();
  const port = process.env.PORT || 5000;

  app.use(express.json());

  app.use("/cards", cardRoute);

  app.use(errorMiddleware);

  return app.listen(port, () =>
    console.log(`Servidor rodando na porta ${port}`)
  );
});
