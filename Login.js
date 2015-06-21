'use strict';

var React = require('react-native');
//need to close the React packager after install new node package, ot it doesn't work
var buffer = require('buffer');
var {
  Text, 
  View, 
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight,  // react native doesn't have button, instead everything Touchablehightlight can be used as button
  Component,
  ActivityIndicatorIOS
} = React;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProgress: false,
      username: '',
      password: '',
      success: false
    };
  }

  handleChange(prop, value) {
    var state = this.state || {};
    state[prop] = value;
    this.setState(state);
  }

  onLoginPressed() {
    this.setState({showProgress: true});
    var authService = require('./AuthService');
    authService.login({
      username: this.state.username,
      password: this.state.password
    }, (result)=>{
      this.setState(Object.assign({
        showProgress: false
      }, result));
      if (result.success && this.props.onLogin) {
        this.props.onLogin();
      }
    });

  }

  render()  {
    var errorCtrl = <View />;
    if(!this.state.success && this.state.badCredentials) {
      errorCtrl = (
        <Text style={styles.error}>
          Username and password not correct
        </Text>
      );
    }

    if(!this.state.success && this.state.unknownError) {
      errorCtrl = (
        <Text style={styles.error}>
          unExpected error
        </Text>
      );
    }
    return (
      <View style={styles.container}>
        <Image style={styles.logo} 
          source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
        <Text style={styles.heading}>
           Github Browser 2
        </Text>
        <TextInput 
          onChangeText={ this.handleChange.bind(this,'username') }
          style={styles.input} placeholder="Github username" />
        <TextInput 
          onChangeText={this.handleChange.bind(this, 'password')}
          style={styles.input} placeholder="Github password" />
        <TouchableHighlight 
          onPress={this.onLoginPressed.bind(this)}
          style={styles.button}>
          <Text style={styles.buttonText}>
            Log in
          </Text>
        </TouchableHighlight>
        {errorCtrl}
        <ActivityIndicatorIOS 
          animating={this.state.showProgress} 
          size="large"
          style={styles.loader}
          />
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    paddingTop: 40,
    alignItems: 'center',
    padding: 10,
    flex: 1 // flexbox enable
  },
  title: {
    color: 'white'
  },
  logo: {
    width: 66,
    height: 55
  },
  heading: {
    fontSize: 30,
    color: 'white',
    marginTop: 15
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    color: 'white',
    fontSize: 18,
    borderWidth:1,
    borderColor: '#48bbec'
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  loader: {
    marginTop: 20
  },
  error: {
    marginTop: 20,
    color: 'red'
  }
});

module.exports = Login;
