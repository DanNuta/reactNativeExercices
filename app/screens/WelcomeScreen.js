import React, { useState } from "react";
import * as style from "./WelcomeStyle";
import { InputUser } from "../components/UserInput/InputUser";
import { Input } from "../components/Input/Input";

import {
  Button,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
} from "react-native";

const imagesBg = {
  uri: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571458.jpg&fm=jpg",
};

const imagesLogo = {
  width: 100,
  height: 100,
  uri: "https://images.freeimages.com/images/previews/09e/moon-art-1641879.png",
};

export function WelcomeScreen(props) {
  const [form, setForm] = useState(false);
  const [nume, setNume] = useState("");
  const [prenume, setPrenume] = useState("");
  const [data, setData] = useState([]);

  function numeFn(value) {
    setNume((prev) => value);
  }

  function prenumeFn(value) {
    setPrenume((prev) => value);
  }

  function addData() {
    const random = Math.floor(Math.random() * 1000);

    setData((prev) => [...prev, { nume: nume, prenume: prenume, id: random }]);

    setPrenume((prev) => "");
    setNume((prev) => "");
    setForm((prev) => !prev);
  }

  function addForm() {
    console.log(nume, prenume)
    setForm((prev) => !prev);
  }

  function deleteItem(uuid) {
    setData((prev) => {
      return prev.filter((item) => item.id !== uuid);
    });
  }

  return (
    <ImageBackground
      style={style.styles.background}
      resizeMode="cover"
      source={imagesBg}
    >
      <ScrollView>
        {data.map((item, i) => {
          return <InputUser onDelete={deleteItem} key={i} item={item} />;
        })}
      </ScrollView>

      {form && (
        <View style={style.styles.form}>
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

          <View style={style.styles.btnLogin}>
            <Button title="Submit" onPress={addData} />
            <Button title="Cancel" color="tomato" onPress={addForm} />
          </View>
        </View>
      )}

      <View style={style.styles.loginRed}>
        <Button title="Login" color="green" onPress={addForm} />
      </View>

      <View style={style.styles.loginBlue}></View>

      <View style={style.styles.logo}>
        <Image source={imagesLogo} />
        <Text>Simtitiva confrotabil si scapati de stres</Text>
      </View>
    </ImageBackground>
  );
}
