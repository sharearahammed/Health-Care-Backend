import app from "./app";
import { envVars } from "./config/env";

const port = envVars.PORT;

// Start the server
const bootstrap = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

bootstrap();
