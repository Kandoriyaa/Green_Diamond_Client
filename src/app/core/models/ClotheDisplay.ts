export interface ClotheDisplay {
    id: number;
    clotheName: string;
    price: number;
    photo: string;
    clotheFile: File;
    discription: string;
    quantity: number;
    typeOfMaterial: string;
    discount: string;
    manufacturer: string;
    isActive: boolean;
}

export interface ClotheDisplayData {
    totalRecords: number;
    clothedisplayDtoinfo: ClotheDisplay[];
}

export interface ClotheDisplayListResponse {
    success: boolean;
    status: number;
    message: string;
    data: ClotheDisplayData;
}

export interface ClotheDisplayResponse {
    success: boolean;
    status: number;
    message: string;
    data: ClotheDisplay;
}
