import React from "react";
import { ScrollView, View } from "react-native";
import { AnswerInfo } from "../models/AnswerInfo";
import AnswerCard from "./AnswerCard";

interface Props {
  gameSession: AnswerInfo[];
  categoryColor: string;
}

const GameSession = ({ gameSession, categoryColor }: Props) => {
  const answerCards = gameSession.map((info, index) => (
    <AnswerCard key={index} answerInfo={info} questionNr={index + 1} categoryColor={categoryColor} />
  ));
  return (
    <View style={{ paddingVertical: 20 }}>
      <ScrollView horizontal={true} decelerationRate={0} snapToInterval={320} snapToAlignment={"center"}>
        {answerCards}
      </ScrollView>
    </View>
  );
};

export default GameSession;
