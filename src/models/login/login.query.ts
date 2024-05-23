import { IUserLogin } from "../../interfaces/userLogin.interface";
import UserLogin from "./login.model";

export async function findUserLoginByEmail(email: string) {
    try {
        const login = await UserLogin.findOne({ 
            where: {
                email: email
            }
         })
         return login;
    } catch (error) {
        console.log(error);
        throw new Error('Error while finding user login with email from database.')
    }
}

export async function createNewUserLogin (data: IUserLogin) {
    try {
        const login = await UserLogin.create(data);
        return login;
    } catch (error) {
        console.log(error);
        throw new Error('Error wile creating user login in database.')
    }
}

export async function findUserLoginData(userId: number) {
    try {
        const loginData = await UserLogin.findOne({
            where: {
                userId: userId
            }
        });
        return loginData;
    } catch (error) {
        console.log(error);
        throw new Error('Error while finding User login data by userId from the database.');
    }
}