import React, { useState } from "react";
import * as style from "./WelcomeStyle";
import { InputUser } from "../components/UserInput/InputUser";
import { Form } from "../components/Form/Form";

import {
  Button,
  ImageBackground,
  View,
  Image,
  Text,
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
  const [data, setData] = useState([]);

  function addData(nume, prenume) {
    const random = Math.floor(Math.random() * 1000);

    console.log(nume, prenume)

    setData((prev) => [...prev, { nume: nume, prenume: prenume, id: random }]);

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
          return <InputUser onDelete={deleteItem} key={i} item={item} />;
        })}
      </ScrollView>

      {form && (
       <Form onAddData={addData} 
             onAddForm={addForm}
             />
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
