import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16
  },
  picker: {
    borderWidth: 1,
    borderRadius: 10,
  },
  result: {
    alignItems: 'center'
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#edecea',
    fontSize: 16
  },
  //radiobutton
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  radioLabel: {
    marginRight: 10,
    marginBottom: 30,
  },
  circle: {
    height: 28,
    width: 28,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: '#000',
  },
  // header
  header: {
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  title: {
    color: 'skyblue',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 42,
    textAlign: 'center',
    margin: 10,
  },
  //
  row: {
    padding: 10,
  },
  // calculate button
  button: {
    marginVertical: 20,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "blue",
    width:'100%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color:"#fff",
    fontSize: 20
  },
});