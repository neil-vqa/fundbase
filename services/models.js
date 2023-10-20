import Realm from "realm";

class Project extends Realm.Object {
  static schema = {
    name: "Project",
    properties: {
      _id: "objectId",
      name: "string",
      description: "string",
      funds: {
        type: "float",
        default: 0,
      },
      created: "date",
      updated: "date",
      transactions: {
        type: "list",
        objectType: "Transaction",
        optional: false,
      },
    },
    primaryKey: "_id",
  };
}

class Transaction extends Realm.Object {
  static schema = {
    name: "Transaction",
    properties: {
      _id: "objectId",
      description: "string",
      operation: "string",
      amount: {
        type: "float",
        default: 0,
      },
      newBalance: "float",
      timestamp: "date",
    },
    primaryKey: "_id",
  };
}

const schemas = [Project, Transaction];

export { schemas };
