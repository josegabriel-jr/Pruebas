#Back Cascaron 
Recordatorio: Ejecuctar ```npm install ``` para resconstruir los modulos de Node.

#Crud  Usuario
------------
### Post
------------
**localhost:8080/api/user/**
body puede contener los datos de usuario. los datos son siguientes
**"nombre": "nombreEjemplo",
"apellido": "apellidoEjemplo",
"email": "example@gmail.com",
"sexo": "hombre",
"materias":[{
"_id": "6313b67e1b54ce2e2a037993"
}]**
### Put
------------
**localhost:8080/api/user/:id**
**id = _id  del usuario**
body puede contener los datos de usuario. los datos son siguientes
**{
"nombre": "nombreEjemplo",
"apellido": "apellidoEjemplo",
"email": "example@gmail.com",
"sexo": "hombre",
"materias":[{
"_id": "6313b67e1b54ce2e2a037993"
}]
}**
### Get
------------
**localhost:8080/api/user/**
para obtener el usuario se debe enviar en el body el email por el cual se buscara.
**{
"email": "example@gmail.com"
}**
### Delete
**localhost:8080/api/user/:id**
**id = _id**  del usuario, el cual permite eliminar un usuario

------------


------------

# Crud Materia
------------
### Post
------------
**localhost:8080/api/materia**

body puede contener los datos de materia. los datos son siguientes
**{
"nombre_materia": "example",
"semestre": 1,
"carrera": "carreraExample"
}**
###Put
------------
**localhost:8080/api/materia/:id**
id = _id de materia con el cual se busca en la MongoDB
**{
"nombre_materia": "example",
"semestre": 1,
"carrera": "carreraExample"
}**
### Get
------------
**localhost:8080/api/materia**
Se obtienen un ```Json``` las materias registradas
### Delete
------------
**localhost:8080/api/materia/:id**
**id = _id**  de materia el cual permite eliminar una materia