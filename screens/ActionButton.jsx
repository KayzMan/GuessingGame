import {Component} from 'react';
import {
  TouchableHighlight,
  TouchableNativeFeedback,
  Text,
  Platform,
  View,
} from 'react-native';

class ActionButton extends Component {
  state = {};
  render() {
    const {text, style, clickedColor, onPress} = this.props;
    return Platform.OS === 'android' ? (
      <TouchableNativeFeedback onPress={onPress}>
        <View style={style.button}>
          <Text style={style.text}>{text}</Text>
        </View>
      </TouchableNativeFeedback>
    ) : (
      <TouchableHighlight
        underlayColor={clickedColor}
        style={style.button}
        onPress={onPress}>
        <Text style={style.text}>{text}</Text>
      </TouchableHighlight>
    );
  }
}

export default ActionButton;
