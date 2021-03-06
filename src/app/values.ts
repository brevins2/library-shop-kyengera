import { ComputerAccess, Phones, User } from './interfaces';

export const phones: Phones[] = [
    {
        "id": 1,
        "Title": "Infinix Hot 10",
        "Storage": "64GB, 4GB RAM",
        "Battery": "12000Amh",
        "Price": 500000,
        "File": "theater.jpg"
    },
    {
        "id": 2,
        "Title": "Nokia Air",
        "Storage": "64GB, 4GB RAM",
        "Battery": "12000Amh",
        "Price": 450000,
        "File": "theater.jpg"
    }
]

export const compAccess: ComputerAccess[] = [
    {
        "id": 1,
        "Title": "RAM",
        "Category": "4GB New",
        "Price": 65000,
        "File": "image.jpg"
    },
    {
        "id": 2,
        "Title": "DVD Drive",
        "Category": "New",
        "Price": 70000,
        "File": "images.jpg"
    }
]

export const users: User[]=[
    {
        "id": 1,
        "email": "admin@ug.com",
        "password": "i83admin",
        "confirmPassword": "saidi21",
        "check": true
    },
    {
        "id": 2,
        "email": "user@ug.com",
        "password": "useIT",
        "confirmPassword": "saidi21",
        "check": true
    },
    {
        "id": 3,
        "email": "saidi@gmail.com",
        "password": "saidi21",
        "confirmPassword": "saidi21",
        "check": true
    }
]
