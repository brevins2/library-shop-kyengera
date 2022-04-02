export interface Movies{
    id?: number;
    Title: string;
    Cartegory: string;
    Amount: number;
    Rating: string;
    File: string;
}

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

export interface slider{
    File: string;
}

export interface User{
    id?: number;
    email: string
    password: string;
    confirmPassword: string;
    check: boolean;
}