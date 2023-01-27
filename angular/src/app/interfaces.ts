export interface Phones{
    ID: number,
    Title: string,
    Storage: string,
    Battery: string,
    Price: number,
    File: string,
    Brand: string
}

export interface ComputerAccess{
    ID: number,
    Title: string,
    Category: string,
    Price: number,
    File: string,
}

export interface Images {
    ID: number,
    Name: string,
    URL: string
}

export interface User{
    ID: number,
    Email: string,
    Password: string,
    ConfirmPassword: string,
    Check: boolean,
}

export interface Order{
    ID: number,
    Message: string,
    Title: string,
    Battery: string,
    Price: string,
    Brand: string,
    Storage: string,
    delivered: boolean,
}

export interface Messages{
    ID: number,
    Name: string,
    Email: string,
    Message: string,
}