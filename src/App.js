import Homepage from './Pages/Homepage';
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPartnerTheme, updateJson } from './Redux/quizSlice';

import axios from 'axios';

// Cors Error
// Dev does not work
// Is monitoring work
// Stage or another

// Listen message from iFrame parent
var eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
var eventListener = window[eventMethod];
var messageEvent = eventMethod == 'attachEvent' ? 'onmessage' : 'message';

function App() {
  const [parentMsg, setParentMsg] = useState(false);

  // Refs
  const app = useRef();
  // References
  const hero = useRef();
  const results = useRef();
  const step1 = useRef();
  const step2 = useRef();
  const step3 = useRef();
  const dispatch = useDispatch();
  const [eventId, setEventId] = useState();

  const listenParent = () => {
    // Listen to message from child window
    return eventListener(
      messageEvent,
      function (e) {
        if (e.origin !== 'http://localhost:3000' && e.data !== undefined)
          setParentMsg(e.data);
      },
      false
    );
  };

  const tokenBearer =
    'Bearer NWM4MDE2NTItZjZhOS00NjdlLTk5NjgtNmZmNjUxMWRlYWEyOiYxPGhiXVZCYHZVTypgRHo8bXQrWWsrJjc5VGxZWWQwJD0qb0JmaUktZXpXUFRbNEAxaG5oR2RfJ1VeIUtOWg==';
  const tokenBasic =
    'Basic NWM4MDE2NTItZjZhOS00NjdlLTk5NjgtNmZmNjUxMWRlYWEyOiYxPGhiXVZCYHZVTypgRHo8bXQrWWsrJjc5VGxZWWQwJD0qb0JmaUktZXpXUFRbNEAxaG5oR2RfJ1VeIUtOWg==';
  const state = useSelector((state) => state.quiz);
  const JSON = state.defaultJson;
  const userState = state.userState;

  // Posting Function
  const monitoringPost = async ({ url, data, headers, requestObject }) => {
    let config = {
      headers,
    };

    // Add Origin for external requestObject
    if (requestObject === 'external') {
      // config.headers.Origin = 'hostname';
    }

    try {
      const post = await axios.post(url, data, config);
      console.log(post);
    } catch (error) {
      console.log(error);
    }
  };

  // URIS
  const monitoringURIS = async ({ route, requestObject }) => {
    let userObject = {};
    userObject = { ...userState };
    delete userObject.step;

    const corsPass = 'https://weather-api-33323.herokuapp.com/';
    const URIS = [
      // {
      //   uri: 'https://dev-int.web.api.cognni.ai/analytic/events/',
      // },
      // {
      //   uri: 'https://qa-int.web.api.cognni.ai/analytic/events/',
      // },
      {
        uri: 'https://stage-webapi.cognni.ai/analytic/events/',
      },
    ];

    let data = {};
    // Indicate the postData according to requestObject
    if (requestObject === 'internal') {
      data.component = 'COMPONENT NAME';
      data.eventId = eventId;
      data.tags = '';
      data.data = {
        userState: userState.step !== 1 ? { ...userObject } : '',
        sendTo: JSON.sendTo,
      };
    }

    if (requestObject === 'external') {
      data.partnerId = JSON.partnerId;
      data.deviceId = '';
      data.email = userState.email;
      data.tenantId = 'GUID';
      data.eventId = eventId;
      data.tags = '';
      data.data = {
        userState: userState.step !== 1 ? { ...userObject } : '',
        sendTo: JSON.sendTo,
      };
    }

    const URI = URIS.map(async (ctx) => {
      await monitoringPost({
        url: corsPass + ctx.uri + route,
        data,
        headers: {
          Authorization:
            requestObject === 'internal' ? tokenBearer : tokenBasic,
          'Content-Type': 'application / json',
        },
        requestObject,
      });
    });
    await Promise.all(URI);
  };

  // Post the URIS with the given routes
  const monitoringLoop = async () => {
    const routes = [
      {
        name: 'internal',
        requestObject: 'internal',
      },
      {
        name: 'landingpage',
        requestObject: 'external',
      },
      {
        name: 'onboarding',
        requestObject: 'external',
      },
      {
        name: 'front',
        requestObject: 'external',
      },
    ];

    const loop = routes.map(async (ctx) => {
      await monitoringURIS({
        route: ctx.name,
        requestObject: ctx.requestObject,
      });
    });
    await Promise.all(loop);
  };

  const stepHeightHandler = (step) => {
    let stepHeight;
    switch (step) {
      case 1:
        stepHeight = step1.current.scrollHeight;
        break;
      case 2:
        stepHeight = step2.current.scrollHeight;
        break;
      case 3:
        stepHeight = step3.current.scrollHeight;
        break;
      case 4:
        stepHeight = 375;
        break;
      default:
        break;
    }
    return stepHeight;
  };

  const sendMessageParent = ({ message }) => {
    window.parent.postMessage(message, '*');
  };

  const eventIdHandler = () => {
    const step = userState.step;
    switch (step) {
      case 1:
      case 2:
      case 3:
        setEventId('risk_assessment_internal_click');
        break;
      case 4:
        setEventId('risk_assessment_calculate');
        break;
      case 5:
        setEventId('risk_assessment_connect');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    listenParent();
    if (userState) {
      // Send monitoring
      eventIdHandler();

      const stepCount = userState.step;
      const fullSize = app.current.scrollHeight;
      //  const steps = [null, step1, step2, step3, results];

      sendMessageParent({
        message: {
          step: stepCount,
          scrollSize: fullSize - stepHeightHandler(stepCount),
        },
      });
    }
  }, [userState.step]);

  useEffect(() => {
    if (JSON !== null) {
      if (eventId === null) return;
      // monitoringLoop();
    }
    return () => {
      setEventId(null);
    };
  }, [eventId]);

  // After receive message from parent ( Wrapper ) set JSON
  useEffect(() => {
    dispatch(fetchPartnerTheme());
    // dispatch(updateJson('singleFlow'));
  }, [parentMsg]);

  useEffect(() => {
    if (JSON !== null) {
      setInterval(() => {
        let scrollSize = app.current.clientHeight;
        sendMessageParent({ message: scrollSize });
      }, 100);
    }
  }, [JSON]);

  return (
    JSON !== null && (
      <div>
        <Homepage
          hero={hero}
          step1={step1}
          step2={step2}
          step3={step3}
          results={results}
          app={app}
        />
      </div>
    )
  );
}

export default App;
