import './events.css';
import bg from './photography.png';
import bg1 from './Ellipse2.png';
import bg2 from './Ellipse4.png';
import bgg from './bg2.png';
// import Nav from '../Nav/Nav';

import { useState, useEffect } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';

function UdgamEvents() {
  const events = [
    {
      id: 1,
      genre: 'Photography',
      subEvents: ['Photog Event 1', 'Photog Event 2'],
      subEventsImg: [bg, bgg]
    },
    {
      id: 2,
      genre: 'Dance',
      subEvents: ['Dance Event 1']
    },
    {
      id: 3,
      genre: 'Art',
      subEvents: ['Art Event 1', 'Art Event 2', 'Art Event 3']
    },
    {
      id: 4,
      genre: 'Music',
      subEvents: ['Music Event 1']
    },
    {
      id: 5,
      genre: 'Literature',
      subEvents: ['Literature Event 1', 'Literature Event 2']
    },
    {
      id: 6,
      genre: 'Treasure Hunt',
      subEvents: ['Treasure hunt Event 1']
    }
  ];
  const [eventTitle, setEventTitle] = useState(events[0].subEvents[0]);
  const [eventtable, setEventtable] = useState(true);
  const [whichEvent, setwhichEvent] = useState('Photography');
  const [subEventImg, setsubEventImg] = useState(events[0].subEventsImg[0]);
  // const [eventnav, setEventnav] = useState(false);
  const [clickct, setClickct] = useState(0);
  const eventName = (event) => {
    var element = event.target;
    setwhichEvent(element.innerText);
    setClickct(0);
    let obj = events.find((o) => o.genre === element.innerText);
    setEventTitle(obj.subEvents[clickct]);
    setsubEventImg(obj.subEventsImg[clickct]);
    setEventtable(false);
    console.log(element);
  };

  const [width, setWidth] = useState(window.innerWidth);

  function checkNav() {
    if (width > 800) {
      return;
    } else {
      // document.querySelector('.leader').style.display = 'none';
      setEventtable(false);
      // setEventnav(false);
      // if (document.querySelector('.udyam-nav') != null) {
      document.querySelector('.udyam-nav').style.display = 'none';
      // }
    }
  }

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  function slidemobile() {
    // setEvent(true);
    if (width < 800) {
      // document.querySelector('.leader').style.display = 'none';
      setEventTitle(false);
    }
  }
  function sliding() {
    // setEvent(true);
    setEventtable(true);
    // setEventTitle(true);
    // document.querySelector('.leader').style.display = 'block';
  }

  const circleOneClicked = () => {
    let obj = events.find((o) => o.genre === whichEvent);
    if (clickct <= 0) {
      setClickct(obj.subEvents.length - 1);
    } else {
      setClickct(clickct - 1);
    }
    setEventTitle(obj.subEvents[clickct]);
    setsubEventImg(obj.subEventsImg[clickct]);
  };
  const circleTwoClicked = () => {
    let obj = events.find((o) => o.genre === whichEvent);
    if (clickct >= obj.subEvents.length - 1) {
      setClickct(0);
    } else {
      setClickct(clickct + 1);
    }
    setEventTitle(obj.subEvents[clickct]);
    setsubEventImg(obj.subEventsImg[clickct]);
    console.log(clickct);
  };

  return (
    <div>
      {(eventtable || width > 800) && (
        <div className="leader">
          {width < 800 && (
            <div className="back" onClick={checkNav}>
              <IoIosArrowBack />
            </div>
          )}

          <div className="token-event" onClick={eventName}>
            <div className="event-name" onClick={checkNav}>
              <a href="#">Photography</a>
            </div>
            <div className="event-name" onClick={checkNav}>
              <a href="#">Dance</a>
            </div>
            <div className="event-name" onClick={checkNav}>
              <a href="#">Art</a>
            </div>
            <div className="event-name" onClick={checkNav}>
              <a href="#">Music</a>
            </div>
            <div className="event-name" onClick={checkNav}>
              <a href="#">Literature</a>
            </div>
            <div className="event-name" onClick={checkNav}>
              <a href="#">Treasure Hunt</a>
            </div>
          </div>
        </div>
      )}

      <div className="getback" onClick={sliding}>
        <MdArrowForwardIos />
      </div>
      <div className="events-main" onClick={slidemobile}>
        <div className="event-body">
          <div className="event-heading">
            <div className="events-heading-box">EVENTS</div>
          </div>
          <div className="event-box">
            <div className="event-title">{eventTitle}</div>
            <div className="event-desc-box">
              <div className="event-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </div>
            <div className="event-buttons">
              <div className="register">Register</div>
              <div className="event-submit">SUBMIT</div>
            </div>
          </div>
        </div>
      </div>
      <div className="event-img-pc">
        <img className="circle-one" src={bg1} onClick={circleOneClicked} />
        <img className="circle-two" onClick={circleTwoClicked} src={bg2} />
        <img className="main-img" src={subEventImg} />
        {/* <div className="circle-one" onClick={circleOneClicked}>
          <img src={bg1} />
        </div>
        <div className="circle-two" onClick={circleTwoClicked}>
          <img src={bg2} />
        </div>
        <div className="main-img">
          <img src={bg} />
        </div> */}
      </div>
      {/* for mobile view */}
      <div className="events-main-mob" onClick={slidemobile}>
        <div className="event-body-mob">
          <div className="event-heading-mob">
            <div className="events-heading-box">EVENTS</div>
          </div>
          <div className="event-box-mob">
            <div className="event-img-mob">
              <img src={subEventImg} />
            </div>
            <div className="event-title">{eventTitle}</div>
            <div className="event-desc-box">
              <div className="event-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </div>
            <div className="event-buttons">
              <div className="register">Register</div>
              <div className="event-submit">SUBMIT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UdgamEvents;
