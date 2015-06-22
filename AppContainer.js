'use strict';

var React = require('react-native');
var {
  Text, 
  View, 
  StyleSheet,
  Component,
  TabBarIOS,
  NavigatorIOS
} = React;

var Feed = require('./Feed');
var Search = require('./Search');

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'feed'
    };
  }

  render()  {
    return (
      <TabBarIOS style={styles.container}>
        <TabBarIOS.Item
          title="Feed"
          selected={this.state.selectedTab === 'feed'} 
          onPress={()=> this.setState({selectedTab: 'feed'})} >
          <NavigatorIOS style={{
            flex: 1
          }} initialRoute={{
            component: Feed,
            title: 'Feed'
          }} />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Search"
          selected={this.state.selectedTab === 'search'} 
          onPress={()=> this.setState({selectedTab: 'search'})} >
          <NavigatorIOS style={{
            flex: 1
          }} initialRoute={{
            component: Search,
            title: 'Search'
          }} />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 50,
  }
});

module.exports = AppContainer;
