function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        top: 100,
        width: Ti.UI.SIZE,
        height: 200,
        color: "#000",
        text: "Whatever you were doing, I was doing it *before* it was cool",
        id: "__alloyId2"
    });
    $.__views.index.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        bottom: 100,
        width: Ti.UI.SIZE,
        height: 200,
        color: "#000",
        text: "To help you out, I've left the SystemUI bar alone so you can escape.",
        id: "__alloyId3"
    });
    $.__views.index.add($.__views.__alloyId3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;