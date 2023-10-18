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
    },
    primaryKey: "_id",
  };
}

const schemas = [Project];

export { schemas };
