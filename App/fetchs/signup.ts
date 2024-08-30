const fetchSignup = async (
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
) => {
  try {
    const response = await fetch(
      'https://slim-dodo-56-74hqqwt062y1.deno.dev/auth/email/create',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          name,
          email,
          pass: password,
          pass2: confirmPassword,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.message;
  } catch (error: any) {
    return `error: ${error.message}`;
  }
};

export default fetchSignup;
