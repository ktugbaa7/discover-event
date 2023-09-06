import { View, Text } from "react-native";
import React from "react";
import styles from "./Categories.style";
import { Button, Card, Paragraph, Title } from "react-native-paper";

const Categories = ({ id, categories }) => {
  return (
    <View style={styles.container}>
      {id.free === false ? (
        <View style={styles.categoriesContainer}>
          {categories.map((category, index) => (
            <Card key={index} style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <View>
                  <Title>{category.name}</Title>
                  <Paragraph>{`${category.price} TL`}</Paragraph>
                </View>
                <Button mode="contained" style={styles.button}>
                  Bilet Al
                </Button>
              </Card.Content>
            </Card>
          ))}
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default Categories;
