import { sequelize } from "../config/sequelize.js";
import { DataTypes } from "sequelize";
export const deepLinkModel = sequelize.define("deeplinks", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  identifier: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  destination_type: {
    type: DataTypes.ENUM(
      "SIP",
      "One-Time",
      "Jewellery",
      "Gold Loan",
      "Digi Gold"
    ),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  params: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  shortcode:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  redirect_install:{
    type: DataTypes.BOOLEAN,
    allowNull:false,
    defaultValue:false
  }
}, );

sequelize.sync();

