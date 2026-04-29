(function () {
  const facts = [
    {
      keywords: ["btp", "cap", "kyma", "integration suite", "event", "event-driven"],
      answer:
        "Shahid is an SAP BTP Certified Solution Architect with CAP project experience and prototypes across Integration Suite, Event Mesh, Kyma runtime, event-driven patterns, and AI-assisted workflows. Relevant sections: Skills and Blogs.",
      links: [
        { label: "Skills", href: "#skills" },
        { label: "Blogs", href: "#blogs" },
        { label: "Architecture", href: "architecture/index.html" },
      ],
    },
    {
      keywords: ["architecture", "architect", "clean core", "clean-core", "modernisation", "modernization", "readiness", "atc", "scmon", "susg", "tiered"],
      answer:
        "Shahid's architecture story is strongest around clean-core S/4HANA modernisation, tiered extensibility, SAP Readiness Check, ATC, SCMON/SUSG usage analysis, HANA code pushdown, BTP CAP/RAP services, and AI-assisted SAP automation.",
      links: [{ label: "Architecture case studies", href: "architecture/index.html" }],
    },
    {
      keywords: ["certification", "certified", "credly", "badge", "sap build", "fiori", "hana"],
      answer:
        "Shahid has verified SAP credentials including SAP BTP Solution Architect, SAP HANA Cloud, CAP backend developer, BTP Extensions with CAP, Integration Developer, Fiori Application Developer, SAP Build Developer, SAP HANA 2.0, and ABAP for SAP HANA. The page also lists exam codes where available.",
      links: [{ label: "Certifications", href: "#certifications" }],
    },
    {
      keywords: ["project", "impact", "commonwealth", "commbank", "woolworths", "services australia", "scrambling"],
      answer:
        "Key impact includes CBA TRBK HANA modernisation, a Node.js MCP server for SAP RAP OData services, a data scrambling framework that reduced runtime from 240 hours to 6 hours, Woolworths high-volume processing over 40B records, Services Australia real-time payment work, Stockland BW-IP/SAP UI5 delivery, and SAP Labs HANA/ML projects.",
      links: [{ label: "Projects", href: "#projects" }],
    },
    {
      keywords: ["performance", "optimization", "optimisation", "amdp", "cds", "rap", "abap"],
      answer:
        "Shahid specialises in ABAP on HANA, CDS, AMDP, RAP, code pushdown, SQL optimisation, clean-core remediation, and high-volume SAP processing. Tools and technologies include Node.js, Python, R, JavaScript, HTML5, SAP UI5, SAP HANA, HANA Graph/Text/Spatial, MongoDB, Neo4J, SAP BAS, Eclipse, SAP Web IDE, VS Code, Git, BODS, SAC, and Analysis for Office.",
      links: [
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
      ],
    },
    {
      keywords: ["experience", "years", "career", "timeline", "companies", "sap australia", "sap labs"],
      answer:
        "Shahid has 19 years of SAP delivery experience across SAP Australia, DyFlex Solutions, SAP Labs India, Logikal Consulting, Deloitte, IBM India, and Enteg Infotech.",
      links: [{ label: "Experience", href: "#experience" }],
    },
    {
      keywords: ["blog", "article", "community", "sap community", "writing"],
      answer:
        "The site hosts selected SAP articles locally and points to the full SAP Community profile. Blog topics include event-driven CAP on Kyma with agentic AI, Integration Suite with Solace and OpenAI validation, automated job screening, SAP Event Mesh, MQTT, SAP UI Logging, HANA with MongoDB/Neo4J, HANA Text Analysis, and ABAP on HANA.",
      links: [{ label: "Blogs", href: "#blogs" }],
    },
    {
      keywords: ["download", "resume", "cv", "docx"],
      answer: "You can download Shahid's Word resume from the button in the hero section.",
      links: [{ label: "Download resume", href: "Shahid_M_Syed_SAP_BTP_2604.docx" }],
    },
    {
      keywords: ["education", "degree", "academic", "university"],
      answer:
        "Shahid holds a Master of Business in Information Systems from Victoria University of Technology, Australia, and a Bachelor of Engineering in Computer Science from J.N.T University, India.",
      links: [{ label: "Community and credentials", href: "#certifications" }],
    },
  ];

  const fallback =
    "I can answer questions about Shahid's SAP BTP experience, certifications, projects, skills, blogs, education, and resume download. Try asking: 'What are his strongest projects?'";

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
      addMessage("bot", "Hi, I can help visitors explore Shahid's SAP experience, certifications, projects, blogs, and resume.");
    }
  }

  function closeChat() {
    panel.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.focus();
  }

  function addMessage(type, text, links) {
    const message = document.createElement("div");
    message.className = `chatbot-message ${type}`;
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    message.appendChild(paragraph);

    if (links && links.length) {
      const list = document.createElement("p");
      links.forEach((link, index) => {
        const anchor = document.createElement("a");
        anchor.href = link.href;
        anchor.textContent = link.label;
        list.appendChild(anchor);
        if (index < links.length - 1) {
          list.appendChild(document.createTextNode(" | "));
        }
      });
      message.appendChild(list);
    }

    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  }

  function getReply(question) {
    const normalized = question.toLowerCase();
    const ranked = facts
      .map((fact) => ({
        fact,
        score: fact.keywords.reduce((total, keyword) => total + (normalized.includes(keyword) ? 1 : 0), 0),
      }))
      .sort((a, b) => b.score - a.score);

    return ranked[0] && ranked[0].score > 0
      ? ranked[0].fact
      : { answer: fallback, links: [{ label: "Projects", href: "#projects" }, { label: "Skills", href: "#skills" }] };
  }

  function ask(question) {
    const trimmed = question.trim();
    if (!trimmed) {
      return;
    }

    addMessage("user", trimmed);
    input.value = "";

    window.setTimeout(() => {
      const reply = getReply(trimmed);
      addMessage("bot", reply.answer, reply.links);
    }, 180);
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
