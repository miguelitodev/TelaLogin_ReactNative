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
						style={{
							color: '#77D777',

						}}
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
						style={{
							color: '#FF6961',
						}}
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
		borderBottomColor: '#000',
		borderBottomWidth: 0.3
	},

	botaoAcessar: {
		marginLeft: '25%',
		width: '50%',
		borderColor: '#77D777',
		borderWidth: 1,
		borderRadius: 4,
		alignItems: "center",
		justifyContent: "center",
		height: 30,
		marginTop: 30
	},

	botaoCadastrar: {
		marginLeft: '25%',
		width: '50%',
		borderColor: '#FF6961',
		borderWidth: 1,
		borderRadius: 4,
		alignItems: "center",
		justifyContent: "center",
		height: 30,
		marginTop: 10
	}
});