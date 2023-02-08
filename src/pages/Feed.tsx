import {AspectRatio, Box, Center} from 'native-base';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Image,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {actions} from '../store';
import {FeedState} from '../store/feed/reducerFeed';

interface FeedProps {
  feedData: FeedState['feedData'];
  getFeed: (page: number) => Promise<void>;
}

function Feed({getFeed, feedData}: FeedProps) {
  useEffect(() => {
    getFeed(1);
  }, [getFeed]);

  const fetchMoreFeed = () => {
    if (!feedData.isLoading) {
      getFeed(feedData.page + 1);
    }
  };

  const loadProducts = () => {
    getFeed(1);
  };

  return (
    <SafeAreaView style={styles.container}>
      {feedData.isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={feedData.feed}
          keyExtractor={({id}, _index) => id}
          renderItem={({item}) => (
            <Box alignItems="center">
              <Box
                mt="2.5"
                w="95%"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: 'coolGray.600',
                  backgroundColor: 'gray.700',
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: 'gray.50',
                }}>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image
                    source={{
                      uri: `${item.download_url}`,
                    }}
                    alt={item.author}
                  />
                </AspectRatio>
                <Center
                  w="100%"
                  bg="black"
                  opacity="0.7"
                  alignItems="flex-start"
                  _text={{
                    color: 'white',
                    fontWeight: '700',
                    fontSize: 'xs',
                  }}
                  position="absolute"
                  bottom="0"
                  px="3"
                  py="1.5">
                  {item.author}
                </Center>
              </Box>
            </Box>
          )}
          onEndReachedThreshold={0.2}
          onEndReached={fetchMoreFeed}
          refreshControl={
            <RefreshControl
              refreshing={feedData.isRefreshing}
              onRefresh={loadProducts}
            />
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

const mapStateToProps = (state: {
  feedReducer: {
    feedData: FeedState['feedData'];
  };
}) => ({
  feedData: state.feedReducer.feedData,
});

const mapDispatchToProps = (dispatch: any) => ({
  getFeed: (page: number) => dispatch(actions.feed.getFeed(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
