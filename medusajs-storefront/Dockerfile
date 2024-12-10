# Usa la imagen oficial de Node.js 20
FROM node:20

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor
COPY . .

# Instala las dependencias usando Yarn
RUN yarn install --check-cache --ignore-engines

# Construye el proyecto de Next.js
RUN yarn run build

# Expone el puerto 3000 en el que la app Next.js normalmente corre
EXPOSE 8080

# Comando para iniciar la app
CMD ["npm", "run", "start"]
