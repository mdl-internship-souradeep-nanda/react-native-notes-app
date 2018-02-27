import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

// import './Header.css';

function Header(props) {
  return (
    <View className="Header-header">
      <Text className="Header-center-span">
        {props.title}
      </Text>
    </View>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
