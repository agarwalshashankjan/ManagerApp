import React from 'react';
import {View, Modal, Text, StyleSheet} from 'react-native';
import {CardSection} from './CardSection';
import {Button} from './Button';

const Confirm = ({children, visible, onAccept, onDecline}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => {}}>
      <View style={styles.container}>
        <CardSection style={styles.cardSection}>
          <Text style={styles.text}>{children}</Text>
        </CardSection>
        <CardSection>
          <Button title="Yes" onPress={onAccept} />
        </CardSection>
        <CardSection>
          <Button title="No" onPress={onDecline} />
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  cardSection: {
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    fontSize: 18,
    lineHeight: 40,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'center',
    position: 'relative',
  },
});

export {Confirm};
