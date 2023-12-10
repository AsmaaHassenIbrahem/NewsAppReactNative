import { View , Text, Pressable, StyleSheet, Image} from "react-native"
import { Colors } from "../utilities/Color";

function NewsItemScreen({title , image , onPress}){
    console.log(image)

    return (
        <View style ={styles.cardContainer}>
         <Pressable onPress={onPress}>
            <View >
                <Image style={styles.imageStyle} source={{uri: image }}/>

                <Text style={styles.textStyle} >{title}</Text>

                    </View>
                </Pressable>
        </View>
    );
}

export default NewsItemScreen

const styles = StyleSheet.create({

    cardContainer: {
        backgroundColor: Colors.primary, 
        borderRadius: 8, 
        padding: 16, 
        shadowColor: Colors.secondry, 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 4, 
        elevation: 10, // Required for Android 
        flexDirection: 'row',
        margin : 10
    },

    textStyle:{
        borderWith: 1,
        borderColor: Colors.secondry,
        color: Colors.textColor,
        width: '100%'
    },
    imageStyle :{
        resizeMode: 'contain',
        height: 100,
        width: 200,
    },

    textcontainer:{
        position: "absolute",
        width: 250,
        height: 30,
        bottom:0,
        padding: 5,
        backgroundColor: "rgba(0,0,0, 0.3)",
        borderBottomLeftRadius : 10,
        borderBottomRightRadius: 10
      },

})