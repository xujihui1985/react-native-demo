'use strict';

var React = require('react-native');
//need to close the React packager after install new node package, ot it doesn't work
var {
  Text, 
  View, 
  StyleSheet,
  TextInput,
  TouchableHighlight,  // react native doesn't have button, instead everything Touchablehightlight can be used as button
  Component,
} = React;

var SearchResult = require('./SearchResult');

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    };
  }

  handleChange(prop, value) {
    var state = this.state || {};
    state[prop] = value;
    this.setState(state);
  }

  onSearchPressed() {
    this.props.navigator.push({
      component: SearchResult,
      title: 'Results',
      passProps: {
        searchQuery: this.state.searchQuery
      }
    });
  }

  render()  {
    return (
      <View style={styles.container}>
        <TextInput 
          onChangeText={ this.handleChange.bind(this,'searchQuery') }
          style={styles.input} placeholder="Search Query" />
        <TouchableHighlight 
          onPress={this.onSearchPressed.bind(this)}
          style={styles.button}>
          <Text style={styles.buttonText}>
            Search
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    paddingTop: 100,
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

module.exports = Search;
