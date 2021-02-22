import React, { useRef, useState, useEffect } from 'react';
import { StatusBar, Dimensions, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import Geocoder from 'react-native-geocoding';
import { MapsApi, Language, Currency, CurrencyStyle } from '../../config';
import useApi from '../../useApi';

import {
  Container,
  IntineraryArea,
  IntineraryItem,
  IntineraryLabel,
  IntineraryPoint,
  IntineraryTitle,
  IntineraryValue,
  IntineraryPlaceholder,
  RequestDetails,
  RequestDetail,
  RequestTitle,
  RequestValue,
  RequestButtons,
  RequestButton,
  RequestButtonText,
  Loading,
  Menu,
} from './styled';
import ModalDefault from '../../components/ModalDefault';
import ModalDriver from '../../components/ModalDriver';

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const api = useApi();
  const map = useRef();
  const [mapLocation, setMapLocation] = useState({
    center: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    zoom: 16,
    pitch: 0,
    altitude: 0,
    heading: 0,
  });
  const [fromLocation, setFromLocation] = useState({});
  const [toLocation, setToLocation] = useState({});
  const [showDirections, setShowDirections] = useState(false);
  const [requestDistance, setRequestDistance] = useState(0);
  const [requestTime, setRequestTime] = useState(0);
  const [requestPrice, setRequestPrice] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalField, setModalField] = useState('');
  const [loading, setLoading] = useState(false);
  const [visibleModalDriver, setVisibleModalDriver] = useState(false);
  const [driver, setDriver] = useState({});

  useEffect(() => {
    Geocoder.init(MapsApi, { language: Language });
    getCurrentPosition();
  }, []);

  useEffect(() => {
    if (toLocation && toLocation.center) {
      setShowDirections(true);
    }
  }, [toLocation]);

  useEffect(() => {
    if (fromLocation && fromLocation.center) {
      setMapLocation(fromLocation);
    }
  }, [fromLocation]);

  const getCurrentPosition = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access location was denied');
      return;
    }

    let { coords } = await Location.getCurrentPositionAsync({});

    const geolocation = await Geocoder.from(coords.latitude, coords.longitude);

    if (geolocation.results.length > 0) {
      const locat = {
        name: geolocation.results[0].formatted_address,
        center: {
          latitude: coords.latitude,
          longitude: coords.longitude,
        },
        zoom: 16,
        pitch: 0,
        altitude: 0,
        heading: 0,
      };
      setMapLocation(locat);
      setFromLocation(locat);
    }
  };

  const handleFrom = () => {
    setModalTitle('Escolha uma origem');
    setModalField('from');
    setModalShow(true);
  };

  const handleTo = async () => {
    setModalTitle('Escolha um destino');
    setModalField('to');
    setModalShow(true);
  };

  const handleDirections = async (response) => {
    setRequestDistance(response.distance);
    setRequestTime(response.duration);

    const res = await api.getPrice(response.distance);

    if (!res.error) {
      setRequestPrice(res.price);
    }

    map.current.fitToCoordinates(response.coordinates, {
      edgePadding: {
        left: 50,
        right: 50,
        bottom: 50,
        top: 500,
      },
    });
  };

  const handleGo = async () => {
    setLoading(true);
    const response = await api.findDriver({
      fromlat: fromLocation.center.latitude,
      fromlng: fromLocation.center.longitude,
      tolat: toLocation.center.latitude,
      tolng: toLocation.center.longitude,
    });
    setLoading(false);

    if (!response.error) {
      setDriver(response.driver);
      dispatch({
        type: 'ADD_TRAVEL',
        payload: {
          driver: response.driver,
          from: fromLocation.name,
          to: toLocation.name,
        },
      });
      setVisibleModalDriver(true);
      handleCancel();
    } else {
      alert(response.error);
      return;
    }
  };

  const handleCancel = () => {
    setToLocation({});
    setShowDirections(false);
    setRequestDistance(0);
    setRequestTime(0);
    setRequestPrice(0);
    setMapLocation(fromLocation);
  };

  const handleMapChange = async () => {
    const cam = await map.current.getCamera();
    cam.altitude = 0;
    setMapLocation(cam);
  };

  const handleActionModal = (field, item) => {
    setModalShow(false);
    const locat = {
      name: item.address,
      center: {
        latitude: item.latitude,
        longitude: item.longitude,
      },
      zoom: 16,
      pitch: 0,
      altitude: 0,
      heading: 0,
    };

    switch (field) {
      case 'from':
        setFromLocation(locat);
        break;
      case 'to':
        setToLocation(locat);
        break;
    }
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <ModalDriver
        data={driver}
        visible={visibleModalDriver}
        closeAction={() => setVisibleModalDriver(false)}
      />
      <ModalDefault
        visible={modalShow}
        title={modalTitle}
        closeAction={() => setModalShow(false)}
        field={modalField}
        clickAction={handleActionModal}
      />
      <MapView
        ref={map}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        provider="google"
        camera={mapLocation}
        onRegionChangeComplete={handleMapChange}
      >
        {fromLocation && fromLocation.center && (
          <MapView.Marker pinColor="red" coordinate={fromLocation.center} />
        )}

        {toLocation && toLocation.center && (
          <MapView.Marker pinColor="red" coordinate={toLocation.center} />
        )}

        {showDirections && (
          <MapViewDirections
            origin={fromLocation.center}
            destination={toLocation.center}
            strokeWidth={5}
            strokeColor="black"
            apikey={MapsApi}
            onReady={handleDirections}
          />
        )}
      </MapView>

      <Menu underlayColor="transparent" onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={32} color="black" />
      </Menu>

      <IntineraryArea>
        <IntineraryItem onPress={handleFrom} underlayColor="#EEE">
          <>
            <IntineraryLabel>
              <IntineraryPoint color="#0000FF" />
              <IntineraryTitle>Origem</IntineraryTitle>
            </IntineraryLabel>
            {fromLocation && fromLocation.name && (
              <IntineraryValue>{fromLocation.name}</IntineraryValue>
            )}

            {!fromLocation ||
              (!fromLocation.name && (
                <IntineraryPlaceholder>
                  Escolha um local de origem
                </IntineraryPlaceholder>
              ))}
          </>
        </IntineraryItem>
        <IntineraryItem onPress={handleTo} underlayColor="#EEE">
          <>
            <IntineraryLabel>
              <IntineraryPoint color="#00FF00" />
              <IntineraryTitle>Destino</IntineraryTitle>
            </IntineraryLabel>
            {toLocation && toLocation.name && (
              <IntineraryValue>{toLocation.name}</IntineraryValue>
            )}

            {!toLocation ||
              (!toLocation.name && (
                <IntineraryPlaceholder>
                  Escolha um local de destino
                </IntineraryPlaceholder>
              ))}
          </>
        </IntineraryItem>

        {fromLocation &&
          toLocation &&
          fromLocation.center &&
          toLocation.center && (
            <IntineraryItem>
              <>
                <RequestDetails>
                  <RequestDetail>
                    <RequestTitle>Distância</RequestTitle>
                    <RequestValue>
                      {requestDistance > 0
                        ? `${requestDistance.toFixed(1)}km`
                        : '---'}
                    </RequestValue>
                  </RequestDetail>
                  <RequestDetail>
                    <RequestTitle>Tempo</RequestTitle>
                    <RequestValue>
                      {requestTime > 0
                        ? `${requestTime.toFixed(0)}mins`
                        : '---'}
                    </RequestValue>
                  </RequestDetail>
                  <RequestDetail>
                    <RequestTitle>Preço</RequestTitle>
                    <RequestValue>
                      {requestPrice > 0
                        ? `${requestPrice.toLocaleString(Language, {
                            style: CurrencyStyle,
                            currency: Currency,
                          })}`
                        : '---'}
                    </RequestValue>
                  </RequestDetail>
                </RequestDetails>
                <RequestButtons>
                  <RequestButton color="#00ff00" onPress={handleGo}>
                    <RequestButtonText>Solicitar motorista</RequestButtonText>
                  </RequestButton>
                  <RequestButton color="#ff0000" onPress={handleCancel}>
                    <RequestButtonText>Cancelar</RequestButtonText>
                  </RequestButton>
                </RequestButtons>
              </>
            </IntineraryItem>
          )}
      </IntineraryArea>
      {loading && (
        <Loading>
          <ActivityIndicator size="large" color="#FFFFFF" />
        </Loading>
      )}
    </Container>
  );
}
