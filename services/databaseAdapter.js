import * as SQLite from "expo-sqlite";

function open() {
  const db = SQLite.openDatabase("fundbasedb.db");
  return db;
}

export { open };
