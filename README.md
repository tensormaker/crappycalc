# CrappyCalc

## 📦 Corre el proyecto en tu entorno local

Asegurate que las versiones de [Node.js](https://nodejs.org/en/) `>= 16` y [`dfx`](https://internetcomputer.org/docs/current/developer-docs/build/install-upgrade-remove) `>= 0.14` se encuentren instaladas en tu sistema.

Levanta el proyecto con los siguientes comandos:

```sh
dfx start --clean --background # corre dfx como background
npm run setup # Instala paquetes, hace deploy de canisters, y genera type bindings

npm start # Inicia el servidor local
```

Si te sientes con ganas de quemar cycles: corre `dfx deploy --network ic` para subir el proyecto a la red de Internet Computer.

## 🛠️ Stack de tecnologias

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Prettier](https://prettier.io/)
- [Motoko](https://github.com/dfinity/motoko#readme)
- [Mops](https://mops.one)
- [mo-dev](https://github.com/dfinity/motoko-dev-server#readme)

## 📚 Documentación

- [Vite developer docs](https://vitejs.dev/guide/)
- [React quick start guide](https://react.dev/learn)
- [Internet Computer docs](https://internetcomputer.org/docs/current/developer-docs/ic-overview)
- [`dfx.json` reference schema](https://internetcomputer.org/docs/current/references/dfx-json-reference/)
- [Motoko developer docs](https://internetcomputer.org/docs/current/developer-docs/build/cdks/motoko-dfinity/motoko/)
- [Mops usage instructions](https://j4mwm-bqaaa-aaaam-qajbq-cai.ic0.app/#/docs/install)

## 💡 Tips

- Customiza tu codigo en el archivo `.prettierrc` y corre `npm run format`.
- Reduce la latencia de actualizacion agregando el flag `--emulator` a `dfx start`.
- Instala paquetes de Motoko corriendo `npx ic-mops add <package-name>`. Aquí hay una [lista de paquetes disponibles](https://mops.one/).
- Separa el manejo del frontend y el backend corriendo `npm run frontend` y `npm run backend` en terminales separadas.