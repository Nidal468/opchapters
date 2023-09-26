import { defineConfig } from "sanity";
import { deskTool} from "sanity/desk";

import schemaTypes from "./schemas/index";
import { media } from "sanity-plugin-media";

const config = defineConfig({
    projectId: "qtb4sill",
    dataset: "production",
    title: "OPSCANS Admin Panel",
    apiVersion: "2023-09-21",
    basePath: "/admin",
    plugins: [deskTool( ), media( )],
    schema: {
        types: schemaTypes,
      }
})

export default config