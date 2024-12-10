# Usa la imagen oficial de Node.js 20
FROM node:20

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor
COPY . .

# Copia el archivo .env al contenedor (si estás usando un archivo .env)
# Si no lo estás usando, puedes omitir esta línea.
# COPY .env .env

# Specify the variable you need
ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_MEDUSA_BACKEND_URL
ARG NIXPACKS_NODE_VERSION
# Use the varible
# Establece las variables de entorno (opcional si ya están configuradas en Railway)
# Estas líneas no son necesarias si las variables de entorno ya están configuradas en Railway
# y son pasadas automáticamente al contenedor, pero las puedes dejar para mayor claridad.
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
ENV NEXT_PUBLIC_MEDUSA_BACKEND_URL=${NEXT_PUBLIC_MEDUSA_BACKEND_URL}
ENV NIXPACKS_NODE_VERSION=${NIXPACKS_NODE_VERSION}


# Instala las dependencias usando Yarn
RUN yarn install --check-cache --ignore-engines

# Construye el proyecto de Next.js
RUN yarn run build

# Expone el puerto 3000 en el que la app Next.js normalmente corre
# Asegúrate de que la aplicación esté configurada para usar este puerto
EXPOSE 8080

# Comando para iniciar la app
CMD ["npm", "run", "start"]
