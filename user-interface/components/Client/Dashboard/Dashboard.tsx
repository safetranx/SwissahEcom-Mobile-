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

const products = Array.from({ length: 10 }, (_, index) => ({
  id: (index + 1).toString(),
  name: `Product ${index + 1}`,
  price: `$${(Math.random() * 100 + 20).toFixed(2)}`, 
  image: { uri: `https://picsum.photos/200?random=${index + 1}` }, 
}));


  const categories = [
    {
      id: "1",
      name: "Electronics",
      image: "https://picsum.photos/200?random=1",
    },
    { id: "2", name: "Fashion", image: "https://picsum.photos/200?random=2" },
    { id: "3", name: "Home", image: "https://picsum.photos/200?random=3" },
    { id: "4", name: "Beauty", image: "https://picsum.photos/200?random=4" },
    { id: "5", name: "Sports", image: "https://picsum.photos/200?random=5" },
  ];


  const [currentSlide, setCurrentSlide] = useState(0);
   const scrollRef = useRef<ScrollView>(null);

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

      <View style={styles.trendingContainer}>
        <Text style={styles.CategoryText}>Categories</Text>
      </View>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image source={{ uri: item.image }} style={styles.categoryImage} />
            <Text style={styles.categoryName}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      />

      {/* Product Cards Section */}
      <View style={styles.trendingContainer}>
        <Text style={styles.trendingText}>Trending</Text>
      </View>
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
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greetContainer: {
    flexDirection: "column",
  },
  greetingDisplay: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  greetingDisplay1: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  welcomeBack: {
    color: "#8C8C8C",
    fontSize: 14,
  },
  UserName: {
    color: "#111",
    fontSize: 18,
    fontWeight: "600",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  searchSection: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
    gap: 10,
  },
  searchInput: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 10,
  },
  slideShow: {
    marginTop: 20,
    height:800,
  },
  slide: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").width * 0.5,
    backgroundColor: "#ffda2d",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    marginHorizontal: Dimensions.get("window").width * 0.05,
  },
  slideImage: {
    width: "40%",
    height: "80%",
    resizeMode: "contain",
  },
  mainTopic: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subMainTopic: {
    fontSize: 14,
    color: "#555",
    marginVertical: 5,
  },
  shopBtn: {
    backgroundColor: "#000",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
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
    width: Dimensions.get("window").width * 0.35,
    height: Dimensions.get("window").width * 0.35,
    resizeMode: "contain",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardPrice: {
    color: "#555",
    fontSize: 12,
  },
  trendingText: {
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  CategoryText: {
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  trendingContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  categoryList: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: "center",

  },
  categoryItem: {
    alignItems: "center",
    marginRight: 20,
    maxWidth: Dimensions.get("window").width * 0.2,
    padding:47,
  },
  categoryImage: {
    width: Dimensions.get("window").width * 0.18,
    height: Dimensions.get("window").width * 0.18,
    borderRadius: 50,
    marginBottom: 8,
    backgroundColor: "#f0f0f0",
  },
  categoryName: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
});

