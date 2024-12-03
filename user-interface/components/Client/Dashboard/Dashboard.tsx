import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { router } from "expo-router";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

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
  const scrollRef = useRef<FlatList>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Automatically scroll to the next slide
    if (scrollRef.current) {
      scrollRef.current.scrollToIndex({
        index: currentSlide,
        animated: true,
      });
    }
  }, [currentSlide]);

  const goToDescription = (product: any) => {
    router.push({
      pathname: "/description",
      params: {
        productName: product.name,
        productPrice: product.price,
        productImage: product.image.uri,
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            {/* Header Section */}
            <View style={styles.profileDisplay}>
              <View style={styles.greetingDisplay}>
                <Image source={require("@/assets/images/G3.png")} />
                <View>
                  <Text style={styles.welcomeBack}>Welcome Back</Text>
                  <Text style={styles.UserName}>User</Text>
                </View>
              </View>
              <View style={styles.greetingDisplay1}>
                <Icon name="notifications-outline" size={28} color="#111" />
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
                  <Icon name="search" size={20} />
                  <TextInput
                    placeholder="Search any product..."
                    style={styles.searchTextInput}
                  />
                </View>
                <Icon name="mic" size={20} />
              </View>
            </View>

            {/* Automatic Slideshow Section */}
            <FlatList
              data={slides}
              horizontal
              pagingEnabled
              ref={scrollRef}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={styles.slide}>
                  <View style={{ width: "50%", padding: 10 }}>
                    <Text style={styles.mainTopic}>{item.title}</Text>
                    <Text style={styles.subMainTopic}>{item.subtitle}</Text>
                    <TouchableOpacity style={styles.shopBtn}>
                      <Text style={styles.shopBtnText}>Shop now</Text>
                    </TouchableOpacity>
                  </View>
                  <Image source={item.image} style={styles.slideImage} />
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              nestedScrollEnabled={true}
            />

            {/* Categories Section */}
            <View style={{ marginVertical: 10 }}>
              <Text style={styles.CategoryText}>Categories</Text>
              <FlatList
                data={categories}
                renderItem={({ item }) => (
                  <View style={styles.categoryItem}>
                    <Image
                      source={{ uri: item.image }}
                      style={styles.categoryImage}
                    />
                    <Text style={styles.categoryName}>{item.name}</Text>
                  </View>
                )}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled={true}
              />
            </View>
          </>
        }
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => goToDescription(item)}
          >
            <Image source={item.image} style={styles.cardImage} />

            <View style={styles.cardDetails}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardPrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.cardRow}
        contentContainerStyle={styles.productList}
        nestedScrollEnabled={true}
      />
    </SafeAreaView>
  );
};

export default Dashboard;

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  // Profile Section
  profileDisplay: {
    paddingTop: screenHeight * 0.00,
    paddingHorizontal: screenWidth * 0.05,
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
    gap: screenWidth * 0.03,
  },
  greetingDisplay1: {
    flexDirection: "row",
    alignItems: "center",
    gap: screenWidth * 0.03,
  },
  welcomeBack: {
    fontSize: screenWidth * 0.04,
    color: "#8C8C8C",
  },
  UserName: {
    fontSize: screenWidth * 0.05,
    fontWeight: "600",
    color: "#111",
  },
  avatar: {
    width: screenWidth * 0.12,
    height: screenWidth * 0.12,
    borderRadius: screenWidth * 0.06,
  },

  // Search Section
  searchSection: {
    paddingHorizontal: screenWidth * 0.05,
    marginTop: screenHeight * 0.02,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: screenWidth * 0.02,
    padding: screenWidth * 0.03,
    gap: screenWidth * 0.02,
  },
  searchInput: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: screenWidth * 0.02,
  },

  slide: {
    width: SCREEN_WIDTH,
    height: screenHeight * 0.2, // Match the parent ScrollView height
    backgroundColor: "#ffda2d",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
    padding: 10,
  },
  slideImage: {
    width: "40%",
    height: "80%",
    resizeMode: "contain",
  },
  mainTopic: {
    fontSize: screenWidth * 0.05,
    fontWeight: "bold",
  },
  subMainTopic: {
    fontSize: screenWidth * 0.04,
    color: "#555",
    marginVertical: screenHeight * 0.005,
  },
  shopBtn: {
    backgroundColor: "#000",
    paddingHorizontal: screenWidth * 0.04,
    paddingVertical: screenHeight * 0.01,
    borderRadius: screenWidth * 0.02,
    marginTop: screenHeight * 0.01,
    width: "70%",
  },

  // Categories Section
  categoryList: {
    paddingHorizontal: screenWidth * 0.05,
    paddingVertical: screenHeight * 0.03,
    alignItems: "center",
  },
  categoryItem: {
    alignItems: "center",
    marginRight: screenWidth * 0.05,
    padding: 10,
  },
  categoryImage: {
    width: screenWidth * 0.18,
    height: screenWidth * 0.18,
    borderRadius: screenWidth * 0.09,
    marginBottom: screenHeight * 0.01,
    backgroundColor: "#f0f0f0",
  },
  categoryName: {
    fontSize: screenWidth * 0.035,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },

  // Product Cards Section
  trendingText: {
    fontSize: screenWidth * 0.06,
    fontWeight: "bold",
    paddingHorizontal: screenWidth * 0.05,
    paddingVertical: screenHeight * 0.01,
  },
  trendingContainer: {
    paddingHorizontal: screenWidth * 0.05,
    paddingTop: screenHeight * 0.02,
  },
  productList: {
    paddingHorizontal: screenWidth * 0.03,
    paddingTop: screenHeight * 0.02,
  },
  cardRow: {
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    marginBottom: screenHeight * 0.02,
    marginHorizontal: screenWidth * 0.01,
    alignItems: "center",

    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,

    // Shadow for Android
    elevation: 4,
  },
  cardImage: {
    width: "100%",
    height: screenHeight * 0.2,
    resizeMode: "contain",
    marginBottom: screenHeight * 0.01,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardTitle: {
    fontSize: screenWidth * 0.04,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardPrice: {
    fontSize: screenWidth * 0.035,
    color: "#555",
  },
  searchTextInput: {
    fontSize: screenWidth * 0.04,
    fontWeight: "bold",
  },
  CategoryText: {
    fontSize: screenWidth * 0.04,
    fontWeight: "bold",
    color: "#555",
    marginBottom: screenHeight * 0.02,
  },
  shopBtnText: {
    fontSize: screenWidth * 0.04,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  cardDetails: {
    padding: 20,
  },
});
