export const noSleepApi = (url) => {
  const fetchKeepAlive = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Keep-alive request successful');
    } catch (error) {
      console.error('Keep-alive request failed:', error);
    }
  };

  fetchKeepAlive();

  setInterval(fetchKeepAlive, 600000);
};