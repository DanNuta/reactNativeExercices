import {useState} from "react";
import { Input } from "../Input/Input";
import { style } from "./Form.style";
import { View, Button, Pressable } from "react-native";


export function Form(props){

  const [nume, setNume] = useState("");
  const [prenume, setPrenume] = useState("");


  function numeFn(value) {
    setNume((prev) => value);
  }

  function prenumeFn(value) {
    setPrenume((prev) => value);
  }


    return (
      
        <View style={style.form}>
          <Input
            placeholder="Introdu numele tau"
            value={nume}
            onChangeText={numeFn}
          />

          <Input
            placeholder="Introdu  tau"
            value={prenume}
            onChangeText={prenumeFn}
          />

          <View style={style.btnLogin}>
            <Button title="Submit" onPress={() => props.onAddData(nume, prenume)} />
            <Button title="Cancel" color="tomato" onPress={props.onAddForm} />
          </View>
        </View>
    )
}