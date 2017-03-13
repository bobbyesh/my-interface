import React, { Component } from 'react';
import Word from './Word';
import './Article.css';

class Article extends Component {
  render() {
    let words = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus urna, fringilla id ornare at, dapibus non sem. Cras quis lorem vel felis consequat scelerisque. Duis nec condimentum magna. Fusce placerat vulputate orci ut rhoncus. Duis accumsan est odio, at condimentum libero posuere sit amet. Aenean aliquam augue dui, ac bibendum nisl sollicitudin sed. Nunc tincidunt, quam eget sollicitudin pellentesque, magna risus sollicitudin purus, commodo pretium sapien purus venenatis lectus."
    words += words + "\n\n\tPhasellus ligula dui, eleifend sed tristique non, scelerisque ut metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam id velit quis massa hendrerit facilisis quis sit amet mi. Sed iaculis urna at lorem posuere faucibus. Nullam molestie nibh nisl, a sollicitudin nisl ornare sit amet. Integer elementum, enim eu rhoncus tincidunt, nunc felis viverra odio, quis rutrum diam nibh vel ante. Nulla non urna sodales nisl imperdiet fringilla et luctus sapien. Integer quis interdum urna, non porttitor velit. Vivamus quam dolor, rhoncus sed felis at, posuere tincidunt felis. Ut viverra nunc risus, nec maximus ligula convallis vel. Donec eget arcu vel elit tristique pretium. Ut blandit quam dignissim viverra scelerisque. In hac habitasse platea dictumst.";
    words = words.split(" ");
    console.log(words);
    let wordClasses = words.map((elem, idx) => <Word key={idx} id={idx}>{elem}</Word>);
    console.log(wordClasses);
    return (
      <div className="container">
        <div className="row">
          <div className="col-mid-10">
            <div className="article text-left">
              <h3>Article Title </h3>
              <div className="article-content">
                <p>
                  {wordClasses}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
