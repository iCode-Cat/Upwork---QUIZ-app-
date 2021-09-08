import Homepage from './Pages/Homepage';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function App() {
  const tokenBearer =
    'Bearer NWM4MDE2NTItZjZhOS00NjdlLTk5NjgtNmZmNjUxMWRlYWEyOiYxPGhiXVZCYHZVTypgRHo8bXQrWWsrJjc5VGxZWWQwJD0qb0JmaUktZXpXUFRbNEAxaG5oR2RfJ1VeIUtOWg==';
  const tokenBasic =
    'Basic NWM4MDE2NTItZjZhOS00NjdlLTk5NjgtNmZmNjUxMWRlYWEyOiYxPGhiXVZCYHZVTypgRHo8bXQrWWsrJjc5VGxZWWQwJD0qb0JmaUktZXpXUFRbNEAxaG5oR2RfJ1VeIUtOWg==';
  const state = useSelector((state) => state.quiz);
  const userState = state.userState;

  // Posting Function
  const monitoringPost = async ({ url, data, headers, requestObject }) => {
    let config = {
      headers,
    };

    // Add Origin for external requestObject
    if (requestObject === 'external') {
      config.headers.Origin = 'hostname';
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
    const corsPass = 'https://weather-api-33323.herokuapp.com/';
    const URIS = [
      {
        uri: 'https://dev-int.web.api.cognni.ai/analytic/events/',
      },
      // {
      //   uri: 'https://qa-int.web.api.cognni.ai/analytic/events/',
      // },
      // {
      //   uri: 'https://stage-webapi.cognni.ai/analytic/events/',
      // },
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

  useEffect(() => {
    if (userState) {
      monitoringLoop();
    }
  }, [userState.step]);

  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
