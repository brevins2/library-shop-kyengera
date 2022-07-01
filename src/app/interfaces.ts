export interface Phones{
    id?: number;
    Title: string;
    Storage: string;
    Battery: string;
    Price: number;
    File: string;
}

export interface ComputerAccess{
    id?: number;
    Title: string;
    Category: string;
    Price: number;
    File: string;
}

export interface User{
    id?: number;
    email: string;
    password: string;
    confirmPassword: string;
    check: boolean;
}

export interface Order{
    id?: number;
    Message: string;
    Title: string;
    Battery: string;
    Price: string;
    Brand: string;
    Storage: string;
    delivered: boolean;
}

export interface Messages{
    id?: number;
    Email: string;
    Message: string;
}
