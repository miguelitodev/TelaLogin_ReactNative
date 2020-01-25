import React from 'react';
import {
	View,
	KeyboardAvoidingView,
	TextInput,
	TouchableOpacity,
	Text,
	Image,
	StyleSheet
} from 'react-native';

export default function App() {
	return (
		<KeyboardAvoidingView
			style={
				styles.background
			}
		>
			<View
				style={
					styles.containerLogo
				}
			>
				<Image
					style={styles.tamanhoLogo}
					source={
						require('./src/assets/iconeLogoNeedy.png')
					}
				/>
			</View>
			<View style={styles.container}>

				<TextInput
					placeholder="Login"
					autoCorrect={false}
					onChangeText={() => { }}
				>
				</TextInput>

				<TextInput
					placeholder="Senha"
					autoCorrect={false}
					onChangeText={() => { }}
				>
				</TextInput>

				<TouchableOpacity
					
					style = {
						styles.botaoAcessar
					}
				>
					<Text>
						Acessar
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style = {
						styles.botaoCadastrar
					}
				>
					<Text>
						Cadastrar-se
					</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"

	},

	containerLogo: {
		flex: 1,
		justifyContent: "center",
	},

	container: {
		flex: 1,
		width: '70%',
	},

	botaoAcessar: {
		marginLeft: '25%',
		width: '50%',
		backgroundColor: '#77DD77',
		borderRadius: 4,
		alignItems: "center",
		justifyContent: "center",
		height: 30,
		marginTop: 10
	},

	botaoCadastrar: {
		marginLeft: '25%',
		width: '50%',
		backgroundColor: '#FF6961',
		borderRadius: 4,
		alignItems: "center",
		justifyContent: "center",
		height: 30,
		marginTop: 10
	}
});