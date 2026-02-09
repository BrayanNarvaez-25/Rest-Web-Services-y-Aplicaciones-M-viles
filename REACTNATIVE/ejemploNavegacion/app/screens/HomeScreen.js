import { View, Text, StyleSheet, Button } from "react-native"

export const Home = ({ navigation }) => {
    return <View style={styles.container}>
        <View style={styles.containerTitulo}>
            <Text>HOME</Text>
        </View>
        <View style={styles.containerBotones}>

            <Button
                title="IR A CONTACTOS"
                onPress={() => {
                    navigation.navigate("ContactsNav");
                }}
            />
            <Button
                title="IR A PRODUCTOS"
                onPress={() => {
                    navigation.navigate("ProductosNav");
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