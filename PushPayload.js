'use strict';

var React = require('react-native');
var {
  Text, 
  View, 
  ListView,
  Image,
  Component,
} = React;

class PushPayload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pushEvent: props.pushEvent
    };
  }

  render()  {
    return (
      <View style={{
        flex: 1,
        paddingTop: 80,
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}>
        <Image 
          source={{uri: this.state.pushEvent.actor.avatar_url}} 
          style={{
            height: 120,
            width: 120,
            borderRadius: 60
          }}/>
        <Text style={{
          paddingTop: 20,
          paddingBottom: 20,
          fontSize: 20
        }}>Hello there</Text>

      </View>
    )
  }
};

module.exports = PushPayload;
