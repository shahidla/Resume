(function () {
  const CHAT_ENDPOINT = "https://resume-chatbot.shahid-la.workers.dev/chat";

  const toggle = document.querySelector(".chatbot-toggle");
  const panel = document.querySelector(".chatbot-panel");
  const close = document.querySelector(".chatbot-close");
  const messages = document.querySelector(".chatbot-messages");
  const form = document.querySelector(".chatbot-form");
  const input = document.querySelector("#chatbot-input");
  const prompts = document.querySelectorAll(".chatbot-prompts button");

  if (!toggle || !panel || !messages || !form || !input) {
    return;
  }

  function openChat() {
    panel.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    input.focus();
    if (!messages.children.length) {
      addMessage(
        "bot",
        "Hi, I can answer questions about Shahid's resume, projects, architecture work, certifications, blogs, and experience."
      );
    }
  }

  function closeChat() {
    panel.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.focus();
  }

  function addMessage(type, text) {
    const message = document.createElement("div");
    message.className = `chatbot-message ${type}`;
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    message.appendChild(paragraph);
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
    return message;
  }

  function setFormDisabled(disabled) {
    input.disabled = disabled;
    form.querySelector("button").disabled = disabled;
  }

  async function ask(question) {
    const trimmed = question.trim();
    if (!trimmed) {
      return;
    }

    addMessage("user", trimmed);
    input.value = "";
    setFormDisabled(true);
    const loadingMessage = addMessage("bot", "Thinking...");

    try {
      const response = await fetch(CHAT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: trimmed }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Chat request failed.");
      }

      loadingMessage.querySelector("p").textContent =
        result.answer || "I could not find an answer in the resume context.";
    } catch (error) {
      loadingMessage.querySelector("p").textContent =
        "I could not reach the resume assistant right now. Please try again in a moment.";
      console.error(error);
    } finally {
      setFormDisabled(false);
      input.focus();
    }
  }

  toggle.addEventListener("click", () => {
    if (panel.hidden) {
      openChat();
    } else {
      closeChat();
    }
  });

  close.addEventListener("click", closeChat);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) {
      closeChat();
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!panel.hidden && target instanceof Node && !panel.contains(target) && !toggle.contains(target)) {
      closeChat();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    ask(input.value);
  });

  prompts.forEach((prompt) => {
    prompt.addEventListener("click", () => {
      openChat();
      ask(prompt.textContent || "");
    });
  });
})();
