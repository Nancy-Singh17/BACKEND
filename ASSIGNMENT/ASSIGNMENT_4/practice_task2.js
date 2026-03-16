const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;


  if (req.method === "GET" && pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to To-Do API");
  }

  else if (req.method === "GET" && pathname === "/tasks") {

    const id = url.searchParams.get("id");

    fs.readFile("tasks.json", "utf8", (err, data) => {

      if (err) {
        res.writeHead(500);
        res.end("Error reading tasks");
        return;
      }

      const tasks = JSON.parse(data);

      if (id) {
        const task = tasks.find(t => t.id == id);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(task || {}));
      } 
      else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(tasks));
      }

    });
  }

  
  else if (req.method === "POST" && pathname === "/tasks") {

    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {

      const newTask = JSON.parse(body);

      fs.readFile("tasks.json", "utf8", (err, data) => {

        const tasks = JSON.parse(data);

        tasks.push(newTask);

        fs.writeFile("tasks.json", JSON.stringify(tasks, null, 2), () => {

          res.writeHead(201, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Task created successfully" }));

        });

      });

    });

  }

  // MARK TASK COMPLETED
  else if (req.method === "PUT" && pathname === "/tasks") {

    const id = url.searchParams.get("id");

    fs.readFile("tasks.json", "utf8", (err, data) => {

      const tasks = JSON.parse(data);

      const task = tasks.find(t => t.id == id);

      if (task) {

        task.completed = true;

        fs.writeFile("tasks.json", JSON.stringify(tasks, null, 2), () => {

          res.writeHead(200);
          res.end("Task marked as completed");

        });

      } 
      else {
        res.writeHead(404);
        res.end("Task not found");
      }

    });

  }

  // DELETE TASK
  else if (req.method === "DELETE" && pathname === "/tasks") {

    const id = url.searchParams.get("id");

    fs.readFile("tasks.json", "utf8", (err, data) => {

      let tasks = JSON.parse(data);

      tasks = tasks.filter(t => t.id != id);

      fs.writeFile("tasks.json", JSON.stringify(tasks, null, 2), () => {

        res.writeHead(200);
        res.end("Task deleted");

      });

    });

  }

  else {
    res.writeHead(404);
    res.end("Route not found");
  }

});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});