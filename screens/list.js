import React, { useState } from 'react';
import {
  FlatList,
  Modal,
} from 'react-native';

import { config } from '@gluestack-ui/config';
import {
  GluestackUIProvider,
  Image,
  Text,
  View,
  Pressable,

} from '@gluestack-ui/themed';

// Dummmy Data (Array of Object)
const datas = [
  {
    id: 1,
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
  },
  {
    id: 2,
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
  },
  {
    id: 3,
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
  },
  {
    id: 4,
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
  },
  {
    id: 5,
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
  },
  {
    id: 6,
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
  },
  {
    id: 7,
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
  },
  {
    id: 8,
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
  },
  {
    id: 9,
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
  },
  {
    id: 10,
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
  },
];

const List = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <GluestackUIProvider config={config}>
        <Pressable
          padding={15}
          borderBottomColor='#dddddd'
          borderBottomWidth={1}
          onPress={() => {
            setSelectedItem(item);
            setModalVisible(true);
          }}>
          <View>
            <Image width={"auto"} height={200} alt='image' source={{ uri: item.image }} />
            <Text
              fontSize={18}
              paddingTop={10}
            >{item.title}</Text>
          </View>
        </Pressable>
      </GluestackUIProvider >
    );
  };

  return (
    <GluestackUIProvider config={config}>

      <View>
        <FlatList
          data={datas}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        {selectedItem && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View
              flex={1}
              justifyContent='center'
              alignItems='center'
              backgroundColor="rgba(0, 0, 0, 0.6)"
            >
              <View
                margin={20}
                backgroundColor='white'
                borderRadius={20}
                padding={35}
                alignItems='center'
                shadowColor='#000'
                shadowOffset={{
                  width: 0,
                  height: 2,
                }}
                shadowOpacity={0.25}
                shadowRadius={4}
                elevation={5}
              >
                <Text
                  marginBottom={10}
                  textAlign='center'
                >
                  {selectedItem.title}
                </Text>
                <Image source={{ uri: selectedItem.image }}
                  height={200}
                  width={200}
                  alt='image'
                />
                <Pressable
                  borderRadius={20}
                  padding={10}
                  elevation={2}
                  marginTop={25}
                  backgroundColor='#2196F3'
                 
                  onPress={() => setModalVisible(false)}>
                  <Text
                    color='white'
                    fontWeight='bold'
                    textAlign='center'
                  >
                    Close Modal
                  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        )}
      </View>
    </GluestackUIProvider >
  );
};

export default List;