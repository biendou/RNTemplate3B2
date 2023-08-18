import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addComment} from '../../features/Feeds/Feedslices';

const CommentModal = ({modalVisible, setModalVisible, id}) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const [textStatut, setTextStatut] = useState('Hide');
  //   const [modalVisible, setModalVisible] = useState(false);
  //   console.log(modalVisible);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            style={styles.textInput}
            placeholder="Type something..."
            value={comment}
            onChangeText={text => {
              setComment(text);
              text.trim() === ''
                ? setTextStatut('Hide')
                : setTextStatut('Submit');
            }}
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              dispatch(addComment([id, comment.trim()]));
              setComment('');
              setTextStatut('Hide');
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.textStyle}>{textStatut}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  textInput: {
    color: 'black',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default CommentModal;
