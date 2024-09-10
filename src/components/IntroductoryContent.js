import React from 'react'
import picture from "../images/quiz.png"

function IntroductoryContent() {
  return (

<div className='Introduction'>
    <h2 className='Introduction-comp1'>Trivia</h2>
    <p className='Introduction-comp2'>
        Quizzes are a fun way to test your knowledge and learn new things. They provide an engaging and interactive method to reinforce what you’ve learned, helping to solidify information in your memory. By challenging yourself with quizzes, you can identify areas where you need improvement and gain a deeper understanding of various topics. Additionally, quizzes can be a great way to break up study sessions, making learning more enjoyable and less monotonous. Whether you’re preparing for an exam or just curious about a subject, quizzes offer a valuable and entertaining learning experience.
        <br />
    </p>
        <img src= {picture}className="My-image"></img>
        <br />
    <p className='Introduction-comp2'>
        Moreover, quizzes can be tailored to suit different learning styles and preferences, making them a versatile tool for education. They can be used in various settings, from classrooms to online platforms, and can cover a wide range of subjects. Quizzes also promote active recall, which is a powerful technique for enhancing memory retention. By regularly taking quizzes, you can track your progress over time and stay motivated to continue learning. Furthermore, quizzes can foster a sense of competition and achievement, especially when shared with friends or classmates. Overall, quizzes are an excellent way to make learning dynamic, interactive, and fun.
    </p>
</div>

  )
}

export default IntroductoryContent