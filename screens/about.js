import {View, Text, StyleSheet} from "react-native";

export default function About ({navigation}) {
    return(
        <View>
            <Text> About Screen </Text>
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
        fontWeight: "bold"
    },
})