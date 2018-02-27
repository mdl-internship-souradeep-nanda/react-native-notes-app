import React from 'react';
import PropTypes from 'prop-types';
// import './TitleSection.css';

import { View, Button, TextInput, Text } from 'react-native';

class TitleSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content.slice(),
    };
  }
  componentDidMount() {
    this.props.setTitleField(this.titleField);
  }

  /**
   * This function is called when text value changes
   */
  handleChange = (evt) => {
    this.setState({
      content: evt.target.value,
    });
  }

  render() {
    return (
      <View className="TitleSection-wrapper">
        <View className="TitleSection-title-bar">
          <Text className="TitleSection-title">
            {this.props.noteTitle}
          </Text>
          <Button
            className="TitleSection-language-button"
            onPress={this.props.onLanguageButtonClick}
            title={this.props.currentLanguage}
          />
        </View>
        <View className="TitleSection-input-wrapper">
          <TextInput
            ref={(titleField) => { this.titleField = titleField; }}
            className="TitleSection-note-title"
            type="text"
            placeholder={this.props.titlePlaceholder}
            value={this.state.content}
            onChange={this.handleChange}
          />
        </View>
      </View>
    );
  }
}

TitleSection.propTypes = {
  noteTitle: PropTypes.string.isRequired,
  currentLanguage: PropTypes.string.isRequired,
  titlePlaceholder: PropTypes.string.isRequired,
  onLanguageButtonClick: PropTypes.func.isRequired,
  setTitleField: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};

export default TitleSection;
