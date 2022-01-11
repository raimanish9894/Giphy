import React from 'react';
import { Text, View, SafeAreaView,StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container} >
        <View style={styles.headerbox}>
        <Image source={{uri:'https://giphy.com/static/img/about/stickers/logo-spin.gif'}} style={{width:50,height:50,right:180,top:40}} />
      <Text style={styles.headerboxTitle}>GIPHY</Text>
      </View>
      <ScrollView>
      <View style={styles.main}>
          <Text style={styles.title}>Trending GIFS---</Text>
          <TouchableOpacity style={styles.logo} onPress={()=>navigation.navigate('Gif')} >
          <Image source={{uri:'https://media1.giphy.com/media/XCmy9kOLV6hZOcsrSe/200w.gif?cid=049ec2c0e7c51929fe94147bbe343383f77caa7253263eba&rid=200w.gif&ct=g'}} style={styles.Gif}></Image>
          </TouchableOpacity>

          <Text style={styles.title}>Trending Stickers---</Text>
          <TouchableOpacity style={styles.logo} onPress={()=>navigation.navigate('Sticker')} >
          <Image source={{uri:'https://media2.giphy.com/media/Ad2HCsIN9YruEGqAJY/200.gif?cid=049ec2c09gzrrasn8eebowr7vu0oz56s2lpe3s622vuopf5x&rid=200.gif&ct=s'}} style={styles.Gif}></Image>
          </TouchableOpacity>

          <Text style={styles.title}>Random GIFS</Text>
          <TouchableOpacity style={styles.logo} onPress={()=>navigation.navigate('Randomgif')} >
          <Image source={{uri:'https://media3.giphy.com/media/LVs3Nojg8g5vktWSOP/giphy.gif'}} style={styles.Gif}></Image>
          </TouchableOpacity>

          

          <Text style={styles.title}>Sticker Childrens</Text>
          <TouchableOpacity style={styles.logo} onPress={()=>navigation.navigate('kids')} >
          <Image source={{uri:'https://media2.giphy.com/media/9OymMibGXYUo1JlbCe/200.gif?cid=049ec2c09gzrrasn8eebowr7vu0oz56s2lpe3s622vuopf5x&rid=200.gif&ct=s'}} style={styles.Gif}></Image>
          </TouchableOpacity>

          <Text style={styles.title}>Sticker Individual</Text>
          <TouchableOpacity style={styles.logo} onPress={()=>navigation.navigate('adult')} >
          <Image source={{uri:'https://media1.giphy.com/media/7cWcSDahOGHTjumdNG/200.gif?cid=049ec2c09gzrrasn8eebowr7vu0oz56s2lpe3s622vuopf5x&rid=200.gif&ct=s'}} style={styles.Gif}></Image>
          </TouchableOpacity>
          

          

          


      </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default HomeScreen;

const styles = StyleSheet.create({
    
  container:{
    backgroundColor:'#FFFFFF',
    flex:1
  },
  headerbox:{
    width:450,
    height:100,
    backgroundColor:'#000000',
    
    alignItems:'center'
  },
  headerboxTitle:{
    fontSize:24,
    fontWeight:'700',
    lineHeight:24,
    color:'#FFFFFF',
    top:60,
    left:70,
    position:'absolute',
   },
   main:{
       flexDirection:'column',
       alignItems:'center',
       backgroundColor:'#3c3c3c',
       paddingTop:16
   },
   Gif:{
       height:300,
       width:300,
       resizeMode:'contain',
       
   },
   logo:{
    borderRadius:10,
    borderWidth:3,
    borderColor:'#f0f0f0',
    marginTop:30
   },
   title:{
       fontSize:18,
       fontWeight:'700',
       lineHeight:24,
       letterSpacing:2,
       color:"#f0f0f0",
       top:28,
       right:60
   }

})