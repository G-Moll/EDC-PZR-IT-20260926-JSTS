# Proyecto TypeScript #

## 01. Estructura de Carpetas ##

> [!NOTE]  
> **Archivos y Carpetas Principales del Proyecto**  
> Algunos se generan automáticamente  
> Algunos se generan manualmente  

```
📁 ts-project/
├── 📁 node_modules/
│
├── 📁 dist/
│   ├── 📄 app.js
│   └── 📄 utils.js
│
├── 📁 src/
│   ├── 📄 app.ts
│   └── 📄 utils.ts
│
├── 📄 nodemon.json
├── 📄 package-lock.json
├── 📄 package.json
└── 📄 tsconfig.json

```



--- 

## 02. Crear Proyecto ##

02.01 Terminal o Cmd  
***Git-bash/Terminal/Bash/Zsh***: (*Windows, Linux, Mac*)  
***Símbolo del Sistema***:  (*Windows*)

> [!CAUTION]
> La **versión** instalada de **Node** debe ser al menos **22.6**

`Git-bash`
```bash
$ which node
$ node -v
```

`Windows Cmd`
```bash
$ where node
$ node -v
```



02.02 Terminal o Cmd  

> [!NOTE]  
> El comando `$ npm init -y`  
> - Crea un proyecto **NodeJS**  
> - Crea el archivo **package.json**  
> - Crea el archivo **package-lock.json**  

`Comandos`  
```bash
$ mkdir ts-project
$ cd ts-project
$ npm init -y
```


02.03 Instalar dependencias

> [!CAUTION]  
> La versión requerida de **TypeScript** deber ser la **5.9.2**  

> [!NOTE]
> El comando `$ npm i `  
> - Modifica el archivo **package.json**  
> - Crea la carpeta **node_modules**  

`Comandos`  
```bash
$ npm i -D typescript@5.9.2
$ npm i -D nodemon
```

02.04 **Crear Archivos de Configuración** en la **Carpeta Raíz del Proyecto**
- package.json
- tsconfig.json
- nodemon.json

> [!NOTE]
> Se pueden crear con el comando **`$ touch`**  
> Se pueden crear desde el **Sistema Operativo**  
> Se pueden crear desde el **Editor de Código**  

02.04.01 **Checar** archivo **package.json**  
Checar que exista el archivo ***package.json***  

02.04.02 **Crear** archivo **tsconfig.json**  
Crear el archivo ***tsconfig.json***  

02.04.03 **Crear** archivo **nodemon.json**  
Crear el archivo ***nodemon.json***  



---

## 03. Configurar Proyecto ##  
03.01 Configurar archivo **package.json**  
03.02 Configurar archivo **tsconfig.json**  
03.03 Configurar archivo **nodemon.json**  
