import Homepage from './Pages/Homepage';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

// Cors Error
// Dev does not work
// Is monitoring work
// Stage or another

function App() {
  // Refs
  const app = useRef();
  // References
  const hero = useRef();
  const results = useRef();
  const step1 = useRef();
  const step2 = useRef();
  const step3 = useRef();

  const tokenBearer =
    'Bearer NWM4MDE2NTItZjZhOS00NjdlLTk5NjgtNmZmNjUxMWRlYWEyOiYxPGhiXVZCYHZVTypgRHo8bXQrWWsrJjc5VGxZWWQwJD0qb0JmaUktZXpXUFRbNEAxaG5oR2RfJ1VeIUtOWg==';
  const tokenBasic =
    'Basic NWM4MDE2NTItZjZhOS00NjdlLTk5NjgtNmZmNjUxMWRlYWEyOiYxPGhiXVZCYHZVTypgRHo8bXQrWWsrJjc5VGxZWWQwJD0qb0JmaUktZXpXUFRbNEAxaG5oR2RfJ1VeIUtOWg==';
  const state = useSelector((state) => state.quiz);
  const userState = state.userState;
  const scrollSize = state.scrollSize;

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
      // console.log(post);
    } catch (error) {
      console.log(error);
    }
  };

  // URIS
  const monitoringURIS = async ({ route, requestObject }) => {
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
      data.eventId = '123';
      data.tags = ['tag'];
      data.data = userState;
    }

    if (requestObject === 'external') {
      data.partnerId = '121';
      data.deviceId = 'test device';
      data.email = 'user@gmail.com';
      data.tenantId = 'GUID';
      data.eventId = '123';
      data.tags = ['tag'];
      data.data = userState;
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
        stepHeight = 370;
        break;
      default:
        break;
    }
    return stepHeight;
  };

  const sendMessageParent = ({ message }) => {
    window.parent.postMessage(message, '*');
  };

  useEffect(() => {
    if (userState) {
      // Send monitoring
      monitoringLoop();
      const stepCount = userState.step;
      const fullSize = app.current.scrollHeight;
      //  const steps = [null, step1, step2, step3, results];

      console.log(stepHeightHandler(stepCount));

      sendMessageParent({
        message: {
          step: stepCount,
          scrollSize: fullSize - stepHeightHandler(stepCount),
        },
      });
    }
  }, [userState.step]);

  useEffect(() => {
    setInterval(() => {
      let scrollSize = app.current.clientHeight;
      sendMessageParent({ message: scrollSize });
    }, 100);
  }, []);

  return (
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
  );
}

export default App;
