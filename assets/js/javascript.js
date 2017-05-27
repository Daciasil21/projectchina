$("#start").on("click", function(){
	$("#start").remove();
	game.loadQuestion();
});
$(document).on("click", ".answer-button", function(e){
	game.clicked(e);
});
$(document).on("click", "#reset", function(){
	game.reset();
});
var questions = [{
  question: "What is the literal translation of hello?",
  answers: ["Having a nice day?", "Good morning", "Are you good?", "What's new?"],
  correctAnswer: "Are you good?",
  image: "assets/css/images/nihao.png"
}, {
  question: "What common slang phrase is often used as a greeting?",
  answers: ["How's the weather?", "What are you doing today?", "Have you eaten yet?", "Have you made breakfast?"],
  correctAnswer: "Have you eaten yet?",
  image: "assets/css/images/chifan.jpg"
}, {
  question: "Xi3 Shou3 Jian4 means...?",
  answers: ["Football", "Sink", "Bathroom", "Washing Machine"],
  correctAnswer: "Bathroom",
  image: "assets/css/images/bathroom.jpg"
}, {
  question: "Why does the Chinese New Year fall on different days each year?",
  answers: ["Daylight Savings", "It's a lunar calendar", "It's a solar calendar", "It's on the same day each year"],
  correctAnswer: "It's a lunar calendar",
  image: "assets/css/images/happynewyear.png"
}, {
  question: "Which animal is not part of the Chinese Zodiac?",
  answers: ["Ox", "Dragon", "Cat", "Chicken"],
  correctAnswer: "Cat",
  image: "assets/css/images/cat.jpg"
}, {
  question: "What does Xie4 Xie4 mean?",
  answers: ["Good Day", "See you later", "Thank you", "May I help you?"],
  correctAnswer: "Thank you",
  image: "assets/css/images/thankyou.png"
}, {
  question: "What is the Chinese word for Dragon?",
  answers: ["Hu3", "Long2", "Long4", "Hui1"],
  correctAnswer: "Long2",
  image: "assets/css/images/dragon.png"
}, {
  question: "How do you say Goodbye?",
  answers: ["Xie4 Xie4", "Zai4 Jian4", "Kai1 Xin1", "Ai4 Ya1"],
  correctAnswer: "Zai4 Jian4",
  image: "assets/css/images/goodbye.png"
}];
// var timer;
var game = {
	questions : questions,
	currentQuestion: 0,
	// counter: 10,
	correct : 0,
	incorrect: 0,
	unanswered: 0,
	// countdown : function (){
	// 	game.counter--;
	// 	$("#counter").html(game.counter);
	// 	if (game.counter <= 0){
	// 		console.log("time up");
	// 		game.timeUp();
	// 	}
	// },
	loadQuestion : function(){
		// $("#answers").empty();

		// timer = setInterval(game.countdown, 1000);
		// $("#input").html("<h2 id = 'counter'> 10</h2>");
		$("#input").html("<h2>" + questions[game.currentQuestion].question + "</h2>");
		for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
			$("#input").append('<button class ="answer-button" id ="button' + i +'"data-name ="' + questions[game.currentQuestion].answers[i]+'">' + questions[game.currentQuestion].answers[i] + '</button>')
		}
	},

	nextQuestion : function(){
		// game.counter = 10;
		
		// $("#counter").html(game.counter);
		game.currentQuestion++;

		game.loadQuestion();
	},
	// timeUp : function (){
	// 	// clearInterval(timer);
	// 	game.unanswered++;
	// 	$("#answers").html("<h2> Out of Time </h2>");
	// 	$("#answers").append("<h3> The Correct Answer was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
	// 	if(game.currentQuestion == questions.length-1){
	// 		setTimeout(game.results, 3 * 1000)
	// 	}else {
	// 		setTimeout(game.nextQuestion, 3 * 1000)
	// 	}
	// 	 $("#answers").append("<img src='" + questions[game.currentQuestion].image + "' />");

	// },
	results: function (){
		// clearInterval(timer);
		$("#answers").html("<h1> All Done </h1>");
		$("#answers").append("<h2> Correct: " + game.correct +"</h2>");
		$("#answers").append("<h2> Incorrect: " + game.incorrect +"</h2>");
		$("#answers").append("<h2> Unanswered: " + game.unanswered + "</h2>");
		$("#answers").append("<button id = reset> reset </button>");
	},
	clicked : function(e){

		// clearInterval(timer);
		
		if($(e.target).data('name') == questions[game.currentQuestion].correctAnswer){
			game.answeredCorrectly();
		 }
		else{
			game.answeredIncorrectly();
		}
	},
	answeredCorrectly: function(){
		console.log("correct");
		// clearInterval(timer);
		game.correct++;
		$("#answers").html("<h2> you got it right </h2>");
		if(game.currentQuestion == questions.length-1){
			game.results();
		}else {
			game.nextQuestion();
		}
		$("#answers").append("<img src='" + questions[game.currentQuestion -1].image + "' />");

	},
	answeredIncorrectly: function(){
		console.log("incorrect");
		// clearInterval(timer);
		game.incorrect++;
		$("#answers").html("<h2> you got it wrong </h2>");
		$("#answers").append("<h3> The Correct Answer was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
		if(game.currentQuestion == questions.length-1){
			game.results();
		}else {
			game.nextQuestion();
		}
	$("#answers").append("<img src='" + questions[game.currentQuestion -1].image + "' />");

	},
	reset: function(){
		game.currentQuestion = 0;
		// game.counter = 10;
		game.correct = 0;
		game.incorrect = 0;
		game.unanswered = 0;
		game.loadQuestion();
		
	}
};