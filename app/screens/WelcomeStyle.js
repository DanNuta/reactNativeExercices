import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  loginRed: {
    width: "100%",
    height: 100,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },

  loginBlue: {
    width: "100%",
    height: 100,
    backgroundColor: "blue",
  },

  btn: {
    shadowOpacity: 0,
    elevation: 0,
  },

  logo: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },

  itemList: {
    backgroundColor: "lightblue",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
