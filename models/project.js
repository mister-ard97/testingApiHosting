'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    projectCreated: DataTypes.DATE,
    projectEnded: DataTypes.DATE,
    totalTarget: DataTypes.INTEGER,
    projectImage: DataTypes.STRING,
    shareDescription: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    isCancelled: DataTypes.INTEGER,
    cancelledDate: DataTypes.DATE,
    isDeleted : DataTypes.INTEGER
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
    Project.hasMany(models.Payment, { foreignKey : 'projectId' })
    
    Project.belongsTo(models.User, { foreignKey : 'userId'})
  };
  return Project;
};