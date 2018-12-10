/**
 * Created by ggoma on 2016. 11. 22..
 */
import React, {Component} from 'react';
import {
    Animated,
    ActivityIndicator,
    Dimensions,
    View,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';

const {width, height} = Dimensions.get('window');
export default class CardModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pressedStyle: {},

            org_width: width - 32,
            org_height: height / 5,

            top_width: new Animated.Value(width - 32),
            top_height: new Animated.Value(height / 5),
            bottom_width: new Animated.Value(width - 32),
            bottom_height: new Animated.Value(height / 6),
            content_height: new Animated.Value(0),

            top_pan: new Animated.ValueXY(),
            bottom_pan: new Animated.ValueXY(),
            content_pan: new Animated.ValueXY(),

            content_opac: new Animated.Value(0),
            button_opac: new Animated.Value(0),
            back_opac: new Animated.Value(0),
            plus: new Animated.Value(1),

            TopBorderRadius: 5,
            BottomBorderRadius: 0,
            offset: 0,
            pressed: false,
        };
    }

    renderTop() {
        var back = this.state.pressed
            ?
            <TouchableOpacity style={[styles.backButton]}>
                <Animated.View style={{opacity: this.state.back_opac}}>
                    <Text style={{color: 'white'}}></Text>
                </Animated.View>
            </TouchableOpacity>
            : <View/>;

        var borderStyles = !this.state.pressed ? {borderRadius: this.state.TopBorderRadius, borderBottomLeftRadius: 0} :
        {borderTopRightRadius: this.state.TopBorderRadius, borderTopLeftRadius: this.state.TopBorderRadius};
        return (
            <Animated.Image source={this.props.image}
                            style={[styles.top, borderStyles, {
                            width: this.state.top_width,
                            height: this.state.top_height,
                            transform: this.state.top_pan.getTranslateTransform()
                        }]}>
                {back}
            </Animated.Image>
        )
    }

    renderBottom() {
        return (
            <Animated.View style={[styles.bottom,
            {
                width: this.state.bottom_width,
                height: this.state.bottom_height,
                borderRadius: this.state.BottomBorderRadius,
                transform: this.state.bottom_pan.getTranslateTransform()
            }]}>

                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 4}}>
                        <Text style={{fontSize: 24, fontWeight: '700', paddingBottom: 8}}>{this.props.title}</Text>
                        <Text style={{fontSize: 12, fontWeight: '500', color: 'gray', paddingBottom: 10}}>{this.props.description}</Text>
                        <Text style={{fontSize: 12, fontWeight: '500', color: 'gray'}}>Ultima dia de visita: {this.props.due} </Text>
                    </View>
                </View>
            </Animated.View>
        )
    }

    renderContent() {

        return (
            <Animated.View style={{opacity: this.state.content_opac, marginTop: 40, width: width, height: this.state.content_height, zIndex: -1,
            backgroundColor: '#ddd', transform: this.state.content_pan.getTranslateTransform()}}>

                <View style={{backgroundColor: 'white', flex: 1, margin: 16, padding: 16}}>
                    <Text style={{fontSize: 24, fontWeight: '700', color: 'black'}}>Description</Text>
                    <Text style={{color: 'gray', paddingTop: 10}}>{this.props.content}</Text>
                </View>
            </Animated.View>
        )
    }

    render() {

        return (
            <View style={[styles.container, this.state.pressedStyle]}>
                <TouchableWithoutFeedback>
                    <View ref="container"
                          style={[{alignItems: 'center'}]}>
                        {this.renderTop()}
                        {this.renderBottom()}
                        {this.renderContent()}
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 16,
        marginTop: 16,
    },
    top: {
        marginBottom: 0,
        backgroundColor: 'blue'
    },
    bottom: {
        marginTop: 0,
        padding: 16,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: 'white'
    },
    backButton: {
        position: 'absolute',
        backgroundColor: 'transparent',
        top: 32,
        left: 10,
    }
})
