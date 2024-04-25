<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Teslo API

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-0A1C25?style=for-the-badge&logo=railway&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-262627?style=for-the-badge&logo=typeorm&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socket.io&logoColor=white)

## Ejecutar en Desarrollo

1. Clonar el proyecto

2. Instalar las dependecnias
```
npm install
```

3. Clonar el archivo `.env.template` y renombrarlo a `.env`

4. Cambiar las variables de entorno

5. Levantar la base de datos

```
docker-compose up -d
```

6. Levantar el proyecto

```
npm run start
```

7. Ejecutar el seed

```
http://localhost:3000/api/seed
```

### Puedes probar los endpoints con `swagger`

```
http://localhost:3000/api
```

## Ejecutar en produccion

1. Puedes probrar los endpoints del proyecto con `swagger`

```
https://technicalshop-production.up.railway.app/api
```
