import React from 'react';
import { View, Text , Button , StyleSheet} from 'react-native';
const Dados = ({navigation})=>{ 

return (
    <View style={styles.container}>
        <Text>Chat</Text>
    </View>
  );
};


export default Dados ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },

});
