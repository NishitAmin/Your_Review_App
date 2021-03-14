import React, {useState} from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {

  const [modalOpen, setModalOpen] = useState(false);

  const [reviews, setReviews] = useState([
    {title: 'TMKOC', ratings: 5, body: 'Daya Jethalal', key: '1'},
    {title: 'Mahadev', ratings: 5, body: 'Shiva', key: '2'},
    {title: 'Mahabharat', ratings: 5, body: 'Krishna', key: '3'},
  ]);

  const addReview = (review) => {
    review.key = Math.random.toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews]
    });
    setModalOpen(false);
  }

  return (
    <View style={globalStyles.container}>

    <Modal visible={modalOpen} animationType='slide'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.modalContent}>
        <MaterialIcons name='close' size={24} 
        style={{...styles.modalToggle, ...styles.modalClose}} 
        onPress={() => setModalOpen(false)} />
        <ReviewForm addReview={addReview} />
      </View>
      </TouchableWithoutFeedback>
    </Modal>

    <MaterialIcons name='add' 
    size={24} 
    onPress={() => setModalOpen(true)}
    style={styles.modalToggle} />

      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginBottom: 0,
    marginTop: 20,
  }, 
  modalContent: {
    flex: 1,
  }
})