import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from "react-redux";

const TestPage = () => {
  const param = useSelector((state) => state.param.value);
  const [question, setQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(true);
  const isAnswered = selectedOption == null ? false : true;
  const getQuestion = () => {
    fetch("http://localhost:3001/create-test", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(param)
    })
      .then(res => res.json())
      .then(res => {
        setQuestion(res)
      })
      .catch(error => {
        setQuestion(null)
      })
      .finally(() => {
        setLoading(false)
      });
  }
  useEffect(() => {
    getQuestion()
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const newQuestion = () => {
    setQuestion(null)
    setSelectedOption(null);
    setLoading(true)
    getQuestion()
  }

  const getOptionStyle = (option) => {
    if (isAnswered) {
      if (option === question.correctAnswer) {
        return [styles.option, styles.selectedOptionCorrect];
      } else if (option === selectedOption) {
        return [styles.option, styles.selectedOptionIncorrect];
      }
    }
    return styles.option;
  };

  return (
    <View style={styles.container}>
      {loading && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
          <View>
            <ActivityIndicator size="large" color={"#336699"} />
          </View>
        </View>

      )}
      {question && (
        <View>
          <Text style={styles.question}>{question.question}</Text>
          <TouchableOpacity
            style={getOptionStyle("answer1")}
            onPress={() => handleOptionSelect("answer1")}
            disabled={isAnswered}
          >
            <Text style={styles.optionText}>{question.answer1}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={getOptionStyle("answer2")}
            onPress={() => handleOptionSelect("answer2")}
            disabled={isAnswered}
          >
            <Text style={styles.optionText}>{question.answer2}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={getOptionStyle("answer3")}
            onPress={() => handleOptionSelect("answer3")}
            disabled={isAnswered}
          >
            <Text style={styles.optionText}>{question.answer3}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={getOptionStyle("answer4")}
            onPress={() => handleOptionSelect("answer4")}
            disabled={isAnswered}
          >
            <Text style={styles.optionText}>{question.answer4}</Text>
          </TouchableOpacity>
        </View>
      )}
      {isAnswered && (
        <View style={{ marginTop: 50, justifyContent: "center", alignItems: "flex-end" }}>
          <TouchableOpacity
            style={[styles.option, { backgroundColor: "#336699", width: 160, justifyContent: "center", alignItems: "center" }]}
            onPress={() => newQuestion()}
          >
            <Text style={[styles.optionText, { color: "white" }]}>Sıradaki soru</Text>
          </TouchableOpacity>
        </View>

      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    minHeight: "100%"

  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    width: "100%",
    marginTop: 50
  },
  option: {
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    marginBottom: 14,
    width: '100%',
    paddingHorizontal: 10
  },
  selectedOptionCorrect: {
    backgroundColor: '#95d895',

  },
  selectedOptionIncorrect: {
    backgroundColor: '#e68484',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 600,
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: '#2196f3',
    paddingVertical: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default TestPage;
