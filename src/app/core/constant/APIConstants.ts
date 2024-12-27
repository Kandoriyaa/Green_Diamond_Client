import { environment } from "../../../environments/environment";

export const APIConstant = {
    
    login:{
        login: environment.apiEndPoint + 'Login/Login',
        logout: environment.apiEndPoint + 'Login/Logout',
        customerLogin: environment.apiEndPoint + 'Login/CustomerLogin',
    },
    clotheDisplay:{
        getAllClotheDisplay: environment.apiEndPoint + 'ClotheDisplay/GetAllClotheDisplay',
    },
    customer:{
        saveCustomer: environment.apiEndPoint + 'Customer/Save-Customer',
        deleteCustomer: environment.apiEndPoint + 'Customer/Delete-Customer',  
    },
}