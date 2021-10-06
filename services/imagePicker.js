import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'
import {Alert} from 'react-native';


export const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
    if(result.status !== 'granted') {
        Alert.alert('Insufficient permissions', [{text: 'Okay'}])
        return false;
    }
    return true;
}


export const takeImage = async () => {
    const result = await verifyPermissions()
    if(result) {
        return ImagePicker.launchCameraAsync()
    }
    return false;
    

}