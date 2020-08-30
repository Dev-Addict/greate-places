import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Field, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";

import Text from '../components/Text';
import Button from "../components/Button";
import Input from "../components/Input";
import ImagePicker from "../components/ImagePicker";
import Place from "../models/Place";
import {addPlace} from "../actions";
import styles from "../styles";

export const formName = 'PLACE_FORM';
export const formFields = Object.freeze({
    title: 'title',
    address: 'address',
    image: 'image'
});

const CreatePlaceScreen = ({navigation: {navigate}, handleSubmit}) => {
    const dispatch = useDispatch();

    const [image, setImage] = useState('');

    const onSubmit = (formValues) => {
        dispatch(addPlace(new Place(formValues[formFields.title], formValues[formFields.address], image)));
        navigate('PlacesScreen');
    };

    return (
        <ScrollView>
            <View style={{...styles.screen, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{width: '70%', marginBottom: 70}}>
                    <Text size={2}>Create New Place</Text>
                    <Field name={formFields.title} component={Input} label="Title"/>
                    <Field name={formFields.address} component={Input} label="Address"/>
                    <ImagePicker onImageTake={setImage}/>
                    <View style={{flexDirection: 'row'}}>
                        <Button title="Create" onPress={handleSubmit(onSubmit)}/>
                    </View>
                </View>
            </View>
        </ScrollView>
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