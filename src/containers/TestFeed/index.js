import React from 'react';
import {useState} from 'react';
import {
  TextInput,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addPost} from '../../features/Feeds/Feedslices';
import styles from './styles';
// import data from './dummyDataStorage';
import {RenderSectionHeader, SectionRenderItem} from './flatListRender';

const AppFeed = () => {
  const [prePost, setPrePost] = useState('');
  const data = useSelector(state => state.feed);
  const dispatch = useDispatch();
  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <View style={[styles.container, {flex: 3}]}>
          <TextInput
            placeholder={"What's on your mind?"}
            value={prePost}
            style={styles.textInput}
            onChangeText={text => setPrePost(text)}
          />
        </View>
        <TouchableOpacity
          style={[styles.Pbutton, {flex: 1}]}
          onPress={() => {
            dispatch(addPost(prePost));
            setPrePost('');
          }}>
          <Text style={[styles.buttonText]}>Post</Text>
        </TouchableOpacity>
      </View>

      {/* <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.Fcontainer}
    /> */}
      <SectionList
        sections={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <SectionRenderItem item={item} />}
        renderSectionHeader={({
          section: {id},
          section: {title},
          section: {content},
          section: {likes},
        }) => (
          <RenderSectionHeader
            id={id}
            title={title}
            content={content}
            likes={likes}
          />
        )}
        contentContainerStyle={styles.Fcontainer}
      />
    </>
  );
};

export default AppFeed;
