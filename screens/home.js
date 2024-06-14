import {View, Text, StyleSheet, Button} from "react-native";

export default function Home ({navigation}) {
    return(
        <View style= {styles.container}>
            <Text style = {styles.text}> Home Screen </Text>
            <Button title="Go to about screen" 
            onPress={ () => navigation.navigate ("about")}>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black"
    },
})