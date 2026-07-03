const chatForm = document.querySelector("#bookChatForm");
const chatInput = document.querySelector("#bookQuestion");
const chatWindow = document.querySelector("#chatWindow");

const responses = [
  {
    keywords: ["kid", "kids", "children", "family", "daughter", "young"],
    answer: "For kids or family reading, start with the adventure and middle-grade book slots. The Long Road West and The Cube Chronicles are the best placeholders for that audience right now.",
  },
  {
    keywords: ["bible", "study", "devotional", "faith", "job"],
    answer: "For Bible study or devotional readers, Through the Fire is the right slot. Add the final edition details and Amazon link when the book is ready.",
  },
  {
    keywords: ["amazon", "buy", "purchase", "link", "kindle", "paperback"],
    answer: "Amazon links are not added yet. When Brandon has each book live on Amazon, replace the placeholder button with the direct book link.",
  },
  {
    keywords: ["series", "order", "cube", "chronicles"],
    answer: "The Cube Chronicles should eventually show reading order, age range, series description, and separate Amazon links for every book in the series.",
  },
  {
    keywords: ["ai", "chatbot", "assistant"],
    answer: "This is a starter helper. A future AI version can answer from a real book database, recommend books, and send readers to the correct Amazon page.",
  },
];

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.className = `chat-message ${sender}`;
  message.textContent = text;
  chatWindow.appendChild(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function findAnswer(question) {
  const normalized = question.toLowerCase();
  const match = responses.find((item) => item.keywords.some((keyword) => normalized.includes(keyword)));

  if (match) {
    return match.answer;
  }

  return "I can help visitors choose a book once the real book list is added. Try asking about kids books, Bible studies, Amazon links, series order, or the future AI assistant.";
}

if (chatForm && chatInput && chatWindow) {
  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const question = chatInput.value.trim();

    if (!question) {
      return;
    }

    addMessage(question, "user");
    addMessage(findAnswer(question), "bot");
    chatInput.value = "";
  });
}
