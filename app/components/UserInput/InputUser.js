import React from "react";
import * as style from "./InputUser.style";
import { View, Text, Button, Pressable } from "react-native";

export function InputUser({ item, onDelete }) {
  return (
    <View style={style.styles.itemList}>
        <Pressable android_ripple={{color: "red"}} onPress={() => onDelete(item.id)}>
        <Text>Nume: {item.nume}</Text>
        <Text>Prenume: {item.prenume}</Text>
    </Pressable>
      </View>
  );
}
