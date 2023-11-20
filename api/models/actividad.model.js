const { sequelize } = require('../../database/index.js')
const { DataTypes } = require('sequelize')


const Actividad = sequelize.define("actividad",
  {
    categoria: {
      type: DataTypes.ENUM("senderismo", "ciclismo", "camping", "playa", "surf", "buceo", "observacion_estrellas"),
      allowNull: false,
    },
    nombre_actividad: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    dificultad: {
      type: DataTypes.STRING(50),
      allowNull: true, 
    },
    distancia: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true, 
    },
    tiempo_estimado: {
      type: DataTypes.TIME,
      allowNull: true, 
    },
    servicios_disponibles: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    actividades_disponibles: {
      type: DataTypes.STRING(200),
      allowNull: true, 
    },
    profundidad_maxima: {
      type: DataTypes.INTEGER,
      allowNull: true, 
    },
  },
  {
    timestamps: false
  }
); 

module.exports = Actividad;