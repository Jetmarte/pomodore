
import { DB_DAO } from "./DB_DAO.mjs";
import { Project } from "../../core/Project.mjs";



export class ProjectDAO {

  constructor() {
    
    this.db = new DB_DAO();
  }

  createTable() {
    this.db.createTable(
      `CREATE TABLE IF NOT EXISTS projectDB (
             id_project INTEGER PRIMARY KEY AUTOINCREMENT,
             name_project TEXT NOT NULL,
             note_project TEXT NOT NULL
             )`
    );
  }

  create(myProject) {
    let query = `INSERT INTO projectDB (name_project, note_project) VALUES (?, ?)`;
    this.db.insert(query, myProject.name, myProject.note);
  }

  delete(id_project) {
    let query = `DELETE FROM projectDB WHERE id_project= ?`;
    this.db.delete(query, id_project);
  }

  readAll(callback) {
    let query = "SELECT * FROM projectDB";
    this.db.getAll(query, (allData) => {
      callback(allData);
    });
  }

  read(id, callback) {
    let query = `SELECT * FROM projectDB where id_project= ${id}`;
    this.db.getByID(query, (row) => {
      
      callback(row)
    });
  }

  update(project) {
    let query = `UPDATE projectDB SET name_project = ?, note_project = ?  WHERE id_project = ?`;
    this.db.update(
      query,
      project.name,
      project.note,
      project.id
    );
  }
}
