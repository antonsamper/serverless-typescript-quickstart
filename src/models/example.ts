import * as Sequelize from 'sequelize';

export interface ExampleAttributes {
    id?: string;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

type ExampleInstance = Sequelize.Instance<ExampleAttributes> & ExampleAttributes;

export default (sequelize: Sequelize.Sequelize) => {

    const attributes: SequelizeAttributes<ExampleAttributes> = {
        id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        name: { type: Sequelize.STRING, allowNull: false }
    };

    const options = {
        timestamps: true,
        freezeTableName: true,
        name: {
            plural: 'examples',
            singular: 'example',
        },
    };

    const Example = sequelize.define<ExampleInstance, ExampleAttributes>('Example', attributes, options);

    return Example;
};
