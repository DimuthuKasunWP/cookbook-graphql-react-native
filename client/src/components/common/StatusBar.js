import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    backgroundColor: 'green',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12,
    paddingVertical: 5,
  },
});

class StatusBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: props.visible,
    };
  }

  componentWillMount() {
    this.visibility = new Animated.Value(this.props.visible ? 1 : 0);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      this.setState({
        visible: true,
      });
    }

    Animated.timing(
      this.visibility,
      {
        toValue: nextProps.visible ? 1 : 0,
        duration: 300,
      },
    ).start(() => this.setState({ visible: nextProps.visible }));
  }

  renderBar() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}> {this.props.text} </Text>
      </View>
    );
  }

  render() {
    const { visible, style, children, ...rest } = this.props;

    const containerStyle = {
      opacity: this.visibility.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
      transform: [
        {
          scale: this.visibility.interpolate({
            inputRange: [0, 1],
            outputRange: [1.1, 1],
          }),
        },
      ],
    };

    const combinedStyle = [containerStyle, style];

    return (
      <Animated.View style={this.state.visible ? combinedStyle : containerStyle} {...rest}>
        {this.state.visible ? this.renderBar() : null}
      </Animated.View>
    );
  }
}

export default StatusBar;
