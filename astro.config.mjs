// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/": {
      status: 302,
      destination: "/introduction",
    },
  },
  integrations: [
    starlight({
      title: "Granted",
      social: {
        github: "https://github.com/common-fate",
      },

      sidebar: [
        {
          label: "Granted",
          items: [
            { slug: "introduction" },
            { slug: "getting-started" },
            {
              label: "Usage",
              items: [
                { slug: "usage/assuming-roles" },
                { slug: "usage/console" },
                { slug: "usage/browser-extension" },
                { slug: "usage/headless" },
                { slug: "usage/export-credentials" },
                { slug: "usage/dotenv" },
                { slug: "usage/automatic-config-generation" },
                { slug: "usage/storing-iam-credentials-securely" },
                { slug: "usage/profile-registry" },
              ],
            },
            { slug: "configuration" },
            {
              label: "Recipes",
              items: [
                { slug: "recipes/automatically_reassume" },
                { slug: "recipes/cache-commands" },
                { slug: "recipes/credential-process" },
                { slug: "recipes/disable-usage-tips" },
                { slug: "recipes/eks" },
                { slug: "recipes/inline-role-assumption" },
                { slug: "recipes/pass" },
                { slug: "recipes/ubuntu-keyring" },
                { slug: "recipes/wsl-vscode" },
              ],
            },
            { slug: "faq" },
            { slug: "troubleshooting" },
            { slug: "security" },
            {
              label: "Internals",
              items: [
                { slug: "internals/different-assumers" },
                { slug: "internals/shell-alias" },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
