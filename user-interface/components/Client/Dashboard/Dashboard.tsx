import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

const Dashboard = () => {
  const slides = [
    {
      title: "Explore the Latest Gadgets",
      subtitle: "Top tech at unbeatable prices.",
      image: require("@/assets/images/phone.png"),
    },
    {
      title: "Discover Your Style",
      subtitle: "Clothing for every occasion.",
      image: require("@/assets/images/phone.png"),
    },
    {
      title: "Upgrade Your Home",
      subtitle: "Appliances that make life easier.",
      image: require("@/assets/images/phone.png"),
    },
  ];

  const products = [
    {
      id: "1",
      name: "Product 1",
      price: "$99",
      image: require("@/assets/images/two.jpeg"),
    },
    {
      id: "2",
      name: "Product 2",
      price: "$129",
      image: require("@/assets/images/two.jpeg"),
    },
    {
      id: "3",
      name: "Product 3",
      price: "$79",
      image: require("@/assets/images/two.jpeg"),
    },
    {
      id: "4",
      name: "Product 4",
      price: "$49",
      image: require("@/assets/images/two.jpeg"),
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(timer); 
  }, []);

  useEffect(() => {
    // Automatically scroll to the next slide
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        x: currentSlide * Dimensions.get("window").width,
        animated: true,
      });
    }
  }, [currentSlide]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.profileDisplay}>
        <View style={styles.greetingDisplay}>
          <Image source={require("@/assets/images/G3.png")} />
          <View style={styles.greetContainer}>
            <Text style={styles.welcomeBack}>Welcome Back</Text>
            <Text style={styles.UserName}>User</Text>
          </View>
        </View>

        <View style={styles.greetingDisplay1}>
          <Icon name="notifications-outline" size={34} color="#111" />
          <Image
            source={require("@/assets/images/avatar.jpeg")}
            style={styles.avatar}
          />
        </View>
      </View>

      {/* Search Section */}
      <View style={styles.searchSection}>
        <View style={styles.searchContainer}>
          <View style={styles.searchInput}>
            <Icon name="search" size={25} />
            <TextInput placeholder="Search any product..." />
          </View>
          <Icon name="mic" size={25} />
        </View>
      </View>

      {/* Automatic Slideshow Section */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
        style={styles.slideShow}
      >
        {slides.map((slide, index) => (
          <View style={styles.slide} key={index}>
            <View style={{ padding: 25 }}>
              <Text style={styles.mainTopic}>{slide.title}</Text>
              <Text style={styles.subMainTopic}>{slide.subtitle}</Text>
              <TouchableOpacity style={styles.shopBtn}>
                <Text style={{ color: "white", textAlign: "center" }}>
                  Shop now
                </Text>
              </TouchableOpacity>
            </View>
            <Image source={slide.image} style={styles.slideImage} />
          </View>
        ))}
      </ScrollView>

      {/* Product Cards Section */}
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardPrice}>{item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.cardRow}
        contentContainerStyle={styles.productList}
      />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  profileDisplay: {
    paddingTop: 27,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 50,
  },
  greetContainer: {
    flexDirection: "column",
  },
  greetingDisplay: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  greetingDisplay1: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  welcomeBack: {
    color: "#8C8C8C",
  },
  UserName: {
    color: "#111111",
    fontSize: 18,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  searchSection: {
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  slideShow: {
    marginTop: 30,
  },
  slide: {
    width: Dimensions.get("window").width,
    backgroundColor: "#ffda2d",
    borderRadius: 15,
    marginRight: 10,
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "space-between",
  },
  slideImage: {
    width: 150,
    // height: 150,
  },
  mainTopic: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subMainTopic: {
    fontSize: 15,
  },
  shopBtn: {
    backgroundColor: "#000",
    width: 100,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  productList: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  cardRow: {
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  cardImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  cardPrice: {
    color: "#555",
  },
});
