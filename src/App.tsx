import React, { useState } from "react";
import {
  Form,
  useCurrentBlock,
  useFormAnswers,
} from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import { saveAs } from "file-saver";
import RadarChart from "./RadarChart";
import "./styles.css";
import "./custom-slider-block";
import "./custom-statement-block";

registerCoreBlocks();
const App = () => {
  const [chartData, setChartData] = useState(null);
  const [buttonColor, setButtonColor] = useState("#ccc");

  const currentBlock = useCurrentBlock();
  const answers = useFormAnswers();

  function saveToFile(jsonData, fileName, fileType) {
    const blob = new Blob([jsonData], { type: fileType });
    saveAs(blob, fileName);
  }

  React.useEffect(() => {
    if (answers) {
      const sliderBlockKeys = Object.keys(answers).filter(
        (key) =>
          answers[key].value !== null &&
          typeof answers[key].value === "number" &&
          answers[key].value > 0
      );
      if (sliderBlockKeys.length > 0) {
        setButtonColor("#007BFF");
      } else {
        setButtonColor("#ccc");
      }
    }
  }, [answers]);
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {chartData ? (
        <RadarChart data={chartData} />
      ) : (
        <Form
          formId={1}
          formObj={{
            blocks: [
              {
                name: "welcome-screen",
                id: "jg1401r",
                attributes: {
                  label: "Welcome",
                  description: "DevOps level assessment",
                  attachment: {
                    type: "image",
                    url: "https://x-squad.com/_next/static/media/x-squad_dark_logo.0f2fd484.svg",
                  },
                  attachmentMaxWidth: "600px",
                },
              },
              {
                name: "custom-statement-block",
                id: "q8tkvlh",
                attributes: {
                  label: "Continuous Exploration",
                  attachment: {
                    type: "image",
                    url: "https://scaledagileframework.com/wp-content/uploads/2023/01/DevSecOps_Keystone_CE.svg",
                  },
                  attachmentMaxWidth: "400px",
                },
              },
              {
                name: "custom-slider-block",
                id: "m0sphvc",
                attributes: {
                  label:
                    "Rate your team’s ability to translate business ideas into hypothesis statements that are clear and measurable.",
                  title: "hypothesize",
                  comments: [
                    {
                      range: [0],
                      // text: "Select a value beetween 1 & 10.",
                    },
                    {
                      range: [1, 2],
                      text: "Ideas are vague or not defined.",
                    },
                    {
                      range: [3, 4],
                      text: "Ideas are defined as Epics or Features without hypothesis statements.",
                    },
                    {
                      range: [5, 6],
                      text: "Some ideas include hypothesis statements with measurable outcomes.",
                    },
                    {
                      range: [7, 8],
                      text: "Most ideas include hypothesis statements with measurable outcomes and MVPs.",
                    },
                    {
                      range: [9, 10],
                      text: "All ideas include hypothesis statements with measurable outcomes and MVPs.",
                    },
                  ],
                },
              },
              {
                name: "custom-slider-block",
                id: "0bx465e",
                attributes: {
                  label:
                    "Rate your team's ability to synthesize the results of Continuous Exploration activities into a well-crafted, prioritized ART Backlog.",
                  title: "Collaborate & Research",
                  comments: [
                    {
                      range: [0],
                      // text: "No experience.",
                    },
                    {
                      range: [1, 2],
                      text: "Product Management roles are undefined or ignored.",
                    },
                    {
                      range: [3, 4],
                      text: "Requirements are created in large batches with minimal collaboration.",
                    },
                    {
                      range: [5, 6],
                      text: "Collaboration occurs with either business or development experts, not both.",
                    },
                    {
                      range: [7, 8],
                      text: "Regular collaboration happens across all sides but without MMF definition.",
                    },
                    {
                      range: [9, 10],
                      text: "Consistent collaboration across all sides includes MMF definition.",
                    },
                  ],
                },
              },
              {
                name: "custom-slider-block",
                id: "co9psz6",
                attributes: {
                  label:
                    "Rate your team's ability to collaborate with business experts and technology experts to define Minimum Marketable Features (MMF) in support of the hypothesis.",
                  title: "Architect",
                  comments: [
                    {
                      range: [0],
                      // text: "No experience.",
                    },
                    {
                      range: [1, 2],
                      text: "Architecture is monolithic, fragile, and difficult to change with complex dependencies.",
                    },
                    {
                      range: [3, 4],
                      text: "Architecture is mainly monolithic, with some loosely coupled applications.",
                    },
                    {
                      range: [5, 6],
                      text: "Architecture is mostly decoupled but lacks Release on Demand.",
                    },
                    {
                      range: [7, 8],
                      text: "Architecture is aligned with value delivery and has minimal dependencies.",
                    },
                    {
                      range: [9, 10],
                      text: "Architecture is designed for Release on Demand and operability.",
                    },
                  ],
                },
              },
              {
                name: "custom-slider-block",
                id: "ojkdbim",
                attributes: {
                  label:
                    "Rate your team's effectiveness at architecting for continuous delivery.",
                  title: "Synthesize",
                  comments: [
                    {
                      range: [0],
                      // text: "No experience.",
                    },
                    {
                      range: [1, 2],
                      text: "The ART Backlog does not exist or is not shared.",
                    },
                    {
                      range: [3, 4],
                      text: "The ART Backlog exists, but Features are incomplete, and prioritization is an afterthought.",
                    },
                    {
                      range: [5, 6],
                      text: "The ART Backlog has defined Features, but they are not prioritized using WSJF.",
                    },
                    {
                      range: [7, 8],
                      text: "Features are complete, prioritized with WSJF, and calibrated to ART’s delivery capacity.",
                    },
                    {
                      range: [9, 10],
                      text: "The ART Backlog contains MMFs, created with BDD and prioritized using WSJF.",
                    },
                  ],
                },
              },
              {
                name: "statement",
                id: "pg6vren",
                attributes: {
                  title: "section2",
                  label: "Continuous Integration",
                  attachment: {
                    type: "image",
                    url: "https://scaledagileframework.com/wp-content/uploads/2023/01/DevSecOps_Keystone_CI.svg",
                  },
                  attachmentMaxWidth: "400px",
                },
              },
              {
                name: "custom-slider-block",
                id: "pkuftjb",
                attributes: {
                  label:
                    "Rate your team's ability to synthesize the results of Continuous Exploration activities into a well-crafted, prioritized ART Backlog.",
                  title: "Develop",
                  comments: [
                    {
                      range: [0],
                      // text: "No experience.",
                    },
                    {
                      range: [1, 2],
                      text: "The Team Backlog is either non-existent or not used for daily work.",
                    },
                    {
                      range: [3, 4],
                      text: "Stories are incomplete or overly verbose; unit tests and peer reviews are often missing.",
                    },
                    {
                      range: [5, 6],
                      text: "Stories are complete; most changes have unit tests, and peer reviews are usually conducted.",
                    },
                    {
                      range: [7, 8],
                      text: "Code is checked in daily; unit test coverage is 80%+; peer reviews are always conducted.",
                    },
                    {
                      range: [9, 10],
                      text: "Code is checked in multiple times per day; tests are written before code (TDD); pair work and Built-in Quality practices are standard.",
                    },
                  ],
                },
              },
              {
                name: "custom-slider-block",
                id: "ngljcvf",
                attributes: {
                  label:
                    "Rate your team's effectiveness at building and integrating continuously.",
                  title: "Build",
                  comments: [
                    {
                      range: [0],
                      // text: "No experience.",
                    },
                    {
                      range: [1, 2],
                      text: "Builds run less than once per iteration and/or are fully manual.",
                    },
                    {
                      range: [3, 4],
                      text: "Builds run once per iteration and are partially automated; dev branches stay open for a month or more and often break.",
                    },
                    {
                      range: [5, 6],
                      text: "Automated builds run daily; broken builds are fixed in 2-4 hours; manual unit tests run for each build; dev branches stay open for 2-4 weeks.",
                    },
                    {
                      range: [7, 8],
                      text: "Builds run automatically on code commit; broken builds are fixed within 1 hour; automated unit tests run; dev branches are merged every iteration.",
                    },
                    {
                      range: [9, 10],
                      text: "Builds run on every commit, including static code analysis and security testing; gated commits prevent defects; dev branches merge to trunk with every commit.",
                    },
                  ],
                },
              },
              {
                name: "custom-slider-block",
                id: "jvn21yn",
                attributes: {
                  label:
                    "Rate your team's effectiveness at testing continuously, end-to-end in production-like environments.",
                  title: "Test End-to-End",
                  comments: [
                    {
                      range: [0],
                      // text: "No experience.",
                    },
                    {
                      range: [1, 2],
                      text: "Testing is manual in non-production-like environments and occurs in large batches during a scheduled phase.",
                    },
                    {
                      range: [3, 4],
                      text: "Testing is mostly manual in non-production-like environments; Stories are implemented and tested separately.",
                    },
                    {
                      range: [5, 6],
                      text: "Half of the testing is automated in production-like or simulated environments.",
                    },
                    {
                      range: [7, 8],
                      text: "Most tests are automated and run in production-like environments; Stories are fully integrated and tested every iteration.",
                    },
                    {
                      range: [9, 10],
                      text: "Successful builds trigger automatic deployment to production-like test environments; all tests are automated, run in parallel, and fully validate changes after every commit.",
                    },
                  ],
                },
              },
              {
                name: "custom-slider-block",
                id: "zeuedpa",
                attributes: {
                  label:
                    "Rate your team's ability to stage Features in full production-like (non-test) environments for final validation prior to production deployment.",
                  title: "Stage",
                  comments: [
                    {
                      range: [0],
                      // text: "No experience.",
                    },
                    {
                      range: [1, 2],
                      text: "No staging environment exists or a test environment is used for staging.",
                    },
                    {
                      range: [3, 4],
                      text: "Features are deployed manually to a staging environment once every PI.",
                    },
                    {
                      range: [5, 6],
                      text: "Features are deployed to staging once a month and demonstrated to Product Management.",
                    },
                    {
                      range: [7, 8],
                      text: "Features and infrastructure are auto-deployed to staging every iteration and accepted by Product Management.",
                    },
                    {
                      range: [9, 10],
                      text: "Features, changes, and infrastructure are auto-deployed to staging, validated, and immediately deployed.",
                    },
                  ],
                },
              },
              {
                name: "statement",
                id: "zcsglif",
                attributes: {
                  title: "section3",
                  label: "Continuous Deployment",
                  attachment: {
                    type: "image",
                    url: "https://scaledagileframework.com/wp-content/uploads/2023/01/DevSecOps_Keystone_CD.svg",
                  },
                  attachmentMaxWidth: "400px",
                },
              },
              {
                name: "custom-slider-block",
                id: "2l0q9sg",
                attributes: {
                  label:
                    "Rate your team's ability to continuously deploy Features to production as well as the ability to control their visibility using feature toggles and/or other means.",
                  title: "Deploy",
                  comments: [
                    {
                      range: [0],
                      // text: "No experience.",
                    },
                    {
                      range: [1, 2],
                      text: "Features are deployed to production every 3+ months; deployments are manual and painful; 'deployed' means 'released'.",
                    },
                    {
                      range: [3, 4],
                      text: "Features are deployed to production at PI boundaries; deployments are mostly manual; 'deployed' means 'released'.",
                    },
                    {
                      range: [5, 6],
                      text: "Features are deployed to production every iteration; deployments are mostly automated; some Features can be deployed without being released.",
                    },
                    {
                      range: [7, 8],
                      text: "Features are deployed to production every iteration, fully automated through the pipeline; dark releases are common.",
                    },
                    {
                      range: [9, 10],
                      text: "Features are deployed continuously throughout each iteration; Agile Teams initiate deployments directly via pipeline tools; release is decoupled from deployment; dark releases are the norm.",
                    },
                  ],
                },
              },
              {
                name: "custom-slider-block",
                id: "hu7acqd",
                attributes: {
                  label:
                    "Rate your team's ability to accurately determine deployment success or failure and ability to roll back or fix forward as appropriate to correct deployment issues.",
                  title: "Verify",
                  comments: [
                    {
                      range: [0],
                      // text: "No experience.",
                    },
                    {
                      range: [1, 2],
                      text: "Deployments are not verified in production before being released to end users.",
                    },
                    {
                      range: [3, 4],
                      text: "Deployments are verified with manual smoke tests/UAT; issues are addressed within a grace/triage period, often fixed directly in production.",
                    },
                    {
                      range: [5, 6],
                      text: "Deployments are verified with manual tests before release; rolling back is difficult or impossible; no direct changes are made in production.",
                    },
                    {
                      range: [7, 8],
                      text: "Deployments are verified with automated tests (smoke, synthetic transactions, penetration tests); rollback or fix-forward is easy.",
                    },
                    {
                      range: [9, 10],
                      text: "Automated production tests run continuously and feed monitoring systems; failed deployments can be rolled back instantly or fixed through the entire pipeline.",
                    },
                  ],
                },
              },
              {
                name: "custom-slider-block",
                id: "svll4r9",
                attributes: {
                  label:
                    "Rate your team's effectiveness at monitoring the full solution stack and ability to analyze Feature value based on these events.",
                  title: "Monitor",
                  comments: [
                    {
                      range: [0],
                      // text: "No experience.",
                    },
                    {
                      range: [1, 2],
                      text: "Only infrastructure monitoring exists; no feature-level production monitoring.",
                    },
                    {
                      range: [3, 4],
                      text: "Features log faults and exceptions; analyzing events requires manually correlating logs from multiple systems.",
                    },
                    {
                      range: [5, 6],
                      text: "Features log faults, user activity, and events; data is analyzed manually to investigate incidents and measure business value.",
                    },
                    {
                      range: [7, 8],
                      text: "Full-stack monitoring is in place; events can be correlated across the architecture; data is displayed on system-specific dashboards.",
                    },
                    {
                      range: [9, 10],
                      text: "A federated monitoring platform provides full-stack insights; data is used to gauge system performance and business value.",
                    },
                  ],
                },
              },
              {
                name: "custom-slider-block",
                id: "jog5xet",
                attributes: {
                  label:
                    "Rate your team's effectiveness at proactively detecting high severity production issues, identifying root causes using monitoring systems, and quickly resolving issues by building, testing, and deploying fixes through the pipeline (versus applying changes directly in production).",
                  title: "Respond",
                  comments: [
                    {
                      range: [0],
                      // text: "No experience.",
                    },
                    {
                      range: [1, 2],
                      text: "Customers find issues before we do; resolving high-priority issues is time-consuming and reactive; Customers have low confidence in our recovery ability.",
                    },
                    {
                      range: [3, 4],
                      text: "Operations own production issues; Development requires significant escalation; teams blame each other during crises.",
                    },
                    {
                      range: [5, 6],
                      text: "Development and Operations jointly own incident resolution; recovery from major incidents is reactive but collaborative.",
                    },
                    {
                      range: [7, 8],
                      text: "Monitoring systems detect most issues before Customers; Dev and Ops work proactively to recover from major incidents.",
                    },
                    {
                      range: [9, 10],
                      text: "Monitoring systems alert us to dangerous conditions based on tolerance thresholds; developers support their own code and issue proactive fixes through the pipeline before users are affected.",
                    },
                  ],
                },
              },
              {
                name: "statement",
                id: "jtwe62b",
                attributes: {
                  title: "section4",
                  label: "Release on Demand",
                  attachment: {
                    type: "image",
                    url: "https://scaledagileframework.com/wp-content/uploads/2023/01/Release_on_Demand_F04-1.svg",
                  },
                  attachmentMaxWidth: "400px",
                },
              },
              {
                name: "custom-slider-block",
                id: "z77x4df",
                attributes: {
                  label:
                    "Rate your team's ability to release Features to users on demand using feature toggles, blue/green environments, canary releases, and so on.",
                  title: "Release",
                  comments: [
                    {
                      range: [0],
                      // text: "No experience.",
                    },
                    {
                      range: [1, 2],
                      text: "Releases are tightly coupled to deployments; Customers are highly dissatisfied with release frequency.",
                    },
                    {
                      range: [3, 4],
                      text: "Releases are tightly coupled to deployments; Customers are somewhat dissatisfied with release frequency.",
                    },
                    {
                      range: [5, 6],
                      text: "Release and deployment are coupled but both occur continuously or on demand.",
                    },
                    {
                      range: [7, 8],
                      text: "Release is decoupled from deployment; Features are released based on business readiness.",
                    },
                    {
                      range: [9, 10],
                      text: "Deployed Features can be released to specific user segments; feature toggles are refactored when unused.",
                    },
                  ],
                },
              },
              {
                name: "custom-slider-block",
                id: "vcavacg",
                attributes: {
                  label:
                    "Rate your team's effectiveness at maintaining stable Solutions that avoid unplanned down time and security breaches.",
                  title: "Stabilize",
                  comments: [
                    {
                      range: [0],
                      // text: "No experience.",
                    },
                    {
                      range: [1, 2],
                      text: "We experience frequent unplanned outages and/or security breaches with long recovery times.",
                    },
                    {
                      range: [3, 4],
                      text: "We experience occasional unplanned outages but recover within service level agreements.",
                    },
                    {
                      range: [5, 6],
                      text: "We have few unplanned outages; availability, security, and disaster recovery measures are effective.",
                    },
                    {
                      range: [7, 8],
                      text: "We have no unplanned outages; we plan and rehearse failure and recovery.",
                    },
                    {
                      range: [9, 10],
                      text: "We maximize resiliency by deliberately injecting faults and rehearsing recovery procedures.",
                    },
                  ],
                },
              },
              {
                name: "custom-slider-block",
                id: "2eg2xxo",
                attributes: {
                  label:
                    "Rate your team's ability to collect objective information about the actual value realized by Features, so that it can inform strategic financial decisions.",
                  title: "Measure",
                  comments: [
                    {
                      range: [0],
                      // text: "No experience.",
                    },
                    {
                      range: [1, 2],
                      text: "We don’t define or measure the value of Features.",
                    },
                    {
                      range: [3, 4],
                      text: "We’ve defined what value is but don’t know how to measure it.",
                    },
                    {
                      range: [5, 6],
                      text: "We capture qualitative business feedback on Feature value.",
                    },
                    {
                      range: [7, 8],
                      text: "We capture both qualitative and quantitative feedback from Customers and monitoring systems on Feature value.",
                    },
                    {
                      range: [9, 10],
                      text: "We aggregate feedback to validate the hypothesis and inform pivot-or-persevere decisions.",
                    },
                  ],
                },
              },
              {
                name: "custom-slider-block",
                id: "buiwzjz",
                attributes: {
                  label:
                    "Please rate your team's ability to make strategic, pivot-or-persevere decisions based on empirical performance data and commitment to actively applying those insights to continuously improve the pipeline.",
                  title: "Learn",
                  comments: [
                    {
                      range: [0],
                      // text: "No experience.",
                    },
                    {
                      range: [1, 2],
                      text: "Features are never evaluated post-release.",
                    },
                    {
                      range: [3, 4],
                      text: "Features are sometimes evaluated using subjective information or unilateral opinions.",
                    },
                    {
                      range: [5, 6],
                      text: "Hypotheses are evaluated with objective measures but influenced by corporate politics.",
                    },
                    {
                      range: [7, 8],
                      text: "Hypotheses are objectively evaluated; pivot-or-persevere decisions are made decisively.",
                    },
                    {
                      range: [9, 10],
                      text: "Continuous learning and experimentation are ingrained in the organization’s DNA.",
                    },
                  ],
                },
              },
              {
                name: "group",
                id: "hfy72oa",
                attributes: {
                  label: "User Information",
                  description: "Please fill in your details.",
                },
                innerBlocks: [
                  {
                    name: "short-text",
                    id: "82pge2m",
                    attributes: {
                      label: "Full Name",
                      placeholder: "John Doe",
                      required: true,
                    },
                  },
                  {
                    name: "email",
                    id: "zp2j6zn",
                    attributes: {
                      label: "Email",
                      placeholder: "nom@entreprise.com",
                      required: true,
                    },
                  },
                  {
                    name: "number",
                    id: "bsufk1p",
                    attributes: {
                      label: "Phone number",
                      placeholder: "+337XXXXXXXX",
                      required: true,
                    },
                  },
                  {
                    name: "short-text",
                    id: "hzofhnd",
                    attributes: {
                      label: "Company Name",
                      placeholder: "ex: Amazon",
                      required: false,
                    },
                  },
                ],
              },
            ],
            settings: {
              animationDirection: "vertical",
            },
            theme: {
              font: "Roboto",
              buttonsBgColor: buttonColor,
              backgroundColor: "#F2F1F1",
              logo: {
                src: "https://x-squad.com/_next/static/media/x-squad_dark_logo.0f2fd484.svg",
              },
            },
          }}
          onSubmit={(data, { completeForm, setIsSubmitting }) => {
            setIsSubmitting(true);

            const questionMap = {
              m0sphvc: "Hypothesize",
              "0bx465e": "Collaborate & Research",
              co9psz6: "Architect",
              ojkdbim: "Synthesize",
              pkuftjb: "Develop",
              ngljcvf: "Build",
              jvn21yn: "Test End-to-End",
              zeuedpa: "Stage",
              "2l0q9sg": "Deploy",
              hu7acqd: "Verify",
              svll4r9: "Monitor",
              jog5xet: "Respond",
              z77x4df: "Release",
              vcavacg: "Stabilize",
              "2eg2xxo": "Measure",
              buiwzjz: "Learn",
            };

            const userAnswers = {
              "82pge2m": "Full Name",
              zp2j6zn: "Email",
              bsufk1p: "Phone number",
              hzofhnd: "Company Name",
            };

            const mainQuestions = [];
            const userInfo = {};

            Object.keys(data.answers).forEach((key) => {
              if (questionMap[key]) {
                // Questions principales
                mainQuestions.push({
                  category: questionMap[key],
                  value: data.answers[key].value || 0,
                });
              } else {
                // Informations utilisateur
                userInfo[key] = data.answers[key].value || data.answers[key];
              }
            });

            setChartData(mainQuestions);

            const jsonDataMain = JSON.stringify(mainQuestions, null, 2);
            const jsonDataUserInfo = JSON.stringify(userInfo, null, 2);

            saveToFile(jsonDataMain, "form-main-data.json", "application/json");
            setTimeout(() => {
              saveToFile(
                jsonDataUserInfo,
                "user-info.json",
                "application/json"
              );
            }, 100);
            setTimeout(() => {
              setIsSubmitting(false);
              completeForm();
            }, 500);
          }}
          applyLogic={false}
        />
      )}
    </div>
  );
};

export default App;
