import app from "./app.js";

app.listen(process.eventNames.PORT, () => {
  console.log(`Server running on  port ${process.env.PORT}`);
});
