import { DataTypes } from 'sequelize/types';
import sequelize from './sequelize'

const character = sequelize.define('Character', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4 
    }, 
    name: {
        type: DataTypes.STRING,
        defaultValue: 'a_name'
    },
    attack: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    defense: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    magik: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    health: {
        type: DataTypes.INTEGER,
        defaultValue: 10
    },
    remaining_skills: {
        type: DataTypes.INTEGER,
        defaultValue: 12
    },
});

export default character;