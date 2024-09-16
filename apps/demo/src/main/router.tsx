/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/migrate" />,
  },
  {
    path: "/migrate",
    lazy: async () => {
      const { default: MigrationAssessmentPage } = await import(
        "#/pages/MigrationAssessmentPage"
      );

      return {
        Component: MigrationAssessmentPage,
      };
    },
  },
  {
    path: "/migrate/wizard",
    lazy: async () => {
      const { default: MigrationWizardPage } = await import(
        "#/pages/MigrationWizardPage"
      );

      return {
        Component: MigrationWizardPage,
      };
    },
  },

  // These are not exposed in the App, are chunk-splitted and therefore lazy loaded
  {
    path: "/ocm",
    lazy: async () => {
      const { default: OcmPreviewPage } = await import(
        "#/pages/OcmPreviewPage"
      );

      return {
        Component: OcmPreviewPage,
      };
    },
  },
  {
    path: "/agent/login",
    lazy: async () => {
      const { default: AgentLoginPage } = await import("#/pages/AgentLoginPage");

      return {
        Component: AgentLoginPage,
      };
    },
  },
  {
    path: "/error/:code",
    lazy: async () => {
      const { default: ErrorPage } = await import("#/pages/ErrorPage");

      return {
        Component: ErrorPage,
      };
    },
  },
  {
    path: "*",
    lazy: async () => {
      const { default: ErrorPage } = await import("#/pages/ErrorPage");

      return {
        element: (
          <ErrorPage
            code="404"
            message="We lost that page"
            actions={[
              {
                children: "Go back",
                component: "a",
                onClick: (_event): void => {
                  history.back();
                },
              },
            ]}
          />
        ),
      };
    },
  },
]);
