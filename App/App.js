import React from 'react';
import {
	View,
	KeyboardAvoidingView,
	TextInput,
	TouchableOpacity,
	Text,
	Image,
	StyleSheet,
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
					style={
						styles.input
					}
					placeholder="Login"
					autoCorrect={false}
					onChangeText={() => { }}
				>
				</TextInput>

				<TextInput
					style={
						styles.input
					}
					placeholder="Senha"
					autoCorrect={false}
					onChangeText={() => { }}
				>
				</TextInput>

				<TouchableOpacity

					style={
						styles.botaoAcessar
					}
				>
					<Text
					style={
						styles.textoBotao
					}
					>
						Acessar
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={
						styles.botaoCadastrar
					}
				>
					<Text
						style={
							styles.textoBotao
						}
					>
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

	input: {
		borderColor: '#000',
		borderRadius: 50,
		borderWidth: 0.3,
		marginBottom: 15,
		paddingLeft: 10,
	},

	botaoAcessar: {
		marginLeft: '20%',
		width: '60%',
		backgroundColor: '#77D777',
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
		height: 40,
		marginTop: 30
	},

	botaoCadastrar: {
		marginLeft: '20%',
		width: '60%',
		backgroundColor: '#FF6961',
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
		height: 40,
		marginTop: 10
	},

	textoBotao: {
		color: '#fff',
		fontWeight: "bold"
	}
});