import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from '@rneui/base'
import { useState } from 'react';
import { saveGrade, updateGrade } from '../services/GradeServices';

export const GradeForm = ({ navigation, route }) => {

    let isNew = true;
    let subjetR;
    let gradeR;

    if (route.params.notita != null) {
        isNew = false;
    }

    if (!isNew) {
        subjetR = route.params.notita.subjet;
        gradeR = route.params.notita.grade.toString();;
    }

    const [subjet, setSubjet] = useState(subjetR);
    const [grade, setGrade] = useState(gradeR);
    const [errorSubjet, setErrorSubetj] = useState();
    const [errorGrade, setErrorGrade] = useState();
    let hasError = false;

    const save = () => {
        setErrorGrade(null);
        setErrorSubetj(null);
        validate();

        if (!hasError) {
            if (isNew) {
                saveGrade({ subjet: subjet, grade: grade });
            } else {
                updateGrade({ subjet: subjet, grade: grade })
            }
            navigation.goBack();
            route.params.fnRefresh();
        };
    };

    const validate = () => {
        if (subjet == null || subjet == "") {
            setErrorSubetj("Debe ingresar una materia");
            hasError = true;
        };
        let gradeFloat = parseFloat(grade);
        if (grade == null || isNaN(gradeFloat) || gradeFloat < 0 || gradeFloat > 10) {
            setErrorGrade("Debe ingresar una nota entre 0 y 10");
            hasError = true;
        };
    };

    return <View style={styles.container}>
        <Input
            value={subjet}
            onChangeText={setSubjet}
            placeholder='Ejemplo: Matemáticas'
            label="Materia"
            errorMessage={errorSubjet}
            disabled={!isNew}
        />
        <Input
            value={grade}
            onChangeText={setGrade}
            placeholder='0 - 10'
            label="Nota"
            errorMessage={errorGrade}
            keyboardType='numeric'
        />
        <Button
            buttonStyle={styles.saveButton}
            title="Guardar"
            icon={{
                name: "save",
                type: "entypo",
                size: 15,
                color: "white"
            }}
            onPress={save}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    saveButton: {
        backgroundColor: "green"
    }
});
