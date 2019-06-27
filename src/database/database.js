import Sequelize from 'sequelize'


export const sequelize = new Sequelize(
    'tienda', // db name,
    'postgres', // username
    'arturo15922', // password
    {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 6,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
);
