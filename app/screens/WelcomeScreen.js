import React, { useState } from "react";
import * as style from "./WelcomeStyle";
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

    console.log(random);
    setData((prev) => [...prev, { nume: nume, prenume: prenume, id: random }]);

    setPrenume((prev) => "");
    setNume((prev) => "");
    setForm((prev) => !prev);
  }

  function addForm() {
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
        return (
          
            <View style={style.styles.itemList}>
              <View>
                <Text>Nume: {item.nume}</Text>
                <Text>Prenume: {item.prenume}</Text>
              </View>

              <View>
                <Button title="Delete" onPress={() => deleteItem(item.id)} />
              </View>
            </View>
          
        );
      })}
      </ScrollView>

      {form && (
        <View style={style.styles.form}>
          <TextInput
            placeholder="Introdu numele tau"
            value={nume}
            onChangeText={numeFn}
          />

          <TextInput
            placeholder="Introdu prenumele tau"
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
