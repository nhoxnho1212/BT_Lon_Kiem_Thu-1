import  React,{ Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
class NewClass extends Component {
    state = {
        data: [],
    };
    componentWillMount(){
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch('https://randomuser.me/api?results=10');
        const json = await response.json();
        this.setState({data: json.results});
    };
    render() {
        return (
          <View style={{padding: 30}}>
            <FlatList
              data={this.state.data}
              keyExtractor={(x, i) => i}
              renderItem={({ item }) =>
                <Text>
                  {`${item.name.title} ${item.name.first} ${item.name.last} ${item.gender} ${item.location.street.number}`}
                </Text>}    
            />
          </View>
        );
      }
      

}
export default NewClass;