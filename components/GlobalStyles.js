import EStyleSheet from "react-native-extended-stylesheet";

export default globalStyles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: "2rem",
    color: "#555",
    fontFamily: "Montserrat_500Medium",
  },
  text: {
    fontSize: "1rem",
    color: "#555",
    fontFamily: "Montserrat_400Regular",
  },
  genericBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: "1.2rem",
    paddingVertical: "0.8rem",
  },
  greenBtn: {
    backgroundColor: "#9DC292",
    elevation: 5,
  },
  greenBtnRipple: {
    color: "#BAD4B3",
  },
  greenBtnText: {
    fontSize: "1rem",
    color: "#555",
    fontFamily: "Montserrat_600SemiBold",
    marginLeft: 6,
  },
  genericTextInput: {
    paddingHorizontal: "1.2rem",
    paddingVertical: "0.8rem",
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 10,
    marginVertical: 8,
    fontSize: "1.1rem",
  },
  genericErrorText: {
    color: "red",
  },
  genericModalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "1rem",
    paddingTop: "1rem",
    borderBottomWidth: 1,
    borderColor: "#999",
  },
  genericModalHeaderTitle: {
    fontSize: "1.3rem",
    color: "#555",
  },
});
