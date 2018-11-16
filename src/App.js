import React, { Component } from "react";
import Input from "arui-feather/input";
import TagButton from "arui-feather/tag-button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePhoneFocus = this.handlePhoneFocus.bind(this);
    this.handlePhoneBlur = this.handlePhoneBlur.bind(this);
  }

  handleChange(prop, value) {
    this.setState({
      [prop]: value
    });
  }

  handlePhoneFocus() {
    if (this.state.phone !== "") return false;
    this.setState({ phone: "+77" });
  }

  handlePhoneBlur() {
    if (this.state.phone.length > 5) return false;
    this.setState({ phone: "" });
  }

  render() {
    const IconNext = require("arui-feather/icon/action/next/").default;
    return (
      <div>
        <Input
          mask={"+7 (711) 111-11-11"}
          placeholder="+7 (700) 000-00-00"
          label="Номер телефона"
          value={this.state.phone}
          onFocus={this.handlePhoneFocus}
          onBlur={this.handlePhoneBlur}
          onChange={v => {
            this.handleChange("phone", v);
          }}
          rightAddons={
            <TagButton size="s">
              <IconNext />
            </TagButton>
          }
        />
      </div>
    );
  }
}

export default App;
