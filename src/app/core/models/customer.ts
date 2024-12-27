export interface Customer {
    custId: number;
    custFirstName: string;
    custLastName: string;
    custUserName: string;
    custPassword: string;
    custEmailAddrerss: string;
    custApproved: boolean;
    custPhoneNo: number;
    custAddress: string;
    custCountry: string;
    custState: string;
    custCity: string;
    isActive: boolean;
    isAdd:boolean;  
}

export interface CustomerData {
    totalRecords: number;
    customerDtoinfo: Customer[];
}

export interface CustomerListResponse {
    success: boolean;
    status: number;
    message: string;
    data: CustomerData;
}

export interface CustomerResponse {
    success: boolean;
    status: number;
    message: string;
    data: Customer;
}
