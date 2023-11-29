import React ,{useState} from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  Switch,
  StatusBar,
  ImageBackground,
  Touchable,
  TouchableOpacity,
  SectionList,
  InputAccessoryView,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Separator = () => <View style={styles.separator} />;

const DATA=[
  {
    FlateListTitle:' * Ensures stable mobile app growth'
  },
  {
    FlateListTitle:' * Code reuse and pre-developed component'
  },
  {
    FlateListTitle:' * Live and hot reloading'
  },
  {
    FlateListTitle:' * Ready-made solutions and a vibrant library'
  },
  {
    FlateListTitle:' * Large developer community'
  },
  {
    FlateListTitle:' * Saves you a fortune on application development'
  },

];
const SeactionListData=[
  {
    title: 'Types Of Hooks',
    data:[' *  useState',' *  useEffect',' *  useContext',' *  useCallback',' *  useMemo',' *  useRef'],
  },
  {
    title:'React Fundamentals',
    data:[' *  components',' *  JSX',' *  props',' *  state'],
  },
];

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};
const backgroundimage={uri:'https://img.freepik.com/premium-vector/white-texture-round-striped-surface-white-soft-cover_547648-928.jpg'};
const FlateListItem = ({FlateListTitle}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{FlateListTitle}</Text>
  </View>
);
const App = () => {
  const InputAccessoryViewId='uniqueID';
  const initialText='';
  const [text , setText]=useState(initialText);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [count,setCount]=useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
      return(
      <SafeAreaView style={styles.container}> 
      <View style={styles.container}>
      <ImageBackground source={backgroundimage} resizeMode='cover' style={{transform:'',flex:1 ,justifyContent:'center'}}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
            <View style={{backgroundColor:'black',width:200,alignSelf:'center',borderRadius:60/2,}}>
              <Button
                title="Test Button"
                color={'white'}
                touchSoundDisabled={false}
                onPress={() => Alert.alert('Test Button clicked')}
              />
            </View>
            <Separator />
            <View><Text style={styles.text}> * React Native Advantage Using Flate List Example</Text></View>
            <FlatList
              data={DATA}
              renderItem={({item}) => <FlateListItem FlateListTitle={item.FlateListTitle} />}
              keyExtractor={item => item.id}
            />
            <Separator />
            <View style={{flexDirection:'row',padding:10,}}>
              <Image 
              source={logo} style={{margin:20,}}
              />
              <Image 
              source={logo} style={{margin:20,}}
              />
              <Image 
              source={logo} style={{margin:20,}}
              />
              <Image 
              source={logo} style={{margin:20,width: 60, height: 60, borderRadius: 60/ 2}}
              />
            </View>
            <Separator />
            <ScrollView keyboardDismissMode='interactive'>
                <TextInput
                inputAccessoryViewID={InputAccessoryViewId}
                style={styles.input}
                onChangeText={setText}
                value={text}
                placeholder="Text Box"
                keyboardAppearance='dark'
                keyboardType='phone-pad'
                secureTextEntry={true}

                />
            </ScrollView>
                <InputAccessoryView nativeID={InputAccessoryViewId}>
                      <Button 
                      onPress={() => setText(initialText)} title="Clear Your text ?" 
                      color='black'/>
                    {/* </Text> */}
                </InputAccessoryView>
            <View style={styles.container}>
              <Switch
                trackColor={{false: '#767577', true: 'green'}}
                thumbColor={'yellow'}
                ios_backgroundColor="black"
                onValueChange={toggleSwitch}
                value={isEnabled}     
              />
            </View>

            <Text style={{fontFamily:"Times New Roman" , fontSize:15 , fontVariant:'Bold'}}>
            React Native is an exciting framework that enables web developers to create robust mobile applications using their existing JavaScript knowledge. It offers faster mobile development, and more efficient code sharing across iOS, Android, and the Web, without sacrificing the end user's experience or application quality.
            </Text>
            <Separator/>
            <Text style={{fontFamily:'Times New Roman',fontSize:25,fontVariant:'bold',alignSelf:'center'}}> Touchable Opacity Count Is : {count}</Text>
            <TouchableOpacity style={{width:100,height:30,alignItems:'center',alignSelf:'center'}} onPress={onPress}>
                <Text style={{fontFamily:'Times New Roman',fontSize:25,}}>Hit Me</Text>
            </TouchableOpacity>
            <Separator/>
            <Text style={{fontFamily:"Times New Roman" , fontSize:15 , fontVariant:'Bold'}}>
            React Native is an exciting framework that enables web developers to create robust mobile applications using their existing JavaScript knowledge. It offers faster mobile development, and more efficient code sharing across iOS, Android, and the Web, without sacrificing the end user's experience or application quality.
            </Text>
            <Separator/>
            <SectionList
              sections={SeactionListData}
              keyExtractor={
                (item, index) => item + index
              }
              renderItem={
                          ({item}) => (
                          <View style={styles.SectionListItem}>
                            <Text style={styles.title}>{item}</Text>
                          </View>
                        )}
              renderSectionHeader={({section: {title}}) => (
                <Text style={styles.text}>{title}</Text>
              )}
            />
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'left',
    fontSize: 15,
    fontFamily:'Times New Roman',
    color:'black'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  item: {
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 16,
    color:'black',
  },
  logo: {
    width: 66,
    height: 58,
  },
  scrollView: {
    marginHorizontal: 5,
    fontFamily:'Times New Roman',
    fontSize:20,
  },
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 1,
    width:250,
    fontSize: 15,
    textAlign:'center',
    alignSelf:'center',
    fontWeight:'bold',
    fontFamily:'Times New Roman'
  },
  ScrollViewText: {
    fontSize: 30,
  },
  text: {
    fontSize: 15,
    textAlign:'left',
    fontFamily:'times new roman',
    fontWeight:'bold',
  },
  SectionListItem: {
    color:'white',
    padding: 2,
    marginVertical: 10,
  },
});
export default App;