const ALLOWED_ORIGINS = new Set([
  "https://shahidla.github.io",
  "http://127.0.0.1:5500",
  "http://localhost:5500",
]);

const MODEL = "@cf/meta/llama-3.1-8b-instruct";

const DEFAULT_RESUME_CONTEXT = `
Name: Shahid M Syed
Headline: SAP Development Architect | SAP BTP Solution Architect | S/4HANA Modernisation | ABAP on HANA | CAP/RAP | AI-assisted SAP Automation

Summary:
SAP Development Architect and SAP BTP Certified Solution Architect with 19 years of experience delivering large-scale enterprise SAP solutions across banking, retail, government, mining, procurement, and transformation programs. Strong hands-on experience in SAP S/4HANA, ABAP on HANA, CDS, AMDP, RAP, CAP, SAP BTP, Integration Suite, event-driven patterns, Kyma, high-volume processing, clean-core remediation, and AI-assisted SAP automation.

Proof points:
- Reduced S/4HANA data scrambling runtime from 240 hours to 6 hours at Commonwealth Bank.
- Processed more than 40 billion records in SAP CAR UDF high-volume developments at Woolworths.
- Built a Node.js MCP server exposing SAP RAP OData services as controlled tools for AI-assisted business task execution.
- Granted patent US10304013B2 for real-time speech and predictive analytics.
- SAP Community contributor, blogger, TechEd speaker, hackathon winner, and 50+ openSAP Records of Achievement.

Experience timeline:
- SAP Australia contractor, Sydney: Mar 2025 to Nov 2025 and Jan 2026 to current.
- DyFlex Solutions contractor, Sydney: Nov 2024 to Feb 2025.
- SAP Australia contractor, Sydney: Apr 2018 to Sep 2024.
- SAP Labs India, Bangalore: Mar 2012 to Jan 2018.
- Earlier consulting roles: Logikal Consulting, Deloitte, IBM India, Enteg Infotech, including ABAP delivery, Web Dynpro ABAP, design reviews, feasibility checks, object tracking, testing, support, and go-live activities.

Architecture strengths:
- Clean-core S/4HANA modernisation and custom code remediation.
- SAP Readiness Check, ATC, Quick Fix, SCMON, SUSG, Custom Code Migration App, SQL Monitor, SQL Trace, AMDP Trace, PlanViz, Code Inspector.
- Tiered extensibility model: Tier 1 cloud extensibility, Tier 2 cloud API enablement, Tier 3 classic ABAP extensions.
- HANA code pushdown using CDS, AMDP, SQL optimisation, RAP, OData, and Fiori annotations.
- SAP BTP CAP, Integration Suite, Event Mesh, Kyma runtime, Solace, SAP IRPA, SAP AI Business Services, SAP Conversational AI, OpenAI validation, event-driven prototypes.
- SAP HANA native development with XSC/XSA artefacts, modelling views, table functions, stored procedures, OData, XSJS.

Technical skills:
- SAP ABAP on HANA, CDS, AMDP, RAP, ABAP OO, RICEF, Web Dynpro ABAP, ABAP HR, Infotypes, enterprise services.
- SAP Fiori, Fiori Elements, SAP UI5, OData, annotations.
- Node.js, Python, R, JavaScript, HTML5, jQuery, CSS, AJAX.
- SAP HANA, MongoDB, Neo4J, HANA Graph, HANA Text Analysis, HANA Spatial Analysis.
- SAP BAS, Eclipse, SAP Web IDE, Visual Studio Code, Git.
- BODS, SAP Analytics Cloud, Analysis for Office, BRF+.

Selected projects:
- Commonwealth Bank: SAP Transactional Banking TRBK HANA modernisation, DB2-to-HANA query remediation, code remediation, performance optimisation, data scrambling framework using ABAP, CDS, and AMDP; 97% runtime reduction from 240 hours to 6 hours; Node.js MCP server for SAP RAP OData tools.
- DyFlex / Roy Hill / Syntax: S/4HANA custom code remediation, obsolete object replacement, clean-core and cloud standard alignment.
- Woolworths: SAP CAR UDF custom developments for forecast calculations and machine-learning reporting; AMDP, CDS, and ABAP over 40B+ records; Code Inspector, SQL Trace, AMDP Trace, PlanViz.
- Queensland Health: Digital Passport application using SAP BTP CAP to consolidate employee information from SAP ECC and QHealth Platform.
- Department of Corrections New Zealand: SAP Procurement upgrade preparation, custom analytical Fiori apps, app activation, role assignment, Adapt UI, SCMON, SUSG, Custom Code Migration App.
- Services Australia: Financial Instruction Documents processing using CDS-based BOPF, AMDP code pushdown, Gateway/OData/CDS APIs, ABAP RESTful apps on S/4HANA, real-time payments, anomaly detection.
- Stockland: S/4HANA, Project and Portfolio Management, REFX, BW-IP planning, ADSO write-back flows, Analysis for Office integration, ABAP/HANA planning functions, CDS, AMDP, SAP UI5, OData, Fiori applications, analytical annotations.
- Mohawk: Predictive analytics for carpet quality using SAP HANA PAL, APL, R Random Forest, CRISP-DM, stored procedures, XSJS, XSODATA, SAP UI5.
- Mosaic: HANA native minefield visualisation with stored procedures, OData, XSJS, SAP UI5.
- BMW: SRM indirect procurement add-on, ABAP, Web Dynpro ABAP, S/4HANA code pushdown, Office Open XML downloads.
- BHP Billiton: SAP UI Logging extension on LOGWIN; transformed logs into meaningful user-action data.

Certifications:
- SAP Certified Professional - Solution Architect - SAP BTP (P_BTPA_2408).
- SAP Certified Development Associate - SAP HANA Cloud 1.0 (C_HCDEV_05).
- SAP Certified Associate - Backend Developer - SAP Cloud Application Programming Model.
- SAP Certified Development Associate - SAP BTP Extensions with SAP Cloud Application Programming Model (C_CPE_14).
- SAP Certified Associate - Integration Developer (C_CPI_2404).
- SAP Certified Associate - SAP Fiori Application Developer (C_FIORD).
- SAP Certified Associate - SAP Build Developer (C_LCNC_2406).
- SAP Certified Development Associate - SAP HANA 2.0 (C_HANADEV_13).
- SAP Certified Development Specialist - ABAP for SAP HANA 2.0 (E_HANAAW_18).

Blogs and community:
- Event Driven SAP CAP on Kyma with Agentic AI and UI Auto Refresh.
- Event Driven Integration Using SAP Integration Suite, Solace, HANA DB, and OpenAI Validation.
- Automated Job Screening Using SAP Integration Suite, Adzuna, and ChatGPT.
- Multi-Service PAYG Application with SAP BTP Kyma Runtime, Docker, Ethereum, SAP AI Business Services.
- SAP IRPA, SAP Conversational AI, and SAP CAP series.
- SAP Cloud Platform Enterprise Messaging / Event Mesh with Twitter.
- SAP S/4HANA, WhatsApp, Machine Learning, and MQTT Messaging.
- Node.js connecting SAP HANA, MongoDB, and Neo4J.
- SAP ABAP on SAP HANA.
- SAP HANA Text Analysis using Twitter data.
- SAP UI Logging.

Awards and recognition:
- Winner of Google TensorFlow IoT Challenge at SAP Labs.
- What the Hack 2.0 finalist for real-time speech and predictive analytics.
- Nominated for THE TITAN - CD BLR LOB 2016 Awards.
- Multiple SAP Labs performance and peer-to-peer awards.
- Appreciation notes from Deloitte and ENTEG.
- SAP Community Silver contributor.

Education:
- Master of Business in Information Systems, Victoria University of Technology, Australia, December 2005.
- Bachelor of Engineering in Computer Science, J.N.T University, India, April 2003.

Contact and profiles:
- Email: shahid.la@gmail.com
- LinkedIn: https://www.linkedin.com/in/shahidmsyed/
- GitHub: https://github.com/shahidla?tab=repositories
- SAP Community: https://community.sap.com/t5/user/viewprofilepage/user-id/15422
`;

function corsHeaders(request) {
  const origin = request.headers.get("Origin") || "";
  const allowedOrigin = ALLOWED_ORIGINS.has(origin) ? origin : "https://shahidla.github.io";

  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

function jsonResponse(request, body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders(request),
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(request) });
    }

    const url = new URL(request.url);
    if (request.method !== "POST" || url.pathname !== "/chat") {
      return jsonResponse(request, { error: "Use POST /chat" }, 404);
    }

    if (!env.AI) {
      return jsonResponse(request, { error: "Workers AI binding named AI is not configured." }, 500);
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return jsonResponse(request, { error: "Invalid JSON body." }, 400);
    }

    const question = String(payload.question || "").trim().slice(0, 800);
    if (!question) {
      return jsonResponse(request, { error: "Question is required." }, 400);
    }

    const messages = [
      {
        role: "system",
        content:
          "You are the resume assistant for Shahid M Syed's personal resume website. Answer only using the provided resume context. If the answer is not in the context, say that the resume site does not include that information. Be concise, accurate, and professional. Do not invent facts. Do not give general SAP advice unless it is directly tied to Shahid's resume context.",
      },
      {
        role: "user",
        content: `Resume context:\n${env.RESUME_CONTEXT || DEFAULT_RESUME_CONTEXT}\n\nVisitor question:\n${question}`,
      },
    ];

    try {
      const result = await env.AI.run(MODEL, {
        messages,
        max_tokens: 320,
        temperature: 0.2,
      });

      const answer = result.response || result.result?.response || "";
      return jsonResponse(request, { answer: answer.trim() || "I could not generate an answer from the resume context." });
    } catch (error) {
      return jsonResponse(request, { error: "LLM request failed.", detail: String(error && error.message ? error.message : error) }, 500);
    }
  },
};
