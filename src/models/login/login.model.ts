import { Model, DataTypes, Optional } from "sequelize";
import { IUserLogin } from "../../interfaces/userLogin.interface";
import { sequelize } from "../..";

interface UserLoginCreationAttributes extends Optional<IUserLogin, 'userId'> {};

interface UserLoginInstance extends Model<IUserLogin, UserLoginCreationAttributes>, IUserLogin {
    createdAt?: Date;
    updatedAt?: Date;
}

const UserLogin = sequelize.define<UserLoginInstance>('userLogin', {
    userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

export default UserLogin;