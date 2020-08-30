import React from 'react';
import {View} from 'react-native';
import {Field, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";

import Text from '../components/Text';
import Button from "../components/Button";
import Input from "../components/Input";
import {addPlace} from "../actions";
import Place from "../models/Place";
import styles from "../styles";

export const formName = 'PLACE_FORM';
export const formFields = Object.freeze({
    title: 'title'
});

const CreatePlaceScreen = ({navigation: {navigate}, handleSubmit}) => {
    const dispatch = useDispatch();

    const onSubmit = (formValues) => {
        dispatch(addPlace(new Place(formValues[formFields.title])));
        navigate('PlacesScreen');
    };

    return (
        <View style={{...styles.screen, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: '70%', marginBottom: 70}}>
                <Text size={3}>Create New Place</Text>
                <Field name={formFields.title} component={Input} label="Title"/>
                <View style={{flexDirection: 'row'}}>
                    <Button title="Create" onPress={handleSubmit(onSubmit)}/>
                </View>
            </View>
        </View>
    );
};

const validate = formValues => {
    const errors = {};

    Object.entries(formValues).forEach(([key, value]) => {
        if (!value)
            errors[key] = 'This field is required.';
    });

    return errors;
};

export default reduxForm({
    form: formName,
    validate
})(CreatePlaceScreen);