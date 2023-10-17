import * as yup from "yup";

const projectFormSchema = yup.object({
  name: yup.string().required().max(32),
  description: yup.string().required().max(128),
});

const createProjectsTable = (db) => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS projects(
        id INTEGER PRIMARY KEY NOT NULL, 
        name TEXT, 
        description TEXT,
        funds REAL,
        created TEXT, 
        updated TEXT);`
    );
  });
};

const resetProjectsTable = (db) => {
  db.transaction((tx) => {
    tx.executeSql(`DROP TABLE projects`);
  });
  createProjectsTable(db);
};

const createNewProject = (db, data) => {
  db.transaction((tx) => {
    tx.executeSql(
      `INSERT INTO projects(name, description, funds, created, updated) VALUES(?, ?, ?, ?, ?)`,
      [
        data.name,
        data.description,
        0,
        new Date().toLocaleString(),
        new Date().toLocaleString(),
      ]
    );
  });
};

const getProjects = (db, setAction) => {
  db.transaction((tx) => {
    tx.executeSql(
      `SELECT * FROM projects ORDER BY created DESC`,
      [],
      (_, { rows }) => {
        setAction(rows._array);
      }
    );
  });
};

export {
  projectFormSchema,
  createProjectsTable,
  createNewProject,
  getProjects,
};
