import {
  TextInput,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import {useState} from 'react';
import styles from './styles';
import {useDispatch} from 'react-redux';
import CommentModal from './CommentModal';
import {addLike} from '../../features/Feeds/Feedslices';

const RenderSectionHeader = ({title, content, likes, id}) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  // console.log(data);
  // console.log(modalVisible);
  return (
    <>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        <Text style={styles.likes}>{`${likes} Likes`}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(addLike(id));
            // console.log(data[id - 1]);
            // throw new Error('An error has occurred!');
          }}>
          <Text style={styles.buttonText}>Like</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'lavender'}]}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <CommentModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            id={id}
          />
          <Text style={styles.buttonText}>Comment</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
const SectionRenderItem = ({item}) => (
  <View style={styles.dataContainer}>
    <Text style={styles.datacontent}>{item}</Text>
  </View>
);
const RenderItem = ({item}) => (
  <>
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
      <Text style={styles.likes}>{`${item.likes} Likes`}</Text>
    </View>
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>like</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Comment</Text>
      </TouchableOpacity>
    </View>
  </>
);

export {RenderSectionHeader, SectionRenderItem, RenderItem};
