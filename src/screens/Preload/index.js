import { useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export default function Preload({ navigation }) {
  const token = useSelector((state) => state.userReducer.token);

  useEffect(() => {
    if (!token) {
      // redirect login
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        })
      );
    } else {
      // redirect home
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'AppDrawer' }],
        })
      );
    }
  }, [token]);

  return null;
}
