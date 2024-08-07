export const QUIZZES = [
  {
    title: "HTML",
    icon: "./icons/icon-html.svg",
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Trainer Marking Language",
          "Hyper Text Marketing Language",
          "Hyper Text Markup Language",
          "Hyper Text Markup Leveler",
        ],
        answer: "Hyper Text Markup Language",
      },
      {
        question:
          "Which of the following is the correct structure for an HTML document?",
        options: [
          "<html><head></head><body></body></html>",
          "<head><html></html><body></body></head>",
          "<body><head></head><html></html></body>",
          "<html><body></body><head></head></html>",
        ],
        answer: "<html><head></head><body></body></html>",
      },
      {
        question:
          "Which HTML element is used to define the title of a document?",
        options: ["<head>", "<title>", "<header>", "<top>"],
        answer: "<title>",
      },
      {
        question: "What is the purpose of the <body> tag in HTML?",
        options: [
          "It defines the document's head section.",
          "It contains all the content such as text, images, and links.",
          "It is used to define the main content of an HTML document.",
          "It specifies the body of the email content in HTML.",
        ],
        answer: "It contains all the content such as text, images, and links.",
      },
      {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<hyperlink>", "<link>", "<a>", "<href>"],
        answer: "<a>",
      },
      {
        question: "Which tag is used to display images in HTML?",
        options: ["<img>", "<image>", "<src>", "<pic>"],
        answer: "<img>",
      },
      {
        question:
          "What attribute is used to provide the path of an image in the <img> tag?",
        options: ["link", "src", "href", "url"],
        answer: "src",
      },
      {
        question: "Which HTML tag is used to create an unordered list?",
        options: ["<ul>", "<ol>", "<list>", "<li>"],
        answer: "<ul>",
      },
      {
        question: "What does the <br> tag do?",
        options: [
          "It breaks the text into two sections.",
          "It creates a bold text.",
          "It inserts a line break.",
          "It adds a new row in a table.",
        ],
        answer: "It inserts a line break.",
      },
      {
        question: "In HTML, what does the `fieldset` tag do?",
        options: [
          "It is used to group related data in a form.",
          "It sets the field to a fixed size.",
          "It automatically validates the fields within a form.",
          "It hides the fields in a form.",
        ],
        answer: "It is used to group related data in a form.",
      },
    ],
  },
  {
    title: "CSS",
    icon: "./icons/icon-css.svg",
    questions: [
      {
        question: "What does CSS stand for?",
        options: [
          "Colorful Style Sheets",
          "Computer Style Sheets",
          "Cascading Style Sheets",
          "Creative Style Sheets",
        ],
        answer: "Cascading Style Sheets",
      },
      {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["styles", "style", "class", "font-style"],
        answer: "style",
      },
      {
        question: "How do you insert a comment in a CSS file?",
        options: [
          "// this is a comment //",
          "/* this is a comment */",
          "-- this is a comment --",
          "<!-- this is a comment -->",
        ],
        answer: "/* this is a comment */",
      },
      {
        question:
          "Which property is used to change the background color of an element?",
        options: ["color", "bgcolor", "background-color", "background"],
        answer: "background-color",
      },
      {
        question: "How do you apply a style to all <p> elements?",
        options: ["p { }", ".p { }", "#p { }", "all.p { }"],
        answer: "p { }",
      },
      {
        question: "Which property is used to change the font of an element?",
        options: ["font-style", "text-style", "font-family", "typeface"],
        answer: "font-family",
      },
      {
        question:
          "How do you make each word in a text start with a capital letter?",
        options: [
          "text-transform: capitalize",
          "text-transform: uppercase",
          "text-style: capital",
          "font-transform: capitalize",
        ],
        answer: "text-transform: capitalize",
      },
      {
        question: "How do you select an element with the class name 'header'?",
        options: [".header", "#header", "header", "*header"],
        answer: ".header",
      },
      {
        question: "What is the default value of the 'position' property?",
        options: ["relative", "fixed", "absolute", "static"],
        answer: "static",
      },
      {
        question: "What is the purpose of the z-index property in CSS?",
        options: [
          "To count the number of elements",
          "To set the magnification level of an element",
          "To specify the stack order of an element",
          "To create a zoom effect",
        ],
        answer: "To specify the stack order of an element",
      },
    ],
  },
  {
    title: "JavaScript",
    icon: "./icons/icon-js.svg",
    questions: [
      {
        question:
          "Which syntax is correct to output 'Hello World' in an alert box?",
        options: [
          "alertBox('Hello World');",
          "msg('Hello World');",
          "alert('Hello World');",
          "msgBox('Hello World');",
        ],
        answer: "alert('Hello World');",
      },
      {
        question: "How do you call a function named 'myFunction'?",
        options: [
          "call function myFunction()",
          "call myFunction()",
          "myFunction()",
          "execute myFunction()",
        ],
        answer: "myFunction()",
      },
      {
        question: "How to write an IF statement in JavaScript?",
        options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"],
        answer: "if (i == 5)",
      },
      {
        question:
          "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        options: [
          "if (i <> 5)",
          "if i =! 5 then",
          "if (i != 5)",
          "if i not = 5",
        ],
        answer: "if (i != 5)",
      },
      {
        question: "How does a FOR loop start?",
        options: [
          "for (i = 0; i <= 5)",
          "for i = 1 to 5",
          "for (i <= 5; i++)",
          "for (i = 0; i <= 5; i++)",
        ],
        answer: "for (i = 0; i <= 5; i++)",
      },
      {
        question: "How can you add a comment in a JavaScript?",
        options: [
          "'This is a comment",
          "//This is a comment",
          "<!--This is a comment-->",
          "/* This is a comment */",
        ],
        answer: "//This is a comment",
      },
      {
        question: "What is the correct way to write a JavaScript array?",
        options: [
          "var colors = (1:'red', 2:'green', 3:'blue')",
          "var colors = ['red', 'green', 'blue']",
          "var colors = 'red', 'green', 'blue'",
          "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        ],
        answer: "var colors = ['red', 'green', 'blue']",
      },
      {
        question:
          "How do you find the number with the highest value of x and y?",
        options: [
          "Math.ceil(x, y)",
          "top(x, y)",
          "Math.max(x, y)",
          "Math.highest(x, y)",
        ],
        answer: "Math.max(x, y)",
      },
      {
        question: "Which operator is used to assign a value to a variable?",
        options: ["-", "*", "=", "x"],
        answer: "=",
      },
      {
        question: "What is the correct way to write a JavaScript object?",
        options: [
          "var person = {firstName: 'John', lastName: 'Doe'};",
          "var person = {firstName = 'John', lastName = 'Doe'};",
          "var person = (firstName: 'John', lastName: 'Doe');",
          "var person = (firstName = 'John', lastName = 'Doe');",
        ],
        answer: "var person = {firstName: 'John', lastName: 'Doe'};",
      },
    ],
  },
  {
    title: "React",
    icon: "./icons/icon-react.svg",
    questions: [
      {
        question:
          "Which syntax can be used to output dynamic values / JavaScript expressions in JSX?",
        options: [
          "[ ] (Square brackets)",
          "( ) (Parentheses)",
          "{ } (Curly braces)",
          "{{ }} (Double curly braces)",
        ],
        answer: "{ } (Curly braces)",
      },
      {
        question:
          "Which values can be output as dynamic values in JSX (i.e., between curly braces)?",
        options: [
          "Any valid JavaScript statement",
          "Any valid React template instruction",
          "Any valid JavaScript expression",
          "Any valid React template expression",
        ],
        answer: "Any valid JavaScript expression",
      },
      {
        question:
          "How should you typically load / use images in React projects?",
        options: [
          "Set the <img> src equal to a relative string path to the image",
          "Set the <img> src equal to the path generated via an import statement (that points at the image)",
          "Set the <img> src equal to an absolute string path to the image",
          "Set the <img> src equal to the image itself",
        ],
        answer:
          "Set the <img> src equal to the path generated via an import statement (that points at the image)",
      },
      {
        question:
          "How can you assign a dynamic value to an HTML element attribute?",
        options: [
          "Via the same syntax you use for dynamic values in JSX in general: Curly braces",
          "Via the special React attribute directive that can be added to all built-in and custom components",
          "Via the same syntax you use for attributes in general: You set the value as a hard-coded string",
          "Via the special React template attribute syntax that allows you to store dynamic values for attributes",
        ],
        answer:
          "Via the same syntax you use for dynamic values in JSX in general: Curly braces",
      },
      {
        question:
          "Which core React concept can increase the reusability of React components?",
        options: ["JSX", "Classes", "Functions", "Props"],
        answer: "Props",
      },
      {
        question: "How do props work in React?",
        options: [
          "You can set props ('custom attributes') on components to automatically output them in the component's JSX code",
          "You can set props ('custom attributes') on components to then extract & use them in the receiving component",
          "You can set props ('custom attributes') on components which then receive them as automatically provided constants in the function body",
          "You can set props ('custom attributes') on components which can then call a getProps() function to extract the received values",
        ],
        answer:
          "You can set props ('custom attributes') on components to then extract & use them in the receiving component",
      },
    ],
  },
];
