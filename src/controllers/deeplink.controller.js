const { deepLinkModel } = require("../models/deeplink.model");
const { ValidationError, DatabaseError } = require("sequelize");
const { generateShortcode } = require("../utils/shortcode-generator");
const getDeeplink = async (req, res) => {
  try {
    const { shortcode } = req.params;
    const result = await deepLinkModel.findOne({ where: { shortcode } });
    if (!result) {
      console.error("noooooo");
      return res.response().code(204);
    }
    return res
      .response({
        msg: "user created successfully",
        result,
      })
      .code(200);
  } catch (e) {
    res
      .response({
        err: "Failed to fetch url",
        error: e,
      })
      .code(500);
  }
};

const creeateDeeplink = async (req, res) => {
  try {
    const { path, destination_type, description, params, redirect_install } =
      req.payload;
    const shortcode = generateShortcode(path);

    const result = await deepLinkModel.create({
      path,
      destination_type,
      description,
      params,
      redirect_install,
      shortcode,
    });
    return res
      .response({
        msg: "Deep Link created successfully",
        result,
      })
      .code(200);
  } catch (e) {
    if (e instanceof ValidationError) {
      return res.response({ err: e.errors[0].message }).code(400);
    } else if (e instanceof DatabaseError) {
      return res.response({ err: e.message }).code(400);
    }
    return res
      .response({
        err: "Failed to create deeplink",
        error: e,
      })
      .code(500);
  }
};

const getDeeplinkList = async (req, res) => {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;
    const offset = req.query.query ? parseInt(req.query.query) : 0;
    const data = await deepLinkModel.findAll({
      limit: limit ?? 10,
      offset: offset ?? 0,
      attributes: [
        "id",
        "path",
        "destination_type",
        "description",
        "params",
        "redirect_install",
      ],
    });
    if (!data) {
      return res.response().code(204);
    }
    return res.response({ data }).code(200);
  } catch (e) {
    return res.response({ err: "Failed to get deeplinks", error: e }).code(500);
  }
};

const deleteDeeplink = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || !parseInt(id)) {
      return res.response({ err: "invalid id" }).code(400);
    }
    const result = await deepLinkModel.destroy({ where: { id } });
    if (!result) {
      return res
        .response({ err: `Deep link with id '${id}' not found` })
        .code(400);
    }
    return res.response({ msg: "Deleted successfully" }).code(200);
  } catch (e) {
    return res
      .response({ err: "Failed to Delete deeplink", error: e })
      .code(500);
  }
};

module.exports = {
  getDeeplink,
  creeateDeeplink,
  getDeeplinkList,
  deleteDeeplink,
};
