import {Avatar, Box, Button} from 'native-base';
import React, {useEffect} from 'react';
import {Text, SafeAreaView, ActivityIndicator} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import {actions} from '../store';
import {Logout} from '../store/auth/actions';
import {AuthState} from '../store/auth/reducerAuth';
import {IProfile} from '../store/profile/reducerProfile';

function Profile({
  profile,
  getProfile,
}: {
  profile: IProfile['profile'];
  getProfile: () => Promise<void>;
}) {
  const isLoading = false;
  useEffect(() => {
    getProfile();
  }, [getProfile]);

  const dispatch: any = useDispatch();
  const logoutFoo = () => {
    dispatch(Logout());
  };

  const token = useSelector((state: AuthState) => state.reducerAuth.authToken);

  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Box
          h="100%"
          flexDirection="column"
          justifyContent="space-between"
          p="5">
          <Box
            overflow="hidden"
            borderColor="coolGray.300"
            borderWidth="1"
            borderRadius="10"
            p="2"
            alignItems="center"
            flexDirection="row">
            {!!profile?.avatar && (
              <Avatar
                bg="green.500"
                source={{
                  uri: `${profile?.avatar}`,
                }}>
                {profile?.first_name}
              </Avatar>
            )}
            <Box alignContent="flex-start" ml="3">
              <Text>
                Name : {profile?.first_name} {profile?.last_name}
              </Text>
              <Text>Email: {token}</Text>
            </Box>
          </Box>
          <Box>
            <Button bgColor="#0081B4" borderRadius="10" onPress={logoutFoo}>
              Logout
            </Button>
          </Box>
        </Box>
      )}
    </SafeAreaView>
  );
}

const mapStateToProps = (state: {
  profileReducer: {
    profile: IProfile['profile'];
  };
}) => ({
  profile: state.profileReducer.profile,
});

const mapDispatchToProps = (dispatch: any) => ({
  getProfile: () => dispatch(actions.profile.getProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
