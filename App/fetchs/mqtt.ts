const fetchMqtt = async (state: boolean) => {
  try {
    const response = await fetch('https://mqtt.fullzer4.com.br/mqtt-publish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({
        state,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.message;
  } catch (error: any) {
    return `error: ${error.message}`;
  }
};

export default fetchMqtt;
