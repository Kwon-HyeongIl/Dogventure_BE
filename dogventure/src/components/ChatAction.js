// import { useState } from "react";
// import Chatbot from "react-chatbot-kit";

// const ChatAction = (props) => {
//   const { actionProvider } = props;

//   const apiEndpoint = "http://localhost:8080/api/gpt/question"; // 주소 확인

//   // const addMessage = (sender, message) => {

//   const handleSendMessage = async (newMessage) => {
//     // 메시지 전송 로직을 이곳에 구현
//     const message = newMessage.content;
//     // if (message.length === 0) return;

//     // addMessage("user", message);
//     // setUserInput("");
//     // setLoading(true);

//     try {
//       const response = await fetch(apiEndpoint, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Autorization: `Bearer %{actionProvider.apiKey}`,
//         },
//         body: JSON.stringify({
//           model: "gpt-3.5-turbo", // 4.0?
//           messages: [{ role: "user", content: message }],
//           max_tokens: 1024, // 최대 답변 글자 수,
//           top_p: 1, // 다음 단어를 선택할 때 상위 p%의 확률 분포를 사용하는 매개변수, 높을수록 안정된 선택
//           temperature: 1, // 답변의 다양성과 창의성, 낮을수록 일관적 (0~2)
//           frequency_penalty: 0.5, // 전문적 단어의 빈도, 낮을수록 전문적 (0~1)
//           presence_penalty: 0.5, // 반복되는 구문 억제, 낮을수록 억제하지 않음 (0~1)
//           stop: ["문장 생성 중단 단어"],
//         }),
//       });

//       const data = await response.json();
//       const aiResponse = data.choices?.[0]?.message?.content || "No response";
//       actionProvider.addMessageToBot(aiResponse);
//     } catch (error) {
//       console.error("오류 발생", error);
//       actionProvider.addMessageToBot("오류 발생");
//     }
//   };

//   // const handleKeyDown = (e) => {
//   //   if (e.key === "Enter") {
//   //     handleSendMessage();
//   //   }
//   // };

//   return (
//     <div>
//       <Chatbot
//         config={{
//           customStyles: {
//             botMessageBox: {
//               backgroundColor: "#376B7E",
//             },
//             chatButton: {
//               backgroundColor: "376B7E",
//             },
//           },
//         }}
//         actionProvider={actionProvider}
//         messageParser={messageParser}
//       />
//     </div>
//     // <div id="Chatbot">
//     //   <h1>인공지능 챗봇</h1>
//     //   <div className="chatDiv">
//     //     {loading && (
//     //       <span className="messageWait">답변을 기다리고 있습니다</span>
//     //     )}
//     //     {messages.map((msg, index) => (
//     //       <div key={index} className={`message ${msg.sender}`}>
//     //         {`${msg.sender === "user" ? "나" : "챗봇"} : ${msg.message}`}
//     //       </div>
//     //     ))}
//     //   </div>
//     //   <div className="inputDiv">
//     //     <input
//     //       type="text"
//     //       placeholder="메시지를 입력하세요"
//     //       value={userInput}
//     //       onChange={(e) => setUserInput(e.target.value)}
//     //       onKeyDown={handleKeyDown}
//     //     />
//     //     <button onClick={handleSendMessage}>전송</button>
//     //   </div>
//     // </div>
//   );
// };

// export default ChatAction;
