import React,{useEffect,useState} from 'react';
import { Text, View, SafeAreaView,TouchableOpacity,FlatList,Image,StyleSheet,ActivityIndicator,Linking } from 'react-native';
import { SearchBar } from 'react-native-elements'; 
import { FontAwesome } from '@expo/vector-icons';


const GifScreen = () => {

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [Url, setUrl] = useState();

    useEffect(()=> {
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=B0BpQD2SFbDeoxRTxNVANCrGSDSq4Pjt&limit=40&rating=r')
        .then((res)=>res.json())
        .then((res)=>{
            setFilteredDataSource(res.data);
            setMasterDataSource(res.data);
            setUrl(res.data[0].images.downsized.url);
        })
    },[])

    const searchFunction = (text) => {
        if(text) {
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });

            setFilteredDataSource(newData);
            setSearch(text);
        }else{
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
        
    };

    const tweetNow = (item,index) => {
        const url = "https://twitter.com/intent/tweet?text=" + Url;
        Linking.openURL(url);
      };
    
      const whatsApp = (item,index) => {
        Linking.openURL("whatsapp://send?text="+ Url);
      };

   
    const ItemSeparatorView = () => {
        return(
            <View 
            style={{
                height:2,
                width:'100%',
                backgroundColor:'#C8C8C8'
            }}
            />
        )
    }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.headerbox}>
        <Image source={{uri:'https://giphy.com/static/img/about/stickers/logo-spin.gif'}} style={{width:60,height:60,right:70,top:34}} />
        <Text style={styles.headerboxTitle}>GIF's</Text>
        </View>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFunction(text)}
          onClear={(text) => searchFunction('')}
          placeholder="Type Here..."
          value={search}
        />
      <View style={styles.main}>
          {
              filteredDataSource.length < 4?
              <ActivityIndicator size={"large"} color={"ee82ee"}/>
              :
              <FlatList 
                data={filteredDataSource}
                keyExtractor={(item,index)=>{return item.id}}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={({item,index})=>(
                    <View style={styles.postView}>
                        <Text style={styles.titleTxt}>{item.title}</Text>
                        <View style={styles.imgView}>
                            <Image style={styles.img} source={{uri:item.images.downsized.url}}/>
                            <View style={styles.bottomButton}>
                            <TouchableOpacity style={styles.logo} onPress={whatsApp}>
                            <FontAwesome name="whatsapp" size={30} color="green" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.logo} onPress={tweetNow}>
                            <FontAwesome name='twitter' size={30} color="blue"/>
                            </TouchableOpacity>
                            </View>
                            </View>
                    </View>
                )}
              />
          }
      </View>
    </SafeAreaView>
  )
}
export default GifScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#3c3c3c',
        flex:1
    },
    headerbox:{
        width:450,
        height:100,
        backgroundColor:'#000000',
        alignItems:'center'
    },
    headerboxTitle:{
        fontSize:38,
        fontWeight:'700',
        lineHeight:38,
        color:'#FFFFFF',
        top:50,
        position:'absolute',
      
    },
    img:{
        resizeMode:'contain',
        width:300,
        height:300,
        
        
    },
    titleTxt:{
        paddingVertical:10,
        color:'#FFFFFF',
        fontWeight:'700',
        fontSize:16
    },
    main:{
        marginHorizontal:16,
        alignItems:'center'
    },
    imgView:{
        // backgroundColor:'#548d47'
        borderRadius:10,
        borderColor:'#FFFFFF',
        borderWidth:2
    },
    postView:{
        marginBottom:20
    },
    bottomButton:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    logo:{
        padding:15,
        marginBottom:10
      },
});