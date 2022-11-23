import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const DATASONG = [
  {
    title: 'death bed',
    artist: 'Powfu',
    artwork: require('../img/death-bed.jpg'),
    url: 'https://sample-music.netlify.app/death%20bed.mp3',
    duration: 2 * 60 + 53,
    id: '1',
  },
  {
    title: 'bad liar',
    artist: 'Imagine Dragons',
    artwork: require('../img/bad-liar.jpg'),
    url: 'https://sample-music.netlify.app/Bad%20Liar.mp3',
    duration: 2 * 60,
    id: '2',
  },
  {
    title: 'faded',
    artist: 'Alan Walker',
    artwork: require('../img/faded.jpg'),
    url: 'https://sample-music.netlify.app/Faded.mp3',
    duration: 2 * 60,
    id: '3',
  },
  {
    title: 'hate me',
    artist: 'Ellie Goulding',
    artwork: require('../img/hate-me.jpg'),
    url: 'https://sample-music.netlify.app/Hate%20Me.mp3',
    duration: 2 * 60,
    id: '4',
  },
  {
    title: 'Solo',
    artist: 'Clean Bandit',
    artwork: require('../img/solo.jpg'),
    url: 'https://sample-music.netlify.app/Solo.mp3',
    duration: 2 * 60,
    id: '5',
  },
  {
    title: 'without me',
    artist: 'Halsey',
    artwork: require('../img/without-me.jpg'),
    url: 'https://sample-music.netlify.app/Without%20Me.mp3',
    duration: 2 * 60,
    id: '6',
  },
];

const ItemSong = ({id, title, artist, artwork}) => (
  <View
    style={{
      flexDirection: 'row',
      padding: 8,
      marginVertical: 8,
      marginHorizontal: 8,
      backgroundColor: '#EEEEEE',
      borderRadius: 10,
    }}>
    <View >
      <Image style={{width: 70, height: 70, backgroundColor: 'red'}}  source={artwork}></Image>
    </View>
    <View style={{flex: 1}}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '800',
          color: 'black',
          fontStyle: 'italic',
          left: 20,
        }}>
        {artist}
      </Text>
      <Text style={{ left: 20}}>{title}</Text>
    </View>
  </View>
);

const Home = (props) => {
  const { navigation } = props
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    setFilteredDataSource(DATASONG);
    setMasterDataSource(DATASONG);
  }, []);

  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const renderItemSong = ({item}) => {
    const { id, title,artist, artwork } = item;
    return(
    <TouchableOpacity onPress={()=> navigation.navigate('Music',
    {
        id: id,
        title: title,
        artist: artist,
        artwork: artwork
    })}>
      <ItemSong id={item.id} title={item.title} artist={item.artist} artwork={item.artwork} />
    </TouchableOpacity>
  );
  }

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.viewImgText}>
          <View style={styles.viewText}>
            <Text style={styles.welcome}>Welcome back</Text>
            <Text style={styles.welcome1}>Do Minh Toan</Text>
          </View>
          <View style={styles.viewImg}>
            <Image style={styles.img} source={require('../img/avt.png')} />
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: '5%'}}>
          <TextInput
            style={styles.viewInput}
            onChangeText={text => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />
        </View>
      </View>

      <View style={{marginLeft: '2%'}}>
        <Text style={styles.textContext}>News Songgg</Text>
      </View>

      <View>
        <SafeAreaView>
          <FlatList
            style={{}}
            data={filteredDataSource}
            renderItem={renderItemSong}
            keyExtractor={item => item.id}
            ListFooterComponent={<View style={{height: windowheight}} />}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  item: {
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  title: {
    width: 60,
    height: 60,
  },

  header: {
    backgroundColor: '#FF8B3D',
    paddingTop: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  viewImgText: {
    flexDirection: 'row',
  },
  viewText: {
    flex: 1,
    marginLeft: '5%',
  },
  viewImg: {
    flex: 0.5,
    alignItems: 'flex-end',
    marginRight: '5%',
  },
  img: {
    width: 50,
    height: 50,
  },
  viewInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: '90%',
  },
  viewContentText: {
    flexDirection: 'row',
    padding: '3%',
  },
  viewContentText1: {
    flex: 1,
  },
  viewContentText2: {
    flex: 1,
    alignItems: 'flex-end',
  },
  welcome: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
  },
  welcome1: {
    fontSize: 25,
    fontWeight: '700',
    fontStyle: 'italic',
    color: 'white',
  },

  textContext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF8B3D',
  },
  textContext1: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000000',
  },
});
