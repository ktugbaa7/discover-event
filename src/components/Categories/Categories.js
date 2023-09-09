import { View, Text } from "react-native";
import React from "react";
import styles from "./Categories.style";
import { Button, Card, Paragraph, Title } from "react-native-paper";

const Categories = ({ id, categories }) => {
  const isEventOver = new Date(id.timestart) < new Date();
  return (
    <View style={styles.container}>
      {isEventOver ? (
        <View style={styles.categoriesContainer}>
          <Text style={styles.name}>Etkinlik Sona Erdi</Text>
        </View>
      ) : id.free === false ? (
        <View style={styles.categoriesContainer}>
          <Text style={styles.textHead}>Bilet Satın Al</Text>
          {categories.map((category, index) => (
            <Card key={index} style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <View>
                  <Title style={styles.name}>{category.name}</Title>
                  <Paragraph
                    style={styles.name}
                  >{`${category.price} TL`}</Paragraph>
                </View>
                <Button mode="contained" style={styles.button}>
                  Bilet Al
                </Button>
              </Card.Content>
            </Card>
          ))}
        </View>
      ) : (
        <View>
          <Text style={styles.name}>Ücretsiz Etkinlik</Text>
        </View>
      )}
    </View>
  );
};

export default Categories;