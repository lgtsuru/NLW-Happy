/*
INSTALACAO DO EXPO
yarn global add expo-cli

Estava dando erro de versão, que foi resolvido instalando-se a ultima versão stable diretamente do site

yarn start (Dentro da pasta mobile)

MODULO DE MAPAS
expo install react-native-maps

<Callout tooltip={true}> Tootip fará a estilizacao do 0

<Feather name="plus" size={20} color="#FFF" /> "plus" é o nome do icone e pode ser encontrado no site do Feather Icons (Google)

INSTALACAO DE FONTES
expo install @expo-google-fonts/nunito expo-font

ROTEAMENTO
Procurar no Google 'React Navigation' > Read Docs
yarn add @react-navigation/native

Copiar tb o trecho para o EXPO
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

Clicar no link "Hello Ract Navigation"
yarn add @react-navigation/stack

BIBLIOTECA QUE FAZ AS CHAMADAS HTTP (CONEXAO COM O BACKEND)
yarn add axios

No emulador do EXPO é necessário que se utilize o IP do computador ao inves do localhost. Sempre que reiniciar a maquina, é necessário fazer a verificacao do IP (no arquivo API.TS)

{/*pagingEnabled vai fazer com que o scroll horizontal (da imagem no caso) seja sempre a pagina inteira, sem parar com as junções das fotos no meio da tela*/}

/*BIBLIOTECA DE IMAGENS
expo install expo-image-picker

import * as ImagePicker from 'expo-image-picker'; >> esse trecho permite importar todas as funções dentro do imagePicker  (hackzinho que permite que vc consiga importar varias coisas que estao sendo exportadas po rum modulo, dentro de um unico objeto)

useFocusEffect >> ativado sempre que a tela for carregada novamente