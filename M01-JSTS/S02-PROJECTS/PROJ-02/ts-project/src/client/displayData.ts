import { getUsers, getPosts } from "./ApiClient.js";
import { User } from "../models/User.js";

async function displayUsers(): Promise<void> {
    try {
        const users: User[] = await getUsers(); // 10s
       
        users.forEach( user => {
            console.log( `Id de usuario: ${ user.id }, Nombre: ${ user.username }` );
            console.log( `  Correo: ${ user.email }` );
            console.log( `  Empleo: ${ user.company.name }` );
            console.log( `  Ciudad: ${ user.address.city }\n` );
        });
    }
    catch( e ) {
        console.log( "Error al consultar los datos" );
    }
}

export {
    displayUsers
}
