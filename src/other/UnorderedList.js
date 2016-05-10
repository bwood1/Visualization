"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["d3", "../common/HTMLWidget", "css!./UnorderedList"], factory);
    } else {
        root.template_UnorderedList = factory(root.d3, root.common_HTMLWidget);
    }
}(this, function (d3, HTMLWidget) {
    function UnorderedList(target) {
        HTMLWidget.call(this);

        this._tag = "div";
    }
    UnorderedList.prototype = Object.create(HTMLWidget.prototype);
    UnorderedList.prototype.constructor = UnorderedList;
    UnorderedList.prototype._class += " other_UnorderedList";

    UnorderedList.prototype.publish("stringProp", "defaultValue", "string", "Sample Property");

    UnorderedList.prototype.enter = function (domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);
        this._ul = element.append("div")
        .attr("data-depth", 0)
        ;
    };

    UnorderedList.prototype.update = function (domNode, element) {
        HTMLWidget.prototype.update.apply(this, arguments);
        var depth = 0;
        this.appendArray(this._ul, this.data());
    };

    UnorderedList.prototype.appendArray = function (element, arr) {
        var depth = parseInt(element.attr("data-depth")) + 1;
        var innerUl = element.append("ul");
        var inner = innerUl.selectAll(".dataRow[data-depth='" + depth + "']").data(arr);
        inner.enter().append("li")
        .attr("class", "dataRow")
        .attr("data-depth", depth)
        ;
        var context = this;
        inner
        .text(function (row) {
            return row[0];
        })
        .each(function (row) {
            if (row[1] instanceof Array) {
                context.appendArray(d3.select(this), row[1]);
            }
        })
        ;
        inner.exit().remove();
    };

    UnorderedList.prototype.exit = function (domNode, element) {
        HTMLWidget.prototype.exit.apply(this, arguments);
    };

    return UnorderedList;
}));