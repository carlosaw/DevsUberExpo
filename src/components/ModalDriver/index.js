import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { AirbnbRating } from 'react-native-ratings';
import { Modal } from 'react-native';
import useApi from '../../useApi';

import {
  Area,
  Name,
  Avatar,
  Stars,
  Star,
  Info,
  Car,
  Color,
  Plate,
  Button,
  Text,
  Title,
  TextRating,
} from './styled';

export default function ModalDriver({ visible, data, closeAction }) {
  const api = useApi();
  const [showStars, setShowStars] = useState(false);

  const handleRating = async (rating) => {
    await api.setRating(rating);
    setShowStars(false);
    closeAction();
    alert('Obrigado pela viagem');
  };

  return (
    <Modal
      visible={visible}
      transparent={false}
      animationType="slide"
      onShow={() => {
        setShowStars(false);
      }}
    >
      <Area>
        <Title>Seu motorista é:</Title>
        <Avatar source={{ uri: data.avatar }} />
        <Name>{data.name}</Name>
        <Star>Avaliação do motorista</Star>
        <Stars>
          {data.stars >= 1 && (
            <AntDesign name="star" size={24} color="yellow" />
          )}
          {data.stars >= 2 && (
            <AntDesign name="star" size={24} color="yellow" />
          )}
          {data.stars >= 3 && (
            <AntDesign name="star" size={24} color="yellow" />
          )}
          {data.stars >= 4 && (
            <AntDesign name="star" size={24} color="yellow" />
          )}
          {data.stars >= 5 && (
            <AntDesign name="star" size={24} color="yellow" />
          )}
        </Stars>

        {!showStars && (
          <>
            <Info>
              <Car>{data.carName}</Car>
              <Color>{data.carColor}</Color>
              <Plate>{data.carPlate}</Plate>
            </Info>
            <Button onPress={() => setShowStars(true)}>
              <Text>Encerrar viagem</Text>
            </Button>
          </>
        )}

        {showStars && (
          <>
            <TextRating>Avalie o motorista para encerrar a viagem</TextRating>
            <AirbnbRating
              count={5}
              reviews={['Terrível', 'Ruim', 'Bom', 'Muito bom', 'Ótimo']}
              defaultRating={5}
              onFinishRating={handleRating}
            />
          </>
        )}
      </Area>
    </Modal>
  );
}
