import Backbone, { $, View, ViewOptions } from "backbone";
import "./main.scss";

class AppView extends View {
  constructor(options?: ViewOptions) {
    super(options);
  }

  render(): this {
    this.$el.html("Hello World!");
    return this;
  }
}

$(function () {
  Backbone.history.start();

  const appView = new AppView({ el: "#heading" });
  appView.render();
});
