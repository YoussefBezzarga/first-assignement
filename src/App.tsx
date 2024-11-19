import React from "react";
import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import "./styles.css";
import "./custom-slider-block";

registerCoreBlocks();
const App = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Form
        formId="1"
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
                attachmentMaxWidth: "300px",
              },
            },
            {
              name: "custom-slider-block",
              id: "slider1",
              attributes: {
                label:
                  "Rate your team’s ability to translate business ideas into hypothesis statements that are clear and measurable.",
              },
            },
            {
              name: "custom-slider-block",
              id: "slider2",
              attributes: {
                label:
                  "Rate your team's ability to synthesize the results of Continuous Exploration activities into a well-crafted, prioritized ART Backlog.",
              },
            },
            {
              name: "custom-slider-block",
              id: "slider3",
              attributes: {
                label:
                  "Rate your team's ability to collaborate with business experts and technology experts to define Minimum Marketable Features (MMF) in support of the hypothesis.",
              },
            },
            {
              name: "custom-slider-block",
              id: "slider4",
              attributes: {
                label:
                  "Rate your team's effectiveness at architecting for continuous delivery.",
              },
            },
            {
              name: "custom-slider-block",
              id: "slider5",
              attributes: {
                label:
                  "Rate your team's ability to synthesize the results of Continuous Exploration activities into a well-crafted, prioritized ART Backlog.",
              },
            },
            {
              name: "custom-slider-block",
              id: "slider6",
              attributes: {
                label:
                  "Rate your team's effectiveness at building and integrating continuously.",
              },
            },
            {
              name: "custom-slider-block",
              id: "slider7",
              attributes: {
                label:
                  "Rate your team's effectiveness at testing continuously, end-to-end in production-like environments.",
              },
            },
            {
              name: "custom-slider-block",
              id: "slider8",
              attributes: {
                label:
                  "Rate your team's ability to stage Features in full production-like (non-test) environments for final validation prior to production deployment.",
              },
            },
            {
              name: "custom-slider-block",
              id: "slider9",
              attributes: {
                label:
                  "Rate your team's ability to continuously deploy Features to production as well as the ability to control their visibility using feature toggles and/or other means.",
              },
            },
            {
              name: "custom-slider-block",
              id: "slider10",
              attributes: {
                label:
                  "Rate your team's ability to accurately determine deployment success or failure and ability to roll back or fix forward as appropriate to correct deployment issues.",
              },
            },
            {
              name: "custom-slider-block",
              id: "slider11",
              attributes: {
                label:
                  "Rate your team's effectiveness at monitoring the full solution stack and ability to analyze Feature value based on these events.",
              },
            },
            {
              name: "custom-slider-block",
              id: "slider12",
              attributes: {
                label:
                  "Rate your team's effectiveness at proactively detecting high severity production issues, identifying root causes using monitoring systems, and quickly resolving issues by building, testing, and deploying fixes through the pipeline (versus applying changes directly in production).",
              },
            },
            {
              name: "custom-slider-block",
              id: "slider13",
              attributes: {
                label:
                  "Rate your team's ability to release Features to users on demand using feature toggles, blue/green environments, canary releases, and so on.",
              },
            },
            {
              name: "custom-slider-block",
              id: "slider14",
              attributes: {
                label:
                  "Rate your team's effectiveness at maintaining stable Solutions that avoid unplanned down time and security breaches.",
              },
            },
            {
              name: "custom-slider-block",
              id: "slider15",
              attributes: {
                label:
                  "Rate your team's ability to collect objective information about the actual value realized by Features, so that it can inform strategic financial decisions.",
              },
            },
            {
              name: "custom-slider-block",
              id: "slider16",
              attributes: {
                label:
                  "Please rate your team's ability to make strategic, pivot-or-persevere decisions based on empirical performance data and commitment to actively applying those insights to continuously improve the pipeline.",
              },
            },
          ],
          settings: {
            animationDirection: "vertical",
          },
        }}
        onSubmit={(data, { completeForm, setIsSubmitting }) => {
          setTimeout(() => {
            setIsSubmitting(false);
            completeForm();
          }, 500);
        }}
      />
    </div>
  );
};

export default App;
