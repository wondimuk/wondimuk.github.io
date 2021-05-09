<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <title>Quiz</title>
</head>
    <body>
        <h1>The Number Quiz</h1>
        <p>Your current score: ${quiz.score}</p>
        <p>Guess the next number in the sequence.</p>
        <p>${quiz.nextQuestion}</p>
        <form action="index" method="post">
            Your answer is:
            <input type="number" name="answer"/>
            <input type="submit" value="Submit"/>
        </form>
    </body>
</html>