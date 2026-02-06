import { StyleSheet, Text, View, Image, TextInput } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <View style={styles.text}>
        <Text style={styles.title}>Bem-Vindo de volta </Text>
        <Text style={styles.subtitle}> Acesse sua conta do SENAI</Text>
        </View>
    <View>
          <TextInput style={styles.email} placeholder='seu@email.com'/>
        <TextInput style={styles.pass} placeholder='********'/>
    </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  title: {
    fontWeight: 'bold'

  },

  subtitle: {
    fontWeight: 'light',
    
  },

  email: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 'auto'
  },

  pass: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 'auto'
  },


});
