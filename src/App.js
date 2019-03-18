import React, { Component } from 'react';
import './App.css';
// import { Animated } from "react-animated-css";
// import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";
import Element from './Element';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      elementsText: [
        {
          text: 'Разбираться в мотивах Ави — все равно что чистить луковицу зубочисткой. Рэнди понимает, что все не так просто. Может быть, Ави оказывает услугу или платит за услугу арендодателю. Может быть, он начитался какого-нибудь гуру по менеджменту, который советует начинающим предпринимателям глубже вживаться в культуру страны. Впрочем, Ави не из тех, кто верит в такие книжки. Последняя гипотеза Рэнди, что все связано с линиями прямой видимости — широтами и долготами.',
          imgPath: require('./images/1.jpg'),
          id: 1
        },
        {
          text: 'Другое дело — японские ВМС. Они свое дело знают. У них есть Ямамото. Их торпеды действительно взрываются, попав в цель, в отличие от американских, которые, слегка поцарапав краску японских кораблей, виновато идут ко дну. Ямамото только что сделал очередную попытку уничтожить американский флот у островов Санта-Крус, потопил «Хорнет», проделал аккуратную дыру в «Энтерпрайзе». Однако он потерял треть своих самолетов. Наблюдая, как японцы несут потери, Уотерхауз гадает, сообразил ли кто-нибудь в Токио взять счеты и прикинуть кое-какие цифры.',
          imgPath: require('./images/2.jpg'),
          id: 2
        },
        {
          text: '— Кудах-тах-тах! — Алан Тьюринг изображает квохтание рассерженной курицы. Странные звуки кажутся еще чуднее из-за того, что он в противогазе, который, впрочем, почти сразу сдвигает на лоб. — Как же они любят себя слушать! — (Речь об Уинстоне Черчилле и Франклине Рузвельте.) — Да и друг друга тоже, до определенного момента. Однако голос по сравнению с печатным текстом — жутко избыточный канал информации. Если взять текст и пропустить его через «Энигму» — которая, в сущности, довольна проста, — то привычные закономерности вроде преобладания буквы «Е» практически исчезают. — Тут он снова натягивает противогаз, чтобы подчеркнуть следующее утверждение. — А вот голос можно искажать самым чудовищным образом, и он все равно будет понятен слушателю.',
          imgPath: require('./images/3.jpg'),
          id: 3
        },
        {
          text: 4,
          imgPath: require('./images/4.jpg'),
          id: 4
        },
        {
          text: 5,
          imgPath: require('./images/5.jpg'),
          id: 5
        },
        {
          text: 6,
          imgPath: require('./images/6.jpg'),
          id: 6
        },
        {
          text: 7,
          imgPath: require('./images/7.jpg'),
          id: 7
        },
        {
          text: 8,
          imgPath: require('./images/8.jpg'),
          id: 8
        },
      
      ]
    }
  }

  render() {
    return (
      <div>
        {this.state.elementsText.map(element => {
          const background = element.imgPath;
          // const background = require('./images/1.jpg');
          const styles = {
            backgroundImage: `url(${background})`,
            // background: 
          }
          return (
            
            <div key={element.id} className='Element' styles={styles}>

            <img src={element.imgPath} className='Background'/>
            {/* <img src={require('./images/1.jpg')}/> */}
              <Element 
              text = {element.text}
              >

              </Element>
            </div>
          )
        }

        )}
      </div>

    )

    // return (
    //   <div>
    //     {/* <div className='Image'>
    //       <img src={require('./tre.jpg')} alt=''/>
    //     </div> */}
    //     {/* <Animated animationIn="tada" animationOut="fadeOut" animationOutDelay={2222} isVisible={false}>
    //       <img src={require('./images/mae-mu-1438149-unsplash.jpg')} alt='' width='100%' />
    //     </Animated>
    //     <Animated animationIn="tada" animationOut="fadeOut" animationOutDelay={2222} isVisible={true}>
    //       <img src={require('./images/mae-mu-1438149-unsplash.jpg')} alt='' width='100%' />
    //     </Animated> */}
    //     {/* <ScrollAnimation animateIn="bounce" animationOut="fadeOut" isVisible={false} offset={0}>
    //       Some Text
    //     </ScrollAnimation> */}
    //     <Element>

    //     </Element>
    //   </div>
    // );
  }
}

export default App;
