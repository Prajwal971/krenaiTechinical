import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Icon } from "native-base";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.navgator}>
          <TouchableOpacity>
            <Icon name="arrow-back" />
          </TouchableOpacity>

          <Text style={styles.title}>Sweaters</Text>

          <TouchableOpacity>
            <Icon name="cart" />
          </TouchableOpacity>
        </View>

        <View>
          <Image
            resizeMode="cover"
            style={styles.cover}
            source={require("./assets/TopImage.png")}
          />
          <View style={styles.heartButton}>
            <TouchableOpacity>
              <Icon style={styles.close} name="heart" size={25} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.imgContainer}>
          <View style={styles.image1}>
            <TouchableOpacity>
              <Image
                source={require("./assets/TopImage.png")}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.image1}>
            <TouchableOpacity>
              <Image
                source={require("./assets/TopImage.png")}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.image1}>
            <TouchableOpacity>
              <Image
                source={require("./assets/TopImage.png")}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.title1}>stand collar bishop Sleeve Sweater</Text>
          <Text style={styles.title23}>
            Loren ipsum dolor sit arnet, consectetur
          </Text>
          <Text style={styles.title23}>
            adipiscing elit.Aenean quis socales nisl.Sed sed
          </Text>
        </View>

        <View style={styles.navgator}>
          <View style={styles.delivery}>
            <Icon name="car" color="#030fff" />
          </View>
          <View style={styles.col}>
            <Text style={styles.deliveryAlignment}> Free </Text>
            <Text style={styles.deliveryAlignment}> Shipping</Text>
          </View>
          <View style={styles.delivery}>
            <Icon name="time" color="#030fff" />
          </View>
          <View style={styles.col}>
            <Text style={styles.deliveryAlignment}> 24 Hour </Text>
            <Text style={styles.deliveryAlignment}> Delivery</Text>
          </View>
          <View style={styles.delivery}>
            <Icon name="alert" color="#030fff" />
          </View>
        </View>

        <View style={styles.navgator}>
          <Text style={styles.title}>Product Rating</Text>
          <Text style={styles.titleColor}>39 reviews</Text>
        </View>

        <View style={styles.navgator}>
          <View style={styles.row}>
            <Icon name="star" />
            <Icon name="star" />
            <Icon name="star" />
            <Icon name="star" />
            <Icon name="star" />
            <Text style={styles.title}>   5</Text>
          </View>

          <View style={styles.image1}>
            <TouchableOpacity>
              <Image
                source={require("./assets/TopImage.png")}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.image1}>
            <TouchableOpacity>
              <Image
                source={require("./assets/TopImage.png")}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.image1}>
            <TouchableOpacity>
              <Image
                source={require("./assets/TopImage.png")}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.navgator}>
          <Text style={styles.title}>Size</Text>
        </View>

        <View style={styles.navgator}>
          <View style={styles.delivery}>
            <TouchableOpacity>
              <Text>S </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.delivery}>
            <TouchableOpacity>
              <Text>M </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View style={styles.delivery}>
              <Text>L </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.delivery}>
              <Text>XL </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.delivery}>
              <Text>2XL</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.delivery}>
              <Text>3XL</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.navgator}>
          <Text style={styles.title}>Color</Text>
        </View>
        <View style={styles.navgator}>
          <TouchableOpacity>
            <View style={styles.colorRed}>
              <Text> </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.colorBlue}>
              <Text> </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.colorGreen}>
              <Text> </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.colorRed}>
              <Text> </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.colorBlue}>
              <Text> </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.colorGreen}>
              <Text> </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.navgator}>
          <Text style={styles.title}>You may also like</Text>
        </View>
        <View style={styles.col}>
          <TouchableOpacity>
            <View style={styles.rowManyProducts}>
              <View>
                <Image
                  source={require("./assets/TopImage.png")}
                  style={styles.moreImageLike}
                />
              </View>
              <View style={styles.cols}>
                <View>
                  <Text style={styles.productTitle}>Leaf Design Dress</Text>
                </View>
                <View style={styles.rowProduct}>
                  <Text style={styles.productPrice}>$24.90</Text>
                  <Text style={styles.productStar}>
                    <Icon name="star" />
                    4.5
                  </Text>
                </View>
                <View>
                  <Text style={styles.productDiscriptionColorText}>
                    Loren ipsum dolor sit amet,
                  </Text>
                  <Text style={styles.productDiscriptionColorText}>
                    Sodalace nisl. Sed sed tristique
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.rowManyProducts}>
              <View>
                <Image
                  source={require("./assets/TopImage.png")}
                  style={styles.moreImageLike}
                />
              </View>
              <View style={styles.cols}>
                <View>
                  <Text style={styles.productTitle}>Leaf Design Dress</Text>
                </View>
                <View style={styles.rowProduct}>
                  <Text style={styles.productPrice}>$24.90</Text>
                  <Text style={styles.productStar}>
                    <Icon name="star" />
                    4.5
                  </Text>
                </View>
                <View>
                  <Text style={styles.productDiscriptionColorText}>
                    Loren ipsum dolor sit amet,
                  </Text>
                  <Text style={styles.productDiscriptionColorText}>
                    Sodalace nisl. Sed sed tristique
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.rowManyProducts}>
              <View>
                <Image
                  source={require("./assets/TopImage.png")}
                  style={styles.moreImageLike}
                />
              </View>
              <View style={styles.cols}>
                <View>
                  <Text style={styles.productTitle}>Leaf Design Dress</Text>
                </View>
                <View style={styles.rowProduct}>
                  <Text style={styles.productPrice}>$24.90</Text>
                  <Text style={styles.productStar}>
                    <Icon name="star" />
                    4.5
                  </Text>
                </View>
                <View>
                  <Text style={styles.productDiscriptionColorText}>
                    Loren ipsum dolor sit amet,
                  </Text>
                  <Text style={styles.productDiscriptionColorText}>
                    Sodalace nisl. Sed sed tristique
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.rowManyProducts}>
              <View>
                <Image
                  source={require("./assets/TopImage.png")}
                  style={styles.moreImageLike}
                />
              </View>
              <View style={styles.cols}>
                <View>
                  <Text style={styles.productTitle}>Leaf Design Dress</Text>
                </View>
                <View style={styles.rowProduct}>
                  <Text style={styles.productPrice}>$24.90</Text>
                  <Text style={styles.productStar}>
                    <Icon name="star" />
                    4.5
                  </Text>
                </View>
                <View>
                  <Text style={styles.productDiscriptionColorText}>
                    Loren ipsum dolor sit amet,
                  </Text>
                  <Text style={styles.productDiscriptionColorText}>
                    Sodalace nisl. Sed sed tristique
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebebf2",
  },
  productTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  productPrice: {
    fontWeight: "bold",
    fontSize: 20,
    color: "blue",
  },
  productStar: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#ff7403",
  },
  rowManyProducts: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
  },
  productDiscriptionColorText: {
    color: "#b0b1d1",
  },
  navgator: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  col: {
    flex: 1,
    flexDirection: "column",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  rowProduct: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  titleColor: {
    color: "#ff7403",
    fontWeight: "bold",
    fontSize: 20,
  },
  cover: {
    flex: 1,
    borderRadius: 5,
  },
  close: {
    margin: 5,
    top: 5,
    left: 8,
    width: 44,
    height: 44,
    color: "black",
    borderRadius: 44 / 2,
  },
  heartButton: {
    color: "white",
    padding: 1,
    backgroundColor: "#fff",
    top: -70,
    left: 300,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "white",
  },
  image1: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  imgContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    // padding: -10,
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 15,
  },
  title1: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 20,
    color: "blue",
  },
  title23: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#3281a8",
  },
  delivery: {
    borderRadius: 0.3,
    borderWidth: 15,
    borderColor: "white",
  },
  deliveryAlignment: {
    top: 15,
    fontWeight: "bold",
  },
  reviewImages: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    // overflow: "visible",
    borderWidth: 3,
    borderColor: "black",
  },
  colorRed: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "red",
  },
  colorBlue: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "blue",
  },
  colorGreen: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "green",
  },
  moreImageLike: {
    height: 100,
    width: 100,
    borderRadius: 25,
  },
  moreImageViewBackground: {
    backgroundColor: "#ede8e4",
  },
});
