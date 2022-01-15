import { StatusBar } from 'expo-status-bar';
import { StyleSheet , Dimensions, SafeAreaView, FlatList, View, Image, Text, TouchableOpacity} from 'react-native';
import React  from 'react';


const { width , height} = Dimensions.get("window") ; 

const COLORS = {primary: "#282524" , white: "#fff"};

const slides = [
    {
        id:'1',
        image: require('../images/imagem1.png'),
        title:'Primeiro passo',
        descicao:'lorem lorem lorem lorem lrorerdfngndshghsbgsdbgsdgbhgbdsbhghdgbhdhgnewgjewugbgbren',
    },

    {
        id:'2',
        image: require('../images/imagem1.png'),
        title:'Segundo passo',
        descicao:'lorem lorem lorem lorem lrorerdfngndshghsbgsdbgsdgbhgbdsbhghdgbhdhgnewgjewugbgbren',
    },
    {
        id:'3',
        image: require('../images/imagem1.png'),
        title:'Primeiro passo',
        descicao:'lorem lorem lorem lorem lrorerdfngndshghsbgsdbgsdgbhgbdsbhghdgbhdhgnewgjewugbgbren',
    },
];

const Slide =({item}) => {
    return<View style={{alignItems:'center'}}>
        <Image source={item.image} style={{height:'75%', width,resizeMode:'contain'}}/>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.descricao}>{item.descicao}</Text>

    </View>
};





const Onboading =({navigation}) =>{
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef(null);





const trocaSlide = (e) =>{
    const contentOffsetx = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetx / width);
    setCurrentSlideIndex(currentIndex);

}

const btnProximo = ()=>{
    const nextSlideIndex  = currentSlideIndex + 1 ;
    if(nextSlideIndex != slides.length){
        const offset = nextSlideIndex*width ; 
        ref?.current?.scrollToOffset({offset});
        setCurrentSlideIndex(nextSlideIndex);
    }


}

const pular = () => {

    const lastSlideIndex = slides.length -1 ; 
    const offset = lastSlideIndex *width;
    ref?.current?.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);



}

const Footer = () =>{
    return(<View style={{height:height*0.25, justifyContent:'space-between', paddingHorizontal:20}}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20,}}>
          {slides.map((_, index) => (
            <View key={index}
              style={[ styles.indicator, currentSlideIndex == index && { backgroundColor: COLORS.white,width: 25,
                },
              ]}
            />
          ))}
        </View>
         <View style={{marginBottom:20}}>
             {
                 currentSlideIndex == slides.length -1 ?( <View style={{height:50}}>
                 <TouchableOpacity style={styles.btn}>
                     <Text style={{fontWeight:'bold', fontSize:15}} onPress={()=> navigation.replace('Home')}>LOGIN</Text>
                 </TouchableOpacity>
             </View> ): (

             <View style={{flexDirection:'row'}}>
                 <TouchableOpacity style={[ styles.btn,{borderColor: COLORS.white,borderWidth: 1,backgroundColor: 'transparent',},]} onPress={pular}>
                     <Text style={{fontWeight:'bold', fontSize:15, color:COLORS.white}}>PULAR</Text>
                 </TouchableOpacity>
                 <View style={{width: 15}} />
                 <TouchableOpacity style={styles.btn} onPress={btnProximo}>
                     <Text style={{fontWeight:'bold', fontSize:15}}>PROXIMO</Text>
                 </TouchableOpacity>
             </View>
                       )}
         </View>
    </View>
             );};

    

    return(<SafeAreaView style={{flex:1 , backgroundColor:COLORS.primary}}>
        <StatusBar backgroundColor={COLORS.primary}/>
        <FlatList 
        ref={ref}
        onMomentumScrollEnd={trocaSlide}
        pagingEnabled
        data={slides} contentContainerStyle={{height:height * 0.75}}
         horizontal
         showsHorizontalScrollIndicator ={false}
         renderItem={({item})=> <Slide item= {item}/>}/>
      <Footer/>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title:{
        color: COLORS.white,
        fontSize:22,
        fontWeight:'bold',
        marginTop:20, 
        textAlign:'center'
    },
    descricao:{
        color:COLORS.white,
        fontSize:13,
        maxWidth:'70%',
        marginTop:10, 
        textAlign:'center',
        lineHeight:23,
    },
    indicator:{
        height:2.5,
        width:10,
        backgroundColor:"grey",
        marginHorizontal:3,
        borderRadius:2,
    },
    btn:{
        flex:1,
        height:50,
        borderRadius:5,
        backgroundColor:COLORS.white,
        justifyContent:'center',
        alignItems:'center'
    }
});
export default Onboading ;