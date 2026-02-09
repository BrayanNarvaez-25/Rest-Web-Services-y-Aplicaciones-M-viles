import { View, Text, StyleSheet, Button } from "react-native"

export const Productos = ({ navigation }) => {
    return <View style={styles.container}>
        <View style={styles.containerTitulo}>
            <Text>ESTOY EN PRODUCTOS</Text>
        </View>
        <View style={styles.containerBotones}>
            <Button
                title="IR A HOME"
                onPress={() => {
                    navigation.navigate("HomeNav");
                }}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerTitulo: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 10
    },
    containerBotones: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-start",
    },
});
