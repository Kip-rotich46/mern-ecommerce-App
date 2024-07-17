import { DataTypes, Model } from 'sequelize';
import sequelize from './sequelize'; // Adjust the path as per your file structure

interface UserAttributes {
  id?: number;
  username: string;
  password: string;
  availableMoney: number;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public password!: string;
  public availableMoney!: number;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    availableMoney: {
      type: DataTypes.INTEGER,
      defaultValue: 5000,
    },
  },
  {
    sequelize, // Pass the sequelize instance
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
  }
);

export default User;
