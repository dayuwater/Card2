// These are some decks that are added when the software is installed
//const {name, category, description, timeLimit, passingScore, count } = this.props

// question: "",
// answer: "",
// category: "",
// difficulty: 5,
// timeLimit: 90

export const sampleDecks = {
    React: {
      name: 'React',
      category: 'Front-end Frameworks',
      description: 'Foundamental questions for React',
      timeLimit: 1,
      passingScore: 100,
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces',
          category: "basics",
          difficulty : 1,
          timeLimit: 10
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event',
          category: "Async",
          difficulty : 1,
          timeLimit: 10
        }
      ]
    },
    JavaScript: {
      name: 'JavaScript',
      category: 'Programming Languages',
      description: "Some fun and perhaps unknown facts of JavaScript",
      timeLimit : 15,
      passingScore: 80,
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.',
          category: "closure",
          difficulty : 1,
          timeLimit: 30
        },
        {
            question: '2 === 2',
            answer: 'True',
            category: "equality",
            difficulty : 1,
            timeLimit: 10
        },
        {
            question: "'2' === 2",
            answer: 'False',
            category: "equality",
            difficulty : 1,
            timeLimit: 10
        },
        {
            question: "'2' == 2",
            answer: 'True',
            category: "equality",
            difficulty : 2,
            timeLimit: 10
        },
        {
            question: "'  2' == 2",
            answer: 'True',
            category: "equality",
            difficulty : 4,
            timeLimit: 10
        },
        {
            question: "'  2' === 2",
            answer: 'False',
            category: "equality",
            difficulty : 4,
            timeLimit: 10
        },

        {
            question: "'2  3' == 23",
            answer: 'False',
            category: "equality",
            difficulty : 4,
            timeLimit: 10
        },
        {
            question: "'23  ' == 23",
            answer: 'True',
            category: "equality",
            difficulty : 4,
            timeLimit: 10
        },
        {
            question: "'23  ' == '23'",
            answer: 'False',
            category: "equality",
            difficulty : 4,
            timeLimit: 10
        },
        {
            question: "NaN == NaN",
            answer: 'False',
            category: "equality",
            difficulty : 5,
            timeLimit: 10
        },
        {
            question: "[] == 0",
            answer: 'True',
            category: "equality",
            difficulty : 6,
            timeLimit: 10
        },
        {
            question: "{} == 0",
            answer: 'SyntaxError',
            category: "equality",
            difficulty : 7,
            timeLimit: 30
        },
        {
            question: "+[]",
            answer: '0',
            category: "evaluating symbols",
            difficulty : 5,
            timeLimit: 20
        },
        {
            question: "+{}",
            answer: 'NaN',
            category: "evaluating symbols",
            difficulty : 5,
            timeLimit: 20
        },
        {
            question: "+[]+[]",
            answer: "'0'",
            category: "evaluating symbols",
            difficulty : 7,
            timeLimit: 20
        },
        {
            question: "+!(+[])",
            answer: "1",
            category: "evaluating symbols",
            difficulty : 8,
            timeLimit: 30
        },
        {
            question: "+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]]+[+[]])",
            answer: "Infinity",
            category: "evaluating symbols",
            difficulty : 10,
            timeLimit: 300
        },
        {
            question: "'+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]]+[+[]])'",
            answer: "(same as the question)",
            category: "evaluating symbols",
            difficulty : 10,
            timeLimit: 300
        },

      ]
    },
    Six:{
        name: "Six",
        category: "Middle School Algebra",
        description: "How to manipulate 3 identical numbers to 6.",
        timeLimit: 15,
        passingScore: 80,
        questions:[
            {
                question: "1 ? 1 ? 1 = 6",
                answer: "(1+1+1)! = 6",
                difficulty: 5,
                timeLimit: 60
            },
            {
                question: "2 ? 2 ? 2 = 6",
                answer: "2+2+2 = 6",
                difficulty: 1,
                timeLimit: 10
            },
            {
                question: "3 ? 3 ? 3 = 6",
                answer: "3*3-3 = 6",
                difficulty: 2,
                timeLimit: 30
            },
            {
                question: "4 ? 4 ? 4 = 6",
                answer: "sqrt(4)+sqrt(4)+sqrt(4) = 6",
                difficulty: 5,
                timeLimit: 60
            },
            {
                question: "5 ? 5 ? 5 = 6",
                answer: "5+5/5 = 6",
                difficulty: 2,
                timeLimit: 30
            },
            {
                question: "6 ? 6 ? 6 = 6",
                answer: "6+6-6 = 6",
                difficulty: 2,
                timeLimit: 30
            },
            {
                question: "7 ? 7 ? 7 = 6",
                answer: "7-7/7 = 6",
                difficulty: 2,
                timeLimit: 30
            },
            {
                question: "8 ? 8 ? 8 = 6",
                answer: "sqrt(8 + 8/8)! = 6",
                difficulty: 7,
                timeLimit: 120
            },
            {
                question: "9 ? 9 ? 9 = 6",
                answer: "sqrt(9)*sqrt(9)-sqrt(9) = 6",
                difficulty: 5,
                timeLimit: 60
            },
            {
                question: "0 ? 0 ? 0 = 6",
                answer: "(0! + 0! + 0!)! = 6",
                difficulty: 5,
                timeLimit: 60
            },
            {
                question: "10 ? 10 ? 10 = 6",
                answer: "(log10(10) + log10(10) + log10(10))! = 6",
                difficulty: 7,
                timeLimit: 90
            }
           


        ]

    },
    OnePlusOne: {
        name:"OnePlusOne",
        category:"What happens when 1 + 1?",
        description: "1 + 1 under different circumstances",
        timeLimit: 10,
        passingScore:70,
        questions: [
            {question: "1+1=?", answer:"2", category:"Grade 1 math", difficulty:1, timeLimit:30},
            {question: "1+1=?", answer:"10", category:"Simple Computer Science", difficulty:2, timeLimit:30},
            {question: "1+1=?", answer:"1", category:"Boolean Algebra", difficulty:3, timeLimit:30},
            {question: "'1'+'1'='?'", answer:"b", category:"Char Arithmethic", difficulty:4, timeLimit:30},
            {question: "1+'1'=?", answer:"50", category:"Char Arithmethic", difficulty:4, timeLimit:30},
            {question: "1+'1'=?", answer:"11", category:"Javascript", difficulty:4, timeLimit:30},
            {question: "1+1-1+1-1+1-1...=?", answer:"1/2", category:"Calculus", difficulty:6, timeLimit:30},
            {question: "1+1+1+1+1+1+1...=?", answer:"infinity", category:"Calculus", difficulty:6, timeLimit:30},
            {question: "1+2+3+4+5+6+7...=?", answer:"-1/12", category:"???", difficulty:8, timeLimit:30},
            {question: "1+1=?", answer:"3", category:"Derivitive of x^3", difficulty:10, timeLimit:30},
        ]
    },
    "Calculate without calculator":{
        name: "Calculate without calculator",
        description: "Use some techniques to calculate the following without a calculator",
        timeLimit:90,
        passingScore:100,
        questions:[
            {question: "1+1=?", answer:"2", category:"Grade 1 math", difficulty:1, timeLimit:30},
            {question: "17+15=?", answer:"32", category:"Grade 2 math", difficulty:2, timeLimit:30},
            {question: "199+199=?", answer:"398", category:"Grade 3 math", difficulty:3, timeLimit:30},
            {question: "1999+2999+3999=?", answer:"8997", category:"Grade 4 math", difficulty:4, timeLimit:30},
            {question: "999+1999+2999+3999+4999+...+99999=?", answer:"5049900", category:"Grade 4 math", difficulty:8, timeLimit:30},

            {question: "5*5=?", answer:"25", category:"Grade 5 math", difficulty:1, timeLimit:30},
            {question: "55*55=?", answer:"3025", category:"Grade 6 math", difficulty:3, timeLimit:30},
            {question: "15*15+35*35=?", answer:"1450", category:"Grade 6 math", difficulty:5, timeLimit:30},
            {question: "15*15+25*25+...+95*95=?", answer:"33225", category:"Grade 6 math", difficulty:8, timeLimit:30},
            {question: "9*11+19*21+29*31+39*41+...+99*101=?", answer:"33834900", category:"Grade 6 math", difficulty:10, timeLimit:30},
        ]

    }

  }
