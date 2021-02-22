import React, { useState, useEffect } from 'react';
import Geocoder from 'react-native-geocoding';
import { Modal } from 'react-native';
import { MapsApi, Language } from './../../config';

import {
  Area,
  Header,
  Close,
  Text,
  Input,
  Body,
  Result,
  ResultText,
} from './styled';

let timer;

export default function ModalDefault({
  visible,
  title,
  field,
  closeAction,
  clickAction,
}) {
  const [addresses, setAddresses] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    Geocoder.init(MapsApi, { language: Language });
  }, []);

  useEffect(() => {
    if (term) {
      // pesquisar
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(async () => {
        const geolocation = await Geocoder.from(term);

        if (geolocation.results.length > 0) {
          let tempAddress = [];
          for (let i in geolocation.results) {
            tempAddress.push({
              address: geolocation.results[i].formatted_address,
              latitude: geolocation.results[i].geometry.location.lat,
              longitude: geolocation.results[i].geometry.location.lng,
            });
          }
          setAddresses(tempAddress);
        } else {
          setAddresses([]);
        }
      }, 1000);
    }
  }, [term]);

  const handleClick = (item) => {
    clickAction(field, item);
  };

  return (
    <Modal
      visible={visible}
      transparent={false}
      animationType="slide"
      onShow={() => {
        setAddresses([]);
        setTerm('');
      }}
    >
      <Area>
        <Header>
          <Close onPress={closeAction} underlayColor="transparent">
            <Text>X</Text>
          </Close>
          <Input
            value={term}
            placeholder={title}
            placeholderTextColor="#999"
            autoFocus={true}
            onChangeText={(t) => setTerm(t)}
            autoCorrect={false}
          />
        </Header>
        <Body>
          {addresses.length > 0 &&
            addresses.map((item, key) => (
              <Result key={key} onPress={() => handleClick(item)}>
                <ResultText>{item.address}</ResultText>
              </Result>
            ))}
        </Body>
      </Area>
    </Modal>
  );
}
