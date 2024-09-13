import React from 'react'
import picture from "../images/Anime.png"

function IntroductoryContent() {
  return (

<div className='Introduction'>
    <h2 className='Introduction-comp1'>Dive into the World of Anime with Our Quizzes and Trivia!</h2>
    <p className='Introduction-comp2'>
    Are you an anime enthusiast looking to test your knowledge and learn new things about your favorite shows and characters? Our anime quizzes and trivia questions provide an engaging and interactive way to reinforce what you’ve learned, helping to solidify information in your memory. Challenge yourself with our quizzes to identify areas where you need improvement and gain a deeper understanding of various anime series. Whether you’re a seasoned otaku or just starting your anime journey, our quizzes offer a valuable and entertaining learning experience.        <br />
    </p>
        <img src= {picture}className="My-image"></img>
        <br />
    <h2 className='Introduction-comp1'>Why Our Anime Quizzes?</h2>
    <p className='Introduction-comp2'>
      <ol>
        <li> <b>Engaging Content:</b> Our quizzes cover a wide range of anime genres and series, from classics to the latest hits.
        </li>
        <li><b>Interactive Learning:</b>Interactive Learning: Quizzes are a fun way to break up study sessions, making learning about anime more enjoyable and less monotonous.
        </li>
        <li><b>Tailored Experience:</b> Our quizzes can be customized to suit different learning styles and preferences, making them a versatile tool for all anime fans.
        </li>
        <li><b>Memory Retention:</b> Quizzes promote active recall, a powerful technique for enhancing memory retention. By regularly taking quizzes, you can track your progress over time and stay motivated to continue learning.
        </li>
        <li><b>Friendly Competition:</b> Share your quiz results with friends or fellow anime fans to foster a sense of competition and achievement.
        </li>
      </ol>
      <br />
      Overall, our anime quizzes are an excellent way to make learning about your favorite shows dynamic, interactive, and fun. Dive in and see how much you really know about the world of anime!
</p>
</div>

  )
}

export default IntroductoryContent