import React from "react";
import * as style from "./InputUser.style";
import { View, Text, Button } from "react-native";

export function InputUser({ item, onDelete }) {
  return (
    <View style={style.styles.itemList}>
      <View>
        <Text>Nume: {item.nume}</Text>
        <Text>Prenume: {item.prenume}</Text>
      </View>

      <View>
        <Button title="Delete" onPress={() => onDelete(item.id)} />
      </View>
    </View>
  );
}
