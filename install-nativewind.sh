#!/bin/bash
# Nombre del archivo CSS a crear
CSS_FILE="global.css"
echo "1. Instalando NativeWind y actualizando dependencias..."
npm install nativewind react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0
npm install --save-dev tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11
npm install react-native-worklets
npm update
npm upgrade
echo "2. Inicializando Tailwind CSS..."
npx tailwindcss init
echo "Modificando tailwind.config.js..."
cat > tailwind.config.js <<EOL
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["@/app/**/*", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOL
echo "Creando archivo $CSS_FILE con directivas Tailwind..."
cat > $CSS_FILE <<EOL
@tailwind base;
@tailwind components;
@tailwind utilities;
EOL
echo "3. Configurando babel.config.js..."
cat > babel.config.js <<EOL
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
EOL
echo "4. Creando metro.config.js..."
cat > metro.config.js <<EOL
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
const config = getDefaultConfig(__dirname)
module.exports = withNativeWind(config, { input: './$CSS_FILE' })
EOL
echo "Proceso completado. Revisa los archivos generados y configura tu proyecto según sea necesario."

