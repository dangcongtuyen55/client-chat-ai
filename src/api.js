export const fetchResponse = async (chat) => {
  try {
    // after depoloyment you should change the fetch URL below
    const response = await fetch("https://chat-ai-server-eight.vercel.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authoriaztion:
        //   "Bearer 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",
      },
      body: JSON.stringify({
        message: chat.map((message) => message.message).join(" \n "),
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
