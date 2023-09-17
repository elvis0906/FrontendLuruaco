import { Rol } from "./Rol";
import { Address } from "./Address";


export interface User {
    id?:             string;
    firstName:       string;
    lastName:        string;
    phone:           string;
    email:           string;
    password:        string;
    confirmPassword: string;
    image?:          string;
    session_token?:  string;
    notificacion_token?: string;
    roles?:          Rol[];
    address?:        Address;
}