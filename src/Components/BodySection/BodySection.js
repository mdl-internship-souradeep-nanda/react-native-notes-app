import React from 'react';
import PropTypes from 'prop-types';

import { View, TextInput, Button, Text, Image } from 'react-native';

// import './BodySection.css';

import clipboard from './clipboard.svg';

class BodySection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      charStyle: '',
      content: props.content,
    };

    // Maximum allowed text length
    this.MAX_LENGTH = 10;
    this.nodeBody = '';
  }

  componentDidMount() {
    // Send the text input DOM handle to parent
    this.props.setBodyTextHandle(this.textAreaHandle);
  }

  /**
   * This function is called when the save button is pressed
   */
  onSaveButton = () => {
    // Call the parent's save button handler
    this.props.onSaveButton();

    // The parent will clear the text field programatically
    // so call the onTextChange function manually
    this.onTextChange();
  }

  /**
   * This function is called when text is updated
   */
  onTextChange = (newText) => {
    if (newText !== undefined) { this.nodeBody = newText; }
    const count = this.nodeBody.length;

    // Change color based on text length
    this.setState({
      count,
      charStyle: count === this.MAX_LENGTH ? 'BodySection-red' : '',
      content: this.nodeBody,
    });
  }

  render() {
    const charString = `${(this.MAX_LENGTH - this.state.count)} ${this.props.charactersLabelText}`;
    const characterCountStyle = `BodySection-character-count ${this.state.charStyle}`;
    const bodyTextStyle = `BodySection-text-body ${this.state.charStyle}`;
    return (
      <View className="BodySection-wrapper">
        <View className="BodySection-header-wrapper">
          <Text className="BodySection-header-text">
            {this.props.bodyHeader}
          </Text>
          <Image
            className="BodySection-clipboard-img"
            source={clipboard}
            alt="clipboard"
          />
        </View>
        <View className="BodySection-text-wrapper">
          <TextInput
            ref={(textAreaHandle) => { this.textAreaHandle = textAreaHandle; }}
            type="text"
            className={bodyTextStyle}
            cols="40"
            rows="15"
            placeholder={this.props.bodyNotesPlaceholder.join('\n')}
            onChange={this.onTextChange}
            maxLength={this.MAX_LENGTH}
            value={this.state.content}
          />
        </View>
        <View className="BodySection-body-footer">
          <View className="BodySection-save-button-wrapper">
            <Button
              onPress={this.onSaveButton}
              className="BodySection-save-button"
              title={this.props.saveButtonText}
            />
          </View>
          <View className={characterCountStyle}>
            <Text>{charString}</Text>
          </View>
        </View>
      </View>
    );
  }
}

BodySection.propTypes = {
  charactersLabelText: PropTypes.string.isRequired,
  bodyHeader: PropTypes.string.isRequired,
  saveButtonText: PropTypes.string.isRequired,
  bodyNotesPlaceholder: PropTypes.arrayOf(PropTypes.string).isRequired,
  setBodyTextHandle: PropTypes.func.isRequired,
  onSaveButton: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};

export default BodySection;
