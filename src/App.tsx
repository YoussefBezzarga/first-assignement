import React, { useState } from "react";
import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import "./styles.css";

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
              id: "welcome1",
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
              name: "statement",
              id: "section1",
              attributes: {
                label: "Continuous Exploration",
              },
            },
            {
              name: "slider",
              id: "slider1",
              attributes: {
                required: true,
                label:
                  "Rate your team’s ability to translate business ideas into hypothesis statements that are clear and measurable.",
                min: 0,
                max: 10,
                step: 1,
              },
              comments: [
                { range: [0], text: "Not rated yet." },
                { range: [1, 2], text: "Sit: Ideas are vague or not defined." },
                {
                  range: [3, 4],
                  text: "Crawl: Ideas are defined as Epics or Features but do not include hypothesis statements.",
                },
                {
                  range: [5, 6],
                  text: "Walk: Some ideas are expressed as hypothesis statements with measurable outcomes.",
                },
                {
                  range: [7, 8],
                  text: "Run: Most ideas are expressed as hypothesis statements with measurable outcomes and include MVPs.",
                },
                {
                  range: [9, 10],
                  text: "Fly: All ideas are expressed as hypothesis statements with measurable outcomes and include MVPs.",
                },
              ],
            },
            {
              name: "slider",
              id: "slider2",
              attributes: {
                required: true,
                label:
                  "Rate your team's ability to synthesize the results of Continuous Exploration activities into a well-crafted, prioritized ART Backlog.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "slider3",
              attributes: {
                required: true,
                label:
                  "Rate your team's ability to collaborate with business experts and technology experts to define Minimum Marketable Features (MMF) in support of the hypothesis.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "slider4",
              attributes: {
                required: true,
                label:
                  "Rate your team's effectiveness at architecting for continuous delivery.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "statement",
              id: "section2",
              attributes: {
                title: "section2",
                label: "Continuous Integration",
              },
            },
            {
              name: "slider",
              id: "slider5",
              attributes: {
                required: true,
                label:
                  "Rate your team's ability to synthesize the results of Continuous Exploration activities into a well-crafted, prioritized ART Backlog.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "slider6",
              attributes: {
                required: true,
                label:
                  "Rate your team's effectiveness at building and integrating continuously.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "slider7",
              attributes: {
                required: true,
                label:
                  "Rate your team's effectiveness at testing continuously, end-to-end in production-like environments.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "slider8",
              attributes: {
                required: true,
                label:
                  "Rate your team's ability to stage Features in full production-like (non-test) environments for final validation prior to production deployment.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "statement",
              id: "section3",
              attributes: {
                title: "section3",
                label: "Continuous Deployment",
              },
            },
            {
              name: "slider",
              id: "slider9",
              attributes: {
                required: true,
                label:
                  "Rate your team's ability to continuously deploy Features to production as well as the ability to control their visibility using feature toggles and/or other means.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "slider10",
              attributes: {
                required: true,
                label:
                  "Rate your team's ability to accurately determine deployment success or failure and ability to roll back or fix forward as appropriate to correct deployment issues.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "slider11",
              attributes: {
                required: true,
                label:
                  "Rate your team's effectiveness at monitoring the full solution stack and ability to analyze Feature value based on these events.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "slider12",
              attributes: {
                required: true,
                label:
                  "Rate your team's effectiveness at proactively detecting high severity production issues, identifying root causes using monitoring systems, and quickly resolving issues by building, testing, and deploying fixes through the pipeline (versus applying changes directly in production).",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "statement",
              id: "section4",
              attributes: {
                title: "section4",
                label: "Release on Demand",
              },
            },
            {
              name: "slider",
              id: "slider13",
              attributes: {
                required: true,
                label:
                  "Rate your team's ability to release Features to users on demand using feature toggles, blue/green environments, canary releases, and so on.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "slider14",
              attributes: {
                required: true,
                label:
                  "Rate your team's effectiveness at maintaining stable Solutions that avoid unplanned down time and security breaches.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "slider15",
              attributes: {
                required: true,
                label:
                  "Rate your team's ability to collect objective information about the actual value realized by Features, so that it can inform strategic financial decisions.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "slider16",
              attributes: {
                required: true,
                label:
                  "Please rate your team's ability to make strategic, pivot-or-persevere decisions based on empirical performance data and commitment to actively applying those insights to continuously improve the pipeline.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
          ],
          settings: {
            animationDirection: "vertical",
            disableWheelSwiping: false,
            disableNavigationArrows: false,
            disableProgressBar: false,
          },
          theme: {
            font: "Roboto",
            buttonsBgColor: "#2B35EE",
            backgroundColor: "#F2F1F1",
            logo: {
              src: "",
            },
            questionsColor: "#000",
            answersColor: "#0aa7c2",
            buttonsFontColor: "#fff",
            buttonsBorderRadius: 25,
            errorsFontColor: "#fff",
            errorsBgColor: "#f00",
            progressBarFillColor: "#000",
            progressBarBgColor: "#ccc",
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
