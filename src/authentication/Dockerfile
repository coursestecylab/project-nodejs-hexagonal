# Usa una imagen base de Node.js
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código fuente
COPY . .

# Compila el código TypeScript
RUN npm run build

# Expone el puerto en el que la aplicación se ejecuta dentro del contenedor
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "dist/server.js"]
