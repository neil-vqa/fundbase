import { View, Text, Pressable, FlatList } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { useState, useEffect } from "react";
import { useObject, useRealm } from "@realm/react";
import Realm from "realm";
import globalStyles from "../GlobalStyles";
import { formatCurrency } from "../../services/helpers";
import { Feather } from "@expo/vector-icons";
import ProjectFundsModal from "./ProjectFundsModal";
import ProjectTransactionCard from "./ProjectTransactionCard";
import ProjectEditModal from "./ProjectEditModal";

const ProjectDetails = ({ route, navigation }) => {
  const { projectId } = route.params;

  const realm = useRealm();

  const [isFundModalOpen, setIsFundModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [currentOperation, setCurrentOperation] = useState(null);
  const [project, setProject] = useState({});

  const projectResult = useObject(
    "Project",
    new Realm.BSON.ObjectId(projectId)
  );

  const createTransaction = (
    realm,
    description,
    operation,
    amount,
    currentFunds
  ) => {
    return realm.create("Transaction", {
      _id: new Realm.BSON.ObjectId(),
      description: description,
      operation: operation,
      amount: amount,
      newBalance: currentFunds,
      timestamp: new Date(),
    });
  };

  const updateFunds = (description, operation, amount) => {
    realm.write(() => {
      if (operation === "add") {
        projectResult.funds += amount;
      } else if (operation === "deduct") {
        projectResult.funds -= amount;
      }

      const newTransaction = createTransaction(
        realm,
        description,
        operation,
        amount,
        projectResult.funds
      );

      projectResult.transactions.unshift(newTransaction);
      projectResult.updated = newTransaction.timestamp;
    });
    setIsFundModalOpen(false);
  };

  const updateDetails = (newName, newDescription) => {
    realm.write(() => {
      projectResult.name = newName;
      projectResult.description = newDescription;
    });
    setIsEditModalOpen(false);
  };

  const fundBtnHandler = (operation) => {
    setCurrentOperation(operation);
    setIsFundModalOpen(true);
  };

  useEffect(() => {
    setProject(projectResult);
  }, []);

  return (
    <View style={globalStyles.container}>
      <ProjectFundsModal
        isOpen={isFundModalOpen}
        setIsOpen={setIsFundModalOpen}
        operation={currentOperation}
        updateFunction={updateFunds}
        currentBalance={projectResult.funds}
      />

      <ProjectEditModal
        isOpen={isEditModalOpen}
        setIsOpen={setIsEditModalOpen}
        currentDetails={{
          name: projectResult.name,
          description: projectResult.description,
        }}
        updateFunction={updateDetails}
      />

      {/* Project main details */}
      <View style={[globalStyles.container, styles.container]}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{project.name}</Text>
          <Pressable
            style={styles.editBtn}
            onPress={() => setIsEditModalOpen(true)}
          >
            <Feather name="edit-3" size={22} color="#999" />
          </Pressable>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.fundTxtContainer}>
            <Text style={styles.fundTxt}>{formatCurrency(project.funds)}</Text>
            <Text style={styles.fundTxtLabel}>total funds</Text>
          </View>
          <View style={styles.fundBtnContainer}>
            <Pressable
              android_ripple={styles.fundBtnRipple}
              style={[styles.fundBtn, styles.addBtn]}
              onPress={() => fundBtnHandler("add")}
            >
              <Feather name="plus-circle" size={20} color="#555" />
              <Text style={styles.fundBtnText}>Add</Text>
            </Pressable>
            <Pressable
              style={[styles.fundBtn, styles.deductBtn]}
              android_ripple={styles.fundBtnRipple}
              onPress={() => fundBtnHandler("deduct")}
              disabled={project.funds <= 0}
            >
              <Feather name="minus-circle" size={20} color="#555" />
              <Text style={styles.fundBtnText}>Deduct</Text>
            </Pressable>
          </View>
          <View style={styles.projectText}>
            <Text style={styles.projectTextLabel}>Description</Text>
            <Text style={styles.projectTextDescription}>
              {project.description}
            </Text>
            <Text style={styles.projectTextLabel}>Last updated</Text>
            <Text style={styles.projectTextDescription}>
              {project.updated && project.updated.toLocaleString()}
            </Text>
          </View>
        </View>
      </View>

      {/* transaction history section */}
      <View style={[globalStyles.container, styles.container]}>
        <Text style={styles.projectTextLabel}>Transaction History</Text>
        <FlatList
          keyExtractor={(item) => item._id.toString()}
          data={projectResult.transactions}
          renderItem={({ item }) => {
            return (
              <ProjectTransactionCard details={item}></ProjectTransactionCard>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    padding: "1rem",
    margin: 6,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "1.5rem",
    color: "#555",
    fontFamily: "Montserrat_600SemiBold",
  },
  bodyContainer: {
    paddingHorizontal: "0.3rem",
  },
  fundTxtContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: "1rem",
    paddingVertical: "0.7rem",
    marginVertical: "0.6rem",
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
  },
  fundTxt: {
    fontSize: "1.8rem",
    color: "#555",
    fontFamily: "Montserrat_700Bold",
  },
  fundTxtLabel: {
    fontSize: "0.9rem",
    color: "#999",
    fontFamily: "Montserrat_500Medium",
  },
  fundBtnContainer: {
    flexDirection: "row",
  },
  fundBtn: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9DC292",
    borderRadius: 10,
    paddingHorizontal: "1.2rem",
    paddingVertical: "0.8rem",
    elevation: 5,
  },
  fundBtnText: {
    fontSize: "1rem",
    color: "#555",
    fontFamily: "Montserrat_600SemiBold",
    marginLeft: 6,
  },
  fundBtnRipple: {
    color: "#BAD4B3",
  },
  addBtn: {
    marginRight: "0.3rem",
  },
  deductBtn: {
    marginLeft: "0.3rem",
  },
  projectText: {
    paddingVertical: "1rem",
  },
  projectTextDescription: {
    fontFamily: "Montserrat_500Medium",
    marginBottom: 10,
  },
  projectTextLabel: {
    color: "#555",
    fontFamily: "Montserrat_500Medium",
  },
  editBtn: {
    backgroundColor: "#E2EDDE",
    padding: 5,
    borderRadius: 5,
  },
});

export default ProjectDetails;
