import config from "../../../config.json" assert { type: "json" };
import { DB_DAO } from "./DB_DAO.mjs";
import { Task } from "../../core/Task.mjs";

class TaskDAO {
  constructor() {
    let db_name = config.persistence.database.name;
    this.db = new DB_DAO("../../../" + db_name);
  }

  createTaskTableDAO() {
    this.db.createTable(
      `CREATE TABLE IF NOT EXISTS taskDB (
             id_task INTEGER PRIMARY KEY AUTOINCREMENT,
             name_task TEXT NOT NULL,
             note_task TEXT NOT NULL,
             pomodores INTEGER NOT NULL,
             project_task INTEGER NOT NULL
             )`
    );
  }

  createTaskDAO(myTask) {
    let query = `INSERT INTO taskDB (name_task, note_task, pomodores, project_task) VALUES (?, ?, ?, ?)`;
    this.db.insert(
      query,
      myTask.name,
      myTask.note,
      myTask.pomodores,
      myTask.projectID
    );
  }

  deleteTaskDAO(id_task) {
    let query = `DELETE FROM taskDB WHERE id_task = ?`;
    this.db.delete(query, id_task);
  }

  readAllTaskDAO(callback) {
    let query = "SELECT * FROM taskDB";
    this.db.getAll(query, (allData) => {
      callback(allData);
    });
  }

  readTaskDAO(id, callback) {
    let query = `SELECT * FROM taskDB where id_task = ${id}`;
    this.db.getByID(query, (rows) => {
      rows.forEach((row) => {
        let myTask = new Task(
          row.id_task,
          row.name_task,
          row.note_task,
          row.pomodores,
          row.project_task
        );
        callback(myTask);
      });
    });
  }

  updateTaskDAO(task) {
    let query = `UPDATE taskDB SET name_task = ?, note_task = ?, pomodores = ?, project_task = ? WHERE id_task = ?`;
    this.db.update(
      query,
      task.name,
      task.note,
      task.pomodores,
      task.projectID,
      task.id
    );
  }
}

let d = new TaskDAO();
let t = new Task(2, "chaturbate", "lo mas añon de este mundo", 3487, 1);
//--------------->
//d.createTaskDAO(t);
//--------------->
//d.deleteTaskDAO(3)
//--------------->
// d.readAllTaskDAO( (allData) => {
//     allData.forEach( (registreTask) => {
//         console.log(registreTask)
//     } )
// });
//--------------->
// d.readTaskDAO(2, (myTask) => {
//     console.log(myTask);
// })
//--------------->
//d.updateTaskDAO(t)

