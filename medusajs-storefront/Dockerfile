# Usa la imagen de Nixpacks para crear la app
FROM heroku/buildpacks:nixpacks as build

# Establece el contexto para la construcción de la app
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor
COPY . .

# Configura la versión de Node.js (20) y Yarn (1.x)
RUN nixpkgs-install nodejs_20 yarn-1_x

# Instala las dependencias de Yarn
RUN yarn install --check-cache

# Construye el proyecto de Next.js
RUN yarn run build

# Exponer el puerto en el que se ejecutará la app
EXPOSE 8080

# Comando para iniciar la app
CMD ["npm", "run", "start"]
