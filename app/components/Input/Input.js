import { TextInput } from "react-native";

export function Input(props){
    
  return (
    <TextInput
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
}
