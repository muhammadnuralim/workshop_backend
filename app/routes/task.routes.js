module.exports = app => {
    const tasks = require("../controllers/task.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tasks.create);
  
    // Retrieve all tasks
    router.get("/", tasks.findAll);
  
    // Retrieve a single Task with id
    router.get("/:id", tasks.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tasks.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tasks.delete);

    app.use('/api/tasks', router);
  };