import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Field, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";

import Text from '../components/Text';
import Button from "../components/Button";
import Input from "../components/Input";
import ImagePicker from "../components/ImagePicker";
import LocationPicker from "../components/LocationPicker";
import Place from "../models/Place";
import {addPlace} from "../actions";
import styles from "../styles";
import Colors from "../constants/Colors";

export const formName = 'PLACE_FORM';
export const formFields = Object.freeze({
    title: 'title',
    address: 'address',
    image: 'image'
});

const CreatePlaceScreen = ({route, navigation: {navigate}, handleSubmit}) => {
    const dispatch = useDispatch();

    const [image, setImage] = useState('');
    const [imagePickerError, setImagePickerError] = useState('');
    const [location, setLocation] = useState(null);
    const [locationPickerError, setLocationPickerError] = useState('');

    const onSubmit = (formValues) => {
        if (!image) {
            setImagePickerError('Image is required.');
            return;
        }

        if (!location) {
            setLocationPickerError('Location is required.');
            return;
        }

        dispatch(addPlace(new Place(formValues[formFields.title], formValues[formFields.address], image, location.coords.latitude, location.coords.longitude)));

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
                    <Text style={{color: Colors.danger}}>{imagePickerError}</Text>
                    <LocationPicker onLocationSelect={setLocation} navigate={navigate} route={route}/>
                    <Text style={{color: Colors.danger}}>{locationPickerError}</Text>
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