/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Init} from '../store/auth/actions';
import {AuthState} from '../store/auth/reducerAuth';
import AuthStack from './AuthStack';
import TabNavigation from './TabNavigation';

const RootNavigation = () => {
  const token = useSelector((state: AuthState) => state.reducerAuth.authToken);
  const [loading, setLoading] = useState(true);
  const dispatch: any = useDispatch();

  useEffect(() => {
    const init = () => {
      setLoading(true);
      dispatch(Init());
      setLoading(false);
    };
    init();
  }, []);

  if (loading) {
    <View>
      <ActivityIndicator />
    </View>;
  }

  return (
    <NavigationContainer>
      {token ? <TabNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;
