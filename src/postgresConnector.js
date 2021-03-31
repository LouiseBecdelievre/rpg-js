import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://user:example@localhost:5432/database');

export default sequelize;
