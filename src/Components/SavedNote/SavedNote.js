import React from 'react';
import PropTypes from 'prop-types';
// import './SavedNote.css';

import { View, Text, Button } from 'react-native';

function SavedNote(props) {
  return (
    <View
      className="SavedNote-wrapper"
    >
      <View className="SavedNote-title">
        <Text>{props.title}</Text>
      </View>
      <View className="SavedNote-body">
        <Text className="SavedNote-pre">{props.body}</Text>
      </View>
      <Button
        onPress={props.onClick}
        title="EDIT"
      />
    </View>
  );
}

SavedNote.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SavedNote;
