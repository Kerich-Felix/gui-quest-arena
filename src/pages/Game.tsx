import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Trophy, Coins, Clock, Star } from "lucide-react";

interface GameData {
  name: string;
  entryFee: string;
  reward: string;
  questions?: {
    question: string;
    options: string[];
    correct: number;
  }[];
  type?: string;
}

const games: Record<string, GameData> = {
  "meme-trivia": {
    name: "Meme Trivia Challenge",
    entryFee: "50 $GUI",
    reward: "200 $GUI + Rare NFT",
    questions: [
      {
        question: "Which meme coin started as a joke based on a popular internet meme?",
        options: ["Bitcoin", "Dogecoin", "Ethereum", "Litecoin"],
        correct: 1
      },
      {
        question: "What does 'HODL' originally stand for?",
        options: ["Hold On for Dear Life", "Hold Over Daily Losses", "A misspelling of 'hold'", "High Order Digital Ledger"],
        correct: 2
      },
      {
        question: "Which phrase is associated with diamond hands?",
        options: ["Sell everything", "Hold strong", "Day trading", "Quick profits"],
        correct: 1
      }
    ]
  },
  "token-quest": {
    name: "Token Collection Quest",
    entryFee: "75 $GUI",
    reward: "300 $GUI + Epic NFT",
    type: "collection"
  },
  "pvp-battle": {
    name: "PvP Battle Arena",
    entryFee: "100 $GUI",
    reward: "500 $GUI + Legendary NFT",
    type: "battle"
  }
};

const Game = () => {
  const { gameId } = useParams();
  const { toast } = useToast();
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameComplete, setGameComplete] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const game = gameId ? games[gameId] : null;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStarted && timeLeft > 0 && !gameComplete) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, gameStarted, gameComplete]);

  if (!game) {
    return <Navigate to="/games" replace />;
  }

  const startGame = () => {
    setGameStarted(true);
    toast({
      title: "Game Started!",
      description: `${game.entryFee} deducted from your wallet`,
    });
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (game.questions && selectedAnswer !== null) {
      if (selectedAnswer === game.questions[currentQuestion].correct) {
        setScore(score + 1);
      }
    }

    if (game.questions && currentQuestion < game.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      setGameComplete(true);
      const finalScore = selectedAnswer === game.questions![currentQuestion].correct ? score + 1 : score;
      const earnedTokens = Math.floor((finalScore / game.questions!.length) * 200);
      
      toast({
        title: "Game Complete!",
        description: `You earned ${earnedTokens} $GUI tokens!`,
      });
    }
  };

  const playAgain = () => {
    setGameStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(30);
    setGameComplete(false);
    setSelectedAnswer(null);
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold gradient-text mb-6">{game.name}</h1>
              <Card className="gaming-card p-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <Coins className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Entry Fee</p>
                    <p className="font-bold text-primary">{game.entryFee}</p>
                  </div>
                  <div className="text-center">
                    <Trophy className="w-8 h-8 mx-auto mb-2 text-secondary" />
                    <p className="text-sm text-muted-foreground">Potential Reward</p>
                    <p className="font-bold text-secondary">{game.reward}</p>
                  </div>
                  <div className="text-center">
                    <Star className="w-8 h-8 mx-auto mb-2 text-accent" />
                    <p className="text-sm text-muted-foreground">Difficulty</p>
                    <p className="font-bold text-accent">Medium</p>
                  </div>
                </div>
                <div className="text-center">
                  <Button 
                    onClick={e => {
                      e.preventDefault();
                      startGame();
                      // Removed scroll-to-top behavior
                    }} 
                    variant="gaming" size="xl">
                    <Coins className="w-5 h-5" />
                    Pay {game.entryFee} & Start Game
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (gameComplete) {
    // Safely check for questions before accessing length
    const hasQuestions = Array.isArray(game.questions) && game.questions.length > 0;
    const finalScore = score;
    const earnedTokens = hasQuestions ? Math.floor((finalScore / game.questions.length) * 200) : 0;
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold gradient-text mb-6">Game Complete!</h1>
              <Card className="gaming-card p-8 mb-8">
                <Trophy className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h2 className="text-2xl font-bold mb-4">Your Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Score</p>
                    <p className="text-3xl font-bold text-primary">{hasQuestions ? `${finalScore}/${game.questions.length}` : "N/A"}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Earned</p>
                    <p className="text-3xl font-bold text-secondary">{earnedTokens} $GUI</p>
                  </div>
                </div>
                <div className="flex gap-4 justify-center">
                  <Button onClick={playAgain} variant="gaming">
                    Play Again
                  </Button>
                  <Button onClick={() => window.location.href = "/games"} variant="outline">
                    Choose New Game
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Safely check for questions before rendering quiz UI
  const hasQuestions = Array.isArray(game.questions) && game.questions.length > 0;
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {hasQuestions ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold gradient-text">Question {currentQuestion + 1}/{game.questions.length}</h1>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="text-xl font-bold text-accent">{timeLeft}s</span>
                  </div>
                </div>
                <Progress value={(timeLeft / 30) * 100} className="mb-8" />
                <Card className="gaming-card p-8 mb-8">
                  <h2 className="text-xl font-bold mb-6">{game.questions[currentQuestion].question}</h2>
                  <div className="space-y-3">
                    {game.questions[currentQuestion].options.map((option, index) => (
                      <Button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        variant={selectedAnswer === index ? "gaming" : "outline"}
                        className="w-full text-left justify-start p-4 h-auto"
                      >
                        <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 text-sm">
                          {String.fromCharCode(65 + index)}
                        </span>
                        {option}
                      </Button>
                    ))}
                  </div>
                </Card>
                <div className="text-center">
                  <Button 
                    onClick={handleNextQuestion} 
                    disabled={selectedAnswer === null}
                    variant="hero"
                    size="lg"
                  >
                    {currentQuestion === game.questions.length - 1 ? "Finish Game" : "Next Question"}
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold mb-4">No questions available for this game.</h2>
                <Button onClick={() => window.location.href = "/games"} variant="outline">
                  Choose New Game
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Game;