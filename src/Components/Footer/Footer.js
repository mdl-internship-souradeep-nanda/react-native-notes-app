import React from 'react';
import PropTypes from 'prop-types';
// import './Footer.css';

import { Button, View } from 'react-native';

function Footer(props) {
  return (
    <View className="Footer-footer">
      <Button className="Footer-button" onPress={props.callback} title={props.title} />
    </View>
  );
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Footer;
