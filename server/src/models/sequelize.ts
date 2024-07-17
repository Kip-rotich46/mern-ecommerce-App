// Example ../config/sequelize.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('ecommerce', 'protio', 'StrongPassword123!', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
