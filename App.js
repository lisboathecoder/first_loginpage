import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.icon}>
        <Image
          source={require("./assets/cap.svg")}
          style={{ width: 50, height: 50 }}
        />
      </View>

      <View style={styles.text}>
        <Text style={styles.title}>Bem-vindo de volta</Text>
        <Text style={styles.subtitle}>Acesse sua conta do SENAI</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        
        <View style={styles.inputWrapper}>
          <Image source={require("./assets/email.svg")} style={styles.inputIcon} />
          <TextInput 
            style={[styles.inputWithIcon]} 
            placeholder="seu@email.com" 
          />
        </View>
        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputWrapper}>
          <Image source={require("./assets/lock.svg")} style={styles.inputIcon} />
          <TextInput 
            style={[styles.inputWithIcon]} 
            placeholder="********" 
            secureTextEntry 
          />
          <Image source={require("./assets/eye.svg")} style={styles.inputIcon} />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar
             <Image
            source={require("./assets/arrow-right.svg")}
            style={styles.buttonIcon}
          /></Text> 
      
        </TouchableOpacity>
        <View>
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Ou entre com</Text>
            <View style={styles.dividerLine} />
          </View>
          <View style={styles.socialIcons}>
            <Image
              source={require("./assets/facebook.svg")}
              style={styles.icons}
            />
            <Image
              source={require("./assets/google.svg")}
              style={styles.icons}
            />
            <Image
              source={require("./assets/github.svg")}
              style={styles.icons}
            />
          </View>
        </View>
        <Text style={styles.signupText}>
          Não tem uma conta? <Text style={styles.signupLink}>Cadastre-se</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
  },

  icon: {
    shadowColor: "#7c3aed",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    borderRadius: 20,
    padding: 20,
    marginBottom: "15%",
    marginLeft: "40%",
  },

  text: {
    flex: 0.4,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: "25%",
  },

  title: {
    fontSize: 37,
    fontWeight: "bold",
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 20,
    color: "#666",
    fontWeight: "700",
  },

  inputContainer: {
    width: "100%",
    maxWidth: 400,
  },

  label: {
    fontSize: 14,
    marginBottom: 5,
    color: "#333",
    fontWeight: "550",
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#7d7d7d44",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15
  },

  forgotPassword: {
    color: "#7c3aed",
    textAlign: "right",
    marginBottom: 20,
    fontSize: 14,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#7c3aed",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#7c3aed",
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 10,
    fontWeight: "bold",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  signupText: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
  },

  signupLink: {
    color: "#7c3aed",
    fontWeight: "bold",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#5e5c5c",
    fontWeight: "bold",
    fontSize: 14,
  },

  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },

  icons: {
    width: 50,
    height: 50,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    opacity: 0.4,
  },
  inputWithIcon: {
    flex: 1,
    color: "#333",
    opacity: 0.4,
    fontWeight: "bold"
    },

    buttonIcon: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: 20,
      height: 20,
      marginLeft: 10,
      marginBottom: -4,
    },
});
