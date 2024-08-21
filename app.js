const Quentions = [
    {
        Q: "What is the theme for 78th Independence Day?",
        correctAnwer: "Viksit Bharat",
        Option: [
            "Promote India's culture",
            "Nation First, Always First",
            "Viksit Bharat",
            "None of the above"
        ]

    },
    {
        Q: "When did British came to India?",
        correctAnwer: "1608",
        Option: [
            "1600",
            "1608",
            "1609",
            "1611"
        ]

    },
    {
        Q: "For how many years India was under British Rule?",
        correctAnwer: "200 years",
        Option: [
            "190 years",
            "9 years",
            "200 years",
            "100 years"
        ]

    },
    {
        Q: "Which region of India saw mass migration in the year 1947?",
        correctAnwer: "Punjab",
        Option: [
            "Maharashtra ",
            "Gujarat ",
            "Bengal",
            "Punjab"
        ]

    },
    {
        Q: "Who was the first Governor-General of independent India?",
        correctAnwer: "Lord Moutbatten",
        Option: [
            "C. Gopalachari",
            "Dr. B.R. Ambedkar",
            "Rajendra Prasad",
            "Lord Moutbatten",
        ]

    },
    {
        Q: "When was the tricolour adopted as the National Flag of India?",
        correctAnwer: "July 22, 1947",
        Option: [
            "January 26, 1950",
            "October 2, 1947",
            "July 22, 1947",
            "July 4, 1948",
        ]

    },
    {
        Q: "Which great Indian freedom warrior organized the peaceful Dandi March to protest the British salt tax?",
        correctAnwer: "Mahatma Gandhi",
        Option: [
            "Sardar Patel",
            "Bal Gangadhar Tilak",
            "Subhas Chandra Bose",
            "Mahatma Gandhi",
        ]

    },
    {
        Q: "Where did the tragic Jallianwala Bagh massacre take place in India?",
        correctAnwer: "Amritsar",
        Option: [
            "Mumbai",
            "Amritsar",
            "Delhi",
            "Patna",
        ]

    },
    {
        Q: "Who was the leader of the revolt of 1857 in Kanpur?",
        correctAnwer: "Nana Sahib",
        Option: [
            "Mangal Pandey",
            "Nana Sahib",
            "Tantia Tope",
            "Rani Lakshmibai",
        ]

    },
    {
        Q: "The Chauri Chaura incident led to the suspension of which movement?",
        correctAnwer: "Non-Cooperation Movement",
        Option: [
            "Non-Cooperation Movement",
            "Civil Disobedience Movement",
            "Quit India Movement",
            "Khilafat Movement",
        ]

    }



]



const SubmitButton = document.querySelector("#Submit")
const ShowResult = document.querySelector("#ShowResult")
const content = document.querySelector(".content")
const para = document.querySelector("#para")
const resultPara1 = document.querySelector(".incorrectResult")
const result = document.querySelector("#resultPara")
const para1 = document.querySelector("#para1")
let QuestionIndex = 0;
let score = 0;
let score1 = 0;
let questionNumber = 1;
const incorrectAnswer = []
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
function displayQuestion() {
    para.innerHTML = questionNumber + "/" + Quentions.length
    const q = Quentions[QuestionIndex];
    const questionData = document.createElement('div');
    questionData.className = 'question';
    questionData.innerHTML = questionNumber + '.' + q.Q


    const OptionElement = document.createElement('div')
    OptionElement.className = "opt"

    const Options = [...q.Option]
    shuffleArray(Options)
    for (let i = 0; i < Options.length; i++) {
        const labe = document.createElement("label");
        labe.className = 'option'
        const opt = document.createElement("input");
        opt.type = "radio";
        opt.name = "quiz";
        opt.value = Options[i];

        const textNode = document.createTextNode(Options[i]);

        labe.appendChild(opt)
        labe.appendChild(textNode);

        OptionElement.appendChild(labe)

    }
    content.innerHTML = ''
    content.appendChild(questionData)
    content.appendChild(OptionElement)


}
function checkanswer() {


    const check = document.querySelector('input[name="quiz"]:checked')
    const op = document.getElementById("op")
    if (check) {
        const ans = check.value;


        if (ans === Quentions[QuestionIndex].correctAnwer) {
            score++;
        }
        else {
            incorrectAnswer.push({
                "Question": Quentions[QuestionIndex].Q,
                "CorrectAnswer": Quentions[QuestionIndex].correctAnwer,
                "Incorrect": ans
            });
        }

    }



    check.checked = false
    QuestionIndex++;
    questionNumber++;
    if (QuestionIndex < Quentions.length) {

        displayQuestion()
    }
    else {
        SubmitButton.style.display = "none"
        ShowResult.style.display = "block"

        content.style.display = "none"
        ShowResult.addEventListener("click", showResult);

    }
}
function showResult() {

    result.innerHTML = "Your Score is: " + score + "/" + Quentions.length;
    ShowResult.style.display = "none"
    para.style.display = "none"
    para1.style.display = "block"
    resultPara1.style.display = 'block'
    let incorrectHtml = '';
    for (let i = 0; i < incorrectAnswer.length; i++) {
        console.log("add");

        incorrectHtml += `
        <p>
           Q. ${incorrectAnswer[i].Question}<br>
            Correct Answer:${incorrectAnswer[i].CorrectAnswer}<br>
            Your Answer:${incorrectAnswer[i].Incorrect}<br>
        </p>
        
         `;
    }
    resultPara1.innerHTML = `
      <p>Your Incorrect Answer</p>
    ${incorrectHtml}`



}
SubmitButton.addEventListener("click", checkanswer)
displayQuestion()