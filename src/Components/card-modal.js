import React from 'react';
import {
    Animated,
    Dimensions,
    View,
    TouchableWithoutFeedback,
    StyleSheet,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';

const {width, height} = Dimensions.get('window');

const CardModal = ({ onPress, isEnabled, image, title, text, description, due, content, ...otherProps }) => {
const onCardModelPress = isEnabled ? onPress : () => null;

const top_width= new Animated.Value(width - 32);
const top_height= new Animated.Value(height / 5);
const bottom_width= new Animated.Value(width - 32);
const bottom_height= new Animated.Value(height / 6);
const top_pan= new Animated.ValueXY();
const bottom_pan= new Animated.ValueXY();
const content_height= new Animated.Value(0);
const content_pan= new Animated.ValueXY();
const content_opac= new Animated.Value(0);

const TopBorderRadius= 5;
const BottomBorderRadius= 0;

var borderStyles = {borderTopRightRadius: TopBorderRadius, borderTopLeftRadius: TopBorderRadius};
        
return (
    <View {...otherProps} style={[styles.container]}>
    <TouchableWithoutFeedback  onPress={onCardModelPress}>
        <View style={[{alignItems: 'center'}]}>
            <Animated.Image
             source= {image}
                        style={[styles.top, borderStyles, {
                        width: top_width,
                        height: 80, //top_height,
                        transform: top_pan.getTranslateTransform()
                    }]}>
            </Animated.Image>
            <Animated.View style={[styles.bottom,
            {
                width: bottom_width,
                height: bottom_height,
                borderRadius: BottomBorderRadius,
                transform: bottom_pan.getTranslateTransform()
            }]}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 4}}>
                        <Text style={{fontSize: 24, fontWeight: '700', paddingBottom: 8}}>{title}</Text>
                        <Text style={{fontSize: 12, fontWeight: '500', color: 'gray', paddingBottom: 10}}>{description}</Text>
                        <Text style={{fontSize: 12, fontWeight: '500', color: 'gray'}}>Ultima dia de visita: {due} </Text>
                    </View>
                </View>
            </Animated.View>
            <Animated.View style={{opacity: content_opac, marginTop: 40, width: width, height: content_height, zIndex: -1,
            backgroundColor: '#ddd', transform: content_pan.getTranslateTransform()}}>

                <View style={{backgroundColor: 'white', flex: 1, margin: 16, padding: 16}}>
                    <Text style={{fontSize: 24, fontWeight: '700', color: 'black'}}>Description</Text>
                    <Text style={{color: 'gray', paddingTop: 10}}>{content}</Text>
                </View>
            </Animated.View>
        </View>
    </TouchableWithoutFeedback>
    </View>
    )
}

CardModal.propTypes = {
    onPress: PropTypes.func,
    isEnabled: PropTypes.bool,
    title: PropTypes.string
    }
    
    CardModal.defaultProps = {
    onPress: () => null,
    title: '',
    isEnabled: true
    }

export default CardModal

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 16,
        marginTop: 16,
    },
    top: {
        marginBottom: 0,
        backgroundColor:  'rgba(236,25,40,0.9)'
    },
    bottom: {
        marginTop: 0,
        padding: 16,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: 'white'
    }
})
