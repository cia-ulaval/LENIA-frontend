import React, { Component } from "react";
import { View } from "react-native";
import { getTemplates } from "../dataUtils";
import { Template } from "../DataTypes/template";

interface TemplateImportProps {}
interface TemplateImportState {
  templates: Template | null;
}

export default class TemplateImport extends Component<
  TemplateImportProps,
  TemplateImportState
> {
  constructor(public props: TemplateImportProps) {
    super(props);
    this.state = {
      templates: null,
    };
  }

  async componentDidMount() {
    const res = (await getTemplates()) as any;
    this.setState({ templates: res[0] });
  }

  render() {
    return <View></View>;
  }
}
